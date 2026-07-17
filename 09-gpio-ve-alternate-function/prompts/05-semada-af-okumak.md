# Scene: scene-05 — Şemada Alternate Function Okumak

**Durum:** v2 — gerçek U2 şema isimlerinden okuma yöntemi.

Üretim: `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/05-semada-af-okumak.md 09-gpio-ve-alternate-function/slides/05-semada-af-okumak.png --mode edit --ref visual-system/references/real-u2-schematic-crop.png`

```text
SCENE:
Day label: "GÜN 09"
Main title: "ŞEMADA PIN İSMİNİ ÇÖZMEK"
Subtitle: "GPIO adı solda, bağlı devre görevi sağda"

Use case: scientific-educational. Input image: the attached U2 schematic crop is the factual
reference for labels. Copy only the six verified rows below; do not redraw all 48 pins.

At the center, create a large clean six-row schematic excerpt with exact text:
"PA11 → USBDM"
"PA12 → USBDP"
"PA13 → JTMS/SWDIO"
"PA14 → JTCK/SWCLK"
"PB6 → I2C1_SCL/USART1_TX"
"PB7 → I2C1_SDA/USART1_RX"
Use schematic-style thin lines, white background and legible monospace labels.

Group the six rows visually into three functional braces:
- "USB Çifti" around PA11 and PA12
- "SWD / Debug Çifti" around PA13 and PA14
- "I2C veya USART Çifti" around PB6 and PB7

On the right add one interpretation panel titled "PB6/PB7 Neden İki İsimli?" with exactly:
"I2C seçilirse: PB6=SCL, PB7=SDA"
"USART1 remap seçilirse: PB6=TX, PB7=RX"
"İki eşleşme aynı anda kullanılmaz."

On the left add one method panel titled "Okuma Sırası":
"1 · GPIO adını bul" / "2 · Eğik çizgiden sonraki görevleri ayır" /
"3 · Bağlı devre ve yazılımla aktif görevi doğrula".

Bottom band content: exactly three evidence cards:
"PA11/12 → USB", "PA13/14 → SWD", "PB6/7 → I2C veya USART1".
No additional pins, no fake package drawing, no full U2 block, no repeated icon cards.
```
