# Lessons Learned — Görsel Üretim

Bu dosya, `curriculum-slide-gen` ile üretilen görsellerde bulunan **her gerçek kusurun** kalıcı kaydıdır. Amaç: aynı hatayı bir sonraki bölümde tekrarlamamak. `CLAUDE.md`'deki "Bilinen görsel-üretim riskleri" ve `curriculum-slide-gen/SKILL.md`'deki "Known failure modes" bu dosyaya taşındı/birleştirildi — o iki dosya artık sadece buraya işaret eder, tekrar liste tutmaz. Tek doğruluk kaynağı burasıdır.

## Kullanım kuralı

- **Yeni bir bölümün sahne prompt'larını (`prompts/NN-slug.md`) yazmadan önce bu dosyayı BAŞTAN SONA oku.** Reaktif değil, proaktif kullan — bir kusur çıkana kadar bekleme, her ilgili maddeyi o sahnenin prompt'una önceden işle.
- Görsel üretildikten sonra (curriculum-qa ile veya elle) yeni bir gerçek kusur bulunursa, aşağıdaki şablonla **yeni bir madde ekle** — var olanı silme/üzerine yazma, kronolojik liste olarak kalsın.
- Bir madde artık hiçbir zaman tetiklenmiyorsa bile silme; sadece "durum: çözüldü" notu ekle. Bu dosya bir arşiv, sadece bir TODO listesi değil.

## Yeni madde şablonu

```
### [Bölüm XX / Sahne YY] Kısa başlık (YYYY-MM-DD)

**Ne oldu:** Somut, gözlemlenebilir kusur ne (görselde neyi gördün).
**Neden oldu:** Prompt'ta hangi eksiklik/belirsizlik buna izin verdi.
**Önleme kuralı:** Bundan sonraki prompt'lara eklenecek/eklenmiş TAM cümle (kopyala-yapıştır kullanılabilir olmalı).
**Durum:** açık / bir sonraki bölümde uygulandı / çözüldü
```

---

### [Bölüm 02 / Hero] Uydurma device-summary tablosu (2026-07-13)

