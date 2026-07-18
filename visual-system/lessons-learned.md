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

### [Bölüm 08 / scene-04] Yeni bulunan bir kural, ondan ÖNCE üretilmiş bir sahneye hiç uygulanmamıştı (2026-07-16)

**Ne oldu:** scene-05'in 2. üretiminde "merkez içerik asla renkli çerçeve içine alınmaz" kuralı bulunup `layout-rules.md`'ye eklenmişti. Ama scene-04, scene-05'ten ÖNCE (aynı gün, kural yazılmadan önce) üretilmişti ve merkez USB şemasının etrafında tam da bu türden istenmeyen bir turuncu çerçeve vardı — kural yazıldıktan sonra scene-04 hiç geriye dönüp kontrol edilmedi, kullanıcı bir sonraki oturumda fark edip sordu.
**Neden oldu:** Yeni bir görsel-üretim kuralı bulunduğunda iş akışı sadece "bundan sonraki sahnelere uygula" diyordu — aynı bölümün, kuraldan ÖNCE zaten üretilmiş sahnelerini o yeni kurala karşı geriye dönük kontrol etme adımı yoktu. Bu, "Bölüm 01-05 footer/numaralandırma" gibi BİLİNÇLİ "ileriye dönük standart" kararlarından farklı — o kararlar kullanıcının kasıtlı seçimiydi (eski görselleri değiştirmeye değmez), bu ise fark edilmeden atlanmış gerçek bir kusurdu.
**Önleme kuralı:** Bir bölüm içinde (henüz mühürlenmemiş/aktif üretimdeyken) yeni bir görsel-üretim kusuru bulunup `layout-rules.md`'ye kural olarak eklendiğinde, AYNI bölümün o kuraldan önce üretilmiş TÜM sahneleri de o kurala karşı tek tek gözden geçirilir — sadece "bundan sonra" değil, "bu bölümde geriye dönük de" kontrol edilir. Bölüm mühürlendikten (MÜHÜRLENDİ notu düşüldükten) sonra bulunan kurallar için bu geriye dönük kontrol kullanıcıya sorulur (bkz. Bölüm 01-05 footer örneği), ama bölüm hâlâ aktif üretimdeyken atlanmaz.
**Durum:** çözüldü — scene-04, "merkez içerik çerçevesiz" satırı prompt'a eklenerek 2. kez üretildi, tek denemede düzeldi.

---

### [Bölüm 09 / scene-01-hero] Sabit "fotoğraf + numaralı panel" şablonu 8 bölüm sonra tekrara dönüştü — `--mode generate`'e geçildi (2026-07-17)

