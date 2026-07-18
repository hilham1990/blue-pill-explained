# Değişiklik Günlüğü

Bu dosya, proje boyunca alınan üretim/süreç kararlarının ve bölüm bazlı üretim
geçmişinin tarihli kaydıdır. Amaç: `CLAUDE.md`, `PRODUCTION.md` ve her bölümün
`scenes.json`'ı **güncel durumu** anlatsın, **geçmiş anlatıyı** burada tutalım.

Görsel-üretim kusurlarının teknik kök-neden/önleme-kuralı ayrıntısı için tek
kaynak: [`visual-system/lessons-learned.md`](visual-system/lessons-learned.md)
(bu dosyayla yer değiştirmiyor, tamamlıyor — orası "neden/nasıl önlenir",
burası "ne zaman/hangi bölümde ne oldu").

---

## 2026-07-18 — Seri tamamlandı

- **Serinin 12 bölümü de mühürlendi**: metin + görsel + README gömme tamamlandı, commit'lendi.
- **Video render henüz hiçbir bölümde yapılmadı** — bkz. `PRODUCTION.md`, sıradaki iş bu.
- Bölüm 08: scene-04 (USB Pinleri), gerçek R10=10kΩ ile USB Full-Speed uyumlu 1.5kΩ değerini
  ayırmak için yeniden üretildi. İlk yeniden-üretim denemesi iki pull-up direncini de yanlışlıkla
  USBDM/D− hattına bağladı; kullanıcı onayıyla hatalı dosya silindi, prompt D+ bağlantısını sert
  invariant olarak kilitleyecek şekilde güçlendirildi ve yeniden üretildi — son çıktı doğru.
- Bölüm 09: scene-07 alt bilgi kutusunda "fiziksel" kelimesi "fiiziksel" yazılmış (fazladan bir
  harf) — teaching-critical bulunmadığı için kullanıcı kararıyla düzeltilmeden kabul edildi.
- Bölüm 10: hero'daki kozmetik yazım hatası ("Aynıı veri" → "Aynı veri" olmalıydı, fazladan bir
  "ı") teaching-critical bulunmadığı için kullanıcı kararıyla **düzeltilmeden kabul edildi**
  (hâlâ görselde duruyor). scene-06'nın I2C cihaz etiketleri ("24LC2S6"/"BME2BO" gibi bozuk ve
  yanlış parça ailesi) ise düzeltilip yeniden üretildi (AT24C256/BMP280, piksel-piksel doğru).
- Bölüm 11: scene-06/scene-07'de CN4/SWD konnektörüne ait tekrarlayan bir kusur deseni (uydurma
  "NRST" sinyali, DIO/DCLK sıra tutarsızlığı) bulundu; ikisi de teknik olarak yanlış iddia
  olmadığı için kullanıcı kararıyla kabul edildi, ilgili README'lere açıklayıcı not eklendi.
- Bölüm 12: hero ve scene-07'de aynı CN4/SWD kusur deseni (3 pine düşmüş/GND kaybolmuş CN4;
  uydurma NRST) bağımsız olarak tekrar bulundu — Bölüm 11 ile aynı muamele, kabul edildi,
  README'lere not eklendi.
- Dokümantasyon temizliği: bölüm `scenes.json` dosyalarındaki uzun anlatı notları bu dosyaya ve
  `lessons-learned.md`'ye taşındı, `CLAUDE.md`/`PRODUCTION.md`'deki tarihli anlatı bölümleri
  sadeleştirildi.

## 2026-07-17 — Görsel sistem dönüşümü + onay kuralı sertleşti

- **Bölüm 09'dan itibaren görsel üretim sistemi değişti**: `tools/generate-slide.py` varsayılanı
  "--mode edit + sabit referans (gerçek çip fotoğrafı + numaralı panel + tekrar bandı şablonu)"
  yerine "--mode generate" (referanssız, saf metinden üretim) oldu — mantıksal/prosedürel
  sahnelerde merkezde gerçek blok/akış/ağaç/karar diyagramı, paneller numara rozeti yerine
  başlık çubuğu + gerçek veri tablosu. Fiziksel bileşen gerektiren sahnelerde (pinout kartı,
  şema kesiti, LED devresi) `--mode edit` + gerçek kaynak referansı hâlâ kullanılıyor.
  **Bölüm 01-08 geriye dönük değiştirilmedi**, eski şablonuyla kaldı. Ayrıntı:
  `visual-system/master-style-prompt.md`.
- Bölüm 10'un SPI/hero sahnelerinde onay alınmadan art arda yeniden üretim yapıldığı görüldü
  (agent kusuru doğru tespit etti ama her yeni ücretli deneme için açık onay almadan devam etti).
  Bundan sonra **ilk üretim de dahil hiçbir sahne kullanıcının o an verdiği açık "evet"i olmadan
  (yeniden) üretilmez** — toplu üretim onayı, tek bir sahne için sınırsız retry yetkisi değildir.
  Bu kural kalıcı, `CLAUDE.md`'ye işlendi.
- Bölüm 09: scene-01 hero v4'e ulaştı (v1/v2 eski şablon "ruhu yok" bulundu, terk edildi; v3 ilk
  MUX denemesiydi). scene-02 v3: v1'deki "Analog hem input alt-modu hem ayrı ana mod" yanlış
  sayımı ("4+2+2+1=9") ve istenmeyen ekstra "seçim adımları" bandı düzeltildi.
