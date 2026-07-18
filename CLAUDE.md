# Blue Pill Explained — Proje Bağlamı

Bu dosya, yeni bir konuşma başladığında projenin nerede kaldığını hızlıca aktarmak için var. `PRODUCTION.md` medya durumu tablosunu tutar, `visual-system/lessons-learned.md` her gerçek görsel-üretim kusurunun ayrıntılı kaydını tutar — burası ikisinin tekrarı değil, **nasıl çalıştığımızı ve neden** bu şekilde çalıştığımızı anlatır.

## Proje nedir

STM32F103C8T6 (Blue Pill) üzerinden "donanım okumayı" öğreten 12 bölümlük Türkçe müfredat. Her bölüm: `README.md` (kaynak metin) + AI-üretimi infografik slaytlar + gerçek datasheet/şema sayfaları.

## Şu anki durum (2026-07-18)

**Serinin 12 bölümü de mühürlendi** — metin + görsel + README gömme tamamlandı, commit'lendi. Bölüm bazlı detaylı hata kayıtları (curriculum-qa'nın bulduğu metin hataları, görsel-üretim kusurları, kullanıcı kararları) `visual-system/lessons-learned.md`'de kronolojik olarak tutuluyor — burada tekrar edilmiyor.

**Görsel sistem dönüşümü (2026-07-17, Bölüm 09'da):** Bölüm 01-08'in sabit "gerçek çip fotoğrafı + numaralı panel + alt bantta panelleri tekrarla" şablonu (`--mode edit`, tek referans `approved-day01.png`) kullanıcı tarafından "şablonlaşmış, ruhu yok" bulunup terk edildi. `tools/generate-slide.py`'ın varsayılanı artık `--mode generate` (referanssız, saf metinden `openai/gpt-image-2` üretimi) — mantıksal/prosedürel konularda merkezde gerçek blok/akış/ağaç/karar diyagramı, paneller numara rozeti yerine başlık çubuğu + gerçek veri tablosu içeriyor, alt bant panelleri tekrarlamıyor. Fiziksel bileşen gerektiren sahnelerde (gerçek pinout kartı, şema kesiti, LED devresi) `--mode edit` + gerçek kaynak referansı hâlâ kullanılıyor. Ayrıntılar `visual-system/master-style-prompt.md`'nin 2026-07-17 notlarında. **Bölüm 01-08 geriye dönük değiştirilmedi.**

**Kalıcı ders (bu oturumun en önemli bulgusu):** Görsel üretim, metin QA'sından TAMAMEN ayrı bir hata kaynağıdır — metin datasheet ile doğrulanmış olsa bile görsel üretimin kendisi yeni hatalar ekleyebilir (yazım hataları, bozuk/yanlış parça etiketleri, uydurma sinyaller, pozisyon tutarsızlıkları). **CN4/SWD konnektörü özellikle kırılgan çıktı** — 3 farklı bölümde tekrarlanan bir hata: model bazen var olmayan bir "NRST" sinyali ekliyor veya pin sayısını/sırasını bozuyor. **CN4/SWD'yi yeniden çizen HER yeni prompt'a şu satır eklenmeli:** "CN4/SWD connector has EXACTLY 4 signals: +3.3V, DIO(SWDIO), DCLK(SWCLK), GND — in that physical pin order 1-2-3-4. Do NOT add NRST or any other signal, do NOT use a generic 10-pin ARM debug header layout, do NOT reduce to 3 pins." Genel kural: **AYNI bölüm içinde bir sahnenin doğru çıkması, başka bir sahnenin de doğru olacağı anlamına gelmiyor** — her sahne kendi başına doğrulanır.

**Kusur bulmak = otomatik yeniden üretim değil.** Her kusur önce kullanıcıya gösterilir; kullanıcı "teknik olarak yanlış değil, sadece eksik/tutarsız" bir kusuru bilinçli kabul edebilir (README'ye açıklayıcı not eklenir) ya da düzeltilmesini isteyebilir. **Onay konusunda dikkat:** kullanıcının bir görsel hakkındaki SORUSUNU kendi cevabımla onay yerine koyup `scenes.json`'da "approved" işaretlememek — sadece kullanıcının açık, tek anlamlı onayı bu durumu değiştirir (bkz. memory `feedback-premature-approval.md`).

**Sıradaki iş:** Video render — 12 bölümün hiçbirinde henüz yapılmadı (sadece slaytlar var).

## Bir bölümü üretirken izlenen sıra (yeni içerik/düzeltme gerekirse)

1. **Önce metin QA'sı, sonra görsel.** Bölümün `README.md`'sindeki her sayısal/teknik iddiayı gerçek kaynakla (`assets/source/STM32F103X8-datasheet.pdf`, gerekirse RM0008 gibi ek belgeler) çapraz doğrula. **Bir iddia "mantıklı görünüyor" diye doğru sayılmaz — kaynakta ara.**
2. **Sahne sayısını o bölümün kendi metninden türet**, bir önceki bölümün sayısına çapalanma. `visual-system/layout-rules.md`'deki kategorilere (1 ana fikir / 1 teknik karşılaştırma / 1 sonuç-sentez) göre `##` başlıklarını tek tek say.
3. **Sahne sırası = README'nin yukarıdan-aşağı bölüm sırası.** Hero, README'nin ilk bölümünü açar.
4. **Plan onaylanmadan görsel üretilmez.** `brief.json` + `scenes.json` yazılır, kullanıcıya sahne sayısı/içeriği gösterilir, "evet" denmeden üretilmez.
4b. **Herhangi bir `prompts/NN-slug.md` yazmadan önce `visual-system/lessons-learned.md`'yi baştan sona oku** ve ilgili her önleme kuralını o sahnenin prompt'una işle — reaktif değil, proaktif.
4c. **Gerçek görsel analizi (prompt yazmadan önce, her sahnenin merkez donanımı için — HER sahne için ayrı ayrı).** `assets/source/`'da (gerçek kart fotoğrafı, gerçek şema, pinout, ST'nin resmi görseli) o bileşenin gerçek bir görseli var mı diye bak. Varsa zoom'la incele, somut bilgileri (paket tipi/pin sayısı/renk/yerleşim) prompt'a yaz. **Bir bileşenin gerçek fotoğrafı/crop'u varsa, o bileşen o bölümde kaç sahnede görünüyorsa hepsine `--ref` olarak verilir** — "ana sahnede zaten doğru çıktı" diye sonraki sahnelerde atlanmaz. Bir referans görselden çıkarılan konumsal okuma, prompt'a yazılmadan HEMEN ÖNCE piksel seviyesinde yeniden kontrol edilir — eski bir yazılı özete güvenip atlanmaz.
5. Görsel üretimi `.claude/skills/curriculum-slide-gen/SKILL.md`'deki akışla yapılır (`tools/generate-slide.py <prompt.md> <output.png> --mode generate` veya fiziksel doğruluk gerekiyorsa `--mode edit --ref ...`).
6. **Her üretilen görsel zoom ile piksel seviyesinde kontrol edilir**, uzaktan bakıp onaylanmaz — özellikle sayılar/rakamlar ve tekrar eden konnektörler (CN4/SWD gibi).
7. Bölüm bitince `scenes.json`'a "MÜHÜRLENDİ" notu eklenir, `PRODUCTION.md` güncellenir, commit (kullanıcı onayıyla).
8. **Sahne numaralandırması `scene-01-hero`'dan başlayıp sırayla devam eder, boşluk bırakılmaz.** (Bölüm 01-04'ün eski `scene-00`/eksik-`scene-01` deseni geriye dönük değiştirilmedi — Bölüm 05'ten itibaren düzeldi.)
9. **Footer sloganı/URL'si Bölüm 06'dan itibaren değişti** ("Usta tahmin etmez, ölçer." / "akademiusta.com") — Bölüm 01-05'in görselleri geriye dönük değiştirilmedi, eski haliyle kaldı.

## Bilinen görsel-üretim riskleri

**Tek doğruluk kaynağı: [`visual-system/lessons-learned.md`](visual-system/lessons-learned.md).** Yeni bir bölümün sahne prompt'larını yazmadan önce o dosyayı baştan sona oku, ilgili her önleme kuralını uygula. Yeni bir gerçek kusur bulursan oraya (buraya değil) ekle.

Metin/koordinat tarafındaki risk: **şema koordinat iddiaları (`A-E`/`1-8` gibi) metne "mantıklı görünüyor" diye yazılabiliyor ama gerçek şemaya piksel-seviyesinde bakılmadan güvenilmemeli** — birden fazla bölümde bağımsız olarak aynı tür koordinat hatası bulunup düzeltildi.

## Gerçek görsellerin organizasyonu

Tüm gerçek (AI-üretimi olmayan) kaynak görseller **tek yerde**: `assets/source/`. Bölüm başına ayrı `images/` klasörü YOK. İsimlendirme: bölüme özel kırpmalar `dayNN-aciklayici-isim.png` formatında; birden fazla bölümün kullandığı tam orijinal belgeler önekssiz kalır (`blue-pill-schematic-source.webp`, `STM32F103X8-datasheet.pdf`).

Yeni bir gerçek kırpma eklenecekse: `assets/source/dayNN-slug.png` olarak kaydet, README'den `../assets/source/dayNN-slug.png` diye referans ver. Asla `0X-bolum/images/` klasörü açma.

## Kalıcı skill'ler (`.claude/skills/`)

- **`curriculum-slide-gen`** — bir bölümün görsellerini üretme akışı (prompt yazımı, fal.ai çağrısı, dosya yerleşimi, sert kurallar).
- **`curriculum-qa`** — bir bölümü son kez gözden geçirme akışı (yapısal çapraz kontrol → gerçek kaynak doğrulama → görsel inceleme → dil taraması).

## Görsel-üretim hata kaydı

**[`visual-system/lessons-learned.md`](visual-system/lessons-learned.md)** — geçmiş bölümlerde bulunan her gerçek görsel-üretim kusurunun (ne oldu / neden oldu / önleme kuralı) kalıcı, büyüyen kaydı.
