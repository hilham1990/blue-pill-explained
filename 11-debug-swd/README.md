# Bölüm 11 — Debug — SWD

> *Firmware bu pinlerden giriyor. Sorun da buradan tespit ediliyor.*

---

> **Bu bölümün kapsamı:**
> SWD, ARM Cortex-M tabanlı işlemcilerde (✓ STM32 ✓ RP2040 ✓ nRF52 ✓ GD32)
> kullanılan programlama/debug arayüzüdür. ✓ ESP32 gibi ARM dışı çekirdekler
> (Xtensa/RISC-V) SWD değil JTAG kullanır — kavram benzer, arayüz farklı.
> (Apple/Qualcomm gibi büyük SoC'lerde debug erişimi üretici tarafından
> kilitlenir veya çok daha karmaşık bir güvenlik zincirinden geçer — bu
> basit 2-pin mantığıyla aynı değildir.)

---

## SWD Nedir?

SWD: Serial Wire Debug

STM32'ye firmware yüklemek ve canlı debug yapmak için kullanılan protokol.

Sadece 2 sinyal pini ile:
- Firmware yükleyebilirsin
- Canlı çalışan kodu durdurabilirsin
- Değişkenlerin anlık değerini okuyabilirsin
- Breakpoint koyabilirsin

---

## Şemada SWD — CN4

Şemada sol üst — **A2–B2 koordinatları**.

```
CN4 (SRP4 — 4 pinli konnektör)

Pin 1 → +3.3V (opsiyonel besleme)
Pin 2 → DCLK (SWCLK — PA14)
Pin 3 → DIO  (SWDIO — PA13)
Pin 4 → GND
```

---

## SWD Pinleri İşlemcide Nerede?

```
PA13 → JTMS/SWDIO (pin 34)
PA14 → JTCK/SWCLK (pin 37)
```

Bu iki pin reset sonrasında otomatik olarak SWD modunda başlar.
Yani özel bir yapılandırma gerektirmiyor — ST-Link bağla, hazır.

---

## JTAG ile Farkı Nedir?

| Özellik | SWD | JTAG |
|---|---|---|
| Pin sayısı | 2 sinyal | 4-5 sinyal |
| Hız | Benzer | Benzer |
| Zincir | Tek işlemci | Birden fazla |
| Yaygınlık | Modern ARM'lerde standart | Eski, çok çipli sistemler |

STM32'de her ikisi de destekleniyor. Blue Pill'de SWD daha pratik — daha az pin, CN4 konnektörü zaten var.

---

## Programlama Aracı — ST-Link

ST-Link, ST Microelectronics'in resmi debug aracı.

Bağlantı şöyle kurulur:

```
ST-Link       ←→     CN4 (Blue Pill)
3.3V  ────────────── Pin 1 (opsiyonel)
SWCLK ────────────── Pin 2 (DCLK)
SWDIO ────────────── Pin 3 (DIO)
GND   ────────────── Pin 4 (GND)
```

Alternatif: J-Link, OpenOCD destekli adaptörler.

---

## Firmware Yükleme Süreci

### SWD üzerinden (ST-Link ile):
```
1. ST-Link'i CN4'e bağla
2. BOOT0 jumper: normal pozisyon (GND)
3. STM32CubeProgrammer veya OpenOCD aç
4. Firmware dosyasını (.hex veya .bin) seç
5. Flash — tamamlandı
6. Kart otomatik çalışmaya başlar
```

### USB üzerinden (Bootloader ile):
```
1. BOOT0 jumper'ı 3-4 pozisyonuna al (3.3V)
2. Kartı resetle
3. STM32CubeProgrammer → USB portunu seç
4. Firmware yükle
5. BOOT0 jumper'ı 1-2'ye al (GND)
6. Kartı resetle — normal çalışma
```

---

## Canlı Debug Nedir?

Firmware yükledikten sonra kart çalışırken:

- İşlemciyi istediğin satırda durdurabilirsin
- Değişkenlerin o andaki değerini görebilirsin
- Register'ların durumunu okuyabilirsin
- Adım adım ilerleyebilirsin

Bu SWD üzerinden gerçek zamanlı yapılıyor.

---

## Sahada Ne Anlama Gelir?

**Durum 1:** ST-Link bağlandı ama cihaz tanınmıyor.

Kontrol:
```
1. CN4 bağlantısı doğru mu? (pin sırası)
2. GND ortak mı? (en yaygın hata)
3. İşlemci besleniyor mu?
4. PA13/PA14 pinleri başka bir şeye bağlanmış mı?
```

**Durum 2:** Firmware yüklenmiyor, "target not found" hatası.

Kontrol:
```
1. BOOT0 doğru mu? (SWD için BOOT0=GND)
2. İşlemci çalışıyor mu? (Reset pinini kontrol et)
3. ST-Link sürücüsü güncel mi?
```

**Durum 3:** Kart çalışıyor ama debug bağlantısı kurulamıyor.

Muhtemel sebep:
```
PA13 veya PA14 yazılımda GPIO olarak yapılandırılmış.
Bu pinler SWD için ayrılmalı — yazılımda serbest bırakılmamalı.
```

---

## Sonraki bölüm

**[12 — Şema Baştan Sona](../12-sema-bastan-sona/README.md)**