**Ne oldu:** Bölüm 09 hero'sunun v1/v2'si (her zamanki gibi: `--mode edit`, `approved-day01.png` referanslı, gerçek çip fotoğrafı merkezde, numaralı rozetli 4 panel, alt bantta panellerin birebir tekrarı) kullanıcı tarafından reddedildi — "artık şablon olmaya başladı, neredeyse hiç yenilik yok, sadece yazılar değişiyor". Kullanıcı ChatGPT ile kendi ürettiği bir referans gösterdi: merkezde gerçek bir MUX/blok diyagramı, başlık-çubuklu paneller (rozet yok), gerçek bir veri tablosu, ve panelleri tekrarlamayan 3 adımlı bir prosedür bandı. Ayrıca: "hep edit kullanma, yeni gpt-image-2 medium image oluşturma (generate, edit değil) denemeni istiyorum... resimlerin ruhu olmalı, boş tabela istemiyorum."
**Neden oldu:** 13 Temmuz'da bilinçli alınan "her sahne HER ZAMAN `approved-day01.png`'yi `/edit` ile referans alır" kararı, o zamanki asıl sorunu (footer/logo tutarsızlığı) çözdü ama 8 bölüm sonra farklı bir sorun yarattı: model her seferinde aynı referans görselin kompozisyonuna (fotoğraf + numaralı panel + tekrar bandı) çekiliyordu, sadece metin içerik değişiyordu. Tutarlılık ile her bölümün kendine özgü hissettirmesi arasındaki gerilim hiç fark edilmemişti.
**Önleme kuralı:** (1) `tools/generate-slide.py`'ın varsayılanı artık `--mode generate` (referanssız, saf metinden üretim, `openai/gpt-image-2` — `/edit` değil) — stil artık `master-style-prompt.md`'nin VISUAL IDENTITY bloğunun kelimeleriyle taşınıyor, tek bir sabit görselin kopyası olarak değil. `--mode edit` sadece gerçek bir fiziksel bileşenin (çip paketi, konnektör, kristal) birebir korunması gerektiğinde kullanılır. (2) Her sahnenin merkez içeriği artık "konu fiziksel mi mantıksal mı" sorusuna göre seçilir — fiziksel bir bileşense gerçek fotoğraf/edit modu, mantıksal/prosedürel bir konuysa (GPIO modları gibi) literal bir blok/akış diyagramı. (3) Paneller artık zorunlu numaralı rozet yerine başlık çubuğu + o panelin gerçek içeriğine uygun mini-diyagram/tablo içerebilir. (4) Alt bant artık panelleri TEKRARLAMAZ, yeni bilgi (prosedür/karşılaştırma) taşır. Ayrıntılı kurallar `master-style-prompt.md`'nin 2026-07-17 tarihli notlarında.
**Dikkat — kullanıcının referansındaki bir teknik hata düzeltildi, kopyalanmadı:** Kullanıcının referans görselindeki tablo "AF1/AF4/AF7" başlıkları kullanıyordu — bu STM32F4/F7/L4'ün (AFRL/AFRH, pin başına numaralı AF slotu) terminolojisi, STM32F103 (bu serinin çipi) bunu kullanmıyor (eski AFIO_MAPR tabanlı remapping var, numaralı AF slotu yok). Bölüm 09 hero'sunda bunun yerine README'nin gerçek isimlendirilmiş fonksiyonları (USART1_TX, TIM1_CH2, I2C1_SCL) kullanıldı. **Kural: bir kullanıcı referansı stil/yapı için taklit edilir, teknik terminolojisi için değil — her zaman gerçek kaynakla (datasheet, bu projenin README'si) çapraz doğrulanır.**
**Durum:** çözüldü, v3 onaylandı. `--mode generate`'in tablo/diyagram metni (PA9/PB6 tablosu piksel-piksel doğru çıktı) en az `--mode edit` kadar, belki daha net çıktı — ilk gözlem, kesinleşmiş bir kural değil, birkaç sahne daha izlenecek.

### [Bölüm 09 / scene-02] Alt bant içeriği SCENE bloğunda açıkça belirtilmişken model kendiliğinden ikinci bir bant daha ekledi (2026-07-17)

**Ne oldu:** scene-02 prompt'u alt bant için tek, net bir içerik belirtiyordu ("4+2+2+1=9 olası yapılandırma" sentez şeridi). Model bunu doğru üretti AMA altına, hiç istenmeyen ekstra bir 4 adımlı "GPIO Modu Seçim Adımları" (numaralı rozetli) bandı daha ekledi — muhtemelen `master-style-prompt.md`'nin o zamanki "pick whichever fits: numbered procedure OR comparison..." genel talimatını "ek olarak da ekle" diye yorumladı. İçerik kendi başına yanlış değildi (uydurma ama makul), sadece istenmemişti — kullanıcı içeriği inceleyip zararsız bulduğu için görsel yeniden ÜRETİLMEDİ, kabul edildi.
**Önleme kuralı:** `master-style-prompt.md`'nin BOTTOM LAYOUT bloğuna "SCENE bloğu zaten alt bant içeriğini belirtmişse SADECE o render edilir, üstüne kendi buluşun bir şey eklenmez" satırı eklendi. Bir SCENE promptu belirli bir alt bant içeriği verdiğinde, bunun TEK ve YETERLİ olduğu ayrıca belirtilmeli — genel/esnek bir talimatın yanında spesifik bir içerik varsa model ikisini birden uygulayabiliyor.
**Durum:** kök neden `master-style-prompt.md`'de düzeltildi (ücretsiz), bu sahne yeniden üretilmedi (içerik zararsız kabul edildi).

---

### [Bölüm 01/04/05] Dekoratif ikincil metin/kod (bilinçli kabul edilen risk)

