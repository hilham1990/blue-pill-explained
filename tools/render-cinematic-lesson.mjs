#!/usr/bin/env node
// Sinematik ders videosu v1: sahne manifesti + PNG + macOS Yelda + ffmpeg
// -> panel bazlı Ken Burns yakınlaşma, vurgu çerçevesi, soru kartı, alt-şerit altyazı, intro/outro.
// Kullanım: node tools/render-cinematic-lesson.mjs --file /abs/manifest.json --out /abs/output-dir
//
// scenes.json'daki gibi jenerik değil — bu script, bir bölümün EL İLE koreografe edilmiş
// kamera planını (video-plan.md'den türetilen shot listesi) render eder. TTS burada sadece
// gerçek ses kaydı gelene kadar bir yer tutucu; gerçek kayıt geldiğinde her "clip" alanı
// TTS yerine gerçek ses dosyasına işaret edecek şekilde değiştirilecek.

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
  const h = Math.floor(ms / 3600000), m = Math.floor((ms % 3600000) / 60000), s = Math.floor((ms % 60000) / 1000), rem = ms % 1000;
  return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")},${String(rem).padStart(3,"0")}`;
}
function srtSafe(text) { return String(text || "").replace(/\s+/g, " ").trim(); }
// drawtext'e güvenli metin: backslash önce, apostrofu tipografik kesme işaretine çevirerek
// ffmpeg'in filtergraph tırnak-kaçış belasından tamamen kaçınıyoruz (aksi halde "MHz'de" gibi
// Türkçe ekler bozuk render'a ya da parse hatasına yol açar).
function esc(text) {
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/'/g, "’")
    .replace(/:/g, "\\:")
    .replace(/%/g, "\\%");
}

const args = process.argv.slice(2);
const fileIndex = args.indexOf("--file");
const outIndex = args.indexOf("--out");
if (fileIndex < 0 || !args[fileIndex + 1]) {
  console.error("kullanım: node tools/render-cinematic-lesson.mjs --file manifest.json [--out dir]");
  process.exit(2);
}
const manifestPath = path.resolve(args[fileIndex + 1]);
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
const baseDir = path.dirname(manifestPath);
const key = String(manifest.key || path.basename(manifestPath, ".json")).replace(/[^a-z0-9_-]/gi, "-");
const W = Math.max(640, Number(manifest.width) || 1920);
const H = Math.max(640, Number(manifest.height) || 1080);
const FPS = Math.max(24, Number(manifest.fps) || 30);
const voice = String(manifest.voice || "Yelda");
const rate = String(Number(manifest.rate) || 165);
const brandBg = manifest.brandColor || "0x0B1F3A";
const accent = manifest.accentColor || "0xF5A623";
const subtitleBarH = Math.round(H * 0.085); // altyazı için ayrılmış sabit alt şerit — görsel içeriğe hiç dokunmaz
const contentH = H - subtitleBarH;
const outDir = outIndex >= 0 && args[outIndex + 1] ? path.resolve(args[outIndex + 1]) : path.resolve("out/lessons");
mkdirSync(outDir, { recursive: true });
const work = mkdtempSync(path.join(tmpdir(), `${key}-`));

let cursor = 0;
const subtitleRows = [];
const captionEvents = []; // { text, start, end } — final drawtext yakma bunu kullanır (SRT sadece yan-dosya)
let subtitleIndex = 1;
const parts = [];

function pushSubtitle(text, segStart, segDur) {
  const t = srtSafe(text);
  if (!t) return;
  subtitleRows.push(`${subtitleIndex}\n${timecode(segStart)} --> ${timecode(segStart + segDur)}\n${t}\n`);
  subtitleIndex += 1;
  captionEvents.push({ text: t, start: segStart, end: segStart + segDur });
}

function wrapText(text, maxChars) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (next.length > maxChars && cur) { lines.push(cur); cur = w; }
    else cur = next;
  }
  if (cur) lines.push(cur);
  return lines;
}

function ttsClip(text, name) {
  const audio = path.join(work, `${name}.aiff`);
  sh("say", ["-v", voice, "-r", rate, "-o", audio, srtSafe(text)]);
  return audio;
}

