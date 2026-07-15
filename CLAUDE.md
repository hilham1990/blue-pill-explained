# Blue Pill Explained — Proje Bağlamı

Bu dosya, yeni bir konuşma başladığında projenin nerede kaldığını hızlıca aktarmak için var. `PRODUCTION.md` sadece medya durumu tablosunu tutar; burası **nasıl çalıştığımızı ve neden** bu şekilde çalıştığımızı anlatır.

## Proje nedir

STM32F103C8T6 (Blue Pill) üzerinden "donanım okumayı" öğreten 12 bölümlük Türkçe müfredat. Her bölüm: `README.md` (kaynak metin) + isteğe bağlı AI-üretimi infografik slaytlar + gerçek datasheet/şema sayfaları.

## Şu anki durum (2026-07-15)

**Mühürlenmiş (metin + görsel tamamlandı, onaylandı, commit'lendi):**
- Bölüm 01 — Neden Bu Kart? (5 sahne)
- Bölüm 02 — Datasheet Nasıl Okunur? (5 sahne)
- Bölüm 03 — İlk Sayfa ve Part Number (4 sahne)
- Bölüm 04 — Şema Genel Bakış (5 sahne — `curriculum-qa` ile 3 gerçek koordinat hatası bulunup düzeltildikten sonra üretildi, bkz. aşağıdaki not)

**Sırada:** Bölüm 05 — Power Supply (sadece `README.md` var, henüz `brief.json`/`scenes.json` yok).

**Bölüm 06-12:** Sadece metin var, görsel üretimi hiç başlamadı.

**Video render:** Hiçbir bölümde henüz yapılmadı (sadece slaytlar var).

## Bir bölümü üretirken izlenen sıra (bu oturumda oturmuş akış)

1. **Önce metin QA'sı, sonra görsel.** Bölümün `README.md`'sindeki her sayısal/teknik iddiayı gerçek kaynakla (`assets/source/STM32F103X8-datasheet.pdf`, gerekirse kullanıcıdan istenen RM0008 gibi ek belgeler) çapraz doğrula. Bu oturumda üç kez gerçek hata bulundu: yanlış doküman kimliği ("DS5319" yerine gerçek "Doc ID 13587"), yanlış sayfa sırası, uydurma part-number açılımı ("Foundation"). **Bir iddia "mantıklı görünüyor" diye doğru sayılmaz — kaynakta ara.**
2. **Sahne sayısını o bölümün kendi metninden türet**, bir önceki günün sayısına çapalanma. `visual-system/layout-rules.md`'deki kategorilere (1 ana fikir / 1 teknik karşılaştırma / 1 sonuç-sentez) göre `##` başlıklarını tek tek say. Gün 1 ve 2'nin 5-6 sahnesi, Gün 3'ün 4 sahnesi — sayı içerikten çıktı, kopyalanmadı.
3. **Sahne sırası = README'nin yukarıdan-aşağı bölüm sırası.** Hero, README'nin ilk bölümünü açar. Bunu bir kez ihlal edip (Gün 2'de hero'yu "baştan sona okuma" yapıp) düzeltmek zorunda kaldık.
4. **Plan onaylanmadan görsel üretilmez.** `brief.json` + `scenes.json` yazılır, kullanıcıya sahne sayısı/içeriği gösterilir, "evet" denmeden `curriculum-slide-gen` çalıştırılmaz.
5. Görsel üretimi `.claude/skills/curriculum-slide-gen/SKILL.md`'deki akışla yapılır (fal.ai `openai/gpt-image-2/edit`, her zaman `visual-system/references/approved-day01.png` referans alınır, asla önceki bir sahne değil).
6. **Her üretilen görsel zoom ile piksel seviyesinde kontrol edilir**, uzaktan bakıp onaylanmaz — özellikle sayılar/rakamlar (Gün 2 hero'sunda uydurma bir device-summary tablosu çıkmıştı, bundan sonra "merkeze açık bir belge koyma, tabloyu modele yazdırma" kuralı yerleşti; bkz. aşağıdaki "Bilinen görsel-üretim riskleri").
7. Bölüm bitince `scenes.json`'a "MÜHÜRLENDİ" notu eklenir, `PRODUCTION.md` güncellenir, commit + push (kullanıcı onayıyla).

## Bilinen görsel-üretim riskleri (tekrarlama)

- **Model, "açık bir belge" merkez nesne olarak istenince içini uydurma tablo/başlıkla dolduruyor.** Gün 2 hero'sunda gerçek olmayan bir device-summary tablosu ve yanlış aile başlığı (STM32F103xC/D/E — bize ait olmayan başka bir datasheet'in başlığı) üretti. Çözüm: merkeze ya kapalı kitap kapağı (sadece başlık) ya da gerçek çipin kendisi (verilmiş kesin metinle) konur; belge sayfası varsa arka planda **odak dışı, metinsiz doku** olarak kalır. Gün 3'ün 4 sahnesi bu yöntemle tek denemede sorunsuz çıktı.
- Referans görsel her zaman `visual-system/references/approved-day01.png` — bir önceki üretilen sahne değil (zincirleme, kusur birikmesine yol açıyor).
- Bölüm 01 hero'su tek istisna: pipeline üzerinden değil, kullanıcı tarafından doğrudan ChatGPT'den üretildi, sonra referans olarak kaydedildi.
- **Panel rozet renklerini "blue = donanım" gibi tek kelimeyle belirtmek yetmiyor, model panel başına farklı renk (teal/turuncu) seçebiliyor.** Bölüm 04 scene-02/scene-03'te yaşandı, küçük bir sapma olduğu için yeniden üretilmedi ama sonraki bölümlerde aynı hatayı önlemek için prompt'a artık şu satır ekleniyor: "all badges/borders MUST be the exact same solid color, do NOT vary per panel" (bkz. `04-sema-genel-bakis/prompts/02-*.md` ve `03-*.md`).
- **Şema koordinat iddiaları (`A-E`/`1-8` gibi) metne "mantıklı görünüyor" diye yazılabiliyor ama gerçek şemaya piksel-seviyesinde bakılmadan güvenilmemeli.** Bölüm 04'ün kendi README'sinde MPU/Power Supply/Reset koordinatları yanlıştı (curriculum-qa ile piksel-grid analiziyle bulunup düzeltildi — bkz. Bölüm 04 scenes.json/PRODUCTION.md). Bölüm 05-07 ve 11 hâlâ aynı riski taşıyor, her birinde bu adım tekrarlanmalı.

## Gerçek görsellerin organizasyonu

Tüm gerçek (AI-üretimi olmayan) kaynak görseller **tek yerde**: `assets/source/`. Bölüm başına ayrı `images/` klasörü YOK — bu oturumda böyle bir dağınıklık bulunup temizlendi (bir dosya birebir kopyaydı, MD5 ile doğrulandı). İsimlendirme: bölüme özel kırpmalar `dayNN-aciklayici-isim.png` formatında (örn. `day03-datasheet-features.png`); birden fazla bölümün kullandığı tam orijinal belgeler önekssiz kalır (`blue-pill-schematic-source.webp`, `STM32F103X8-datasheet.pdf`, `stm32-block-diagram-source.png`).

Yeni bir gerçek kırpma eklenecekse: `assets/source/dayNN-slug.png` olarak kaydet, README'den `../assets/source/dayNN-slug.png` diye referans ver. Asla `0X-bolum/images/` klasörü açma.

## Kalıcı skill'ler (`.claude/skills/`)

- **`curriculum-slide-gen`** — bir bölümün görsellerini üretme akışı (prompt yazımı, fal.ai çağrısı, dosya yerleşimi, sert kurallar).
- **`curriculum-qa`** — bir bölümü son kez gözden geçirme akışı (yapısal çapraz kontrol → gerçek kaynak doğrulama → görsel inceleme → dil taraması). Pedagojik/faktüel hatalar her zaman görsel/stil bulgularından önce raporlanır.

## Sonraki adım

Bölüm 05 — Power Supply: önce `curriculum-qa` ile metni gerçek şemaya (`assets/source/blue-pill-schematic-source.webp`, özellikle RT8183-B güç devresi) ve datasheet'e karşı doğrula, sonra içerikten sahne sayısını türet, onay al, üret. Bölüm 06, 07, 11'de de şema-koordinat riski hâlâ kontrol edilmemiş durumda.
