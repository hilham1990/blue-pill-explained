# Scene: scene-02 — Şemada SWD Nerede?

**Durum:** v2 — gerçek CN4 crop ve pin-pin iz sürme.

Üretim: `tools/generate-slide.py 11-debug-swd/prompts/02-semada-swd-nerede.md 11-debug-swd/slides/02-semada-swd-nerede.png --mode edit --ref visual-system/references/real-cn4-connector-crop.png`

```text
SCENE:
Day label: "GÜN 11"
Main title: "ŞEMADA SWD NEREDE?"
Subtitle: "CN4 — A2 koordinatı"

Use case: scientific-educational. Input reference is the factual CN4 schematic crop. Preserve
its exact order: connector numbers read left-to-right "4 · 3 · 2 · 1"; below them
"GND · DCLK · DIO · +3.3V". Never swap DIO and DCLK.

Central composition: enlarge the clean CN4 schematic excerpt on the left. On the right draw a
simplified STM32F103 pin block with exactly two rows:
"PA13 · pin 34 · JTMS/SWDIO"
"PA14 · pin 37 · JTCK/SWCLK".

Trace exactly four color-coded paths from CN4:
"Pin 1 · +3.3V → target/reference voltage"
"Pin 2 · DIO → PA13 / SWDIO" with bidirectional data arrows
"Pin 3 · DCLK → PA14 / SWCLK" with clock pulses toward target
"Pin 4 · GND → common ground".

Add a small coordinate-map inset showing only "A2" in the upper-left schematic grid.
Add exact note: "PA13/PA14 reset sonrasında debug erişimine hazırdır."

Bottom band content: exactly four pin cards:
"1 · 3.3 V" / "2 · DIO / SWDIO" / "3 · DCLK / SWCLK" / "4 · GND".
Do not add other MCU pins, connector numbers or power values. Do not redraw all 48 pins.
```
