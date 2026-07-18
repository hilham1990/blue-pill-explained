# Blue Pill Explained

Video, Shorts ve sosyal medya üretiminde değerlendireceğimiz araçlar için [Video Üretim Araçları](VIDEO-TOOLS.md) notuna bakın.

[![Lisans: MIT](https://img.shields.io/badge/Lisans-MIT-green.svg)](LICENSE)
[![Dil: Türkçe](https://img.shields.io/badge/Dil-T%C3%BCrk%C3%A7e-blue.svg)](#)
[![Bölümler: 12](https://img.shields.io/badge/B%C3%B6l%C3%BCmler-12-orange.svg)](#bölümler)
[![Akademi Usta](https://img.shields.io/badge/Akademi-Usta-red.svg)](https://akademiusta.com/tr)

> **Bu proje sana tek bir mikrodenetleyiciyi ezberletmez.**
> **Donanımı nasıl okuyacağını öğretir.**

STM32F103C8T6 (Blue Pill) — datasheet'ten şemaya, şemadan gerçek karta.

**[Amaç](#amaç) · [Bu Seri Neyi Cevaplıyor?](#bu-seri-neyi-cevaplıyor) · [Bölümler](#bölümler) · [Kaynaklar](#kullanılan-kaynaklar) · [Lisans](#lisans)**

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

Bir işlemciyi veya işlemci tabanlı bir sistemi anlamaya başladığında, üretici ve mimariden bağımsız olarak çoğu durumda şu 6 temel sorunun cevabını ararsın:

1. **Besleme nerede?** — Gerilim nereden geliyor, çekirdeğe nasıl ulaşıyor?
2. **Clock nerede?** — İşlemcinin ritmini ne belirliyor?
3. **Reset devresi nasıl?** — Sistem nasıl temiz başlıyor?
4. **Boot modu ne?** — İşlemci ilk komutu nereden okuyor?
5. **Çevre birimleri (peripheral'lar) nereye bağlı?** — Dış dünyayla nasıl konuşuyor?
6. **Debug nasıl yapılıyor?** — Firmware nasıl yükleniyor, sorun nasıl teşhis ediliyor?

Bu seri bu 6 soruyu **STM32F103C8T6 (Blue Pill)** üzerinden, gerçek bir şema okuyarak cevaplıyor. Kart örnek — sorular evrensel.

---

## Neden Blue Pill?

- Tam açık kaynak: datasheet + şema + kart herkese açık
- Ucuz, yaygın, ulaşılabilir
- Karmaşık değil ama gerçek bir sistem
- STM32 ailesi endüstride yaygın kullanılıyor

---

## Nasıl Takip Edilir?

Bölümler sırayla okunacak şekilde tasarlandı — her biri bir öncekinin üzerine inşa ediyor.

1. Faz 1'den başla, sırayla ilerle.
2. Her bölümdeki şema görsellerini gerçek Blue Pill şemasıyla yan yana aç.
3. "Sahada Ne Anlama Gelir?" kısımlarını atlama — asıl beceri orada oturuyor.
4. Elinde bir Blue Pill kartı varsa, okurken şemadaki noktaları multimetre ile ölç.

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
| 05 | [Power Supply](05-power-supply/README.md) | 5V→3.3V regülasyon zinciri |
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

---

Bazı bölümlerde slayt, uzun video, kısa video ve altyazı çıktıları bulunuyor; medya üretim durumu ve yaklaşımı için [`PRODUCTION.md`](PRODUCTION.md) dosyasına bakın.

---

## Katkıda Bulunma

Bu seri açık kaynak ve ücretsizdir. Hata bulursan, eksik bir açıklama görürsen veya bir bölümü genişletmek istersen issue açabilir ya da pull request gönderebilirsin.

---

## Lisans

[MIT](LICENSE) © Akademi Usta — Kullanabilir, değiştirebilir, paylaşabilirsin.
