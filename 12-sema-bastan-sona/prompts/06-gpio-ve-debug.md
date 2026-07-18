# Scene: scene-06 — GPIO ve Debug Dışarı Çıkar

**Durum:** v2 — kart çevresinde gerçek konektör/pin dağılımı.

Üretim: `tools/generate-slide.py 12-sema-bastan-sona/prompts/06-gpio-ve-debug.md 12-sema-bastan-sona/slides/06-gpio-ve-debug.png --mode edit --ref visual-system/references/real-cn4-connector-crop.png`

```text
SCENE:
Day label: "GÜN 12"
Main title: "GPIO VE DEBUG DIŞARI ÇIKAR"
Subtitle: "CN1 · CN2 · CN4 · CN5"

Use case: scientific-educational. Draw one simplified Blue Pill board in the center. Highlight
four physical exit zones around it with leader lines, not numbered panels.

Left header "CN1":
"PA0–PA7" / "PB0, PB1, PB10, PB11" / "PC13–PC15" / "3VB, +3.3V, GND".

Right header "CN2":
"PA8–PA12, PA15" / "PB3–PB9, PB12–PB15" / "+3.3V, +5V, GND".

Top debug header "CN4":
show the referenced order exactly "4 · 3 · 2 · 1" and
"GND · DCLK · DIO · +3.3V".
Add "Pin 2 DIO → PA13 / SWDIO" and "Pin 3 DCLK → PA14 / SWCLK".

Near the yellow jumper show "CN5 · PB2 / BOOT1".
Add a visual exclusion callout:
"CN1/CN2'de arama: PA13/PA14 CN4'te, PB2 CN5'te."

Enrich the board with three possible external attachments: sensor, motor driver and another
controller, each as a small icon connected to ordinary GPIO pins.
Bottom band content: "Konnektör adını değil, sinyal adını takip et."
Do not create contiguous PA0–PA15 or PB0–PB15 groups, swap DIO/DCLK, use numbered badges, or
invent pins.
```
