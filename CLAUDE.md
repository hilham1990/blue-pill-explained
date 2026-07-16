# Blue Pill Explained — Proje Bağlamı

Bu dosya, yeni bir konuşma başladığında projenin nerede kaldığını hızlıca aktarmak için var. `PRODUCTION.md` sadece medya durumu tablosunu tutar; burası **nasıl çalıştığımızı ve neden** bu şekilde çalıştığımızı anlatır.

## Proje nedir

STM32F103C8T6 (Blue Pill) üzerinden "donanım okumayı" öğreten 12 bölümlük Türkçe müfredat. Her bölüm: `README.md` (kaynak metin) + isteğe bağlı AI-üretimi infografik slaytlar + gerçek datasheet/şema sayfaları.

## Şu anki durum (2026-07-16)

**Mühürlenmiş (metin + görsel tamamlandı, onaylandı, commit'lendi):**
- Bölüm 01 — Neden Bu Kart? (5 sahne)
- Bölüm 02 — Datasheet Nasıl Okunur? (5 sahne)
- Bölüm 03 — İlk Sayfa ve Part Number (4 sahne)
- Bölüm 04 — Şema Genel Bakış (5 sahne — `curriculum-qa` ile 3 gerçek koordinat hatası bulunup düzeltildikten sonra üretildi, bkz. aşağıdaki not)
- Bölüm 05 — Power Supply (6 sahne — `curriculum-qa` ile 3 gerçek hata bulundu (koordinat + iki yanlış pull-up direnç iddiası), ve ilk kez "gerçek görsel analizi + bileşen-tutarlılığı referansı" mekanizması kullanıldı, bkz. madde 4c/aşağıdaki not)
- Bölüm 06 — Clock Sistemi (6 sahne — `curriculum-qa` hiçbir metin hatası bulamadı, ilk kez; X1/X2 kristalleri için gerçek kart fotoğrafından crop alınıp kullanıldı, scene-06'da aynı crop'un unutulması yüzünden X2 paket hatası bir kez daha yaşandı ve düzeltildi — bkz. madde 4c/lessons-learned.md)
- Bölüm 07 — Reset ve Boot (6 sahne — `curriculum-qa` 5 gerçek hata buldu: D5-E5 koordinatı, BOOT0/BOOT1'in R3/R4 seri-direnç topolojisinin README'de ters çizilmesi — Bölüm 05'teki aynı kavramsal hatanın metinde tekrarı —, gerçek datasheet'te olmayan "BOR" terimi, doğrulanamayan jumper pin numaraları. Gerçek kart fotoğrafından crop'lanan reset butonu + BOOT jumper'ı hero ve scene-05'te kullanıldı, ikisi de tek denemede fotoğrafla birebir çıktı)
- Bölüm 08 — MPU ve Pinout (7 sahne — `curriculum-qa` "Şemada MPU Bloğu — U2" bölümünün Sol/Sağ/Üst pin yerleşimini yanlış tarif ettiğini buldu: gerçek şemada Port A+B+C13-15'in TAMAMI sol sütunda, özel pinler+besleme sağda, "üst" diye bir grup yok — önceki taslak Port B'yi sağa, beslemeyi olmayan üst gruba koyuyordu. README+brief.json+scenes.json+scene-03 görseli düzeltildi; scene-03 3 kez üretildi, panel metinleri 2. ve 3. denemede doğru çıktı, merkez pin-listesindeki küçük rakam kaymaları teaching-critical olmayan gürültü sayılıp kabul edildi. scene-06/07 ilk denemede temiz çıktı)

**Sırada:** Bölüm 09 — GPIO ve Alternate Function (sadece `README.md` var, henüz `brief.json`/`scenes.json` yok).

**Bölüm 09-12:** Sadece metin var, görsel üretimi hiç başlamadı.

**Video render:** Hiçbir bölümde henüz yapılmadı (sadece slaytlar var).

## Bir bölümü üretirken izlenen sıra (bu oturumda oturmuş akış)

1. **Önce metin QA'sı, sonra görsel.** Bölümün `README.md`'sindeki her sayısal/teknik iddiayı gerçek kaynakla (`assets/source/STM32F103X8-datasheet.pdf`, gerekirse kullanıcıdan istenen RM0008 gibi ek belgeler) çapraz doğrula. Bu oturumda üç kez gerçek hata bulundu: yanlış doküman kimliği ("DS5319" yerine gerçek "Doc ID 13587"), yanlış sayfa sırası, uydurma part-number açılımı ("Foundation"). **Bir iddia "mantıklı görünüyor" diye doğru sayılmaz — kaynakta ara.**
2. **Sahne sayısını o bölümün kendi metninden türet**, bir önceki günün sayısına çapalanma. `visual-system/layout-rules.md`'deki kategorilere (1 ana fikir / 1 teknik karşılaştırma / 1 sonuç-sentez) göre `##` başlıklarını tek tek say. Gün 1 ve 2'nin 5-6 sahnesi, Gün 3'ün 4 sahnesi — sayı içerikten çıktı, kopyalanmadı.
3. **Sahne sırası = README'nin yukarıdan-aşağı bölüm sırası.** Hero, README'nin ilk bölümünü açar. Bunu bir kez ihlal edip (Gün 2'de hero'yu "baştan sona okuma" yapıp) düzeltmek zorunda kaldık.
4. **Plan onaylanmadan görsel üretilmez.** `brief.json` + `scenes.json` yazılır, kullanıcıya sahne sayısı/içeriği gösterilir, "evet" denmeden `curriculum-slide-gen` çalıştırılmaz.
4b. **Herhangi bir `prompts/NN-slug.md` yazmadan önce `visual-system/lessons-learned.md`'yi baştan sona oku** ve ilgili her önleme kuralını o sahnenin prompt'una işle — reaktif değil, proaktif.
4c. **Gerçek görsel analizi (prompt yazmadan önce, her sahnenin merkez donanımı için — HER sahne için ayrı ayrı, "bir önceki sahnede yaptım" yeterli değil).** O sahnenin merkezinde gösterilecek gerçek bileşen için `assets/source/`'da (gerçek kart fotoğrafı `blue-pill-card-exact-cutout.png`, gerçek şema `blue-pill-schematic-source.webp`, pinout `blue-pill-pinout-source.webp`, ST'nin resmi `stm32f-overview.png`'si) bir görsel var mı diye bak. Varsa zoom'la incele, paket tipini/pin sayısını/rengini/gerçek yerleşimini not al ve bu somut bilgileri prompt'a yaz — "muhtemelen SOT-23" gibi doğrulanmamış bir varsayımla yazma. **Yoksa** (ör. RT8183-B'nin fiziksel paketi hiçbir gerçek fotoğrafımızda görünmüyor, muhtemelen kartın alt yüzünde — bkz. Bölüm 05 lessons-learned girdisi), bunu prompt'ta açıkça "gerçek kaynağı doğrulanmamış, tutarlılık için ilk üretilen sahneye sabitlenmiş" diye not et ve o bölümün İLK sahnesinde neye karar verildiyse (paket/pin sayısı) sonraki tüm sahnelerde birebir aynısını tekrar yaz — sahneler arasında sessizce değişmesin. **Bir bileşenin gerçek fotoğrafı/crop'u varsa, o bileşen o bölümde kaç sahnede görünüyorsa hepsine `--ref` olarak verilir** — Bölüm 06'da X1/X2 crop'ları scene-02/03'e verilip scene-06'ya verilmeyince, scene-06'da X2 yeniden (ve yanlış) icat edildi; "ana sahnede zaten doğru çıktı" diye sonraki sahnelerde atlanmaz.
5. Görsel üretimi `.claude/skills/curriculum-slide-gen/SKILL.md`'deki akışla yapılır (`tools/generate-slide.py <prompt.md> <output.png> [--ref EK_GÖRSEL...]`, fal.ai `openai/gpt-image-2/edit`). Birincil stil referansı HER ZAMAN `visual-system/references/approved-day01.png` (asla önceki bir sahne değil). Bir bileşenin gerçek fiziksel görünümünü kilitlemek için `--ref` ile İKİNCİL bir görsel de eklenebilir — ya gerçek bir kaynak fotoğrafı (`assets/source/...`) ya da AYNI bölümün daha önce onaylanmış bir sahnesinden kırpılmış bir bileşen crop'u (bu, "önceki sahneyi referans alma" kuralının ihlali değil — o kural birincil stil referansı için, bu ise dar kapsamlı, tek bir bileşenin fiziksel tutarlılığı için).
6. **Her üretilen görsel zoom ile piksel seviyesinde kontrol edilir**, uzaktan bakıp onaylanmaz — özellikle sayılar/rakamlar (Gün 2 hero'sunda uydurma bir device-summary tablosu çıkmıştı, bundan sonra "merkeze açık bir belge koyma, tabloyu modele yazdırma" kuralı yerleşti; bkz. aşağıdaki "Bilinen görsel-üretim riskleri").
7. Bölüm bitince `scenes.json`'a "MÜHÜRLENDİ" notu eklenir, `PRODUCTION.md` güncellenir, commit + push (kullanıcı onayıyla).
8. **Sahne numaralandırması `scene-01-hero`'dan başlayıp sırayla devam eder (01,02,03...), boşluk bırakılmaz.** Bölüm 01'de bir sahne (`scene-01`, "Bu Seri Ne Öğretiyor?") hero ile içerik tekrarı yüzünden silinmiş ve numaralar kaydırılmadan `scene-00-hero, scene-02, scene-03...` şeklinde bırakılmıştı; Bölüm 02-04 bu boşluklu diziyi (hiç scene-01 olmadığı halde) düşünmeden kopyaladı. Bölüm 05'te kullanıcı bunu fark edip düzeltti — **Bölüm 05'ten itibaren** numaralandırma `scene-01-hero, scene-02, scene-03...` şeklinde boşluksuz. Bölüm 01-04'ün kendi dosyaları (mühürlenmiş, commit'lenmiş) geriye dönük değiştirilmedi.
9. **Footer güncellendi (2026-07-16, bkz. `master-style-prompt.md`'nin BOTTOM LAYOUT bloğu ve altındaki not), sadece Bölüm 06'dan itibaren geçerli** — Bölüm 01-05'in 25 onaylı görseli eski haliyle kaldı, geriye dönük yeniden üretilmedi (aynı "ileriye dönük standart, geçmiş dokunulmaz" yaklaşımı, madde 8'deki gibi): (a) orta slogan `"Önce anlamak, sonra ölçmek."` → `"Usta tahmin etmez, ölçer."`, (b) sağdaki URL `"akademiusta.com/tr"` → `"akademiusta.com"` (gerçek site adresi `https://akademiusta.com/` olduğu için, "https://" gösterilmeden). Sol "Akademi Usta" değişmedi, 3-kolonlu tek-satır düzen aynen korundu.

## Bilinen görsel-üretim riskleri (tekrarlama)

**Tek doğruluk kaynağı: [`visual-system/lessons-learned.md`](visual-system/lessons-learned.md).** Yeni bir bölümün sahne prompt'larını yazmadan önce o dosyayı baştan sona oku, ilgili her önleme kuralını uygula. Yeni bir gerçek kusur bulursan oraya (buraya değil) ekle.

Metin/koordinat tarafındaki (görsel-üretim dışı) risk: **şema koordinat iddiaları (`A-E`/`1-8` gibi) metne "mantıklı görünüyor" diye yazılabiliyor ama gerçek şemaya piksel-seviyesinde bakılmadan güvenilmemeli.** Bölüm 04 ve Bölüm 05'in kendi README'lerinde bağımsız olarak aynı Power Supply koordinat hatası (E1-E3 yerine D1-E3) bulundu; Bölüm 07'de de Reset koordinatı (E5 yerine D5-E5) aynı şekilde yanlıştı — hepsi curriculum-qa ile piksel-grid analiziyle düzeltildi. Bölüm 06'nın kendi koordinatı (X1 → B7) ise ilk kez doğru çıktı. Bölüm 11 hâlâ kontrol edilmedi, aynı riski taşıyor.

## Gerçek görsellerin organizasyonu

Tüm gerçek (AI-üretimi olmayan) kaynak görseller **tek yerde**: `assets/source/`. Bölüm başına ayrı `images/` klasörü YOK — bu oturumda böyle bir dağınıklık bulunup temizlendi (bir dosya birebir kopyaydı, MD5 ile doğrulandı). İsimlendirme: bölüme özel kırpmalar `dayNN-aciklayici-isim.png` formatında (örn. `day03-datasheet-features.png`); birden fazla bölümün kullandığı tam orijinal belgeler önekssiz kalır (`blue-pill-schematic-source.webp`, `STM32F103X8-datasheet.pdf`, `stm32-block-diagram-source.png`).

Yeni bir gerçek kırpma eklenecekse: `assets/source/dayNN-slug.png` olarak kaydet, README'den `../assets/source/dayNN-slug.png` diye referans ver. Asla `0X-bolum/images/` klasörü açma.

## Kalıcı skill'ler (`.claude/skills/`)

- **`curriculum-slide-gen`** — bir bölümün görsellerini üretme akışı (prompt yazımı, fal.ai çağrısı, dosya yerleşimi, sert kurallar). Prompt yazmadan önce `visual-system/lessons-learned.md`'yi okumayı zorunlu koşar.
- **`curriculum-qa`** — bir bölümü son kez gözden geçirme akışı (yapısal çapraz kontrol → gerçek kaynak doğrulama → görsel inceleme → dil taraması). Pedagojik/faktüel hatalar her zaman görsel/stil bulgularından önce raporlanır.

## Görsel-üretim hata kaydı

**[`visual-system/lessons-learned.md`](visual-system/lessons-learned.md)** — geçmiş bölümlerde bulunan her gerçek görsel-üretim kusurunun (ne oldu / neden oldu / önleme kuralı) kalıcı, büyüyen kaydı. Yeni bir bölümün prompt'larını yazmadan önce bu dosya baştan sona okunur; yeni bir kusur bulunduğunda buraya (CLAUDE.md'ye değil) yeni bir madde eklenir.

## Sonraki adım

Bölüm 09 — GPIO ve Alternate Function: önce `curriculum-qa` ile metni gerçek şemaya ve datasheet'e karşı doğrula, sonra içerikten sahne sayısını türet, onay al, üret. Bölüm 11'de şema-koordinat riski hâlâ kontrol edilmemiş durumda.