// Panel görseli üzerinde bir "shot" render eder. motion tipleri:
//  "in"   — geniş çekimden region'a yakınlaşır (varsayılan, bir hedefe dikkat çekmek için)
//  "out"  — region'dan başlar, geriye çekilip bağlamı gösterir (bir sonuç sonrası "genişleme" hissi)
//  "pan"  — sabit orta zoom'da bir noktadan diğerine kayar (iki ilişkili şeyi birbirine bağlar)
//  "hold" — sabit geniş çekim, hareket yok (nefes alma/dinlenme anı — üst üste kullanılmaz)
// Aynı animasyonun art arda tekrarı "ileri geri" hissi verip yoruyor — bu yüzden komşu shot'lar
// farklı motion tipleriyle seçilmeli (bkz. manifest'teki "motion" alanı).
function renderImageShot({ image, region, regionFrom, shotDur, name, motion = "in" }) {
  const out = path.join(work, `${name}.mp4`);
  const frames = Math.max(1, Math.round(shotDur * FPS));
  const r = region || { x: 0.5, y: 0.5, w: 1, h: 1 };
  const cx = r.x + r.w / 2, cy = r.y + r.h / 2;
  const zmax = Math.min(2.35, Math.max(1.15, Math.min(0.92 / r.w, 0.92 / r.h)));
  const settleStart = (shotDur * 0.6).toFixed(2);
  const pulseStart = (Number(settleStart) - 0.02).toFixed(2);
  const pulseMid = (Number(settleStart) + 0.16).toFixed(2);
  const pulseEnd = (Number(settleStart) + 0.55).toFixed(2);

  let zoompan;
  if (motion === "hold") {
    zoompan = `zoompan=z='1':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${frames}:s=${W}x${contentH}:fps=${FPS}`;
  } else if (motion === "out") {
    const inc = (zmax - 1) / Math.max(1, frames);
    zoompan = `zoompan=z='max(${zmax.toFixed(3)}-${inc.toFixed(6)}*on,1)':x='${cx}*(iw-iw/zoom)':y='${cy}*(ih-ih/zoom)':d=${frames}:s=${W}x${contentH}:fps=${FPS}`;
  } else if (motion === "pan") {
    const from = regionFrom || { x: 0.5 - r.w, y: r.y, w: r.w, h: r.h };
    const fcx = from.x + from.w / 2, fcy = from.y + from.h / 2;
    const panZoom = Math.min(1.55, Math.max(1.2, zmax * 0.72));
    zoompan = `zoompan=z='${panZoom.toFixed(3)}':x='(${fcx}+(${cx}-${fcx})*min(on/${frames},1))*(iw-iw/zoom)':y='(${fcy}+(${cy}-${fcy})*min(on/${frames},1))*(ih-ih/zoom)':d=${frames}:s=${W}x${contentH}:fps=${FPS}`;
  } else {
    const inc = (zmax - 1) / Math.max(1, frames);
    zoompan = `zoompan=z='min(zoom+${inc.toFixed(6)},${zmax.toFixed(3)})':x='${cx}*(iw-iw/zoom)':y='${cy}*(ih-ih/zoom)':d=${frames}:s=${W}x${contentH}:fps=${FPS}`;
  }

  // Vurgu: statik çerçeve yerine kısa bir "ping" — ince/parlak açılır, hemen ardından biraz
  // büyüyüp söner. Sadece "in"/"pan" gibi bir hedefe VARAN hareketlerde anlamlı; "hold"da yok.
  const pulseFilter = (motion === "hold")
    ? `[zoomed]null[boxed]`
    : [
        `[zoomed]drawbox=x=4:y=4:w=iw-8:h=ih-8:color=${accent}@0.95:thickness=14:enable='between(t\\,${pulseStart}\\,${pulseMid})'[p1]`,
        `[p1]drawbox=x=14:y=14:w=iw-28:h=ih-28:color=${accent}@0.55:thickness=6:enable='between(t\\,${pulseMid}\\,${pulseEnd})'[boxed]`
      ].join(";");

  const filter = [
    `[0:v]scale=${W * 2}:-1,${zoompan},format=yuv420p[zoomed]`,
    pulseFilter,
    `[boxed]pad=${W}:${H}:0:0:color=${brandBg}[padded]`
  ].join(";");

  sh("ffmpeg", [
    "-y", "-loglevel", "error", "-loop", "1", "-i", image,
    "-filter_complex", filter, "-map", "[padded]",
    "-t", String(shotDur), "-r", String(FPS), "-c:v", "libx264", "-preset", "medium", "-pix_fmt", "yuv420p",
    out
  ]);
  return out;
}

