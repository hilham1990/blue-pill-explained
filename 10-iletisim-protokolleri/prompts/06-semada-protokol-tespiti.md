# Scene: scene-06 — Şemada Protokol Tespiti

**Durum:** v3 — v2'de I2C satırındaki EEPROM/sensör etiketleri hem bozuk yazılmış hem de
README'nin gerçek parça numaralarından (AT24C256, BMP280) farklı bir parça ailesine
("24LC2S6", "BME2BO" — muhtemelen 24LC256/BME280'in bozulmuş hali) çıkmıştı. v3, tam parça
adlarını harfiyen zorunlu kılıyor; GPS (u-blox NEO-6M) ve Flash (W25Q64JV) etiketleri v2'de
doğru çıktığı için değiştirilmedi.

Üretim: `tools/generate-slide.py 10-iletisim-protokolleri/prompts/06-semada-protokol-tespiti.md 10-iletisim-protokolleri/slides/06-semada-protokol-tespiti.png --mode generate`

```text
SCENE:
Day label: "GÜN 10"
Main title: "ŞEMADA PROTOKOLÜ TANIMAK"
Subtitle: "En güçlü kanıt sinyal adıdır"

Use case: scientific-educational. Create one large label-decoder diagram with realistic
schematic-line fragments, component silhouettes and exactly three
horizontal evidence rows:

Row 1: labels "TX" and "RX" enter a decoder arrow and produce "UART".
Add crossed-direction arrows between a Blue Pill silhouette and a small GPS-module icon;
caption "Asenkron, nokta–nokta".

Row 2: labels "MOSI", "MISO", "SCK", "CS" enter a decoder arrow and produce "SPI".
Add four distinct lines between a master and a small SOIC-8 flash icon; MISO points back,
other arrows point toward flash; caption "Senkron, master/slave".

Row 3: labels "SDA" and "SCL" enter a decoder arrow and produce "I2C".
Add shared-bus branch dots, a small EEPROM icon and a small sensor icon, plus exactly two
pull-up resistor symbols to +3.3 V; caption "Senkron, adresli bus".
IMPORTANT — exact part labels, no substitutes: label the EEPROM icon with EXACTLY the text
"AT24C256" and the sensor icon with EXACTLY the text "BMP280" — these are the only correct
part numbers for this chapter (do not write "24LC256", "24LC512", "BME280", or any other
similar-sounding part number; do not garble/misspell either string). If you cannot render
both strings correctly and legibly, omit the part-number caption entirely and show only the
plain unlabeled EEPROM/sensor icon — an unlabeled icon is preferred over a wrong or garbled
label.

Beside the rows add an evidence hierarchy panel:
"1 · Sinyal adları — güçlü kanıt"
"2 · Hat sayısı — destekleyici ipucu"
"3 · Bağlı modül — olasılığı güçlendirir"
"4 · Datasheet / yazılım / ölçüm — kesin doğrulama"

Add one red warning line: "Dört hat görmek tek başına SPI kanıtı değildir."

Bottom band content: exactly three unnumbered recognition cards:
"TX/RX → UART" / "MOSI/MISO/SCK/CS → SPI" / "SDA/SCL → I2C".
Do not say wire count alone is sufficient, and do not add pin numbers or module examples.
```
