# Scene: scene-03 — Clock ve Reset Hazır

**Durum:** v2 — MCU çevresinde iki clock yolu ve reset zamanlaması.

Üretim: `tools/generate-slide.py 12-sema-bastan-sona/prompts/03-clock-ve-reset.md 12-sema-bastan-sona/slides/03-clock-ve-reset.png --mode edit --ref visual-system/references/real-x1-crystal-crop.png --ref visual-system/references/real-x2-crystal-crop.png`

```text
SCENE:
Day label: "GÜN 12"
Main title: "CLOCK VE RESET HAZIR"
Subtitle: "72 MHz + RTC + NRST"

Use case: scientific-educational. Place one STM32F103 block in the center. Feed it with two
visually different clock paths using the physical crystal shapes from the references:

Upper path: "X1 · 8 MHz" between "PD0 / OSC_IN" and "PD1 / OSC_OUT", with
"C13 12p" and "C14 12p" to GND; inside the MCU continue as "HSE → PLL ×9 → 72 MHz SYSCLK".
Lower path: "X2 · 32.768 kHz" between "PC14 / OSC32_IN" and "PC15 / OSC32_OUT", with
"C9 100p" and "C12 100p" to GND; inside continue as "LSE → RTC".

On the right show the actual reset topology as one small circuit:
"+3.3V → R2 10kΩ → NRST", with "C2 100nF → GND" and "S1 → GND".
Add a two-state timing inset: "NRST HIGH · çalışır" and "S1 basılı → NRST LOW · reset".
Use waveform/clock and push-button icons to explain causality.

Bottom band content: "Clock işlemciye ritim verir; reset onu bilinen başlangıç durumuna getirir."
Do not swap X1/X2 packages, invent values, use numbered badges, or repeat the main blocks below.
```
