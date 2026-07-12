# Bölüm 10 — İletişim Protokolleri

> *UART, SPI, I2C — üçü de veri taşır. Ama üçü çok farklı çalışır.*

---

> **Bu bölümde öğrendiğin şey şurada da geçerli:**
> ✓ ESP32 ✓ RP2040 ✓ nRF52 ✓ GD32
> ✓ Hatta Apple Silicon / Qualcomm SoC'ler — UART, SPI, I2C endüstri
>   standardı protokollerdir; hangi işlemci olursa olsun aynı sinyal
>   isimleriyle (TX/RX, MOSI/MISO/SCK/CS, SDA/SCL) çalışırlar.

---

## Neden Birden Fazla Protokol Var?

Farklı senaryolar farklı ihtiyaçlar doğurdu:

- **Kablo sayısı** az olsun mu? → I2C
- **Hız** önemli mi? → SPI
- **Mesafe** uzun mu? → UART
- **Basitlik** mi? → UART

Her protokolün bir avantajı, bir kısıtı var.

---

## UART — Universal Asynchronous Receiver/Transmitter

### Nasıl çalışır?
```
İşlemci TX ──────────────────→ Karşı taraf RX
İşlemci RX ←────────────────── Karşı taraf TX
```

İki kablo. Asenkron — ortak clock yok.
İki taraf aynı baud rate'i (hızı) bilmek zorunda: 9600, 115200, vb.

### Şemada nerede?

```
PA9  → USART1_TX
PA10 → USART1_RX

PA2  → USART2_TX
PA3  → USART2_RX

PB10 → USART3_TX
PB11 → USART3_RX
```

### Ne zaman kullanılır?

| Kullanım | Örnek |
|---|---|
| Debug çıkışı | Seri monitör |
| GPS modülü | NEO-6M, NEO-8M |
| Bluetooth | HC-05, HC-06 |
| GSM | SIM800, SIM900 |
| Barcode okuyucu | — |

### Avantaj / Kısıt

| ✅ | ❌ |
|---|---|
| En basit protokol | Yavaş (genellikle max 1 Mbps) |
| Sadece 2 kablo | Sadece 2 cihaz arası |
| Uzun mesafede çalışır | Ortak clock yok → hız hassas olmalı |

---

## SPI — Serial Peripheral Interface

### Nasıl çalışır?
```
Master MOSI ──→ Slave MOSI
Master MISO ←── Slave MISO
Master SCK  ──→ Slave SCK   (clock)
Master CS   ──→ Slave CS    (chip select — kimi seçiyorum?)
```

4 kablo. Senkron — master clock üretiyor.
Birden fazla slave olabilir — her biri için ayrı CS pini.

### Şemada nerede?

```
PA4  → SPI1_NSS  (Chip Select)
PA5  → SPI1_SCK  (Clock)
PA6  → SPI1_MISO
PA7  → SPI1_MOSI

PB12 → SPI2_NSS
PB13 → SPI2_SCK
PB14 → SPI2_MISO
PB15 → SPI2_MOSI
```

### Ne zaman kullanılır?

| Kullanım | Örnek |
|---|---|
| Flash bellek | W25Q64 (BIOS chip) |
| SD kart | — |
| OLED ekran | SSD1306 |
| IMU sensör | MPU6050 (bazı versiyonlar) |
| ADC/DAC entegre | MCP3204 |

### Avantaj / Kısıt

| ✅ | ❌ |
|---|---|
| Hızlı (10–50 Mbps) | 4 kablo (her slave için +1 CS) |
| Full duplex | Uzun mesafede gürültüye hassas |
| Basit donanım | |

---

## I2C — Inter-Integrated Circuit

### Nasıl çalışır?
```
Master SDA ←──→ Slave 1 SDA ←──→ Slave 2 SDA ...
Master SCL ──→  Slave 1 SCL ──→  Slave 2 SCL ...
```

2 kablo. Senkron.
Her slave'in benzersiz bir **adresi** var (7-bit).
Master kime konuşacağını adresle belirtiyor.

### Şemada nerede?

```
PB6  → I2C1_SCL
PB7  → I2C1_SDA

PB10 → I2C2_SCL
PB11 → I2C2_SDA
```

**Not:** PB10/PB11 aynı zamanda USART3_TX/RX. Biri seçilir.

### Ne zaman kullanılır?

| Kullanım | Örnek |
|---|---|
| EEPROM | AT24C256 |
| PMIC | bq24735, MAX77826 |
| Sıcaklık sensörü | LM75, TMP102 |
| Dokunmatik kontrolcü | FT5206 |
| Barometrik sensör | BMP280 |
| IMU | MPU6050 |

### Avantaj / Kısıt

| ✅ | ❌ |
|---|---|
| Sadece 2 kablo | Yavaş (400 kHz standart, 1 MHz fast mode) |
| Çok sayıda slave | Half duplex |
| Adres sistemi | Pull-up dirençleri gerekli |

---

## Karşılaştırma Tablosu

| Özellik | UART | SPI | I2C |
|---|---|---|---|
| Kablo sayısı | 2 | 4+ | 2 |
| Hız | ~1 Mbps | ~50 Mbps | ~1 Mbps |
| Slave sayısı | 1 | Sınırsız (her biri için CS) | 127 (adres ile) |
| Senkronizasyon | Asenkron | Senkron | Senkron |
| Kullanım kolaylığı | En kolay | Orta | Orta |

---

## Şemada Protokol Tespiti

Bir şemaya bakıyorsun. Hangi protokol olduğunu nasıl anlarsın?

```
İki hat: TX ve RX → UART
Dört hat: MOSI, MISO, SCK, CS → SPI
İki hat: SDA ve SCL → I2C
```

Pin isimlerinden doğrudan anlıyorsun.

---

## Sahada Ne Anlama Gelir?

Şemada tanımadığın bir modüle giden 2 kablolu bir hat görüyorsun. TX/RX mi, SDA/SCL mi olduğunu nasıl ayırt edersin?

```
Adım 1: Pin isimlerine bak. "TX"/"RX" yazıyorsa → UART.
        "SDA"/"SCL" yazıyorsa → I2C.
Adım 2: İsim yoksa, modülün adına bak. EEPROM, sıcaklık sensörü,
        IMU gibi düşük hızlı çevre birimleri genelde I2C kullanır.
        GPS, Bluetooth, GSM modülleri genelde UART kullanır.
Adım 3: Hâlâ emin değilsen, hattın çektiği pull-up direncine bak —
        I2C hatlarında SDA/SCL üzerinde pull-up dirençleri olması zorunludur.
```

4 kablolu bir hat görürsen (MOSI/MISO/SCK/CS) SPI'dır — bu üçü arasında en kolay ayırt edilenidir.

---

## Sonraki bölüm

**[11 — Debug — SWD](../11-debug-swd/README.md)**
