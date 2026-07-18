# Scene: scene-05 — UART, SPI ve I2C Karşılaştırması

**Durum:** v2 — STM32F103'e özgü doğrulanmış karar matrisi.

Üretim: `tools/generate-slide.py 10-iletisim-protokolleri/prompts/05-karsilastirma-tablosu.md 10-iletisim-protokolleri/slides/05-karsilastirma-tablosu.png --mode generate`

```text
SCENE:
Day label: "GÜN 10"
Main title: "UART · SPI · I2C KARŞILAŞTIRMASI"
Subtitle: "Hat sayısı değil, ihtiyacın karar versin"

Use case: scientific-educational. Create a visually rich three-column decision matrix with
headers
"UART", "SPI", "I2C" and exactly four comparison rows:

Row "Temel Sinyal":
UART "TX · RX" / SPI "MOSI · MISO · SCK · CS" / I2C "SDA · SCL"
Each cell includes a literal miniature line diagram: crossed two arrows for UART, four arrows
with one reverse MISO for SPI, and a two-line branched bus with pull-up symbols for I2C.

Row "Clock":
UART "Yok — asenkron" / SPI "SCK — senkron" / I2C "SCL — senkron"
Use a small free-running data-wave icon for UART and aligned clock/data wave pairs for SPI/I2C.

Row "STM32F103 Üst Hız":
UART "USART1 4.5 Mbit/s; diğerleri 2.25 Mbit/s" /
SPI "18 Mbit/s" / I2C "400 kbit/s"

Row "Bağlantı Yapısı":
UART "Tipik olarak iki cihaz" /
SPI "Birden fazla cihaz; çoğunlukla ayrı CS" /
I2C "Ortak bus; adresle seçim"
Use three distinct topology icons: two devices, master with separate CS branches, shared bus.

Below the matrix create one compact choice strip:
"Basit nokta–nokta → UART" / "Yüksek hız → SPI" /
"İki hatla çok cihaz → I2C".

Add one small shared note with a ground symbol: "Üçünde de ortak GND gerekir."

Bottom band content: exactly three unnumbered question cards:
"Clock Gerekli mi?" / "Kaç Cihaz Var?" / "Hız mı, Hat Sayısı mı?".
Do not write ~1 Mbps, ~50 Mbps, 127 devices, unlimited slaves or long-distance UART. Do not
add four callout panels that repeat the matrix.
```
