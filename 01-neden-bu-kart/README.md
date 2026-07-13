# Bölüm 01 — Neden Bu Kart?

> *Önce anlamak, sonra ölçmek.*

![Neden Blue Pill? — Gün 01 özet görseli](hero.png)

---

## Bu seri ne öğretiyor?

STM32 öğretmiyor.

**Düşünme biçimini öğretiyor.**

Seriyi bitirdiğinde elimde bir devre kartı olduğunda şu soruları sorabileceksin:

- Bu kart nasıl besleniyor?
- Clock nereden geliyor?
- İşlemci açılınca ne yapıyor?
- Bu pin neden burada?

Ve bu soruları sadece STM32 için değil — Apple, Qualcomm, Intel, ESP32 için de sorabileceksin.

---

## Neden STM32?

![Neden STM32? — açık belgeler, açık şema, erişilebilir donanım](slides/02-neden-stm32.png)

### Apple değil çünkü:
- Apple'ın datasheet'i kamuya açık değil
- Şeması açık kaynak değil
- Başlangıç için fazla karmaşık

### Qualcomm değil çünkü:
- Aynı sebep — kapalı ekosistem

### STM32 çünkü:
- **Datasheet tamamen açık** — ST Microelectronics resmi sitesinde
- **Şema açık kaynak** — Blue Pill şeması herkese açık
- **Ucuz ve yaygın** — 2-3 dolara alınabilen bir kart
- **Endüstride gerçek** — fabrika otomasyonundan medikal cihazlara kadar kullanılıyor

---

## Neden Blue Pill?

![Blue Pill'in içinde ne var? — çekirdek, bellek, iletişim, paket](slides/03-blue-pill-icinde-ne-var.png)

![STM32F103 Ailesi](images/family-table.png)

Blue Pill, STM32F103C8T6 işlemcisi üzerine kurulu minimal bir geliştirme kartıdır.

```
STM32F103C8T6
│
├── ARM Cortex-M3 CPU — 72 MHz
├── 64 KB Flash
├── 20 KB SRAM
├── USB, CAN, SPI, I2C, USART
└── 48 pin LQFP paket
```

Bu kart neden ideal?

- Şeması tek sayfa — karmaşık değil ama gerçek
- Her blok okunabilir: Power, Clock, Reset, MPU, LED, Connector
- Aynı mimari daha büyük STM32 kartlarında da var

---

## Şema açık kaynak mu?

![Tek sayfalık açık şema — power supply, reset ve tasarımcı notu](slides/04-tek-sayfalik-acik-sema.png)

Evet.

Bu repoda kullandığımız şema "STM32 Min System Dev Board" adıyla açık kaynak olarak yayınlanmış.

Tasarımcı notu şemada şöyle yazıyor:
```
Free Willy
Planet Earth
Solar System
```

Tüm datasheet ve şema kaynakları README'de listelenmiştir.

---

## Serinin kuralı

Her bölümde şu üç soruyu cevaplıyoruz:

1. **Bu ne?** — Teknik açıklama
2. **Neden burada?** — Tasarım kararının mantığı
3. **Sahada ne anlama gelir?** — Gerçek tamirde veya tasarımda ne değiştirir?

---

## Sonraki bölüm

**[02 — Datasheet Nasıl Okunur?](../02-datasheet-nasil-okunur/README.md)**
