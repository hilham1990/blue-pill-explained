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

Slaytlar her bölüm için elle tasarlanmıyor — o bölümün metni (README.md) okunarak dinamik olarak görsele/slayta dönüştürülüyor. Bu yüzden slayt/video çıktıları müfredat metninden **sonra** üretiliyor ve metin değiştikçe yeniden üretilebilir.

- Ses: macOS yerel `Yelda` Türkçe sesi
- Video: yerel ffmpeg render + otomatik zamanlanmış SRT
- Renderer: [`tools/render-lesson-video.mjs`](tools/render-lesson-video.mjs)

## Notlar

- **Serinin 12 bölümü de tamamlandı** (2026-07-18) — metin + görsel + README gömme. Video render hiçbirinde henüz yapılmadı. Bölüm bazlı detaylı hata geçmişi (curriculum-qa metin hataları, görsel-üretim kusurları, kullanıcı kararları) `visual-system/lessons-learned.md`'de kronolojik kayıtlı — burada tekrar edilmiyor.
- Bölüm 09'dan itibaren görsel-üretim sistemi değişti: `tools/generate-slide.py`'ın varsayılanı artık `--mode generate` (referanssız, saf metinden üretim); fiziksel bileşen gerektiren sahnelerde hâlâ `--mode edit` + gerçek kaynak referansı. Bkz. `visual-system/master-style-prompt.md` ve `CLAUDE.md`. Bölüm 01-08 geriye dönük değiştirilmedi.
- Bölüm 06'dan itibaren footer sloganı/URL'si güncellendi: "Usta tahmin etmez, ölçer." / "akademiusta.com" (eskisi: "Önce anlamak, sonra ölçmek." / "akademiusta.com/tr") — sadece ileriye dönük, Bölüm 01-05 eski haliyle kaldı.
- Büyük medya dosyaları (MP4, kaynak PDF/webp) repo büyüdükçe Git geçmişini şişirebilir — video render başladığında Git LFS veya harici depolama (Releases, YouTube) değerlendirilebilir.
