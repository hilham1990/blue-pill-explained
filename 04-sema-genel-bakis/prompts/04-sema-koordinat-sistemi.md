# Scene: scene-04 — Şema Koordinat Sistemi

**Durum:** Üretiliyor (2026-07-15).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 04" — render with correct Turkish characters.
Main title: "ŞEMA KOORDİNAT SİSTEMİ"
Subtitle: "A-E / 1-8 ızgarası ile kesin konum"

Central hardware: a clean top-down technical illustration of the Blue Pill schematic sheet
with a visible reference grid overlaid: column numbers 1-8 along the top edge, row letters
A-E along the left edge, thin grid lines dividing the sheet. Do not invent new component
values — keep block outlines generic (Connectors, MPU, Power Supply, LEDs, Reset).

Three highlighted grid regions, each with a soft orange translucent overlay marking the exact
cell range and a small caption label:
- Region spanning rows D-E, columns 1-3: label "Power Supply → D1–E3"
- Region spanning rows A-C, columns 4-8: label "MPU → A4–C8"
- Region spanning rows D-E, column 5: label "Reset → D5–E5"

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel, orange =
belge/referans), each connected with a thin matching-color line to its corresponding
highlighted region above, each panel exactly one cohesive image/icon plus caption. Use ONLY
the exact values given here, do not invent any additional coordinate:

1 (orange): "Power Supply" — "D1–E3"
2 (orange): "MPU" — "A4–C8"
3 (orange): "Reset" — "D5–E5"

Do not render any additional coordinate ranges or components beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card can restate "Bazı
bölümlerde bu koordinatlara atıfta bulunacağız" as a synthesis card), each with a simple icon
and short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi
Usta", bottom-center "Önce anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same
bold navy font, same baseline, text only, no logo/emblem.
```
