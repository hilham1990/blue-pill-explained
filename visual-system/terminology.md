# Terminoloji Sözlüğü

12 bölüm boyunca aynı kavramın farklı günlerde farklı adlandırılmasını önlemek için. Sahne/prompt yazarken buradaki tam ifadeyi kullan.

| Kavram | Slaytlarda kullanılacak sabit ifade | Not |
|---|---|---|
| Güç/besleme | **Besleme** (gerekirse "Power Supply" parantez içinde) | Ana README'nin 6-soru listesiyle tutarlı |
| Saat sinyali | **Clock** | Türkçeye çevrilmiyor, teknik terim olarak kalıyor |
| Sıfırlama devresi | **Reset** | — |
| Açılış modu | **Boot** / **Boot Modu** | BOOT0/BOOT1 pin adları değişmez |
| Çevre birimleri | **Peripheral'lar** veya **Çevre birimleri (peripheral'lar)** | Ana README'de bu ikili biçim kullanıldı |
| Hata ayıklama | **Debug** | Türkçeye çevrilmiyor |
| Pin yerleşimi | **Pinout** | Türkçeye çevrilmiyor |
| Alternatif işlev | **Alternate Function** | İngilizce teknik terim korunuyor |
| Referans belge | **Reference Manual** (RM0008) | Datasheet ile karıştırılmaz, ayrı belge |
| Teknik özet belge | **Datasheet** | — |
| İletişim hatları | **UART**, **SPI**, **I2C** | Kısaltmalar değişmez |
| Programlama/debug arayüzü | **SWD** | JTAG ile karıştırılmaz |
| İşlemci bloğu | **MPU** (şema etiketi) | Gerçek şema (`assets/source/blue-pill-schematic-source.webp`) bloğu "MPU" diye etiketliyor; teknik olarak doğrusu MCU'dur (çekirdek+Flash+SRAM tek çipte). Metin şemaya sadık kalıp "MPU" yazar ama ilk geçtiği yerde bu fark bir cümleyle belirtilir (bkz. Bölüm 01 README) — sessizce MCU'ya çevrilmez. |

## Sabit etiketler (her slaytta aynı yazılır)

- Gün rozeti: `GÜN 0X` (iki haneli, başında sıfır: GÜN 01, GÜN 02 ... GÜN 12)
- Proje adı: `Blue Pill Explained`
- Kurum: `Akademi Usta`
- Kart adı: `STM32F103C8T6` (Blue Pill) — asla kısaltılmış/yanlış yazılmaz (bkz. gpt-image-1.5 testinde "GTM32" hatası)

## Kaçınılacak tutarsızlıklar

- Aynı kavram için bir gün Türkçe, başka gün İngilizce başlık kullanmak (örn. "Besleme" vs "Power Supply" başlık olarak)
- BOOT0/BOOT1, NRST, VDD/VSS gibi gerçek pin adlarını farklı biçimde yazmak
- Ölçü birimlerini tutarsız yazmak (her zaman `8.000 MHz`, `100 nF`, `10 kΩ` gibi gerçek şema değerleriyle birebir)
