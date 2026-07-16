# Scene: scene-01-hero — Artık Her Bloğu Biliyoruz

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Bu sahne serinin son bölümünü açıyor — merkezde gerçek
şemanın kendisinin küçük/genel bir görünümü olacak (tam şema zaten README'de ayrı, tam boyutta
gösteriliyor — SKILL.md madde 9). Gerçek şema: `assets/source/blue-pill-schematic-source.webp`.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 12-sema-bastan-sona/prompts/01-hero.md 12-sema-bastan-sona/hero.png --ref assets/source/blue-pill-schematic-source.webp`

```text
SCENE:
Day label: "GÜN 12" — render with correct Turkish characters.
Main title: "ŞEMA BAŞTAN SONA"
Subtitle: "Artık her bloğu biliyoruz"

Central graphic: a small, simplified overview silhouette of the real schematic sheet (matching
the attached reference's overall layout — the "Connectors"/"MPU" blocks on top, "Power
Supply"/"LEDs"/"Reset" blocks on bottom, each shown as a labeled rectangle outline, NOT with
readable pin-level detail — this is a zoomed-out map, not a legible circuit). No colored
border/frame around this central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the relevant block area of the schematic overview,
each panel exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines.
Use ONLY the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color. Do NOT vary the
badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (blue, icon: a battery/power icon): "Besleme" — "5V girer, 3.3V çıkar" / "İşlemciye ulaşır"
2 (blue, icon: a combined clock+reset icon): "Clock, Reset, Boot" — "72 MHz üretilir, reset
devresi hazır" / "Boot modu belirlenir"
3 (blue, icon: a USB+GPIO+LED combined icon): "Peripheral'lar" — "USB, GPIO, LED'ler aktif
olur" / "Firmware çalışırken"
4 (blue, icon: a debug-probe icon): "Debug" — "SWD ile firmware yükle, canlı izle" / "Serinin
son adımı"

Do not render any specific pin number or component value — this is a conceptual opening scene
for the final chapter, details come in later scenes.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Besleme",
"Clock/Reset/Boot", "Peripheral'lar", "Debug", each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
