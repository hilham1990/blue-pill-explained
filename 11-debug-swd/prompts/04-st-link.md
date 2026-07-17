# Scene: scene-04 — ST-Link Bağlantısı

**Durum:** v2 — probe-CN4 kablolaması ve target reference ayrımı.

Üretim: `tools/generate-slide.py 11-debug-swd/prompts/04-st-link.md 11-debug-swd/slides/04-st-link-v2.png --mode edit --ref visual-system/references/real-cn4-connector-crop.png`

```text
SCENE:
Day label: "GÜN 11"
Main title: "ST-LINK → CN4 BAĞLANTISI"
Subtitle: "Dört hattı doğru sırayla bağla"

Use case: scientific-educational. The reference image is the factual CN4 pin order. On the
left draw one generic, unbranded debug-probe box with USB input and four labeled terminals;
never imitate a specific commercial/clone enclosure. On the right reproduce the CN4 4-pin
header order exactly.

Draw exactly four wires and no others:
"3.3 V / VTref → CN4 Pin 1"
"SWDIO ↔ CN4 Pin 2 / DIO"
"SWCLK → CN4 Pin 3 / DCLK"
"GND ↔ CN4 Pin 4".
SWDIO has arrows both directions. SWCLK has one arrow probe → target.

Add a dedicated mini-panel "3.3 V HATTI NE YAPAR?":
"Probe hedefin lojik seviyesini algılamak için referans olarak kullanabilir."
"Bazı probe/klonlar kartı bu hattan besleyebilir; davranış modele bağlıdır."
"Kart ayrı besleniyorsa iki kaynağı bilinçsizce birbirine bağlama."

Add a fault-prevention inset with continuity/multimeter icon:
"Önce GND ortak" / "Sonra 3.3 V ölç" / "Sonra SWDIO ve SWCLK sırasını kontrol et".

Bottom band content: exactly four wire cards:
"Pin 1 · VTref/3.3 V" / "Pin 2 · SWDIO" / "Pin 3 · SWCLK" / "Pin 4 · GND".
Do not call Pin 1 unconditionally a power output. Do not swap Pins 2 and 3, add NRST to CN4,
or invent a branded probe design.
```
