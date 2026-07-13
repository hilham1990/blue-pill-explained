# Bölüm 02 — Datasheet Nasıl Okunur?

> *Datasheet bir roman değil. Bir sözlük.*

*(Bu bölümün kapak görseli, Bölüm 01'de kurulan görsel standarda göre yeniden üretilecek.)*

---

## Datasheet nedir?

Üretici firmanın yazdığı resmi teknik belgedir.

İçinde şunlar var:

- İşlemcinin tüm özellikleri
- Her pinin ne iş yaptığı
- Elektriksel limitler
- Zamanlama diyagramları
- Uygulama devreleri

STM32F103 için iki ayrı belge var. Bu fark önemli.

---

## Datasheet mi, Reference Manual mı?

Bu iki belgeyi karıştırmak çok yaygın bir hata.

| Belge | Ne içeriyor | Ne zaman açarsın |
|---|---|---|
| **Datasheet** | Özet özellikler, pin listesi, elektriksel limitler | "Bu işlemci ne yapabilir?" sorusunda |
| **Reference Manual (RM0008)** | Her peripheral'ın tam açıklaması, register detayları | "Clock nasıl ayarlanır?" sorusunda |

**Kural:** Genel bilgi → Datasheet. Detay → Reference Manual.

Bu seride ikisini de kullanacağız. Hangi soruyu hangi belgeden cevapladığımızı her bölümde belirteceğiz.

---

## Datasheet'i baştan sona okuma

Okuma. Gerçekten.

1000 sayfalık bir belgeyi baştan sona okumak ne işe yarar?

Mühendis şöyle okur:

```
Soru oluşur
    ↓
İçindekiler açılır
    ↓
İlgili bölüm bulunur
    ↓
O bölüm okunur
    ↓
Soru cevap bulur
```

---

## Datasheet İçindekiler Haritası

Bu serinin kullandığı bölümler:

```
Datasheet (Doc ID 13587)
│
├── Features (kapak sayfası, 1-3)
│   └── İşlemcinin özeti — BİZ BURADAN BAŞLIYORUZ
│
├── Pinouts and Pin Description (Bölüm 3)
│   └── 48-pin LQFP pinout — her pinin adı
│
├── Memory Mapping (Bölüm 4)
│   └── Bellek adres haritası
│
├── Electrical Characteristics (Bölüm 5)
│   └── Voltaj limitleri, akım değerleri
│
├── Package Characteristics (Bölüm 6)
│   └── Fiziksel boyutlar
│
└── Ordering Information Scheme (Bölüm 7 — son bölümlerden biri, başında değil; hemen ardından sadece Revision History gelir)
    └── Part number tablosu — STM32F103C8T6 kodu
```

---

## RM0008 İçindekiler Haritası

```
Reference Manual (RM0008, Rev 20, 1134 sayfa)
│
├── Memory and Bus Architecture — Memory Map (Bölüm 3)
├── RCC — Clock Control, medium-density (Bölüm 7)
│   └── (Bölüm 8 farklı bir alt aile için — Connectivity line, bizim kartımız değil)
├── GPIO ve AFIO (Bölüm 9)
├── ADC (Bölüm 11)
├── DMA (Bölüm 13)
├── TIM — Timers (Bölüm 14 TIM1, Bölüm 15 TIM2-5, Bölüm 17 TIM6-7)
│   └── (Bölüm 16 bizim yoğunluktaki çipte yok; Bölüm 18 aslında RTC'dir, timer değil)
├── USB (Bölüm 23)
├── CAN — bxCAN (Bölüm 24)
├── SPI (Bölüm 25)
├── I2C (Bölüm 26)
└── USART (Bölüm 27)
```

Yukarıdaki harita `~/Downloads/RM0008.PDF` (Rev 20, 1134 sayfa) üzerinden 2026-07-13'te doğrulandı.

![RM0008 İçindekiler — Bölüm 17 Basic timers vs Bölüm 18 Real-time clock (sayfa 14)](images/rm0008-toc-timers-vs-rtc.png)

*Bu sayfa doğrulamanın kendisi kadar öğretici bir örnek: bölüm başlığına güvenmeden içindekiler sayfasını açıp kontrol etmezsen, "TIM Bölüm 15-18" gibi bir yanlışı fark edemezsin — Bölüm 18 aslında "Real-time clock (RTC)", timer değil.*

---

## Datasheet'in ilk sayfası

![Datasheet İçindekiler](images/contents-page.png)

![Datasheet Giriş](images/introduction.png)

Bu sayfa işlemcinin CV'si.

2 dakikada şunları öğreniyorsun:
- Kaç MHz çalışıyor
- Ne kadar Flash ve SRAM var
- Hangi iletişim protokolleri destekleniyor
- Hangi paket seçenekleri var

---

## Nerede bulunur?

- **STM32F103x8 Datasheet:** [st.com](https://www.st.com/en/microcontrollers-microprocessors/stm32f103c8.html) → Resources → Datasheet
- **RM0008 Reference Manual:** Aynı sayfada → Resources → Reference manual
- Her ikisi de ücretsiz, kayıt gerektirmez.

---

## Sahada Ne Anlama Gelir?

Elinde tanımadığın bir kart var. Üzerinde sadece işlemcinin part number'ı yazıyor, başka hiçbir şey bilmiyorsun.

```
Soru: "Bu işlemci ne yapabilir?" mi soruyorsun,
      "Bu peripheral'ı nasıl ayarlarım?" mı soruyorsun?

"Ne yapabilir?" → Datasheet aç (özellikler, pin listesi, limitler)
"Nasıl ayarlarım?" → Reference Manual aç (register detayları)
```

Yanlış belgede aramak zaman kaybettirir — 1000 sayfalık Reference Manual'da "kaç KB Flash var" aramak, ya da 30 sayfalık Datasheet'te "RCC register'ı nasıl set edilir" aramak gibi. Önce hangi soruyu sorduğunu netleştir, sonra doğru belgeyi aç.

---

*Bu bölümün slayt/video prodüksiyonu, Bölüm 01'de kurulan görsel standarda göre yeniden hazırlanıyor — bkz. [`PRODUCTION.md`](../PRODUCTION.md).*

---

## Sonraki bölüm

**[03 — İlk Sayfa ve Part Number](../03-ilk-sayfa-ve-part-number/README.md)**
