#!/usr/bin/env node
// Yerel ders videosu: sahne manifesti + PNG/JPG + macOS Yelda + ffmpeg -> MP4 + SRT.
// Kullanım: node scripts/render-lesson-video.mjs --file /abs/manifest.json --out /abs/output-dir

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

function sh(cmd, args) {
  return execFileSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}

function duration(file) {
  const raw = sh("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", file]);
  return Math.max(0.1, Number(raw.trim()) || 0.1);
}

function timecode(seconds) {
  const ms = Math.max(0, Math.round(seconds * 1000));
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const rem = ms % 1000;
  return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")},${String(rem).padStart(3,"0")}`;
}

function srtSafe(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

const args = process.argv.slice(2);
const fileIndex = args.indexOf("--file");
const outIndex = args.indexOf("--out");
if (fileIndex < 0 || !args[fileIndex + 1]) {
  console.error("kullanım: node scripts/render-lesson-video.mjs --file manifest.json [--out dir]");
  process.exit(2);
}

const manifestPath = path.resolve(args[fileIndex + 1]);
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const scenes = Array.isArray(manifest.scenes) ? manifest.scenes : [];
if (!scenes.length) throw new Error("manifest_scenes_empty");

const key = String(manifest.key || path.basename(manifestPath, ".json")).replace(/[^a-z0-9_-]/gi, "-");
const width = Math.max(640, Number(manifest.width) || 1920);
const height = Math.max(640, Number(manifest.height) || 1080);
const fps = Math.max(24, Number(manifest.fps) || 30);
const voice = String(manifest.voice || "Yelda");
const rate = String(Number(manifest.rate) || 165);
const burnSubtitles = manifest.burnSubtitles !== false;
const motionStyle = String(manifest.motionStyle || "none");
const outDir = outIndex >= 0 && args[outIndex + 1] ? path.resolve(args[outIndex + 1]) : path.resolve("out/lessons");
mkdirSync(outDir, { recursive: true });

const work = mkdtempSync(path.join(tmpdir(), `${key}-`));
const parts = [];
const subtitleRows = [];
let cursor = 0;
let subtitleIndex = 1;

function subtitleChunks(text, maxChars = 88) {
  const sentences = srtSafe(text).split(/(?<=[.!?])\s+/).filter(Boolean);
  const chunks = [];
  let current = "";
  for (const sentence of sentences) {
    const words = sentence.split(/\s+/);
    for (const word of words) {
      const next = current ? `${current} ${word}` : word;
      if (next.length > maxChars && current) { chunks.push(current); current = word; }
      else current = next;
    }
    if (current.length >= maxChars * 0.58) { chunks.push(current); current = ""; }
  }
  if (current) chunks.push(current);
  return chunks.length ? chunks : [srtSafe(text)];
}

console.log(`render: ${key} · ${scenes.length} sahne · ${width}x${height} · ${voice}`);

for (let i = 0; i < scenes.length; i += 1) {
  const scene = scenes[i];
  const image = path.isAbsolute(scene.image) ? scene.image : path.resolve(path.dirname(manifestPath), scene.image);
  if (!existsSync(image)) throw new Error(`scene_image_missing:${image}`);
  const narration = srtSafe(scene.narration);
  if (!narration) throw new Error(`scene_narration_empty:${i + 1}`);

  const audio = path.join(work, `scene-${String(i + 1).padStart(2,"0")}.aiff`);
  sh("say", ["-v", voice, "-r", rate, "-o", audio, narration]);
  const sceneDuration = duration(audio) + 0.45;
  const part = path.join(work, `scene-${String(i + 1).padStart(2,"0")}.mp4`);

  // Ön izlemelerde durağan slayt hissini azaltmak için çok hafif, kenarları
  // tehlikeye atmayan merkez zoom kullanılabilir. Varsayılan davranış geriye uyumludur.
  const filter = motionStyle === "subtleZoom"
    ? `[0:v]scale=${Math.ceil(width * 1.02)}:${Math.ceil(height * 1.02)}:force_original_aspect_ratio=increase,crop=iw:ih,zoompan=z='min(zoom+0.00001,1.018)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=${width}x${height}:fps=${fps},format=yuv420p[v]`
    : [
        `[0:v]scale=${width}:${height}:force_original_aspect_ratio=increase,crop=${width}:${height},boxblur=28:2,eq=brightness=-0.18:saturation=0.65[bg]`,
        `[0:v]scale=${width}:${height}:force_original_aspect_ratio=decrease[fg]`,
        `[bg][fg]overlay=(W-w)/2:(H-h)/2,format=yuv420p[v]`
      ].join(";");

  sh("ffmpeg", [
    "-y", "-loglevel", "error", "-loop", "1", "-i", image, "-i", audio,
    "-filter_complex", filter, "-map", "[v]", "-map", "1:a",
    "-t", String(sceneDuration), "-r", String(fps), "-c:v", "libx264", "-preset", "medium",
    "-pix_fmt", "yuv420p", "-c:a", "aac", "-b:a", "160k", "-shortest", part
  ]);

  const chunks = subtitleChunks(scene.subtitle || narration);
  const totalWeight = chunks.reduce((sum, chunk) => sum + Math.max(1, chunk.length), 0);
  let subtitleCursor = cursor;
  chunks.forEach((chunk, chunkIndex) => {
    const isLast = chunkIndex === chunks.length - 1;
    const share = sceneDuration * (Math.max(1, chunk.length) / totalWeight);
    const end = isLast ? cursor + sceneDuration : subtitleCursor + share;
    subtitleRows.push(`${subtitleIndex}\n${timecode(subtitleCursor)} --> ${timecode(end)}\n${chunk}\n`);
    subtitleIndex += 1;
    subtitleCursor = end;
  });
  cursor += sceneDuration;
  parts.push(part);
  console.log(`  ✓ ${i + 1}/${scenes.length} · ${sceneDuration.toFixed(1)}sn · ${path.basename(image)}`);
}

const list = path.join(work, "concat.txt");
writeFileSync(list, parts.map((p) => `file '${p.replaceAll("'", "'\\''")}'`).join("\n"));
const cleanVideo = path.join(work, `${key}-clean.mp4`);
sh("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", list, "-c", "copy", cleanVideo]);

