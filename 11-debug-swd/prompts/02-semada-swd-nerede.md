# Scene: scene-02 — Şemada SWD Nerede?

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** CN4'ün gerçek şema crop'u Bölüm 08'de zaten çekilmişti:
`visual-system/references/real-cn4-connector-crop.png` — bu crop bizzat bu curriculum-qa
turunda yeniden piksel-grid analiziyle doğrulandı: (1) CN4 gerçekten şemada A2 koordinatında
(grid overlay ile ölçülüp doğrulandı, 2026-07-16), (2) Pin2=DIO, Pin3=DCLK (önceki README
taslağı bunu ters yazmıştı, düzeltildi). PA13/PA14'ün pin34/37 olduğu Bölüm 08'de zaten
doğrulanmıştı.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 11-debug-swd/prompts/02-semada-swd-nerede.md 11-debug-swd/slides/02-semada-swd-nerede.png --ref visual-system/references/real-cn4-connector-crop.png`

```text
SCENE:
Day label: "GÜN 11" — render with correct Turkish characters.
Main title: "ŞEMADA SWD NEREDE?"
Subtitle: "CN4 — şemada A2"

Central hardware: a clean technical schematic diagram of the CN4 connector, matching the
attached additional reference image exactly — a 4-pin header symbol labeled "CN4 / SRP4",
pins numbered "4 3 2 1" left to right, with four vertical lines dropping down labeled (left to
right) with a ground-tick symbol, "DCLK", "DIO", and an open-circle "+3.3V" marker. Copy the
exact pin layout and labels from the attached reference — do not swap DCLK and DIO. Thin black
schematic lines, monospace-style labels, white background, no colored border/frame around this
central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the schematic, each panel exactly one cohesive
icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact values
given here, do not invent any additional pin or coordinate:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a small grid-coordinate icon, like a map pin on a grid): "Şemada Konum" —
"Sol üst — A2 koordinatı" / "CN4, 'Connectors' bloğunda"
2 (orange, icon: a 4-pin header icon): "CN4 Pinout" — "Pin1=+3.3V, Pin2=DIO, Pin3=DCLK,
Pin4=GND" / "SRP4, 4 pinli düz konnektör"
3 (orange, icon: a chip pin icon labeled 34): "PA13 — Pin 34" — "JTMS/SWDIO" / "CN4 Pin2'ye
(DIO) bağlanır"
4 (orange, icon: a chip pin icon labeled 37): "PA14 — Pin 37" — "JTCK/SWCLK" / "CN4 Pin3'e
(DCLK) bağlanır"

Do not render any pin number or coordinate beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Şemada
Konum (A2)", "CN4 Pinout", "PA13 (Pin 34)", "PA14 (Pin 37)", each with a simple icon and
short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
