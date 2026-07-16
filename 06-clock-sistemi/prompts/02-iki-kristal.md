# Scene: scene-02 — İki Kristal, İki Farklı Amaç

**Durum:** Üretiliyor (2026-07-16).

**Gerçek görsel analizi (madde 4c):** X1 = oval gri metal-kan paket ("8.000" yazılı), X2 = küçük
siyah 4-pinli SMD dikdörtgen paket ("32.768K" yazılı) — ikisi GERÇEKTEN farklı fiziksel paketler
(bkz. `assets/source/blue-pill-card-exact-cutout.png`). `visual-system/references/real-x1-crystal-crop.png`
ve `real-x2-crystal-crop.png` ikincil referans olarak eklenecek.

Üretim: `tools/generate-slide.py 06-clock-sistemi/prompts/02-iki-kristal.md 06-clock-sistemi/slides/02-iki-kristal.png --ref visual-system/references/real-x1-crystal-crop.png --ref visual-system/references/real-x2-crystal-crop.png`

```text
SCENE:
Day label: "GÜN 06" — render with correct Turkish characters.
Main title: "İKİ KRİSTAL, İKİ FARKLI AMAÇ"
Subtitle: "X1: Ana Clock · X2: RTC"

Central layout: two side-by-side close-up photos on blue PCB fragments:
- Left: X1 — an oval grey metal-can crystal package, clearly marked "8.000". Two additional
  reference images are attached showing the real physical appearance of both crystals — copy
  X1's exact oval metal-can shape from the first additional reference image.
- Right: X2 — a small black rectangular SMD package with 4 visible pins, clearly marked
  "32.768K". Copy X2's exact small SMD package shape from the second additional reference
  image — do NOT draw X2 as another oval metal-can crystal, it is a visibly different, much
  smaller package than X1.

Two NUMBERED panels (large colored number badge 1,2 top-left of each panel), each connected
with a thin matching-color line to its corresponding photo above, each panel exactly one
cohesive image/icon plus caption. Use ONLY the exact values given here, do not invent any
additional spec:

IMPORTANT — badge color: both number badges (1,2) and both connector lines and both panel
borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın çekim" function
color). Do NOT vary the badge color per panel.

1 (blue): "X1 — Ana Clock" — "8 MHz, şemada B7 · OSC_IN/PD0 ↔ OSC_OUT/PD1"
2 (blue): "X2 — RTC" — "32.768 kHz · OSC32_IN/PC14 ↔ OSC32_OUT/PC15"

Do not render any additional pin numbers, coordinates, or values beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards: "X1 — Ana Clock", "X2 — RTC", "Farklı
Paketler", "Farklı Görevler", each with a simple icon and short Turkish title. Then the same
single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez,
ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no
logo/emblem.
```
