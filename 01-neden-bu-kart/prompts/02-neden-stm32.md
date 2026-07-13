# Scene: scene-02 — Neden STM32?

**Durum:** v1 üretildi ve reddedildi (eski format: renkli bant + tek caption, diyakritiksiz metin riski, footer yok). Bölüm 01'in onaylanmış `slides/01-bu-seri-ne-ogretiyor.png` formatına göre yeniden yazıldı — bkz. karşılaştırma notları 2026-07-13.

Kullanım: `visual-system/master-style-prompt.md` içindeki ana blok + referans görsel paragrafı (referans artık `slides/01-bu-seri-ne-ogretiyor.png` — hero değil, çünkü numaralı panel formatı orada onaylandı) + aşağıdaki SCENE bloğu.

```text
SCENE:
Day label: "GÜN 01" — must render with the correct Turkish Ü. Double-check every Turkish diacritic
(Ç, Ğ, İ, Ö, Ş, Ü, ç, ğ, ı, ö, ş, ü) in every piece of text on this slide before finalizing.

Main title: "NEDEN STM32?"
Subtitle: "Açık belgeler, açık şema ve erişilebilir gerçek donanım."

Central hardware: real STM32F103C8T6 Blue Pill board photo, unmodified, vertical orientation.

Four NUMBERED panels (large number badge 1, 2, 3, 4 in the panel's accent color, top-left of each
panel — not just a color-coded bar), each connected to a precise point on the board with a thin
matching-color line, each panel containing exactly one cohesive image plus its caption directly
below the number:

1 (teal, connects to the datasheet/pinout area): "Açık Datasheet" — an open real datasheet page
  showing a device summary table (Flash/SRAM/timers/USART/SPI/I2C/CAN/ADC rows)
2 (blue, connects to the chip): "Açık Şema" — a real schematic snippet showing the STM32F103C8T6
  symbol with labeled pins
3 (yellow, connects to the USB/power connector): "Erişilebilir Donanım" — the Blue Pill board wired
  on a breadboard with visible wiring
4 (orange, connects to the chip or board edge): "Endüstride Yaygın" — a lineup of five different
  STM32 dev boards of varying sizes side by side

Bottom footer, thin single row below a subtle divider line:
- left: "Blue Pill Explained — Donanımı Okumayı Öğren"
- center: Akademi Usta logo mark and "Akademi Usta"
- right: "Kart örnek — Sorular evrensel."

Do not add a bottom summary band on this slide (that band only appears on the hero slide).
```