**Ne oldu:** Model, çip fotoğraflarının üzerine gerçek olmayan ama "gerçekçi görünen" ikincil satırlar (örn. "GJ7E7P1", "GQW 8G6NZ" gibi uydurma lot/batch kodları) veya kenarlarda dekoratif pin etiketleri ekliyor.
**Neden oldu:** Fotogerçekçi bir IC görüntüsünde tek satır part number dışında boş bırakılan alan, modelin "gerçekçilik" için bir şeyler yazma eğilimini tetikliyor.
**Önleme kuralı:** Bu, öğretici içeriğin parçası olmadığı ve teknik bir iddia içermediği sürece (yanlış part number, yanlış pin sayısı gibi somut bir hataya dönüşmediği sürece) kabul edilebilir dekoratif gürültü sayılır — düzeltmek için yeniden üretim GEREKMEZ. Sadece şu ayrım önemli: pakette YANLIŞ PİN SAYISI/ŞEKLİ (yukarıdaki madde) teknik hata, rastgele bir seri numarası ise dekoratif gürültü.
**Durum:** Bilinçli olarak kabul edilen risk, aksiyon gerekmiyor.

---

### [Bölüm 10 / hero ve SPI] Aynı sahne kullanıcı onayı olmadan birden fazla kez üretildi (2026-07-17)

**Ne oldu:** Gün 10 hero ve SPI sahnelerinde ilk üretimlerde teknik bağlantı kusurları çıktı.
Hero'da SPI sinyalleri farklı cihazlara dağıldı ve sonraki denemede MISO yönü yanlış kaldı.
SPI sahnesinde ortak MOSI/MISO/SCK hatlarının iki slave'e dallanması model tarafından birkaç
denemede eksik çizildi. Agent kusurları doğru tespit etti, ancak kullanıcıdan her yeni ücretli
deneme için açık onay almadan art arda yeni sürümler üretti. Kullanıcının "kalan görselleri
üret" veya toplu üretim onayı, aynı sahne için sınırsız yeniden deneme yetkisi değildi.

**Neden oldu:** Promptlar ilk çağrıdan önce görsel topolojinin değişmezlerini ayrı bir kontrol
listesiyle sınamadı; metinsel yön etiketlerinin modelin gerçek ok uçlarını garanti edeceği
varsayıldı. QA sonrası "teknik olarak doğru olana kadar devam et" dürtüsü, projenin mevcut
"kusurluysa kullanıcıya sormadan tekrar üretme" kuralının önüne geçti.

**Önleme kuralı:** Her sahnenin İLK ücretli çağrısından önce prompt üzerinde şu teknik-invariant
kontrolü yapılır: (1) ok yönleri, (2) ortak hat/dallanma geometrisi, (3) her hedefe ulaşması
gereken hatlar, (4) bileşen/pin sayısı, (5) kesin sayısal değerler, (6) modelin eklememesi gereken
metin/değerler. Karmaşık topoloji tek görselde güvenilir anlatılamıyorsa üretimden ÖNCE daha
basit iki parçalı öğretim kompozisyonuna bölünür. İlk çıktı kusurluysa yeni sürüm otomatik
üretilmez: kusur kullanıcıya gösterilir ve yeni ücretli çağrı için açık onay beklenir. Bu kural
toplu bölüm üretiminde de aynen geçerlidir.

**Durum:** Kalıcı kural `CLAUDE.md`ye eklendi. Bundan sonraki sahnelerde otomatik retry yok.

---

### [Bölüm 10 / Hero] Yazım hatası, önceki topoloji düzeltmelerinden sonra fark edilmedi (2026-07-17)