const srtPath = path.join(outDir, `${key}.srt`);
writeFileSync(srtPath, subtitleRows.join("\n"), "utf8");
const finalVideo = path.join(outDir, `${key}.mp4`);
if (burnSubtitles) {
  const escapedSrt = srtPath.replaceAll("\\", "\\\\").replaceAll(":", "\\:").replaceAll("'", "\\'");
  const fontSize = Number(manifest.subtitleFontSize) || (height > width ? 12 : 14);
  const marginV = height > width ? 72 : 42;
  const subtitleFilter = `subtitles='${escapedSrt}':original_size=${width}x${height}:force_style='FontName=Arial,FontSize=${fontSize},PrimaryColour=&H00FFFFFF,OutlineColour=&HAA000000,BorderStyle=3,BackColour=&H72000000,Outline=1,Shadow=0,MarginV=${marginV},Alignment=2'`;
  sh("ffmpeg", [
    "-y", "-loglevel", "error", "-i", cleanVideo, "-vf", subtitleFilter,
    "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-c:a", "copy", "-movflags", "+faststart", finalVideo
  ]);
} else {
  // Metin yoğun eğitim slaytlarında master videoyu temiz tut; SRT yine yan dosya olarak üretilir.
  sh("ffmpeg", ["-y", "-loglevel", "error", "-i", cleanVideo, "-c", "copy", "-movflags", "+faststart", finalVideo]);
}

const meta = {
  key, title: manifest.title || "", voice, rate: Number(rate), width, height, fps,
  burnSubtitles, motionStyle,
  durationSec: Number(duration(finalVideo).toFixed(3)), scenes: scenes.length,
  video: finalVideo, subtitles: srtPath
};
writeFileSync(path.join(outDir, `${key}.json`), JSON.stringify(meta, null, 2), "utf8");
rmSync(work, { recursive: true, force: true });
console.log(`TAMAM → ${finalVideo} · ${meta.durationSec.toFixed(1)}sn`);
