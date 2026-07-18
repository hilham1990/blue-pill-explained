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
| 10 — İletişim Protokolleri | Tamamlandı (7 sahne: hero + `slides/`, 2026-07-18) | Henüz render edilmedi | Henüz üretilmedi |
| 11 — Debug SWD | Tamamlandı (7 sahne: hero + `slides/`, 2026-07-18) | Henüz render edilmedi | Henüz üretilmedi |
| 12 — Şema Baştan Sona | Tamamlandı (8 sahne: hero + `slides/`, 2026-07-18) | Henüz render edilmedi | Henüz üretilmedi |

## Üretim Yaklaşımı

Profesyonel video üretimi, hata hafızası ve kalite kapıları için [`video-system/`](video-system/) ortak standardı kullanılır. Mevcut renderer yayın motoru değil, zamanlama/ses/altyazı ön izlemesi olarak kabul edilir.

Slaytlar her bölüm için elle tasarlanmıyor — o bölümün metni (README.md) okunarak dinamik olarak görsele/slayta dönüştürülüyor. Bu yüzden slayt/video çıktıları müfredat metninden **sonra** üretiliyor ve metin değiştikçe yeniden üretilebilir.

- Ses: macOS yerel `Yelda` Türkçe sesi
- Video: yerel ffmpeg render + otomatik zamanlanmış SRT
- Renderer: [`tools/render-lesson-video.mjs`](tools/render-lesson-video.mjs)

## Şu Anki Durum

Serinin 12 bölümü de tamamlandı — metin + görsel + README gömme. Video render hiçbirinde henüz yapılmadı, sıradaki iş bu. Tarihli karar/olay geçmişi için [`CHANGELOG.md`](CHANGELOG.md); bölüm bazlı görsel-üretim hata geçmişi için `visual-system/lessons-learned.md`.

## Uyumluluk Notları

Bölümler arasında iki geriye-dönük-uygulanmamış fark var — eski bölümler okunurken/düzenlenirken bilinmesi gerekir:

| Bölüm aralığı | Görsel üretim sistemi | Footer |
|---|---|---|
| 01-08 | Eski şablon: `--mode edit`, sabit referans (`approved-day01.png`) | 01-05: "Önce anlamak, sonra ölçmek." / akademiusta.com/tr · 06-08: yeni footer |
| 09-12 | Yeni sistem: `--mode generate` varsayılan, fiziksel sahnelerde `--mode edit` + gerçek referans | "Usta tahmin etmez, ölçer." / akademiusta.com |

Gerekçe ve tarihler için `CHANGELOG.md` (2026-07-16 ve 2026-07-17 kayıtları). Sistem detayı: `visual-system/master-style-prompt.md` ve `CLAUDE.md`.

## Notlar

- Büyük medya dosyaları (MP4, kaynak PDF/webp) repo büyüdükçe Git geçmişini şişirebilir — video render başladığında Git LFS veya harici depolama (Releases, YouTube) değerlendirilebilir.
