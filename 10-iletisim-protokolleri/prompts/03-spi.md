# Scene: scene-03 — SPI

**Durum:** v3 — gerçek bileşen ikonları, kesin sinyal yönleri ve CS seçimi.

Üretim: `tools/generate-slide.py 10-iletisim-protokolleri/prompts/03-spi.md 10-iletisim-protokolleri/slides/03-spi.png --mode generate`

```text
SCENE:
Day label: "GÜN 10"
Main title: "SPI"
Subtitle: "Ortak veri hatları, her cihaz için ayrı seçim"

Use case: scientific-educational. Use a simplified Blue Pill master-board illustration and
realistic peripheral icons, not only empty flow boxes.

Central topology: left, one simplified Blue Pill labeled "MASTER". Right, exactly ONE
selected small SOIC-8 memory chip labeled "SEÇİLİ SLAVE — Flash". Do not put the OLED in the
central signal diagram and do not invent text on the chip.

Shared line directions are strict:
"MOSI: MASTER → SLAVE"
"MISO: SLAVE → MASTER"
"SCK: MASTER → SLAVE"
MISO is the ONLY shared line pointing LEFT toward the master. MOSI and SCK arrows MUST point
RIGHT toward the slaves. CS1 and CS2 arrows MUST also point RIGHT toward their respective
slaves. Text labels do not override the arrowheads: visually verify the actual arrowhead
directions exactly as specified.

Draw all four lines between the SAME master and the SAME selected flash slave: MOSI right,
MISO left, SCK right, CS right. Exactly four lines, no branching in the central diagram.

Separate mini-panel titled "İKİ CİHAZDAN HANGİSİ?" showing only a CS selector: one master CS
block branches into "CS1 → Flash" and "CS2 → Ekran". Highlight CS1/Flash active and render
CS2/Ekran inactive. Do not draw MOSI/MISO/SCK in this mini-panel. Add:
"Master, CS hattıyla hangi slave ile konuşacağını seçer."
Beside CS1 show "LOW = Seçili" with an enabled switch icon; beside CS2 show
"HIGH = Seçili Değil" with a disabled switch icon. Present this as the common active-low CS
example.

Signal-role key:
"MOSI: Master'dan slave'e" / "MISO: Slave'den master'a" /
"SCK: Clock" / "CS: Cihaz seçimi".

Verified STM32F103 panel:
"SPI1: PA4 NSS · PA5 SCK · PA6 MISO · PA7 MOSI"
"SPI2: PB12 NSS · PB13 SCK · PB14 MISO · PB15 MOSI"
"Üst hız: 18 Mbit/s"

Use strip with four different literal icons and captions:
"W25Q64 Flash" / "SD Kart" / "SSD1306 Ekran" / "MPU-6000 IMU".

Bottom band content: exactly four signal cards:
"MOSI →" / "MISO ←" / "SCK →" / "CS → Seç".
Do not write 50 Mbps, unlimited slaves or MPU6050. Never distribute SCK/MOSI/MISO/CS to four
different devices; every slave receives the shared trio and its own CS.
```