**Ne oldu:** Merkeze "açık bir belge" (datasheet sayfası) istenince model içini uydurma bir device-summary tablosuyla ve yanlış aile başlığıyla (STM32F103xC/D/E — bize ait olmayan başka bir datasheet'in başlığı) doldurdu.
**Neden oldu:** Prompt, merkez nesne olarak "bir belge" istiyordu ama belgenin İÇİNİN boş/bulanık kalması gerektiğini söylemiyordu.
**Önleme kuralı:** Merkeze ya kapalı kitap kapağı (sadece başlık) ya da gerçek çipin kendisi (verilmiş kesin metinle) konur; belge sayfası varsa arka planda "focus dışı, metinsiz doku" olarak kalır — prompt'a şu satır eklenir: "Behind/around it, a hint of an open datasheet page as soft out-of-focus background texture ONLY — do not render any legible text, table, or heading on this background page, it must stay blurred/abstract, purely atmospheric."
**Durum:** Bölüm 03/04/05'te uygulandı, tekrarlanmadı.

---

### [Bölüm 01 / scene-02→scene-03] Referans zincirleme kusur birikimi (2026-07-13)

**Ne oldu:** scene-02, hero yerine bir önceki üretilen sahneyi referans aldı; hero'daki net görünen voltaj regülatörü IC'si scene-02'de flat/yanık bir blob gibi çıktı. scene-03 sonra scene-02'yi referans alınca aynı kusuru miras aldı.
**Neden oldu:** Prompt/iş akışı "önceki sahneyi referans al" şeklinde zincirlendi; her üretim lossy bir yeniden-yorumlama olduğu için kusur birikti.
**Önleme kuralı:** Her sahne HER ZAMAN doğrudan `visual-system/references/approved-day01.png`'ı referans alır — bir önceki üretilen sahneyi asla değil.
**Durum:** Kalıcı kural, `curriculum-slide-gen/SKILL.md`'de zorunlu.

---

### [Bölüm 01] Marka/footer alanı modele bırakılınca tutarsız çıkıyor (2026-07-13)

**Ne oldu:** Alt bölüm (footer) modele bırakılınca her seferinde farklı bir şey üretti — bazen footer eksik kaldı, bazen Akademi Usta için uydurma bir logo/amblem çizdi.
**Neden oldu:** Prompt alt bölümü "tasarla" diye modele bırakıyordu, tam bir şablon vermiyordu.
**Önleme kuralı:** Her prompt'un sonuna harfiyen aynı "BOTTOM LAYOUT (MANDATORY)" bloğu eklenir (bkz. `master-style-prompt.md`) — tek satır, 3 parça footer, "TEXT ONLY, do NOT generate any logo/icon/emblem".
**Durum:** Kalıcı kural, her sahnede uygulanıyor.

---

### [Bölüm 04 / scene-02, scene-03] Panel rozeti renk tutarsızlığı (2026-07-15)

**Ne oldu:** Prompt'ta "blue = donanım yakın çekim" diye tek kelimeyle belirtilmesine rağmen, model 3 panelin rozetlerini (1,2,3) farklı renklerde (mavi/teal/turuncu) üretti — hepsi aynı renk (mavi) olmalıydı.
**Neden oldu:** Fonksiyon-renk eşlemesini tek kelimeyle ("blue = X") belirtmek modele "bu sahnede tüm rozetler aynı renk olmalı" bilgisini vermiyor; model her paneli bağımsız yorumlayıp farklı renk seçebiliyor.
**Önleme kuralı:** Prompt'a şu satır eklenir (birden fazla panel aynı fonksiyon rengini paylaşıyorsa): "IMPORTANT — badge color: all N number badges and all N connector lines and all N panel borders MUST be the exact same solid [color] color. Do NOT vary the badge color per panel."
**Durum:** Bölüm 05'in tüm sahnelerinde uygulandı, tekrarlanmadı (scene-01 hero ve scene-02 "Pinlerin Görevi" dahil tüm rozetler tek renkte çıktı).

---

### [Bölüm 05 / scene-03] Aynı gerçek bileşen iki farklı fiziksel pakette çizildi (2026-07-16)

**Ne oldu:** RT8183-B regülatör IC'si hero ve scene-02'de doğru şekilde 5 pinli SOT-23 paket olarak çizildi, ama scene-03'te (Kapasitörler Neden Var?) aynı çip 10 pinli bir SOIC/MSOP paket olarak çizildi — aynı bölüm içinde aynı gerçek bileşenin iki farklı fiziksel şekli.
**Neden oldu:** Her sahnenin prompt'u chip'in paketini/pin sayısını yeniden açıkça belirtmiyordu, sadece "RT8183-B regulator IC close-up" gibi genel bir tarif veriyordu — model her seferinde paketi yeniden (ve farklı) icat etti. Daha derin sebep aşağıdaki maddede.
**Önleme kuralı:** Bir bileşen bölüm içinde birden fazla sahnede görünüyorsa, HER sahnenin prompt'unda o bileşenin tam paket/pin-sayısı tekrar belirtilir (örn. "RT8183-B in its real SOT-23-5 package, exactly 5 pins — do not draw it as an 8-pin or 10-pin SOIC/MSOP package, keep the physical package identical to how it appears elsewhere in this chapter").
**Durum:** çözüldü — scene-03, hero'nun regülatör crop'u ikincil referans (`--ref`) olarak verilerek yeniden üretildi (bkz. `tools/generate-slide.py`).

---

### [Bölüm 05] RT8183-B'nin gerçek fiziksel paketi hiçbir kaynak görselimizde doğrulanamıyor (2026-07-16)

**Ne oldu:** "SOT-23-5" varsayımı hiçbir zaman gerçek bir fotoğrafla doğrulanmamıştı — sadece küçük LDO regülatörler için genel/yaygın bir paket tahminiydi. `assets/source/blue-pill-card-exact-cutout.png` (gerçek kart fotoğrafı) incelendiğinde, üst yüzde görünen küçük 4 pinli SMD çipin aslında **X2 kristali** ("32.768K" yazan) olduğu, RT8183-B'nin muhtemelen kartın ALT yüzünde (elimizde hiç fotoğrafı olmayan bir yerde) olduğu ortaya çıktı.
**Neden oldu:** Prompt yazmadan önce `assets/source/`'daki gerçek görseller sistematik olarak taranmamıştı — varsayımlar genel teknik bilgiden geliyordu, gerçek kaynaktan değil.
**Önleme kuralı:** Artık kalıcı bir iş akışı adımı var (bkz. `CLAUDE.md` madde 4c) — her sahnenin merkez donanımı için önce `assets/source/`'da gerçek bir görsel olup olmadığına bakılır. Varsa oradan somut bilgi çıkarılır. Yoksa, o bölümün ilk sahnesinde karar verilen görünüm (paket/pin sayısı) `tools/generate-slide.py --ref <önceki-sahnenin-crop'u>` ile SONRAKİ TÜM sahnelere sabitlenir — gerçek kaynak yoksa bile en azından bölüm-içi tutarlılık garanti edilir.
**Durum:** Mekanizma kuruldu (`tools/generate-slide.py`'ye `--ref` desteği eklendi), Bölüm 05'te uygulandı. Bölüm 06+ için de standart adım.

---

### [Bölüm 06 / scene-06] --ref sadece "ana" sahnelere verilince aynı hata başka bir sahnede tekrarlandı (2026-07-16)

**Ne oldu:** Bölüm 06'da X1/X2 kristallerinin gerçek fotoğraf crop'ları (`real-x1-crystal-crop.png`, `real-x2-crystal-crop.png`) scene-02 ve scene-03'e (bu iki kristalin "ana" konusu olduğu sahneler) verildi ve ikisi de tek denemede doğru çıktı. Ama scene-06 ("Sahada Ne Anlama Gelir?") X1/X2'yi tekrar gösterdiği halde bu sahneye referans crop verilmemişti — sonuç: X2, X1 ile aynı oval metal-kan pakette çizildi (yanlış).
**Neden oldu:** "Bu bileşenin ana sahnesi hangisi" diye düşünüp referansı sadece oraya vermek yeterli sanıldı — ama bir bileşen bölüm içinde kaç farklı sahnede görünüyorsa, HER birinde aynı referans olmadan model paketi yeniden (ve tutarsız) icat edebiliyor.
**Önleme kuralı:** Bir bileşenin gerçek fotoğraf referansı varsa, o bileşen o bölümdeki HANGİ sahnelerde görünüyorsa hepsinde `--ref` olarak verilir — "zaten bir yerde doğru çıktı" diye sonraki sahnelerde atlanmaz. Prompt yazarken CLAUDE.md madde 4c'nin "gerçek görsel analizi" adımını her sahne için TEKRAR uygula, bir önceki sahnede uygulamış olmak yetmez.
**Durum:** çözüldü — scene-06, X1/X2 crop'ları `--ref` olarak eklenerek yeniden üretildi.

---

### [Bölüm 01/04/05] Dekoratif ikincil metin/kod (bilinçli kabul edilen risk)

**Ne oldu:** Model, çip fotoğraflarının üzerine gerçek olmayan ama "gerçekçi görünen" ikincil satırlar (örn. "GJ7E7P1", "GQW 8G6NZ" gibi uydurma lot/batch kodları) veya kenarlarda dekoratif pin etiketleri ekliyor.
**Neden oldu:** Fotogerçekçi bir IC görüntüsünde tek satır part number dışında boş bırakılan alan, modelin "gerçekçilik" için bir şeyler yazma eğilimini tetikliyor.
**Önleme kuralı:** Bu, öğretici içeriğin parçası olmadığı ve teknik bir iddia içermediği sürece (yanlış part number, yanlış pin sayısı gibi somut bir hataya dönüşmediği sürece) kabul edilebilir dekoratif gürültü sayılır — düzeltmek için yeniden üretim GEREKMEZ. Sadece şu ayrım önemli: pakette YANLIŞ PİN SAYISI/ŞEKLİ (yukarıdaki madde) teknik hata, rastgele bir seri numarası ise dekoratif gürültü.
**Durum:** Bilinçli olarak kabul edilen risk, aksiyon gerekmiyor.
