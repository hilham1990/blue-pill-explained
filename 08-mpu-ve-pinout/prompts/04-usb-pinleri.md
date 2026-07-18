# Scene: scene-04 — USB Pinleri

**Durum:** v2 — gerçek kart değeri ile USB uyumluluk değeri ayrıldı.

Üretim: `tools/generate-slide.py 08-mpu-ve-pinout/prompts/04-usb-pinleri.md 08-mpu-ve-pinout/slides/04-usb-pinleri.png --mode edit --ref visual-system/references/real-usb-crop.png`

```text
SCENE:
Day label: "GÜN 08"
Main title: "USB DİRENÇ AĞI"
Subtitle: "Şemadaki değer ile doğru tasarım değeri aynı değil"

Use case: scientific-educational. Reproduce the referenced board schematic accurately in the
center:
"USBDM → R9 · 22Ω → PA11 / pin 32"
"USBDP → R11 · 22Ω → PA12 / pin 33"
and "R10 · 10kΩ" from D+ to +3.3V.
HARD WIRING INVARIANT: R10 MUST branch from the LOWER "USBDP / D+ / PA12" line. It must
NEVER touch, cross, terminate on or branch from the upper "USBDM / D− / PA11" line.
Label this factual circuit: "BU BLUE PILL ŞEMASINDA".

Next to it create a strong engineering comparison:
"USB FULL-SPEED UYUMLU TASARIM"
"D+ pull-up: 1.5kΩ → 3.0–3.6V"
with a green compliance check.
The 1.5kΩ resistor in this comparison MUST also branch only from the LOWER D+ line; never
from D−. Draw D− and D+ far apart so the connection cannot be visually ambiguous.
Place a warning between them:
"10kΩ bir klon sapmasıdır; bazı host'larda enumerate sorunu oluşturabilir."

Explain R9/R11 with one differential-pair inset:
"22Ω seri dirençler · D−/D+ hat yansımasını azaltır."
Add an evidence ladder:
"Şemayı oku → Datasheet şartını kontrol et → Kartı ölç".

Bottom band content:
"Şemada yazan değer, doğru tasarım değeri olmak zorunda değildir."
Do not say R10=10kΩ is USB-compliant, say 10kΩ reliably announces Full Speed, swap R9/R11,
invent other resistor values, use numbered panels, or repeat the comparison below.
```
