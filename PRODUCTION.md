# Medya ve Üretim

Bu dosya, seri için üretilen slayt/video/altyazı çıktılarını ve üretim araçlarını takip eder. Müfredatın kendisi (bölüm metinleri) bundan bağımsızdır — burası sadece prodüksiyon durumu.

## Kaynaklar

- Gerçek kart ve referans belgeleri: [`assets/source/`](assets/source/)

## Bölüm Bazında Medya Durumu

| Bölüm | Slayt | Video (uzun/kısa) | Altyazı |
|---|---|---|---|
| 01 — Neden Bu Kart? | Tamamlandı (5 sahne: hero + `slides/`) | — | — |
| 02 — Datasheet Nasıl Okunur? | Tamamlandı (5 sahne: hero + `slides/`, 2026-07-14) | Henüz render edilmedi | Henüz üretilmedi |
| 03 — İlk Sayfa ve Part Number | Tamamlandı (4 sahne: hero + `slides/`, 2026-07-14) | Henüz render edilmedi | Henüz üretilmedi |
| 04 — Şema Genel Bakış | Tamamlandı (5 sahne: hero + `slides/`, 2026-07-15) | Henüz render edilmedi | Henüz üretilmedi |
| 05 — Power Supply | Tamamlandı (6 sahne: hero + `slides/`, 2026-07-16) | Henüz render edilmedi | Henüz üretilmedi |
| 06 — Clock Sistemi | Tamamlandı (6 sahne: hero + `slides/`, 2026-07-16) | Henüz render edilmedi | Henüz üretilmedi |
| 07 — Reset ve Boot | Tamamlandı (6 sahne: hero + `slides/`, 2026-07-16) | Henüz render edilmedi | Henüz üretilmedi |
| 08 — MPU ve Pinout | Tamamlandı (7 sahne: hero + `slides/`, 2026-07-16) | Henüz render edilmedi | Henüz üretilmedi |
| 09 — GPIO ve Alternate Function | Tamamlandı (8 sahne: hero + `slides/`, 2026-07-17) | Henüz render edilmedi | Henüz üretilmedi |
| 10 — İletişim Protokolleri | Metin+plan+prompt hazır (7 sahne), görsel HENÜZ ÜRETİLMEDİ (2026-07-16) | Henüz render edilmedi | Henüz üretilmedi |
| 11 — Debug SWD | Metin+plan+prompt hazır (7 sahne), görsel HENÜZ ÜRETİLMEDİ (2026-07-16) | Henüz render edilmedi | Henüz üretilmedi |
| 12 — Şema Baştan Sona | Metin+plan+prompt hazır (8 sahne), görsel HENÜZ ÜRETİLMEDİ (2026-07-16) | Henüz render edilmedi | Henüz üretilmedi |

## Üretim Yaklaşımı

Slaytlar her bölüm için elle tasarlanmıyor — o bölümün metni (README.md) okunarak dinamik olarak görsele/slayta dönüştürülüyor. Bu yüzden slayt/video çıktıları müfredat metninden **sonra** üretiliyor ve metin değiştikçe yeniden üretilebilir.

- Ses: macOS yerel `Yelda` Türkçe sesi
- Video: yerel ffmpeg render + otomatik zamanlanmış SRT
- Renderer: [`tools/render-lesson-video.mjs`](tools/render-lesson-video.mjs)

## Notlar

