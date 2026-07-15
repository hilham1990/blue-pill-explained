# Scene: scene-00-hero — Şema, Kartın X-ray Görüntüsü

**Durum:** Üretiliyor (2026-07-15).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 04" — render with correct Turkish characters.
Main title: "ŞEMA GENEL BAKIŞ"
Subtitle: "Şema, kartın X-ray görüntüsü."

Central hardware: a clean top-down technical illustration of the Blue Pill schematic sheet
(real single-page schematic layout: connectors block top-left, MPU block top-right, power
supply / LEDs / reset blocks along the bottom). Do not invent new component values — if unsure
of a label, leave it generic ("MPU", "Power Supply") rather than guessing a number.

Six thin colored outline boxes overlay six regions of the schematic, each with a small color-
matched label (no large number badges here, just quiet outline + label, this is an overview
not a numbered panel scene):
- "Connectors" (blue outline, top-left area)
- "MPU" (blue outline, top-right/center area, the largest box)
- "Power Supply" (blue outline, bottom-left)
- "LEDs" (blue outline, bottom-center-left)
- "Reset" (blue outline, bottom-center-right)
- "Crystal" (thin dashed blue outline nested INSIDE the MPU box, small label, showing it's a
  sub-group not a separate schematic partition)

Four NUMBERED side panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the schematic, each panel exactly one cohesive
image/icon plus short caption:

1 (blue): "6 Fonksiyonel Blok" — "Her biri ayrı bir görev üstleniyor"
2 (blue): "MPU Merkezde" — "STM32F103C8T6 (U2), tüm bloklar ona bağlı"
3 (orange): "Tek Sayfa Şema" — "Az ama gerçek"
4 (teal): "Koordinat Sistemi" — "A-E / 1-8 ızgarası, ileride kullanılacak"

Do not render any additional pin numbers, resistor/capacitor values, or spec text beyond what
is listed above.

Bottom section: use the mandatory bottom layout — 6 cards (hero slide exception), one per
block: "Connectors", "MPU", "Power Supply", "LEDs", "Reset", "Crystal", each with a simple icon
and short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi
Usta", bottom-center "Önce anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same
bold navy font, same baseline, text only, no logo/emblem.
```