**Ne oldu:** Hero v4'te (SPI sinyal dağılımı/MISO yönü hataları v2→v3→v4 arasında düzeltildikten sonra) alt başlıkta "Aynıı veri" yazıyor — fazladan bir "ı", doğrusu "Aynı veri". Görsel topoloji/teknik değerler odaklı QA turları bu satırı kontrol etmemiş.
**Neden oldu:** Ardışık düzeltme turlarında dikkat hep önceki hatanın (topoloji) tekrar oluşup oluşmadığına odaklanmış; başlık/alt başlık gibi kısa, "zaten doğru olması gereken" metin alanları her yeni sürümde tekrar okunmamış.
**Önleme kuralı:** Bir sahne birden fazla düzeltme turundan geçtiğinde, SADECE düzeltilen kusur değil, day-label/başlık/alt başlık gibi kısa sabit metin alanları da her yeni sürümde yeniden okunur — "bu zaten sabitti, değişmez" diye atlanmaz.
**Durum:** çözüldü — kullanıcı kararıyla (2026-07-18) teaching-critical olmayan kozmetik kusur olarak KABUL EDİLDİ, yeniden üretilmedi (Bölüm 01/04/05'teki "dekoratif ikincil metin" maddesiyle aynı muamele).

---

### [Bölüm 10 / scene-06] Cihaz etiketleri hem bozuk yazılmış hem gerçek parça numarasından farklı (2026-07-17)

**Ne oldu:** "Şemada Protokol Tespiti" sahnesinde I2C örnek cihazlarının etiketleri "24LC2S6 EEPROM" ve "BME2BO SENSÖR" olarak çıktı — hem tipografik olarak bozuk (gerçek okunabilir bir parça numarası değil, "24LC256" ve "BME280"e benzeyen ama harf/rakam karışmış hali) hem de bölümün kendi README'sindeki gerçek örneklerden (AT24C256, BMP280) farklı bir parça ailesine ait. GPS (u-blox NEO-6M) ve Flash (W25Q64JV) etiketleri aynı sahnede doğru çıktı.
**Neden oldu:** Prompt, gerçek örnek modülleri (EEPROM/sensör) görsel olarak temsil etmesini istedi ama README'nin kullandığı TAM parça numaralarını (AT24C256, BMP280) harfiyen kopyalamasını istemedi — model kendi başına benzer ama farklı bir parça ailesi seçti, sonra o metni render ederken de bozdu.
**Önleme kuralı:** Bir sahne README'de zaten adı geçen belirli bir parçayı (chip/modül) temsil ediyorsa, prompt o parçanın TAM adını harfiyen verir ("EEPROM örneği, tam olarak 'AT24C256' yazsın — 24LC256, 24LC512 gibi başka bir parça numarası YAZMA") — genel kategoriyi ("bir EEPROM") modelin kendi örneğini seçmesine bırakmaz.
**Durum:** çözüldü — prompt'a tam parça adı zorunluluğu ("AT24C256"/"BMP280", yanlış render edilirse etiketsiz ikon tercih edilsin) eklenip v3 üretildi (2026-07-18), her iki etiket piksel-piksel doğru ve okunaklı çıktı.

---

### [Bölüm 11 / scene-06] Prompt'ta istenmeyen bir ek şema, var olmayan bir sinyali gerçek donanıma ekledi (2026-07-17)

**Ne oldu:** "Canlı Debug Nedir?" sahnesinin prompt'u sadece bir debug-döngüsü kompozisyonu istiyordu (breakpoint→halt→incele→step→continue), CN4 pin numaralarını AÇIKÇA yasaklıyordu ("Do not add CN4 pin numbers"). Model kendiliğinden bir "BAĞLANTI: SWD" kablo-rengi lejantı ekledi ve bu lejantta SWDIO/SWCLK/GND/3.3V'nin yanına var olmayan bir "NRST" sinyali daha ekleyip bunu SWD konnektörünün bir parçası gibi gösterdi; ayrıca 5 renkli kablo görsel olarak 4 pinli bir konnektöre bağlanıyormuş gibi çizildi (fiziksel olarak tutarsız). Bölümün kendi CN4'ü (scene-02/04'te doğrulanmış) sadece 4 pin: 3.3V/DIO/DCLK/GND — NRST yok.
**Neden oldu:** Prompt modele "CN4 pin numarası ekleme" dedi ama "bu bölümün SWD konnektörüne yeni bir sinyal/pin ekleme" demedi — model, "SWD" kelimesinden genel/jenerik bir 10-pinli ARM debug header şablonunu (NRST dahil) çağırıp bunu bu bölümün özel 4-pinli CN4'üyle karıştırdı.
**Önleme kuralı:** Bir bölümün donanımı (burada CN4) önceki sahnelerde belirli bir pin sayısı/isim setiyle sabitlenmişse, o donanımı farklı bir amaçla (burada: genel debug-döngüsü sahnesi) tekrar gösteren her sahnenin prompt'una şu satır eklenir: "If you show the SWD connector/wiring again in this scene, it has EXACTLY these N signals: [liste] — do not add any other signal (e.g. NRST/reset) even if it's common on generic SWD headers elsewhere." Ayrıca: "do not add X" yasakları modelin İLGİSİZ bir bloğu tamamen eklemesini önlemez — istenmeyen tüm ek bloklar ("bunun dışında hiçbir ek panel/lejant/şema ekleme") ayrıca yasaklanmalı.
**Durum:** kullanıcı kararıyla (2026-07-18) KABUL EDİLDİ, yeniden üretilmedi — NRST gerçekten var olan, birçok standart SWD probe'unda bulunan bir sinyal, sadece bizim CN4'ümüzde yok; teknik olarak yanlış bir iddia değil (bizim donanımımızla eksik eşleşme). README'ye görselin altına bunu netleştiren kısa bir not eklendi. Önleme kuralı yine de kalıcı — gelecekte CN4/SWD çizilen sahnelerde bu karışıklık tekrar önlenmeli.

