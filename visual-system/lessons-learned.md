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

### [Bölüm 08 / scene-02] Panel içerikleri fazla kuru/genel kaldı, ikonlar tekrarlı (kullanıcı geri bildirimi, 2026-07-16)

**Ne oldu:** Scene-02'nin 4 panelinin caption'ları tek bir kısa/genel satırdan ibaretti (örn. "Port A + Port B" → "32 GPIO pini (16 + 16)") ve 4 panelin de aynı jenerik çip ikonunu kullandı. Kullanıcı bunu "kuru" ve "çağırıcı olmayan" (ilgi çekici değil) olarak nitelendirdi, daha fazla somut/açıklayıcı bilgi ve panel başına anlamlı/farklı ikon istedi.
**Neden oldu:** Prompt panel başına sadece TEK kısa sayısal özet istiyordu (sadece pin sayısı, o pin grubunun gerçekte hangi işlevlerle/periferallerle bağlantılı olduğunu belirtmiyordu) ve ikon seçimini modele bırakıyordu ("a chip icon" gibi jenerik) — model de her panelde aynı ikonu tekrarladı.
**Önleme kuralı:** Her panelin caption'ı en az 2 somut/farklı bilgi satırı içerir (sadece sayı değil, o grubun gerçek işlevi/periferalleri — örn. "PA0-7: ADC, Timer, USART2" gibi), VE her panel için prompt'ta AÇIKÇA farklı ve anlamlı bir ikon belirtilir (örn. "a waveform/signal icon" vs "a plug/connector icon" vs "a battery icon") — "pick an appropriate icon" gibi modele bırakılan genel bir ifade kullanılmaz.
**Durum:** Bölüm 08 scene-03'ten itibaren uygulandı.

---

### [Bölüm 08 / scene-05] Pin numaraları doğrulandı ama üzerine kurulu konnektör-bağlantı iddiası doğrulanmadı (2026-07-16)

**Ne oldu:** README'nin "Debug Pinleri" bölümü "Bu pinler CN4 (SWD konnektörü) üzerinden dışarıya çıkıyor" diyordu — 5 pinin (JTMS/SWDIO, JTCK/SWCLK, JTDI, JTDO, JNTRST) hepsinin CN4'e çıktığı izlenimini veriyordu. Gerçek şemada CN4 (SRP4) sadece 4 pinli: +3.3V/DIO(SWDIO)/DCLK(SWCLK)/GND — yani sadece 2 gerçek sinyal (SWDIO+SWCLK) CN4'e çıkıyor. JTDI/JTDO/JNTRST için kartta ayrı bir JTAG konnektörü yok, bu 3 pin sadece genel GPIO header'da duruyor. scene-05 bu yanlış iddiayı görsele taşıdı ("Bu 5 pin CN4 üzerinden dışarı çıkar"), kullanıcı fark etti.
**Neden oldu:** curriculum-qa Adım 2'de pin NUMARALARI/İSİMLERİ datasheet'e karşı tek tek doğrulanmıştı ama bu numaraların üzerine kurulu ikinci-derece bir iddia ("bu pinler X konnektörüne çıkıyor") ayrıca gerçek şemanın Connectors bloğuna karşı doğrulanmamıştı — doğru bir pin numarasının doğru olması, o pin hakkındaki her ek iddiayı otomatik doğru yapmıyor.
**Önleme kuralı:** Bir pin/sinyal için "X konnektörüne/başlığına çıkıyor" gibi bir FİZİKSEL BAĞLANTI iddiası varsa, sadece pinin kendi numarasını değil, o konnektörün şemadaki gerçek tanımını (kaç pinli, hangi sinyaller) da ayrıca doğrula — pin doğru diye bağlandığı iddia edilen konnektör claim'i otomatik doğru sayılmaz.
**Durum:** çözüldü — README ve scene-05 düzeltildi. Bölüm 11 (Debug/SWD) yazılırken bu ayrım (CN4 sadece SWD, JTAG için ayrı konnektör yok) baştan doğru kurulmalı.

---

### [Bölüm 08 / scene-05, 2. üretim] Merkez içerik istenmeyen çerçeve aldı, panel ikonu kendi başlığıyla çelişti (2026-07-16)

**Ne oldu:** CN4 düzeltmesinden sonraki üretimde iki yeni kusur çıktı: (1) merkezdeki şema, prompt'ta hiç istenmediği halde ince mavi renkli bir kutu/çerçeve içine alınmış (sahnenin geri kalanı tamamen turuncu temalıyken tutarsız bir renk), (2) Panel 1'in başlığı "SWD — CN4'e Çıkar (4 Pin)" derken ikonu 5 pinli bir header gösterdi — panelin kendi metniyle çelişen bir görsel. Ayrıca panel 2'nin "JTDI" yazısında fazladan bir çizgi (hafif bozuk karakter) vardı.
**Neden oldu:** Prompt, merkez içeriğin görünümünü (renk/çerçeve olup olmayacağını) hiç belirtmiyordu — model boş bırakılan her alanı "dekore etmeye" çalışıyor (bkz. footer/logo dersi, aynı kalıp). Panel ikonlarının pin SAYISI da prompt'ta "a small N-pin header icon" gibi genel geçirilmişti, tam sayı her ikon için ayrıca yazılmamıştı.
**Önleme kuralı:** (1) Prompt'a her zaman "the central content must NOT have any colored border, box, or frame around it" satırı eklenir (bkz. layout-rules.md). (2) Her panel ikonunun göstereceği öğe sayısı (pin, bileşen vb.) panelin caption'ındaki sayıyla aynı olacak şekilde EXPLICIT yazılır ("EXACTLY N, not N±1").
**Durum:** çözüldü — scene-05 3. kez, bu iki düzeltmeyle yeniden üretildi.

