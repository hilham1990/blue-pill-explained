# Scene: scene-01-hero — Clock Olmadan İşlemci Çalışmaz

**Durum:** Üretiliyor (2026-07-16).

**Gerçek görsel analizi (madde 4c):** `assets/source/blue-pill-card-exact-cutout.png` (gerçek kart fotoğrafı)
incelendi. X1 kristali gerçekte oval, gri metal-kan paket, üzerinde "8.000" yazıyor, MPU çipinin
hemen üstünde duruyor. Bu crop `visual-system/references/real-chip-x1-context-crop.png` olarak
kaydedildi ve ikincil referans olarak eklenecek — amaç SADECE X1'in gerçek paket şeklini/oranını
doğru yakalamak. Not: gerçek fotoğrafta MPU çipi karta 45° döndürülmüş (diamond) oturuyor, ama
Bölüm 01-05'in 25 onaylı görselinin hepsi çipi döndürülmemiş/kare açıyla çiziyor — seri boyunca
görsel tutarlılığı bozmamak için bu sahnede de çip döndürülmemiş şekilde çizilecek, sadece X1'in
paketi/oranı gerçek fotoğraftan alınacak.

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.
Üretim: `tools/generate-slide.py 06-clock-sistemi/prompts/01-hero.md 06-clock-sistemi/hero.png --ref visual-system/references/real-chip-x1-context-crop.png`

```text
SCENE:
Day label: "GÜN 06" — render with correct Turkish characters.
Main title: "CLOCK SİSTEMİ"
Subtitle: "Clock olmadan işlemci çalışmaz."

Central hardware: a close-up photo of the STM32F103C8T6 chip (same non-rotated, square-aligned
orientation as previously approved chapters — do not rotate it 45 degrees even though the
additional reference image shows it rotated on the real board) on a blue PCB, with the X1
crystal positioned just above/beside it. X1 MUST be drawn as a real oval grey metal-can
package (NOT a small black SMD rectangle) — an additional reference image is attached showing
X1's exact real package and its scale relative to the chip; copy that package shape exactly.
Add a simple visual hint of a square-wave pulse (a small clean waveform icon) near the chip to
represent "clock signal", subtle and small, not overpowering the photo.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the chip/crystal photo, each panel exactly one
cohesive image/icon plus caption. Use ONLY the exact values given here, do not invent any
additional spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Her Darbede Bir İşlem" — "72 MHz = saniyede 72 milyon darbe"
2 (blue): "Clock Durursa" — "İşlemci de durur"
3 (blue): "Evrensel Desen" — "ESP32 · RP2040 · nRF52 · GD32 — hepsi aynı mantık"
4 (blue): "Büyük SoC'lerde" — "Apple Silicon / Qualcomm'da kristal + PLL zinciri aynı kalır"

Do not render any pin numbers, resistor/capacitor values, or additional specs beyond what is
listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Darbe", "Clock
Durursa", "Evrensel Desen", "Büyük SoC'ler", each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta
tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline,
text only, no logo/emblem.
```