// Ses klibiyle görsel shot'u birleştirip parça listesine ekler + altyazı satırlarını üretir.
function addNarratedShots({ image, shots, sceneAudio, subtitleChunks }) {
  const audioDur = duration(sceneAudio);
  const totalChars = shots.reduce((s, sh2) => s + Math.max(1, sh2.text.length), 0);
  let segCursor = 0;
  const videoSegs = [];
  shots.forEach((shot, i) => {
    const share = audioDur * (Math.max(1, shot.text.length) / totalChars);
    const shotDur = i === shots.length - 1 ? Math.max(0.4, audioDur - segCursor) : share;
    const motion = shot.motion || (shot.wide ? "hold" : "in");
    videoSegs.push(renderImageShot({ image, region: shot.region, regionFrom: shot.regionFrom, shotDur, name: `${key}-shot-${cursor.toFixed(0)}-${i}`, motion }));
    pushSubtitle(shot.text, cursor + segCursor, shotDur);
    segCursor += shotDur;
  });
  const vList = path.join(work, `vlist-${cursor.toFixed(0)}.txt`);
  writeFileSync(vList, videoSegs.map((p) => `file '${p.replaceAll("'", "'\\''")}'`).join("\n"));
  const sceneVideo = path.join(work, `scenevid-${cursor.toFixed(0)}.mp4`);
  sh("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", vList, "-c", "copy", sceneVideo]);

  const withAudio = path.join(work, `scene-${cursor.toFixed(0)}.mp4`);
  sh("ffmpeg", [
    "-y", "-loglevel", "error", "-i", sceneVideo, "-i", sceneAudio,
    "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-ar", "44100", "-ac", "2", "-b:a", "160k", "-shortest", withAudio
  ]);
  parts.push(withAudio);
  cursor += audioDur;
}

// Tam ekran "aktivite" kartı: sadece düz metin değil — üstte küçük accent kicker ("SIRA SENDE"),
// ortada büyük soru, altta cevabı beklerken beliren 3 noktalı "düşünme" göstergesi (oyun/quiz hissi).
function addQuestionCard({ text, audio, kicker = "SIRA SENDE" }) {
  const dur = duration(audio) + 0.9;
  const out = path.join(work, `qcard-${cursor.toFixed(0)}.mp4`);
  const wrapped = wrapText(text, 32).map(esc).join("\n");
  const drawKicker = `drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial%20Bold.ttf:text='${esc(kicker)}':fontcolor=${accent.replace("0x", "#")}:fontsize=${Math.round(W*0.013)}:x=(w-text_w)/2:y=(h/2)-150`;
  const drawText = `drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial%20Bold.ttf:text='${wrapped}':fontcolor=white:fontsize=${Math.round(W*0.026)}:x=(w-text_w)/2:y=(h-text_h)/2:line_spacing=16:box=0`;
  const dotY = `(h/2)+150`;
  const dotAt = (i) => (dur * 0.45 + i * 0.35).toFixed(2);
  const dots = [0, 1, 2].map((i) =>
    `drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial%20Bold.ttf:text='●':fontcolor=${accent.replace("0x", "#")}:fontsize=${Math.round(W*0.016)}:x=(w/2)+${(i - 1) * 46}:y=${dotY}:enable='gte(t\\,${dotAt(i)})'`
  ).join(",");
  sh("ffmpeg", [
    "-y", "-loglevel", "error",
    "-f", "lavfi", "-i", `color=c=${brandBg}:s=${W}x${contentH}:d=${dur}:r=${FPS}`,
    "-i", audio,
    "-vf", `${drawKicker},${drawText},${dots},fade=t=in:st=0:d=0.35,pad=${W}:${H}:0:0:color=${brandBg}`,
    "-map", "0:v", "-map", "1:a", "-c:v", "libx264", "-preset", "medium", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-ar", "44100", "-ac", "2", "-b:a", "160k", "-shortest", out
  ]);
  pushSubtitle(text, cursor, dur);
  parts.push(out);
  cursor += dur;
}

