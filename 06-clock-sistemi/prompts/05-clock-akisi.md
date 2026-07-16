# Scene: scene-05 — Blue Pill'de Clock Nasıl Akıyor?

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.
Bu sahne bir DİKEY AKIŞ ZİNCİRİ (scene-04'ün katalog kartlarından kasıtlı olarak farklı stil).

Üretim: `tools/generate-slide.py 06-clock-sistemi/prompts/05-clock-akisi.md 06-clock-sistemi/slides/05-clock-akisi.png`

```text
SCENE:
Day label: "GÜN 06" — render with correct Turkish characters.
Main title: "BLUE PILL'DE CLOCK NASIL AKIYOR?"
Subtitle: "8 MHz'den 72 MHz'e"

Central layout: a vertical top-to-bottom flow diagram (NOT a catalog of cards, NOT a photo) —
a single chain of labeled boxes connected by downward arrows, in this exact order:
"X1 (8 MHz)" → "HSE" → "PLL × 9" → "72 MHz SYSCLK" → "AHB (72 MHz)" → then splitting into two
parallel boxes side by side: "APB1 (36 MHz)" and "APB2 (72 MHz)". Each box is simple, rounded,
navy-outlined, with clean bold text — no photos, this is a clean technical flow diagram.

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel), each
connected with a thin matching-color line to the relevant part of the flow diagram, each panel
exactly one cohesive image/icon plus caption. Use ONLY the exact values given here, do not
invent any additional spec:

IMPORTANT — badge color: all three number badges (1,2,3) and all three connector lines and
all three panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Kaynak → PLL" — "X1'in 8 MHz'i HSE üzerinden PLL'e girer, 9 ile çarpılır"
2 (blue): "Sistem Clock" — "72 MHz SYSCLK, AHB üzerinden dağıtılır"
3 (blue): "İki Periferik Yolu" — "APB1: 36 MHz (USART, SPI, I2C, Timer) · APB2: 72 MHz (GPIO, ADC, SPI1)"

Do not render any additional frequency values or bus names beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "X1 → PLL",
"SYSCLK", "APB1", "APB2", each with a simple icon and short Turkish title. Then the same
single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez,
ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no
logo/emblem.
```
