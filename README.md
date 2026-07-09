# Blue Pill Explained

> **This project does not teach a specific microcontroller.**
> **It teaches how to read hardware.**

STM32F103C8T6 (Blue Pill) — datasheet'ten şemaya, şemadan gerçek karta.

---

## Amaç

Bu seriyi tamamlayan biri:

- Bir datasheet'i korkmadan açabilir
- Şemada bir bloğu görünce ne işe yaradığını anlayabilir
- Besleme, clock, reset devrelerini okuyabilir
- Aynı bakış açısını başka işlemcilere uygulayabilir

**Temel prensip:** *Önce anlamak, sonra ölçmek.*

---

## Neden Blue Pill?

- Tam açık kaynak: datasheet + şema + kart herkese açık
- Ucuz, yaygın, ulaşılabilir
- Karmaşık değil ama gerçek bir sistem
- STM32 ailesi endüstride yaygın kullanılıyor

---

## Bölümler

| # | Başlık | Konu |
|---|---|---|
| 01 | [Neden Bu Kart?](01-neden-bu-kart/README.md) | Seri amacı, neden STM32 |
| 02 | [Datasheet Nasıl Okunur?](02-datasheet-nasil-okunur/README.md) | Arama mantığı, Reference Manual |
| 03 | [İlk Sayfa ve Part Number](03-ilk-sayfa-ve-part-number/README.md) | Features, STM32F103C8T6 kodu |
| 04 | [Şema Genel Bakış](04-sema-genel-bakis/README.md) | Şema bloklarını tanımak |
| 05 | [Power Supply](05-power-supply/README.md) | RT8183-B, besleme devresi |
| 06 | [Clock Sistemi](06-clock-sistemi/README.md) | Crystal, PLL, HSE, HSI |
| 07 | [Reset ve Boot](07-reset-ve-boot/README.md) | Reset devresi, BOOT0/BOOT1 |
| 08 | [MPU ve Pinout](08-mpu-ve-pinout/README.md) | İşlemci pinleri, port yapısı |
| 09 | [GPIO ve Alternate Function](09-gpio-ve-alternate-function/README.md) | Pin modları |
| 10 | [İletişim Protokolleri](10-iletisim-protokolleri/README.md) | UART, SPI, I2C karşılaştırması |
| 11 | [Debug — SWD](11-debug-swd/README.md) | Programlama ve debug pinleri |
| 12 | [Şema Baştan Sona](12-sema-bastan-sona/README.md) | Her bloğu birlikte okuyoruz |

---

## Kullanılan Kaynaklar

- STM32F103x8 Datasheet — ST Microelectronics (resmi, kamuya açık)
- Blue Pill Schematic — STM32 Min System Dev Board (Free Willy, açık kaynak)
- STM32F103 Reference Manual — RM0008

---

## Lisans

MIT — Kullanabilir, değiştirebilir, paylaşabilirsin.