- Slayt prodüksiyonu Bölüm 01-09'da tamamlandı, video render henüz hiçbirinde yapılmadı. Bölüm 10-12'nin metni QA'lanmış, planı onaylanmış ve tüm sahne prompt'ları yazılmış (2026-07-16) ama GÖRSEL henüz üretilmedi — sıradaki iş bu 3 bölümün 22 sahnesini sırayla (10→11→12) üretmek, bkz. `CLAUDE.md`'nin "Sıradaki iş" notu.
- Bölüm 09'da görsel-üretim sistemi köklü biçimde değişti (2026-07-17): sabit "gerçek çip fotoğrafı + numaralı panel + alt bantta panelleri tekrarla" şablonu (`--mode edit`, tek referans `approved-day01.png`) kullanıcı tarafından "şablonlaşmış, ruhu yok" bulunup terk edildi. Yeni standart: mantıksal/prosedürel konularda `--mode generate` (referanssız, saf metinden üretim, merkezde gerçek blok/akış/ağaç diyagramı, başlık-çubuklu paneller, gerçek veri tabloları), fiziksel bileşen gerektiren sahnelerde hâlâ `--mode edit` + gerçek kaynak referansı. Bkz. `visual-system/master-style-prompt.md`'nin 2026-07-17 notları ve `visual-system/lessons-learned.md`. Bölüm 01-08 geriye dönük değiştirilmedi (aynı "ileriye dönük standart" yaklaşımı, footer/numaralandırma değişiklikleri gibi).
- Bölüm 07'de curriculum-qa 5 metin hatası buldu (koordinat, BOOT0/BOOT1'in R3/R4 seri direnç topolojisinin ters çizilmiş olması, gerçek datasheet'te olmayan "BOR" terimi, doğrulanamayan jumper pin numaraları) — hepsi görsel üretimden önce düzeltildi. Gerçek kart fotoğrafından crop'lanan reset butonu + BOOT jumper'ı ilk denemede birebir doğru çıktı.
- Bölüm 04 scene-02/scene-03'te panel rozet renkleri (1,2,3) hepsi mavi olması gerekirken model teal/turuncu karıştırdı — küçük bir stil sapması, bilinçli olarak yeniden üretilmedi (bkz. `04-sema-genel-bakis/scenes.json` notu).
- Bölüm 05'ten itibaren görsel üretim süreci `tools/generate-slide.py` scripti ve `visual-system/lessons-learned.md` (büyüyen hata kaydı) ile standartlaştırıldı — bkz. `CLAUDE.md`. Bölüm 05 scene-03'te (Kapasitörler) RT8183-B ilk denemede yanlış pakette çıktı, hero'nun crop'u ikincil referans verilerek düzeltildi.
- Bölüm 06'dan itibaren footer sloganı/URL'si güncellendi: "Usta tahmin etmez, ölçer." / "akademiusta.com" (eskisi: "Önce anlamak, sonra ölçmek." / "akademiusta.com/tr") — sadece ileriye dönük, Bölüm 01-05 eski haliyle kaldı. Bölüm 06 scene-06'da da aynı X1/X2 paket-tutarlılığı hatası (X2 yanlışlıkla X1 gibi çizildi) tekrarlandı çünkü referans crop'u o sahneye verilmemişti — düzeltildi, ders `lessons-learned.md`'ye eklendi (bir bileşenin referansı, o bileşenin göründüğü HER sahneye ayrı ayrı verilmeli).
- Büyük medya dosyaları (MP4, kaynak PDF/webp) repo büyüdükçe Git geçmişini şişirebilir — ileride Git LFS veya harici depolama (Releases, YouTube) değerlendirilebilir.
- Bölüm 08'de curriculum-qa, "Şemada MPU Bloğu — U2" bölümünün Sol/Sağ/Üst pin yerleşimini yanlış tarif ettiğini buldu (Port B'yi sağa, beslemeyi olmayan bir "üst" gruba koyuyordu — gerçekte Port A+B+C13-15 hepsi sol sütunda, özel pinler+besleme sağda, üst yok). README+brief.json+scenes.json+scene-03 görseli düzeltildi (scene-03, 3. denemede temiz panel metniyle onaylandı; merkez pin-listesindeki küçük rakam kaymaları dekoratif gürültü sayıldı, bkz. `visual-system/lessons-learned.md`).
- Bölüm 09-12'nin metin QA'sında (2026-07-16, tek oturumda, görsel üretilmeden önce yapıldı) toplam 9 gerçek hata bulunup düzeltildi: Bölüm 09'da renk lejantı (6 renkten 4'ü yanlış + yanlış görsel referans) ve LED sırası; Bölüm 10'da I2C hız terminolojisi (STM32F103'te olmayan "1 MHz fast mode" iddiası); Bölüm 11'de CN4 Pin2/Pin3 (DIO/DCLK) ters yazımı ve doğrulanamayan BOOT0 jumper pozisyon numarası; Bölüm 12'de (serinin sentez bölümü olduğu için en çok hata burada çıktı — 6 tane) CN1/CN2 5V karışıklığı, BOOT0/BOOT1 topolojisinin yeniden yanlış anlatılması (Bölüm 05/07/08'de zaten düzeltilen hatanın 4. tekrarı), USB R9/R10/R11 karışıklığı, LED sırası, CN1/CN2 GPIO dağılımı, CN4 Pin2/3. Ders: bir gerçeğin önceki bölümde doğru kurulmuş olması, sonraki bölümde onu TEKRAR ETTİĞİNDE otomatik doğru olacağı anlamına gelmiyor — her tekrar kendi başına yeniden doğrulanmalı.
