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
| 09-12 | Henüz üretilmedi | Henüz üretilmedi | Henüz üretilmedi |

## Üretim Yaklaşımı

Slaytlar her bölüm için elle tasarlanmıyor — o bölümün metni (README.md) okunarak dinamik olarak görsele/slayta dönüştürülüyor. Bu yüzden slayt/video çıktıları müfredat metninden **sonra** üretiliyor ve metin değiştikçe yeniden üretilebilir.

- Ses: macOS yerel `Yelda` Türkçe sesi
- Video: yerel ffmpeg render + otomatik zamanlanmış SRT
- Renderer: [`tools/render-lesson-video.mjs`](tools/render-lesson-video.mjs)

## Notlar

- Slayt prodüksiyonu şu an Bölüm 01-07'de tamamlandı, video render henüz hiçbirinde yapılmadı. Bölüm 08-12 yazı olarak tam ama medya üretimi henüz başlamadı.
- Bölüm 07'de curriculum-qa 5 metin hatası buldu (koordinat, BOOT0/BOOT1'in R3/R4 seri direnç topolojisinin ters çizilmiş olması, gerçek datasheet'te olmayan "BOR" terimi, doğrulanamayan jumper pin numaraları) — hepsi görsel üretimden önce düzeltildi. Gerçek kart fotoğrafından crop'lanan reset butonu + BOOT jumper'ı ilk denemede birebir doğru çıktı.
- Bölüm 04 scene-02/scene-03'te panel rozet renkleri (1,2,3) hepsi mavi olması gerekirken model teal/turuncu karıştırdı — küçük bir stil sapması, bilinçli olarak yeniden üretilmedi (bkz. `04-sema-genel-bakis/scenes.json` notu).
- Bölüm 05'ten itibaren görsel üretim süreci `tools/generate-slide.py` scripti ve `visual-system/lessons-learned.md` (büyüyen hata kaydı) ile standartlaştırıldı — bkz. `CLAUDE.md`. Bölüm 05 scene-03'te (Kapasitörler) RT8183-B ilk denemede yanlış pakette çıktı, hero'nun crop'u ikincil referans verilerek düzeltildi.
- Bölüm 06'dan itibaren footer sloganı/URL'si güncellendi: "Usta tahmin etmez, ölçer." / "akademiusta.com" (eskisi: "Önce anlamak, sonra ölçmek." / "akademiusta.com/tr") — sadece ileriye dönük, Bölüm 01-05 eski haliyle kaldı. Bölüm 06 scene-06'da da aynı X1/X2 paket-tutarlılığı hatası (X2 yanlışlıkla X1 gibi çizildi) tekrarlandı çünkü referans crop'u o sahneye verilmemişti — düzeltildi, ders `lessons-learned.md`'ye eklendi (bir bileşenin referansı, o bileşenin göründüğü HER sahneye ayrı ayrı verilmeli).
- Büyük medya dosyaları (MP4, kaynak PDF/webp) repo büyüdükçe Git geçmişini şişirebilir — ileride Git LFS veya harici depolama (Releases, YouTube) değerlendirilebilir.
- Bölüm 08'de curriculum-qa, "Şemada MPU Bloğu — U2" bölümünün Sol/Sağ/Üst pin yerleşimini yanlış tarif ettiğini buldu (Port B'yi sağa, beslemeyi olmayan bir "üst" gruba koyuyordu — gerçekte Port A+B+C13-15 hepsi sol sütunda, özel pinler+besleme sağda, üst yok). README+brief.json+scenes.json+scene-03 görseli düzeltildi (scene-03, 3. denemede temiz panel metniyle onaylandı; merkez pin-listesindeki küçük rakam kaymaları dekoratif gürültü sayıldı, bkz. `visual-system/lessons-learned.md`).