// Marka bumper (intro/outro): logo/başlık drawtext ile, ses yok ya da kısa bir stinger.
function addBrandCard({ lines, dur, name }) {
  const out = path.join(work, `${name}.mp4`);
  const drawTexts = lines.map((l, i) => {
    const size = i === 0 ? Math.round(W * 0.05) : Math.round(W * 0.024);
    const color = i === 0 ? "white" : accent.replace("0x", "#");
    const yOff = i === 0 ? "(h-text_h)/2-20" : `(h-text_h)/2+${40 + i * 46}`;
    return `drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial%20Bold.ttf:text='${esc(l)}':fontcolor=${color}:fontsize=${size}:x=(w-text_w)/2:y=${yOff}`;
  }).join(",");
  sh("ffmpeg", [
    "-y", "-loglevel", "error",
    "-f", "lavfi", "-i", `color=c=${brandBg}:s=${W}x${H}:d=${dur}:r=${FPS}`,
    "-f", "lavfi", "-i", `anullsrc=r=44100:cl=stereo`,
    "-vf", `${drawTexts},fade=t=in:st=0:d=0.4,fade=t=out:st=${(dur - 0.4).toFixed(2)}:d=0.4`,
    "-map", "0:v", "-map", "1:a",
    "-c:v", "libx264", "-preset", "medium", "-pix_fmt", "yuv420p", "-c:a", "aac", "-ar", "44100", "-ac", "2", "-t", String(dur), out
  ]);
  parts.push(out);
  cursor += dur;
}

console.log(`sinematik render: ${key} · ${manifest.scenes.length} sahne · ${W}x${H} · ${voice}`);

addBrandCard({ lines: ["BLUE PILL EXPLAINED", "AKADEMİ USTA"], dur: 2.6, name: "intro" });

for (const scene of manifest.scenes) {
  const image = path.isAbsolute(scene.image) ? scene.image : path.resolve(baseDir, scene.image);
  if (!existsSync(image)) throw new Error(`scene_image_missing:${image}`);

  if (scene.question) {
    const qAudio = ttsClip(scene.question.text, `q-${scene.id}`);
    addQuestionCard({ text: scene.question.text, audio: qAudio });
  }

  const fullText = scene.shots.map((s) => s.text).join(" ");
  const sceneAudio = ttsClip(fullText, `n-${scene.id}`);
  addNarratedShots({ image, shots: scene.shots, sceneAudio });
  console.log(`  ✓ ${scene.id} · ${scene.shots.length} shot`);
}

addBrandCard({ lines: ["SONRAKİ BÖLÜM", "02 — Datasheet Nasıl Okunur?"], dur: 3.2, name: "outro" });

const list = path.join(work, "concat-final.txt");
writeFileSync(list, parts.map((p) => `file '${p.replaceAll("'", "'\\''")}'`).join("\n"));
const cleanVideo = path.join(work, `${key}-clean.mp4`);
sh("ffmpeg", ["-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", list, "-c", "copy", cleanVideo]);

const srtPath = path.join(outDir, `${key}.srt`);
writeFileSync(srtPath, subtitleRows.join("\n"), "utf8");
const finalVideo = path.join(outDir, `${key}.mp4`);

// libass'ın "subtitles" filtresi FontSize'ı beklenenden büyük render ediyor (PlayRes ölçekleme
// belirsizliği) ve alt-şeride sığmıyordu — bunun yerine piksel-kesin drawtext zinciri kullanıyoruz,
// her caption kendi zaman penceresinde (`enable='between(t,start,end)'`) sadece ayrılmış koyu
// şeridin içine (contentH..H) yazılıyor, görsel içeriğe asla taşmıyor.
const capFontSize = Math.max(14, Math.round(subtitleBarH * 0.34));
const capY = Math.round(contentH + (subtitleBarH - capFontSize) / 2 - capFontSize * 0.12);
const subtitleFilter = captionEvents.map((ev) => {
  const t = esc(ev.text);
  return `drawtext=fontfile=/System/Library/Fonts/Supplemental/Arial.ttf:text='${t}':fontcolor=white:fontsize=${capFontSize}:x=(w-text_w)/2:y=${capY}:enable='between(t\\,${ev.start.toFixed(2)}\\,${ev.end.toFixed(2)})'`;
}).join(",");

sh("ffmpeg", [
  "-y", "-loglevel", "error", "-i", cleanVideo, "-vf", subtitleFilter,
  "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", finalVideo
]);

writeFileSync(path.join(outDir, `${key}.json`), JSON.stringify({
  key, voice, width: W, height: H, fps: FPS, durationSec: Number(duration(finalVideo).toFixed(2)),
  scenes: manifest.scenes.length, video: finalVideo, subtitles: srtPath
}, null, 2));
rmSync(work, { recursive: true, force: true });
console.log(`TAMAM → ${finalVideo}`);
