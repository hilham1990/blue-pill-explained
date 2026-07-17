# Scene: scene-02 — UART

**Durum:** v3 — gerçek bağlantı bağlamı, zaman diyagramı ve kesin yön talimatları.

Üretim: `tools/generate-slide.py 10-iletisim-protokolleri/prompts/02-uart.md 10-iletisim-protokolleri/slides/02-uart-v3.png --mode generate`

```text
SCENE:
Day label: "GÜN 10"
Main title: "UART"
Subtitle: "TX karşı tarafın RX'ine gider"

Use case: scientific-educational. Make the slide visually rich with a central wiring scene,
realistic module icons and a small timing explanation; do not make it only a flow chart.

Central hardware scene: a simplified Blue Pill board on the left labeled "Blue Pill" and a
realistic small GPS/UART module on the right labeled "UART Modülü". Do not invent component
markings. Draw exactly three connections with visible circular pin pads:
"Blue Pill TX → Modül RX", "Blue Pill RX ← Modül TX", "GND ↔ GND".
The two data arrows must point in opposite directions. Add exact rule:
"TX–TX değil, TX–RX çapraz bağlanır."

Below it draw an oscilloscope-like asynchronous frame waveform labeled exactly:
"Start" / "8 Data Bit" / "Stop". Caption: "Ortak clock yok".
Beside it show two boxes both reading "115200 baud", joined by a green check, with:
"İki taraf aynı baud rate'i kullanmalı."

Verified STM32F103 panel:
"USART1: PA9 TX · PA10 RX · 4.5 Mbit/s'ye kadar"
"USART2: PA2 TX · PA3 RX · 2.25 Mbit/s'ye kadar"
"USART3: PB10 TX · PB11 RX · 2.25 Mbit/s'ye kadar"

Use panel: four different literal mini-icons, not empty boxes: terminal screen "Seri monitör",
GPS module "GPS", Bluetooth module "Bluetooth", cellular module "GSM".
Warning: "Uzun mesafe için RS-232/RS-485 gibi uygun hat sürücüsü gerekir."

Bottom band content: exactly three connection-check cards with connector icons:
"TX → RX" / "RX ← TX" / "GND Ortak".
Do not write ~1 Mbps, do not claim bare UART is long-distance, do not add clock/SCK, do not
repeat use examples below, and do not invent resistor values or extra pins.
```
