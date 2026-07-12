# Medya ve Üretim

Bu dosya, seri için üretilen slayt/video/altyazı çıktılarını ve üretim araçlarını takip eder. Müfredatın kendisi (bölüm metinleri) bundan bağımsızdır — burası sadece prodüksiyon durumu.

## Kaynaklar

- Gerçek kart ve referans belgeleri: [`assets/source/`](assets/source/)

## Bölüm Bazında Medya Durumu

| Bölüm | Slayt | Video (uzun/kısa) | Altyazı |
|---|---|---|---|
| 01 — Neden Bu Kart? | Devam ediyor (`slides/`, `slides-v2/`, `quality-control/`) | — | — |
| 02 — Datasheet Nasıl Okunur? | Tamamlandı ([`slides/`](02-datasheet-nasil-okunur/slides/)) | Tamamlandı ([`video/`](02-datasheet-nasil-okunur/video/)) | Tamamlandı (SRT) |
| 03-12 | Henüz üretilmedi | Henüz üretilmedi | Henüz üretilmedi |

## Üretim Yaklaşımı

Slaytlar her bölüm için elle tasarlanmıyor — o bölümün metni (README.md) okunarak dinamik olarak görsele/slayta dönüştürülüyor. Bu yüzden slayt/video çıktıları müfredat metninden **sonra** üretiliyor ve metin değiştikçe yeniden üretilebilir.

- Ses: macOS yerel `Yelda` Türkçe sesi
- Video: yerel ffmpeg render + otomatik zamanlanmış SRT
- Renderer: [`tools/render-lesson-video.mjs`](tools/render-lesson-video.mjs)

## Notlar

- Video/slayt prodüksiyonu şu an sadece Bölüm 01-02'de var, kalan bölümler yazı olarak tam ama medya üretimi devam ediyor.
- Büyük medya dosyaları (MP4, kaynak PDF/webp) repo büyüdükçe Git geçmişini şişirebilir — ileride Git LFS veya harici depolama (Releases, YouTube) değerlendirilebilir.
