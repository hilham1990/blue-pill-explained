# Scene: scene-01-hero — İletişim Protokolleri

**Durum:** v2 — Gün 10 açılışı, yeni ayrıntılı görsel standardı.

Üretim: `tools/generate-slide.py 10-iletisim-protokolleri/prompts/01-hero.md 10-iletisim-protokolleri/hero-v4.png --mode generate`

```text
SCENE:
Day label: "GÜN 10"
Main title: "İLETİŞİM PROTOKOLLERİ"
Subtitle: "Aynı veri, üç farklı bağlantı mantığı"

Use case: scientific-educational. Asset type: 16:9 curriculum hero for video and presentation.

Create one dominant three-way decision map. Start with a center box "Veri Aktarmam Gerekiyor"
and branch into exactly three large protocol destinations:
- "UART" — icon of two devices with crossed TX/RX arrows — caption "Basit, iki cihaz arası"
- "SPI" — draw exactly TWO boxes, one "MASTER" and one "SLAVE". Connect the SAME master and
  the SAME slave with exactly four parallel labeled lines. Their arrow directions are strict:
  "SCK: MASTER → SLAVE", "MOSI: MASTER → SLAVE", "MISO: SLAVE → MASTER", and
  "CS: MASTER → SLAVE". MISO must be the ONLY left-pointing arrow; the other three must point
  right. All four lines terminate at that single slave box; never draw one different device
  per signal line. Caption "Yüksek hız, ayrı CS".
- "I2C" — draw exactly two continuous horizontal shared bus lines, SCL and SDA, plus one
  master and exactly three device boxes. Every device must connect to BOTH the SCL line and the
  SDA line using two clearly visible branch connections/dots; never connect a device to only
  one of the two lines. Caption "Az hatla çok cihaz".

Under the three destinations show one compact difference strip:
"UART: ortak clock yok" / "SPI: SCK master'dan" / "I2C: ortak SCL + adres".

Add one small clarification panel titled "Hat Sayısı Ne Demek?":
"UART: 2 temel sinyal" / "SPI: 4 temel sinyal" / "I2C: 2 temel sinyal" /
"Üçünde de ortak GND gerekir."

Add one small rule panel titled "Doğru Protokolü Seç":
"Basit nokta–nokta → UART" / "Hız → SPI" / "İki hatla çok cihaz → I2C".
Do not say UART is inherently long-distance. Do not show speed numbers or pin names in this
opening scene.

Bottom band content: exactly three unnumbered learning-goal cards:
"Sinyal Adlarını Tanı" / "Bağlantı Mantığını Ayır" / "Şemadan Protokolü Bul".
No repeated protocol cards, no numbered callout badges, no decorative modules.
```
