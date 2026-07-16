# Scene: scene-05 — Şemada Alternate Function Okumak

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Aynı U2 şema sembolü Bölüm 08'de zaten piksel piksel
doğrulanmıştı: `visual-system/references/real-u2-schematic-crop.png`. Bu sahnede gereken 6
satır (PA11→USBDM, PA12→USBDP, PA13→JTMS/SWDIO, PA14→JTCK/SWCLK, PB6→I2C1_SCL/USART1_TX,
PB7→I2C1_SDA/USART1_RX) o crop'ta zaten birebir mevcut ve doğrulanmış durumda — aynı crop bu
sahnede de referans olarak verilir (bileşen tekrar sahnede görünüyor, "ana sahnede zaten
doğru çıktı" diye atlanmaz, bkz. lessons-learned.md).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/05-semada-af-okumak.md 09-gpio-ve-alternate-function/slides/05-semada-af-okumak.png --ref visual-system/references/real-u2-schematic-crop.png`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "ŞEMADA ALTERNATE FUNCTION OKUMAK"
Subtitle: "PB6 neden 2 isim taşıyor?"

Central hardware: a clean technical schematic excerpt showing ONLY these 6 pin rows, copied
exactly from the attached reference image's real labels and layout style (thin black lines,
monospace-style labels, white background, matching the U2 symbol's real look): "PA11 →
USBDM", "PA12 → USBDP", "PA13 → JTMS/SWDIO", "PA14 → JTCK/SWCLK", "PB6 → I2C1_SCL/USART1_TX",
"PB7 → I2C1_SDA/USART1_RX". Do not render the full U2 block with all 48 pins — only these 6
rows, presented as a focused excerpt. No colored border/frame around this central content, it
sits directly on the plain background.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the relevant row(s) in the excerpt, each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here, do not invent any additional pin name:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color, matching this chapter's scene-04). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a USB connector icon): "PA11/PA12 — USB" — "USBDM/USBDP hatları" / "Bölüm
08'de detaylı işlendi"
2 (orange, icon: a small 4-pin SWD header icon): "PA13/PA14 — Debug" — "JTMS/SWDIO,
JTCK/SWCLK" / "Programlama/debug arayüzü"
3 (orange, icon: a two-wire bus icon with a fork/branch symbol): "PB6 — İki İsim" —
"I2C1_SCL veya USART1_TX" / "Aynı anda sadece biri seçilir"
4 (orange, icon: a two-wire bus icon with a fork/branch symbol, mirrored): "PB7 — İki İsim" —
"I2C1_SDA veya USART1_RX" / "PB6 ile birlikte çalışır (I2C SCL+SDA veya USART TX+RX çifti)"

Do not render any pin number beyond what is listed above, and do not invent additional
alternate-function names.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "PA11/PA12 —
USB", "PA13/PA14 — Debug", "PB6 — İki İsim", "PB7 — İki İsim", each with a simple icon and
short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