- Bölüm 10: kaynak/plan/prompt'lar yeniden denetlendi (USART1 4.5 Mbit/s, diğer USART'lar
  2.25 Mbit/s, SPI 18 Mbit/s, I2C 400 kbit/s — datasheet'le eşleştirildi). hero v2→v4: SPI
  sinyal dağılımı ve MISO yönü hataları sırayla düzeltildi.
- Bölüm 11: iki kritik metin hatası görsel üretimden önce düzeltildi — dahili bootloader yolu
  USB DFU değil USART1; BOOT0=GND, SWD erişiminin zorunlu koşulu değil.
- Bölüm 12: BOOT seçim anlatımı tam tabloyla düzeltildi (0/X=Ana Flash, 1/0=System Memory,
  1/1=SRAM). İlk scene-07/08 çıktılarındaki ciddi teknik etiket hataları kullanıcı onayıyla
  yeniden üretilerek düzeltildi.

## 2026-07-16 — Footer değişikliği, sahne numaralandırma standardı

- **Bölüm 06'dan itibaren footer sloganı/URL'si değişti**: "Usta tahmin etmez, ölçer." /
  "akademiusta.com" (eskisi: "Önce anlamak, sonra ölçmek." / "akademiusta.com/tr"). Sadece
  ileriye dönük, Bölüm 01-05 eski haliyle kaldı.
- **Bölüm 05'ten itibaren sahne numaralandırması `scene-01-hero`'dan başlayıp boşluksuz devam
  ediyor** (Bölüm 01-04'ün eski `scene-00`/eksik-`scene-01` deseni geriye dönük değiştirilmedi).
- Bölüm 05: scene-03'te RT8183-B ilk üretimde yanlış pakette (10 pinli) çıktı; hero'nun regülatör
  crop'u ikincil referans verilerek doğru SOT-23-5 pakette yeniden üretildi — "gerçek görsel
  analizi + bileşen-tutarlılığı referansı" mekanizmasının ilk uygulaması oldu.
- Bölüm 06: gerçek kart fotoğrafından crop'lanan X1/X2 referansları kullanıldı. scene-06'nın ilk
  denemesinde X2 yanlışlıkla X1'in paketiyle çizildi (bu sahneye crop verilmemişti) — düzeltildi.
  Ders: bir bileşen bölümdeki HER sahnede görünüyorsa, referans crop'u hepsine ayrı verilmeli.
  scene-04'ün katalog kart başlık renkleri standart eşlemeyle tam örtüşmedi — küçük stil notu
  olarak kabul edildi, yeniden üretilmedi.
- Bölüm 07: curriculum-qa görsel üretimden önce 5 gerçek metin hatası buldu (D5-E5 koordinatı,
  BOOT0/R3 ve BOOT1/R4 diyagramlarının ters topolojisi, datasheet'te olmayan "BOR" terimi,
  doğrulanamayan jumper pin numaraları) — hepsi metinde düzeltildi. scene-03, R3/R4'ün CN5
  jumper'ına seri bağlı olduğunu (sabit pull-up/down değil) doğru çizdi — Bölüm 05'teki benzer
  kavramsal hatanın tekrarı önlendi.

## 2026-07-15

- Bölüm 04: tüm 5 sahne tek denemede üretildi/onaylandı. Bilinen küçük kusur: scene-02/03'te 2
  panel rozeti (teal, turuncu) standart mavi=donanım renk koduyla tam örtüşmedi — düzeltmek
  maliyetli görsel yeniden üretimi gerektirdiği için kullanıcı talimatıyla kabul edildi.

## 2026-07-14

- Bölüm 02: kapsam daraltıldı — RM0008'in ayrıntılı bölüm haritası (eski scene-05) kaldırıldı,
  yeni başlayan biri için gereksiz dağıtıcı detay olduğu değerlendirildi. Tüm 5 sahne
  üretildi/onaylandı (hero, bilinen kusuruyla kabul edildi). README'deki gerçek görseller
  (contents-page.png, introduction.png) bölüm metninin tarif ettiği bilgiyi göstermiyordu —
  ikisi kaldırılıp yerine tek gerçek sayfa (sayfa 1, features) kondu.
- Bölüm 03: tüm 4 sahne tek denemede üretildi/onaylandı.
- Repo geneli düzenleme: tüm bölümlerin (02-09) kendi `images/` klasörleri kaldırıldı, gerçek
  görseller tek paylaşılan konuma (`assets/source/`) bölüm önekli isimlerle taşındı
  (`day02-features-page.png` gibi) — bazı dosyalar birebir kopyaydı (MD5 doğrulandı).

## 2026-07-13

- Bölüm 01: scene-01 kaldırıldı (hero ile içerik örtüşmesi). Sahne referans zincirleme kusuru
  bulundu (bir sahne bir öncekini referans alınca hata birikiyor) → kalıcı kural: her sahne her
  zaman doğrudan `approved-day01.png`'ı referans alır, bir önceki üretilen sahneyi asla değil.
  Bölüm 01 mühürlendi (2026-07-14): README'deki 5 şema-koordinat/dil hatası düzeltildi
  (commit 65c661b), kullanılmayan `images/` klasörü silindi.