---

### [Bölüm 08 / scene-03] Doğru referans görsel vardı ama prompt'taki YAZILI özeti yanlıştı (2026-07-16)

**Ne oldu:** `real-u2-schematic-crop.png` (gerçek şemadan doğru crop) zaten çekilmiş ve `--ref`
olarak veriliyordu — ama prompt dosyasındaki "Gerçek görsel analizi" notu bu görseli YANLIŞ
özetlemişti: "sol=Port A, sağ=Port B+C, üst=besleme" diye yazılmıştı, oysa görselin kendisi
"sol=Port A+Port B+C13-15 (tek sütun), sağ=NRST/BOOT0/kristal/besleme, üst=yok" gösteriyordu.
Model, doğru referans görseli önünde dururken bile, prompt METNİNDEKİ bu yanlış özete sadık
kalarak (metin görseli domine etti) yanlış Sol/Sağ/Üst panel etiketleriyle bir görsel üretti —
hem README hem brief.json hem scenes.json aynı yanlış özeti taşıyordu, curriculum-qa'da
bulundu.
**Neden oldu:** Bir referans görseli "--ref olarak eklendi" ile "doğru okundu" aynı şey değil.
Görseli ilk kez incelerken çıkarılan yazılı özet (sol/sağ/üst gibi konumsal bir iddia) tek
seferlik göz atmayla değil, PİKSEL SEVİYESİNDE (crop+zoom) doğrulanmadan prompt'a yazılmış.
**Önleme kuralı:** Bir referans görselden konumsal/sayısal bir iddia (örn. "sol sütunda X var,
sağda Y var") çıkarılıp prompt'a yazılacaksa, bu iddia yazılmadan ÖNCE görsel crop+zoom ile
piksel seviyesinde tekrar kontrol edilir — "referansı ekledim" konumsal iddianın doğru
okunduğu anlamına gelmez, okumanın kendisi ayrıca doğrulanır.
**Durum:** çözüldü — README, brief.json, scenes.json ve prompt dosyası düzeltildi, scene-03
düzeltilmiş panel yapısıyla (Sol=tüm GPIO, Sağ=Reset/Boot/Kristal + Sağ=Besleme, USB+Debug) 3
kez üretildi (v1=eski yanlış panel yapısı, v2 ve v3=düzeltilmiş panel yapısı). v2 ve v3'ün
İKİSİNDE de panel metinleri (asıl pedagojik hata) doğru çıktı, ama merkezdeki yoğun ~48 satırlık
pin-listesi çiziminde HER İKİSİNDE de farklı küçük rakam/etiket bozukluğu çıktı (v2: pin 20/PB2
satırı tamamen kayboldu, sonraki tüm Port B numaraları bir satır kaydı; v3: pin 20/PB2 yine
kayboldu, ayrıca "B6" etiketi iki kez tekrarlandı/B7-B8 sırası karıştı). Kullanıcı kararıyla v3
kabul edildi — panel metinleri doğru olduğu için ana hata çözülmüş sayıldı, merkez çizimdeki bu
küçük rakam kaymaları "Bölüm 01/04/05 dekoratif ikincil metin" maddesindeki gibi
teaching-critical-olmayan gürültü olarak kabul edildi (3. bir ücretli üretim denenmedi).
**Ek gözlem:** ~15+ satırlık yoğun bir pin-numarası sütunu (özellikle art arda gelen ardışık
sayılar: 18,19,20,39,40...) medium kalitede tutarlı biçimde doğru kopyalanamıyor gibi görünüyor
— bu chapter'da 2/2 denemede aynı bölgede (Port B'nin başı) hata çıktı. İleride benzer yoğun pin-
listesi sahneleri gerekirse, "quality: high" ile başlamak veya listeyi 2 sahneye bölmek
düşünülebilir (bkz. `curriculum-slide-gen/SKILL.md` escape-hatch madde 5).

---

### [Bölüm 01/04/05] Dekoratif ikincil metin/kod (bilinçli kabul edilen risk)

**Ne oldu:** Model, çip fotoğraflarının üzerine gerçek olmayan ama "gerçekçi görünen" ikincil satırlar (örn. "GJ7E7P1", "GQW 8G6NZ" gibi uydurma lot/batch kodları) veya kenarlarda dekoratif pin etiketleri ekliyor.
**Neden oldu:** Fotogerçekçi bir IC görüntüsünde tek satır part number dışında boş bırakılan alan, modelin "gerçekçilik" için bir şeyler yazma eğilimini tetikliyor.
**Önleme kuralı:** Bu, öğretici içeriğin parçası olmadığı ve teknik bir iddia içermediği sürece (yanlış part number, yanlış pin sayısı gibi somut bir hataya dönüşmediği sürece) kabul edilebilir dekoratif gürültü sayılır — düzeltmek için yeniden üretim GEREKMEZ. Sadece şu ayrım önemli: pakette YANLIŞ PİN SAYISI/ŞEKLİ (yukarıdaki madde) teknik hata, rastgele bir seri numarası ise dekoratif gürültü.
**Durum:** Bilinçli olarak kabul edilen risk, aksiyon gerekmiyor.
