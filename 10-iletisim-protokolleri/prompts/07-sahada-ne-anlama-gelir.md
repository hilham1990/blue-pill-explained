# Scene: scene-07 — Sahada Ne Anlama Gelir?

**Durum:** v2 — ipucundan kesin doğrulamaya kanıt merdiveni.

Üretim: `tools/generate-slide.py 10-iletisim-protokolleri/prompts/07-sahada-ne-anlama-gelir.md 10-iletisim-protokolleri/slides/07-sahada-ne-anlama-gelir.png --mode generate`

```text
SCENE:
Day label: "GÜN 10"
Main title: "SAHADA PROTOKOLÜ DOĞRULA"
Subtitle: "İpucunu kanıt sanma"

Use case: scientific-educational. Create a teal diagnostic evidence ladder enriched with
literal hardware and measurement visuals, not four empty text boxes. Use exactly four
ascending steps from weakest to strongest:

Step 1 — "Modül Tipi — İlk İpucu"
"EEPROM / sensör / IMU → çoğunlukla I2C"
"GPS / Bluetooth / GSM → çoğunlukla UART"
Mark clearly: "Kesin değil".
Show a small EEPROM/sensor cluster on the I2C side and GPS/Bluetooth module silhouettes on the
UART side; no invented markings.

Step 2 — "Hat Topolojisi — İpucu Güçlenir"
"Paylaşılan SDA/SCL + pull-up → I2C olasılığı"
"Çapraz TX/RX → UART olasılığı"
"MOSI/MISO/SCK/CS → SPI olasılığı"
Use three small topology drawings: shared bus with pull-ups, crossed arrows, four SPI lines.

Step 3 — "Sinyal Adı — Güçlü Kanıt"
"TX/RX · MOSI/MISO/SCK/CS · SDA/SCL"
Show a magnifying glass over actual schematic-style net labels.

Step 4 — "Kesin Doğrulama"
"Modül datasheet'i" / "Yazılım yapılandırması" / "Osiloskop veya logic analyzer ölçümü".
Show three literal icons: open datasheet page, code window, and logic analyzer waveform with
digital pulses. Do not invent readable datasheet paragraphs or code.

Add one exact caution note beside the pull-up clue:
"Pull-up dirençleri ana kartta, modül üzerinde veya şemanın başka bölümünde olabilir."

Finish with a large conclusion:
"Şema ve donanım güçlü ipucu verir; kesin protokolü kaynak ve ölçüm doğrular."

Bottom band content: exactly four unnumbered method cards:
"Modülü Tanı" / "Hatları İzle" / "İsimleri Oku" / "Kaynakla Doğrula".
Do not say missing pull-ups disprove I2C, do not call module type proof, and do not repeat the
same numbered ladder in the bottom band.
```