---

### [Bölüm 11 / scene-07] CN4'ün DIO/DCLK pinleri, aynı bölümün kendi önceki sahnelerinde doğru kurulmuş olmasına rağmen yeniden ters çizildi (2026-07-17)

**Ne oldu:** "Sahada Ne Anlama Gelir?" sahnesinin CN4 mini-diyagramında pin sırası (soldan sağa) "GND · DIO/SWDIO · DCLK/SWCLK · 3.3V" olarak çıktı — ama aynı bölümün scene-02 ve scene-04'ü (ve README'nin kendisi) doğru sırayı "GND · DCLK · DIO · +3.3V" olarak zaten kurmuştu. DIO ve DCLK pozisyonları yer değiştirmiş.
**Neden oldu:** Bu bölümün scenes.json'ı zaten "Bölüm 11'de CN4 Pin2/Pin3 DIO/DCLK ters yazılmıştı, düzeltildi" diye bir METİN düzeltmesinden bahsediyordu (README seviyesinde) — ama bu düzeltmenin GÖRSEL üretiminde de her sahnede tekrar doğrulanması gerektiği atlanmış; "bir bölümde bir kez düzeltildi" bilgisi o bölümün SONRAKİ her CN4 çizimine otomatik yayılmadı.
**Önleme kuralı:** Bir bölüm içinde aynı konnektör/bileşen birden fazla sahnede yeniden çiziliyorsa (burada CN4: scene-02, scene-04, scene-07), HER sahnenin prompt'unda pin sırası harfiyen (aynı kelimelerle) tekrar yazılır — "bu bölümde zaten bir kez doğru kuruldu" diye sonraki sahnelerde kısaltılıp atlanmaz. Bu, Bölüm 09 CLAUDE.md'sindeki "bir gerçeğin önceki bölümde doğru kurulmuş olması, sonraki bölümde onu tekrar ettiğinde otomatik doğru olacağı anlamına gelmiyor" dersinin AYNI BÖLÜM İÇİNDEKİ sahneler için de geçerli olduğunu gösteriyor.
**Durum:** kullanıcı kararıyla (2026-07-18) KABUL EDİLDİ, yeniden üretilmedi — her pinin kendi etiketi (DIO→SWDIO, DCLK→SWCLK) tek başına yine doğru, sadece iki sahne arasında görsel SIRA tutarsız; yanlış bir teknik iddia değil. Önleme kuralı yine de kalıcı — gelecekte CN4 çizilen sahnelerde bu tutarsızlık tekrar önlenmeli.

---

### [Bölüm 12 / Hero] CN4/SWD paneli 3 pine düşürülmüş, GND kaybolmuş, DIO/DCLK ikisi de aynı bozuk etikete dönüşmüş (2026-07-18)

