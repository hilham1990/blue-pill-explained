# Scene: scene-03 — Blue Pill'in İçinde Ne Var?

**Durum:** Üretiliyor (2026-07-13).

Kullanım: `visual-system/master-style-prompt.md` içindeki ana blok + referans görsel paragrafı (referans: `slides/02-neden-stm32.png`, sadece panel/numara/bağlantı çizgisi stili için) + aşağıdaki SCENE bloğu + `master-style-prompt.md`'deki "BOTTOM LAYOUT (MANDATORY)" bloğu (en sonda, harfiyen).

```text
SCENE:
Day label: "GÜN 01" — render with correct Turkish Ü.
Main title: "BLUE PILL'İN İÇİNDE NE VAR?"
Subtitle: "STM32F103C8T6 — ARM Cortex-M3, 72 MHz."

Central hardware: real STM32F103C8T6 Blue Pill board photo, unmodified, vertical orientation
(same board as previous approved slides).

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each connected
with a thin matching-color line to a precise point on the board, each panel exactly one cohesive
image plus caption with real spec text — do not invent spec numbers beyond what is listed here:

1 (teal, connects to the chip): "ARM Cortex-M3 — 72 MHz" — close-up of the chip
2 (blue, connects to the chip): "64 KB Flash / 20 KB SRAM" — a clean spec card
3 (yellow, connects to the board's connector area): "USB · CAN · SPI · I2C · USART" — a labeled
  icon row for these five communication interfaces
4 (orange, connects to the chip's pin rows): "48 pin LQFP Paket" — close-up of the chip's pin rows

Bottom section: use the mandatory bottom layout block (4 cards summarizing this scene's key
takeaways — e.g. "Çekirdek", "Bellek", "İletişim", "Paket" — each with a simple icon and short
Turkish title), then the centered tagline and text-only Akademi Usta footer.
```
