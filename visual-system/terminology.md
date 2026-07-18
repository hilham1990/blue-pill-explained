# Terminoloji Sözlüğü

12 bölüm boyunca aynı kavramın farklı günlerde farklı adlandırılmasını önlemek için. Sahne/prompt yazarken buradaki tam ifadeyi kullan.

| Kavram | Slaytlarda kullanılacak sabit ifade | Not |
|---|---|---|
| Güç/besleme | **Besleme** (gerekirse "Power Supply" parantez içinde) | Ana README'nin 6-soru listesiyle tutarlı |
| Saat sinyali | **Clock** | Türkçeye çevrilmiyor, teknik terim olarak kalıyor |
| Sıfırlama devresi | **Reset** | — |
| Açılış modu | **Boot** / **Boot Modu** | BOOT0/BOOT1 pin adları değişmez |
| Çevre birimleri | **Peripheral'lar** veya **Çevre birimleri (peripheral'lar)** | Ana README'de bu ikili biçim kullanıldı. Terim ilk kez Bölüm 02'de geçiyor ve orada (Datasheet/Reference Manual tablosunun altında) gerçek bir tanım cümlesiyle açıklanıyor — sonraki bölümler bu tanıma güvenip terimi bare kullanabilir. |
| Hata ayıklama | **Debug** | Türkçeye çevrilmiyor |
| Pin yerleşimi | **Pinout** | Türkçeye çevrilmiyor |
| Alternatif işlev | **Alternate Function** | İngilizce teknik terim korunuyor |
| Referans belge | **Reference Manual** (RM0008) | Datasheet ile karıştırılmaz, ayrı belge |
| Teknik özet belge | **Datasheet** | — |
| İletişim hatları | **UART**, **SPI**, **I2C** | Kısaltmalar değişmez |
| Programlama/debug arayüzü | **SWD** | JTAG ile karıştırılmaz |
| İşlemci bloğu | **MPU** (şema etiketi) | Gerçek şema (`assets/source/blue-pill-schematic-source.webp`) bloğu "MPU" diye etiketliyor; teknik olarak doğrusu MCU'dur (çekirdek+Flash+SRAM tek çipte). Metin şemaya sadık kalıp "MPU" yazar ama ilk geçtiği yerde bu fark bir cümleyle belirtilir (bkz. Bölüm 01 README) — sessizce MCU'ya çevrilmez. |
| Gerilim regülatörü | **LDO** (Low Dropout Regulator, parantez içinde açık hali) | Bölüm 05'te RT8183-B için kullanıldı |
| Clock kaynakları | **HSE**, **HSI**, **PLL**, **LSE**, **LSI** | Kısaltmalar değişmez, Bölüm 06'da tanımlandı |
| Gerçek zamanlı saat | **RTC** (Real-Time Clock) | Türkçeye çevrilmiyor |
| Reset kaynakları | **POR**, **PDR**, **NRST**, **IWDG**, **WWDG** | Bölüm 07'de tanımlandı. **"BOR" (Brown-out Reset) KULLANILMAZ** — gerçek STM32F103 datasheet'inde bu terim hiç geçmiyor (tam metin taraması ile doğrulandı), gerilim düşüşü PDR tarafından karşılanıyor |
| Gerilim izleyici | **PVD** (Programmable Voltage Detector) | Bir reset kaynağı DEĞİL — yazılıma interrupt üretir, otomatik reset yapmaz. Bu ayrım her geçtiği yerde netleştirilir |

## Sabit etiketler (her slaytta aynı yazılır)

- Gün rozeti: `GÜN 0X` (iki haneli, başında sıfır: GÜN 01, GÜN 02 ... GÜN 12)
- Proje adı: `Blue Pill Explained`
- Kurum: `Akademi Usta`
- Kart adı: `STM32F103C8T6` (Blue Pill) — asla kısaltılmış/yanlış yazılmaz (bkz. gpt-image-1.5 testinde "GTM32" hatası)
- Footer sloganı (orta): **Bölüm 06'dan itibaren** `Usta tahmin etmez, ölçer.` — Bölüm 01-05'in 25 onaylı görseli eski `Önce anlamak, sonra ölçmek.` sloganını taşıyor, geriye dönük değiştirilmedi (bkz. `master-style-prompt.md`)
- Footer URL'si (sağ): **Bölüm 06'dan itibaren** `akademiusta.com` — Bölüm 01-05'te `akademiusta.com/tr` (gerçek site adresi `https://akademiusta.com/`, "https://" hiçbir zaman gösterilmez)

## Kaçınılacak tutarsızlıklar

- Aynı kavram için bir gün Türkçe, başka gün İngilizce başlık kullanmak (örn. "Besleme" vs "Power Supply" başlık olarak)
- BOOT0/BOOT1, NRST, VDD/VSS gibi gerçek pin adlarını farklı biçimde yazmak
- Ölçü birimlerini tutarsız yazmak (her zaman `8.000 MHz`, `100 nF`, `10 kΩ` gibi gerçek şema değerleriyle birebir)
