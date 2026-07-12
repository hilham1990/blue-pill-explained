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

## Bu Seri Neyi Cevaplıyor?

Her işlemci, üretici ve mimari fark etmeksizin, aynı 6 soruya cevap vermek zorundadır:

1. **Besleme nerede?** — Gerilim nereden geliyor, çekirdeğe nasıl ulaşıyor?
2. **Clock nerede?** — İşlemcinin ritmini ne belirliyor?
3. **Reset devresi nasıl?** — Sistem nasıl temiz başlıyor?
4. **Boot modu ne?** — İşlemci ilk komutu nereden okuyor?
5. **Peripheral'lar nereye bağlı?** — Dış dünyayla nasıl konuşuyor?
6. **Debug nasıl yapılıyor?** — Firmware nasıl yükleniyor, sorun nasıl teşhis ediliyor?

Bu seri bu 6 soruyu **STM32F103C8T6 (Blue Pill)** üzerinden, gerçek bir şema okuyarak cevaplıyor. Kart örnek — sorular evrensel.

---

## Neden Blue Pill?

- Tam açık kaynak: datasheet + şema + kart herkese açık
- Ucuz, yaygın, ulaşılabilir
- Karmaşık değil ama gerçek bir sistem
- STM32 ailesi endüstride yaygın kullanılıyor

---

## Bölümler

### Faz 1 — Hazırlık
*Bir işlemciyle karşılaştığında önce ne yaparsın?*

| # | Başlık | Konu |
|---|---|---|
| 01 | [Neden Bu Kart?](01-neden-bu-kart/README.md) | Seri amacı, neden STM32 |
| 02 | [Datasheet Nasıl Okunur?](02-datasheet-nasil-okunur/README.md) | Arama mantığı, Reference Manual |
| 03 | [İlk Sayfa ve Part Number](03-ilk-sayfa-ve-part-number/README.md) | Features, STM32F103C8T6 kodu |
| 04 | [Şema Genel Bakış](04-sema-genel-bakis/README.md) | Şema bloklarını tanımak |

### Faz 2 — Sistemi Oku
*İşlemci nasıl çalışır: önce beslenir, sonra clock alır, sonra nereden başlayacağını belirler, sonra dünyayla konuşur.*

| # | Başlık | Konu |
|---|---|---|
| 05 | [Power Supply](05-power-supply/README.md) | RT8183-B, besleme devresi |
| 06 | [Clock Sistemi](06-clock-sistemi/README.md) | Crystal, PLL, HSE, HSI |
| 07 | [Reset ve Boot](07-reset-ve-boot/README.md) | Reset devresi, BOOT0/BOOT1 |
| 08 | [MPU ve Pinout](08-mpu-ve-pinout/README.md) | İşlemci pinleri, port yapısı |
| 09 | [GPIO ve Alternate Function](09-gpio-ve-alternate-function/README.md) | Pin modları |
| 10 | [İletişim Protokolleri](10-iletisim-protokolleri/README.md) | UART, SPI, I2C karşılaştırması |
| 11 | [Debug — SWD](11-debug-swd/README.md) | Programlama ve debug pinleri |

### Faz 3 — Bütünleştir
*Hepsini tek akışta birleştirme.*

| # | Başlık | Konu |
|---|---|---|
| 12 | [Şema Baştan Sona](12-sema-bastan-sona/README.md) | Her bloğu birlikte okuyoruz |

---

## Kullanılan Kaynaklar

- STM32F103x8 Datasheet — ST Microelectronics (resmi, kamuya açık)
- Blue Pill Schematic — STM32 Min System Dev Board (Free Willy, açık kaynak)
- STM32F103 Reference Manual — RM0008

## Medya ve Üretim

- Gerçek kart ve referans belgeleri: [`assets/source/`](assets/source/)
- Gün 02 slaytları: [`02-datasheet-nasil-okunur/slides/`](02-datasheet-nasil-okunur/slides/)
- Gün 02 video manifestleri, MP4 ve SRT çıktıları: [`02-datasheet-nasil-okunur/video/`](02-datasheet-nasil-okunur/video/)
- Yerel Yelda + ffmpeg renderer: [`tools/render-lesson-video.mjs`](tools/render-lesson-video.mjs)

---

## Lisans

MIT — Kullanabilir, değiştirebilir, paylaşabilirsin.