**Ne oldu:** Hero'nun "SWD Debug" panelinde CN4/SRP4 konnektörü 4 pin değil 3 pin ("1 2 3") olarak çizildi, GND sinyali tamamen kayboldu, ve kalan iki pin de "DCIO" diye AYNI (bozuk) etiketle işaretlendi — muhtemelen "DIO" ve "DCLK" render sırasında birbirine karışıp tek bir yanlış kelimeye dönüştü. Bu, bölümün kendi scene-06'sının (ve Bölüm 08/09/11'in) doğru kurduğu 4-pinli CN4 gerçeğiyle doğrudan çelişiyor.
**Neden oldu:** Hero, tüm bölümü tek bir sistem haritasında özetleyen yoğun bir kompozisyon — CN4 burada küçük, ikincil bir detay olarak çiziliyor ve prompt bu küçük paneldeki pin sayısını/etiketlerini muhtemelen scene-06'daki kadar açık/zorlayıcı belirtmemiş, model küçük alanda sıkışan 4 etiketi 3'e indirip ikisini birleştirmiş.
**Önleme kuralı:** Bir hero/özet sahnesi, bölümün başka bir sahnesinde zaten tam olarak doğrulanmış bir konnektörü (burada CN4) KÜÇÜK/ikincil bir panel olarak tekrar çiziyorsa, "küçük olduğu için sadeleştirilebilir" varsayılmaz — o panelin prompt'u da tam pin sayısını ve her pinin ayrı, doğru etiketini AÇIKÇA sayar ("exactly 4 pins, labeled +3.3V/DIO/DCLK/GND, never fewer, never a merged/duplicate label").
**Durum:** kullanıcı kararıyla (2026-07-18) KABUL EDİLDİ, yeniden üretilmedi — README'ye doğru CN4 çizimine (Bölüm 12 scene-06, Bölüm 11) yönlendiren bir not eklendi. Önleme kuralı yine de kalıcı.

---

### [Bölüm 12 / scene-07] Bölüm 11 scene-06'daki "uydurma NRST" hatası, farklı bir bölümde birebir tekrarlandı (2026-07-18)

**Ne oldu:** "Şema Okuma Özeti" sahnesinin son adımındaki "SWD debug hazır" ikonu, genel/jenerik bir 10-pinli ARM Cortex debug header çizip SWDIO/SWCLK/GND/3.3V'nin yanına var olmayan bir "NRST" sinyali daha ekledi — Bölüm 11 scene-06'da zaten bir kez tespit edilip lessons-learned'e kaydedilen HATANIN TIPATIP AYNISI, bu sefer Bölüm 12'de. Bu bölümün kendi scene-06'sı (GPIO ve Debug Dışarı Çıkar) CN4'ü doğru (4 pin, NRST yok) çiziyor — yani aynı bölüm içinde bile bir sahne doğru, diğeri yanlış çıkabiliyor.
**Neden oldu:** Önceki maddenin (Bölüm 11 scene-06) önleme kuralı yalnızca O bölümün prompt'larına işlendi — dosyanın kendi "Kullanım kuralı" bölümünde yazan "yeni bir bölümün prompt'larını yazmadan önce bu dosyayı BAŞTAN SONA oku" adımı bu sahnenin prompt'u yazılırken uygulanmamış (ya da uygulanmış ama "SWD debug hazır" gibi küçük bir ikon, CN4'ün "yeniden çizimi" olarak tanınmamış).
**Önleme kuralı:** "SWD/debug hazır" veya "CN4" gibi anahtar kelimeler içeren HER ikon/panel — ne kadar küçük veya dekoratif görünse de — bu dosyanın CN4/SWD ile ilgili tüm maddeleri (bu ve önceki madde) açısından kontrol edilir. Genel kural: bir bileşen/konnektör hakkında bir kez bulunan bir hata deseni (burada "genel ARM debug header şablonuna kayıp NRST eklemek"), SADECE o bölüme değil, PROJENİN TÜMÜNE uygulanan bir kural olarak yazılır — "CN4'ü herhangi bir sahnede/bölümde göstereceksen, EXACTLY 4 signals (+3.3V/DIO/DCLK/GND), never NRST, never a generic 10-pin layout" cümlesi artık her yeni bölümün ilgili prompt'una otomatik eklenmelidir.
**Durum:** kullanıcı kararıyla (2026-07-18) KABUL EDİLDİ (Bölüm 11 scene-06 ile aynı muamele — NRST teknik olarak yanlış bir iddia değil, sadece bizim CN4'ümüzde yok), yeniden üretilmedi; README'ye açıklayıcı not eklendi. Önleme kuralı yine de kalıcı — bu artık 2 bölümde tekrarlanmış bir desen, sonraki bölümlerde (varsa) tekrarlanmamalı.
