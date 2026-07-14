# Scene: scene-00-hero — İlk Sayfayı Okumak

**Durum:** Üretiliyor (2026-07-14).

Bilinçli tasarım kararı: Gün 2'nin hero'sunda merkeze "açık bir belge" konunca model
uydurma bir device-summary tablosu ve yanlış aile başlığı üretmişti (bkz.
02-datasheet-nasil-okunur/prompts/00-hero.md known_issue). Bu riski tekrar almamak için
merkeze açık bir belge KOYMUYORUZ — Gün 1'in scene-03'ünde işe yarayan deseni
kullanıyoruz: gerçek çip yakın çekimi + verilen kesin rakamlarla 4 panel. Belgeye referans
sadece arka planda, odak dışı bir doku olarak, okunaklı metin OLMADAN veriliyor.

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 03" — render with correct Turkish Ü.
Main title: "İLK SAYFAYI OKUMAK"
Subtitle: "Datasheet'in ilk sayfası işlemcinin CV'si."

Central hardware: real STM32F103C8T6 chip, close-up photo, same chip style as previously
approved slides (not a full board, just the chip itself, clearly legible "STM32F103C8T6"
marking). Behind/around it, a hint of an open datasheet page as soft out-of-focus background
texture ONLY — do not render any legible text, table, or heading on this background page, it
must stay blurred/abstract, purely atmospheric.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the chip, each panel exactly one cohesive
image/icon plus caption — use ONLY the exact numbers given here, do not invent any additional
spec value:

1 (teal): "Çekirdek" — "ARM Cortex-M3, 72 MHz maksimum frekans"
2 (blue): "Bellek" — "64 KB Flash, 20 KB SRAM"
3 (yellow): "İletişim" — "9 arayüz: USB, CAN, SPI, I2C, USART"
4 (orange): "Diğerleri" — "2x 12-bit ADC, 7 Timer, 7 kanal DMA, 37 GPIO"

Do not render any device-summary table, any additional part-number text, or any other
specification not listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Çekirdek",
"Bellek", "İletişim", "Diğerleri", each with a simple icon and short Turkish title. Then the
same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Önce anlamak,
sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same baseline, text
only, no logo/emblem.
```
