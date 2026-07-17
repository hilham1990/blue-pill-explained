# Scene: scene-04 — Pinout'ta Renkler

**Durum:** v2 — gerçek Blue Pill pinout referansını okuma becerisine odaklanan yeni prompt.

Üretim: `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/04-pinoutta-renkler.md 09-gpio-ve-alternate-function/slides/04-pinoutta-renkler.png --mode edit --ref assets/source/blue-pill-pinout-source.webp`

```text
SCENE:
Day label: "GÜN 09"
Main title: "PINOUT'TA RENKLERİ OKUMAK"
Subtitle: "Renk, pinin olası çevre birimi görevini gösterir"

Use case: scientific-educational. Input image: the attached Blue Pill pinout is the factual
color reference. Do not redraw its full dense pin list and do not invent pin labels.

Create a focused teaching composition. On the left, show a simplified crop-like fragment of
exactly four generic pin rows using no specific PA/PB number. Each row begins with the exact
label "GPIO" and ends with exactly one of these four colored tags, in this order:
"USART TX" in yellow / "SPI SCK" in light green / "I2C SDA" in orange /
"TIMER PWM" in purple. Use these labels verbatim. Do not write Serial1, SPI1, I2C1, PWM1/2,
channel numbers, peripheral instance numbers or any other invented tag.

On the right, create exactly six large, highly legible legend rows using colors matched to the
attached real pinout:
"Sarı → Serial (USART)"
"Açık yeşil → SPI"
"Turuncu → I2C (+ USB)"
"Mor → PWM (Timer)"
"Pembe → CAN"
"Bej → Analog giriş"

Below the legend, add a separate caution panel titled "Bunlarla Karıştırma":
"Koyu yeşil A0–A3 / D0–D15 → Arduino takma adları"
"3 / 5 rozetleri → 3.3 V standart / 5 V tolerans bilgisi"
State clearly: "Bunlar Alternate Function renkleri değildir."

Add one small reading example without a real pin number:
"GPIO adı + renkli etiket = aynı pinin olası ikinci görevi".

Bottom band content: exactly three unnumbered reading steps:
"GPIO Adını Bul" / "Renkli Etiketi Oku" / "Lejanttan Görevi Eşleştir".
No complete board redraw, no 40-pin microtext, no invented color, no duplicated four-panel
layout, no decorative photo.
```
