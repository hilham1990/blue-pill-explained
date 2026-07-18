#!/usr/bin/env node
// JSON manifest + Yelda + odaklı dikey kadraj + hareket + geçiş efekti -> Shorts/Reels/TikTok MP4.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

function run(cmd, args) {
  return execFileSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}

function duration(file) {
  return Number(run("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", file]).trim());
}

function esc(value) {
  return String(value).replaceAll("\\", "\\\\").replaceAll(":", "\\:").replaceAll("'", "\\'").replaceAll("%", "\\%");
}

const args = process.argv.slice(2);
const manifestPath = path.resolve(args[args.indexOf("--file") + 1] || "");
const outDir = path.resolve(args[args.indexOf("--out") + 1] || "out/shorts");
if (!existsSync(manifestPath)) throw new Error("manifest_missing");

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const scenes = manifest.scenes || [];
if (!scenes.length) throw new Error("scenes_empty");

const width = 1080;
const height = 1920;
const fps = 30;
const voice = manifest.voice || "Yelda";
const rate = String(manifest.rate || 165);
const key = manifest.key;
const fontBold = "/System/Library/Fonts/Supplemental/Arial Bold.ttf";
const fontRegular = "/System/Library/Fonts/Supplemental/Arial.ttf";
const work = mkdtempSync(path.join(tmpdir(), `${key}-`));
mkdirSync(outDir, { recursive: true });

const parts = [];
const srt = [];
let cursor = 0;

for (let i = 0; i < scenes.length; i += 1) {
  const scene = scenes[i];
  const image = path.resolve(path.dirname(manifestPath), scene.image);
  if (!existsSync(image)) throw new Error(`image_missing:${image}`);
  const audio = path.join(work, `voice-${i}.aiff`);
  run("say", ["-v", voice, "-r", rate, "-o", audio, scene.narration]);
  const d = duration(audio) + 0.32;
  const video = path.join(work, `scene-${i}.mp4`);
  const focus = Math.min(1, Math.max(0, Number(scene.focusX ?? 0.5)));
  const accent = scene.accent || "0x14B8A6";
  const headline = esc(scene.headline);
  const kicker = esc(scene.kicker || "");
  const callout = scene.callout || null;
  const marker = callout
    ? `,drawbox=x=${callout.x}:y=${callout.y}:w=${callout.w}:h=${callout.h}:color=${accent}@0.95:t=10:enable='gte(t,0.45)',drawtext=fontfile='${fontBold}':text='${esc(callout.label || "BURAYA BAK")}':x=${callout.x}:y=${Math.max(310, callout.y - 58)}:fontsize=34:fontcolor=${accent}:box=1:boxcolor=0x061B36@0.88:boxborderw=12:enable='gte(t,0.45)'`
    : "";
  const sceneNo = String(i + 1).padStart(2, "0");

  const vf = [
    `[0:v]crop=w='ih*9/16':h=ih:x='(iw-ow)*${focus}':y=0,scale=1100:1956,zoompan=z='min(zoom+0.00012,1.045)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=${width}x${height}:fps=${fps},eq=brightness=-0.04:saturation=1.05[base]`,
    `[base]drawbox=x=0:y=0:w=iw:h=300:color=0x061B36@0.88:t=fill,drawbox=x=0:y=1570:w=iw:h=350:color=0x061B36@0.90:t=fill,drawbox=x=54:y=286:w='min(t/0.45,1)*972':h=8:color=${accent}@1:t=fill,drawbox=x=54:y=1534:w='min(t/0.45,1)*972':h=8:color=${accent}@1:t=fill,drawtext=fontfile='${fontBold}':text='GÜN 01  •  ${sceneNo}':x=60:y=48:fontsize=36:fontcolor=${accent},drawtext=fontfile='${fontBold}':text='${headline}':x=60:y=112:fontsize=64:fontcolor=white:line_spacing=10,drawtext=fontfile='${fontRegular}':text='${kicker}':x=60:y=1620:fontsize=42:fontcolor=white:line_spacing=12${marker},drawbox=x=60:y=1842:w='(t/${d})*960':h=10:color=${accent}@1:t=fill,format=yuv420p[v]`
  ].join(";");

  // Kısa bir geçiş whoosh'u: pembe gürültü, hızla açılıp kapanır ve konuşmanın altında kalır.
  const af = `[1:a]volume=1.0[voice];anoisesrc=color=pink:duration=0.28:amplitude=0.035,highpass=f=280,lowpass=f=2400,afade=t=in:st=0:d=0.025,afade=t=out:st=0.08:d=0.20[whoosh];[voice][whoosh]amix=inputs=2:duration=first:dropout_transition=0[a]`;
  run("ffmpeg", ["-y", "-loglevel", "error", "-loop", "1", "-i", image, "-i", audio,
    "-filter_complex", `${vf};${af}`, "-map", "[v]", "-map", "[a]", "-t", String(d), "-r", String(fps),
    "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-c:a", "aac", "-b:a", "192k", "-shortest", video]);

  const start = cursor;
  cursor += d;
  const tc = (s) => {
    const ms = Math.round(s * 1000); const h = Math.floor(ms / 3600000); const m = Math.floor(ms % 3600000 / 60000); const sec = Math.floor(ms % 60000 / 1000); const rem = ms % 1000;
    return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")},${String(rem).padStart(3,"0")}`;
  };
  srt.push(`${i + 1}\n${tc(start)} --> ${tc(cursor)}\n${scene.subtitle || scene.narration}\n`);
  parts.push(video);
  console.log(`✓ ${i + 1}/${scenes.length} ${d.toFixed(1)}sn ${scene.id}`);
}

const concat = path.join(work, "concat.txt");
writeFileSync(concat, parts.map((p) => `file '${p.replaceAll("'", "'\\''")}'`).join("\n"));
const mp4 = path.join(outDir, `${key}.mp4`);
run("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", concat, "-c", "copy", "-movflags", "+faststart", mp4]);
writeFileSync(path.join(outDir, `${key}.srt`), srt.join("\n"));
writeFileSync(path.join(outDir, `${key}.json`), JSON.stringify({ key, width, height, fps, voice, durationSec: duration(mp4), scenes: scenes.length }, null, 2));
rmSync(work, { recursive: true, force: true });
console.log(`TAMAM ${mp4}`);
