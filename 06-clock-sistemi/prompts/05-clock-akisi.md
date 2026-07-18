# Scene: scene-05 — Blue Pill'de Clock Nasıl Akıyor?

**Durum:** v2 — APB1/APB2 çevre birimleri doğru ayrıldı.

Üretim: `tools/generate-slide.py 06-clock-sistemi/prompts/05-clock-akisi.md 06-clock-sistemi/slides/05-clock-akisi.png --mode generate`

```text
SCENE:
Day label: "GÜN 06"
Main title: "BLUE PILL'DE CLOCK NASIL AKIYOR?"
Subtitle: "8 MHz'den 72 MHz'e"

Use case: scientific-educational. Create one exact clock tree:
"X1 · 8 MHz" → "HSE" → "PLL ×9" → "SYSCLK · 72 MHz" → "AHB · 72 MHz",
then split into two clearly separated bus branches.

APB1 branch:
"APB1 · 36 MHz"
"USART2 · USART3"
"SPI2"
"I2C1 · I2C2"
"TIM2 · TIM3 · TIM4"

APB2 branch:
"APB2 · 72 MHz"
"GPIO"
"ADC1 · ADC2"
"USART1"
"SPI1"
"TIM1"

Use distinct bus colors and literal small icons for serial, SPI, I2C, timer, GPIO and ADC.
Add a lookup rule:
"Çevre biriminin clock'unu adıyla değil, bağlı olduğu bus ile doğrula."
Bottom band content:
"USART1 / SPI1 / TIM1 → APB2 · USART2/3 / SPI2 / TIM2–4 → APB1"
Do not place USART1 or TIM1 on APB1, generalize all USART/SPI/timers into one bus, add other
frequencies, use numbered panels, or repeat the tree as bottom cards.
```
