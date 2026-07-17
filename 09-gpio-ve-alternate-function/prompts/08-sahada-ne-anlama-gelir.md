# Scene: scene-08 — Sahada Ne Anlama Gelir?

**Durum:** v2 — bağlı devreden aktif fonksiyonu çıkarma kapanış sahnesi.

Üretim: `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/08-sahada-ne-anlama-gelir.md 09-gpio-ve-alternate-function/slides/08-sahada-ne-anlama-gelir.png --mode generate`

```text
SCENE:
Day label: "GÜN 09"
Main title: "SAHADA AKTİF FONKSİYONU BUL"
Subtitle: "Pin adını, bağlı devreyi ve yazılımı birlikte oku"

Use case: scientific-educational. Create a teal-accented diagnostic decision flow, readable
as the final video frame of the lesson.

At the top center place the exact pin-pair label:
"PB6 / PB7"
Below it show two possible label pairs:
"I2C1_SCL / I2C1_SDA" and "USART1_TX / USART1_RX".

Flow step 1: box titled "1 · Şemadaki Bağlantıyı İzle" with a magnifying glass following two
traces from PB6 and PB7. Exact caption: "Tek pine değil, sinyal çiftine bak."

Then split into exactly two diagnostic branches:
- Left branch: a small EEPROM with both lines connected. Labels "SCL + SDA" and
  "EEPROM bağlıysa → I2C kullanılıyor".
- Right branch: a serial module with both lines connected. Labels "TX + RX" and
  "Seri modül bağlıysa → USART kullanılıyor".

Merge the branches into flow step 2 titled "2 · Yazılımla Doğrula" with exact caption:
"GPIO ayarı ve AFIO remap seçimi son kanıttır."

Finish with a large conclusion box:
"Şema güçlü ipucu verir; kesin aktif modu yazılım doğrular."
This wording is important: do not claim that one PB6 wire alone proves the mode.

Bottom band content: exactly three unnumbered field-method cards:
"Pin Çiftini Bul" / "Bağlı Bileşeni Tanı" / "Yazılımla Doğrula".
No additional pin names, no antenna unless the serial module truly needs one, no four numbered
callout panels, no claim that hardware alone is always conclusive.
```
