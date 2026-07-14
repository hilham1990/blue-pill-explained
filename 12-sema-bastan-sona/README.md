# Bölüm 12 — Şema Baştan Sona

> *Artık her bloğu biliyoruz. Şimdi hepsini birlikte okuyalım.*

---

## Blue Pill Şeması

![Blue Pill Schematic](../assets/source/blue-pill-schematic-source.webp)

Bu şemayı ilk bölümde gördük.

O zaman bilmiyorduk. Şimdi biliyoruz.

Baştan sona geçelim.

---

## 1. Kartı Besle

```
USB micro-B veya 5V pin → +5V
```

Şemada CN3 (SRP5, USB konnektörü) veya CN1'in 5V pini.

5V hattı:
```
+5V ── C7(100n) // C5(10u) ── GND   (giriş filtresi)
    └── U1 VIN (RT8183-B)
```

---

## 2. Gerilim 3.3V'a Dönüşür

```
U1 (RT8183-B)
VIN = +5V → VOUT = +3.3V
```

3.3V çıkışı filtreleniyor:
```
+3.3V ── C6(10u) // C10(100n) ── GND
```

---

## 3. İşlemci Besleme Alır

```
+3.3V → VDD_1 (pin 24)
+3.3V → VDD_2 (pin 36)
+3.3V → VDD_3 (pin 48)
+3.3V → VDDA  (pin 9) + C4/C8 filtresi
+3.3V → VBAT  (pin 1) — 3VB hattı
GND   → VSS_1, VSS_2, VSS_3, VSSA
```

---

## 4. Clock Gelir

```
X1 (8 MHz crystal)
  OSC_IN (PD0) ─── X1 ─── OSC_OUT (PD1)
  C13(12p) ve C14(12p) yük kapasitörleri
```

İşlemci içinde:
```
HSE (8 MHz) → PLL × 9 → 72 MHz SYSCLK
```

```
X2 (32.768 kHz crystal)
  OSC32_IN (PC14) ─── X2 ─── OSC32_OUT (PC15)
  C9(100p) ve C12(100p) yük kapasitörleri
  → LSE → RTC
```

---

## 5. Reset Devresi Hazır

```
+3.3V
  │
  R2 (10kΩ) ─── NRST (işlemci)
                │
               C2 (100nF) ─── GND
               │
              S1 (buton) ─── GND
```

İşlemci NRST = HIGH → çalışıyor.
S1'e basınca NRST = LOW → reset.

---

## 6. Boot Modu Belirlenir

```
BOOT0 (pin 44):
  R3 (100kΩ) → GND (varsayılan: Flash'tan başla)
  CN5 jumper ile BOOT0 = +3.3V yapılabilir (Bootloader)

BOOT1 (PB2, pin 20):
  R4 (100kΩ) → GND (sabit: System Memory veya SRAM dışında)
```

---

## 7. İşlemci Çalışmaya Başlar

Reset açılır. Boot modu okunur. Flash'tan kod çalışır.

---

## 8. USB Aktif Olur

```
USBDM (PA11) ── R11(22Ω) ── USB D-
USBDP (PA12) ── R10(22Ω) ── USB D+
                              │
                         R9(10kΩ) → +3.3V
```

R9 pull-up → Host "Full Speed USB cihazı var" algılar.

---

## 9. LED'ler Çalışır

```
Power LED (D1, kırmızı):
+3.3V → R1(510Ω) → D1 → GND
Kart beslendiği sürece yanar.

Kullanıcı LED'i (D2, mavi):
+3.3V → R5(510Ω) → D2 → PC13
PC13 = LOW → LED yanar
PC13 = HIGH → LED söner
```

---

## 10. GPIO Pinleri Dışarıya Çıkar

```
CN1 (SRP20): PA0–PA15, PB0–PB1, +3.3V, GND, +5V
CN2 (SRP20): PB3–PB15, GND
```

Bu konnektörler üzerinden:
- Sensör bağlanabilir
- Motor sürücü bağlanabilir
- Başka bir kart bağlanabilir

---

## 11. Debug / Programlama Hazır

```
CN4 (SRP4):
Pin 1 → +3.3V
Pin 2 → DCLK (PA14/SWCLK)
Pin 3 → DIO  (PA13/SWDIO)
Pin 4 → GND
```

ST-Link bu 4 pine bağlanır. Firmware yüklenir.

---

## Şema Okuma Özeti

```
Güç geldi
    ↓
RT8183-B 3.3V üretiyor
    ↓
İşlemci besleme aldı
    ↓
Crystal clock veriyor
    ↓
Reset açıldı
    ↓
Boot modu: Flash
    ↓
Firmware çalışıyor
    ↓
USB, GPIO, LED aktif
    ↓
SWD ile debug/programlama hazır
```

**Bu sıra her kartın şemasında aynı.**

İşlemci farklı olabilir. Üretici farklı olabilir.
Ama soru hep aynı:

1. Besleme nerede?
2. Clock nerede?
3. Reset devresi nasıl?
4. Boot modu ne?
5. Peripheral'lar nereye bağlı?
6. Debug nasıl yapılıyor?

---

## Bu Serinin Sonu — Ve Başlangıcı

Bu noktaya gelen biri artık:

✅ Bir datasheet'i açıp ne arayacağını biliyor\
✅ Part number'dan işlemciyi tanımlayabiliyor\
✅ Şemadaki her bloğun ne iş yaptığını anlıyor\
✅ Besleme zincirini takip edebiliyor\
✅ Clock ve reset devrelerini okuyabiliyor\
✅ GPIO ve iletişim hatlarını tanımlayabiliyor\
✅ Debug pinlerini biliyor

**Aynı bakış açısı:**

- ESP32 şemasına bak → aynı sorular
- Raspberry Pi şemasına bak → aynı sorular
- Apple M1 tabanlı bir karta bak → aynı sorular

İşlemci değişir. Sorular değişmez.

> *Önce anlamak, sonra ölçmek.*

---

*Blue Pill Explained — Akademi Usta*\
*Lisans: MIT*
