# Bölüm 02 — Datasheet Nasıl Okunur?

> *Datasheet bir roman değil. Bir sözlük.*

![Datasheet ve Reference Manual seçim ve okuma akışı](images/datasheet-reading-map.png)

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

## STM32F103 Datasheet — İçindekiler Haritası

Bu serinin kullandığı bölümler:

```
Datasheet (DS5319)
│
├── Features (Sayfa 1-3)
│   └── İşlemcinin özeti — BİZ BURADAN BAŞLIYORUZ
│
├── Ordering Information
│   └── Part number tablosu — STM32F103C8T6 kodu
│
├── Pinouts
│   └── 48-pin LQFP pinout — her pinin adı
│
├── Electrical Characteristics
│   └── Voltaj limitleri, akım değerleri
│
└── Package Information
    └── Fiziksel boyutlar
```

```
Reference Manual (RM0008)
│
├── Memory Map
├── RCC — Clock Control (Bölüm 7)
├── GPIO (Bölüm 9)
├── DMA (Bölüm 13)
├── ADC (Bölüm 11)
├── TIM — Timers (Bölüm 15-18)
├── USART (Bölüm 27)
├── SPI (Bölüm 25)
├── I2C (Bölüm 26)
└── USB (Bölüm 23)
```

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

## Slayt Serisi

1. [Genel Bakış](slides/01-genel-bakis.png)
2. [Datasheet Nedir?](slides/02-datasheet-nedir.png)
3. [Datasheet ve Reference Manual](slides/03-datasheet-vs-reference-manual.png)
4. [Doğru Okuma Yöntemi](slides/04-dogru-okuma-yontemi.png)
5. [DS5319 İçindekiler Haritası](slides/05-ds5319-haritasi.png)
6. [RM0008 İçindekiler Haritası](slides/06-rm0008-haritasi.png)
7. [İlk Sayfayı Okuma](slides/07-ilk-sayfa-okuma.png)
8. [Kaynak ve Kapanış](slides/08-kaynak-ve-kapanis.png)

---

## Video Çıktıları

- [Uzun ders videosu — 16:9, yaklaşık 148 saniye](video/out-long/day02-datasheet-long.mp4)
- [Uzun video altyazısı — SRT](video/out-long/day02-datasheet-long.srt)
- [Kısa video — 9:16, yaklaşık 33 saniye](video/out-short/day02-datasheet-short.mp4)
- [Kısa video altyazısı — SRT](video/out-short/day02-datasheet-short.srt)

Ses: macOS yerel `Yelda` Türkçe sesi. Üretim: yerel ffmpeg + otomatik zamanlanmış SRT.

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

## Sonraki bölüm

**[03 — İlk Sayfa ve Part Number](../03-ilk-sayfa-ve-part-number/README.md)**
