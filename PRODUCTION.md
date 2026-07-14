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
| 04-12 | Henüz üretilmedi | Henüz üretilmedi | Henüz üretilmedi |

## Üretim Yaklaşımı

Slaytlar her bölüm için elle tasarlanmıyor — o bölümün metni (README.md) okunarak dinamik olarak görsele/slayta dönüştürülüyor. Bu yüzden slayt/video çıktıları müfredat metninden **sonra** üretiliyor ve metin değiştikçe yeniden üretilebilir.

- Ses: macOS yerel `Yelda` Türkçe sesi
- Video: yerel ffmpeg render + otomatik zamanlanmış SRT
- Renderer: [`tools/render-lesson-video.mjs`](tools/render-lesson-video.mjs)

## Notlar

- Slayt prodüksiyonu şu an Bölüm 01-03'te tamamlandı, video render henüz hiçbirinde yapılmadı. Bölüm 04-12 yazı olarak tam ama medya üretimi henüz başlamadı.
- Büyük medya dosyaları (MP4, kaynak PDF/webp) repo büyüdükçe Git geçmişini şişirebilir — ileride Git LFS veya harici depolama (Releases, YouTube) değerlendirilebilir.
