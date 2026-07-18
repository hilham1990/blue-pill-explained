# Bölüm 01 — Video Planı (G1 Anlatı Tasarımı + G2 Sahne Planı)

Durum: **taslak — onay bekliyor.** Hiçbir ses/görsel üretimi yapılmadı. Kaynak: `README.md` (mühürlü metin) + 5 onaylı sahne (`scenes.json`).

## Kimlik

- Müfredat: Blue Pill Explained (STM32F103C8T6)
- Bölüm: 01 — Neden Bu Kart?
- Sürüm: v1 (taslak)
- Kaynak kilidi tarihi: 2026-07-18 (README ve 5 sahne zaten mühürlü — bkz. G0)
- Hedef izleyici: Donanımla yeni tanışan, ilk kez bir MCU kartının şemasını/datasheet'ini açacak biri
- Bölüm sonunda izleyici şunu yapabilir: Tanımadığı bir devre kartını eline aldığında "nasıl besleniyor, clock nereden geliyor, bu pin neden burada" sorularını sorabilir ve bu serinin STM32'yi değil, donanım okuma yöntemini öğrettiğini anlatabilir.

## Uzun video

- **Tek cümlelik vaat:** Bu video STM32'yi ezberletmiyor — herhangi bir donanımı okumayı öğretiyor.
- **Açılış sorusu:** Elinde tanımadığın bir devre kartı var. Nereden başlarsın?
- **Hedef süre:** ~110-130 sn (5 sahnenin `scenes.json` süre toplamı 97 sn + açılış/kapanış nefes payı)
- **Ana teknik değişmezler (BLOCKER riski taşıyanlar):**
  - STM32F103C8T6 = ARM Cortex-M3, 72 MHz, 64 KB Flash, 20 KB SRAM, LQFP48 paket
  - Şema tek sayfa, açık kaynak ("STM32 Min System Dev Board", tasarımcı notu "Free Willy")
  - Datasheet ST Microelectronics'in resmi sitesinde tamamen açık
  - "MPU" şemadaki etiket — aslında bir MCU (çekirdek+Flash+SRAM aynı çipte), README'nin kendi notuna sadık kalınacak
- **Açılış sorusu ve düşünme süresi:** Soru sorulduktan sonra 1,5-3 sn boşluk — kamera karta bakarken cevap hemen verilmez.
- **Orta bölüm mikro görevi:** İzleyiciden gerçek şema üzerinde Power Supply bloğunu bulması istenir (scene-04'ün doğal uzantısı) — bulduktan sonra "işte bu blok kartı besliyor" doğrulaması gelir.
- **Kapanış geri çağırması:** "Hatırlıyor musun, hangi 6 soruyu soracaktık?" — hero'daki 6 evrensel soru bandına dönüş; önce görsel ipucu (soru başlıkları), sonra ses doğrulaması.

### Sahne 1 — Hero: "Neden Blue Pill?" (asset: `hero.png`, ~24 sn)

| Cue | Ses ifadesi (taslak) | Kamera | Tamamlayıcı eylem | Teknik kontrol |
|---|---|---|---|---|
| `context_in` | "Elinde tanımadığın bir kart var." | Genel plan, kart merkezde | — | — |
| `target_named` | "Bu, Blue Pill — küçük ama eksiksiz bir donanım laboratuvarı." | Yaklaşma, karta doğru | — | — |
| `target_arrived` | "Datasheet'i, kristalini, boot/reset devresini aynı kartta görebiliyoruz." | Sabitle | 4 panel sırayla vurgulanır | Panel sırası: datasheet→kristal→BOOT0/RESET→ölçüm |
| `challenge_start` | "Bu seri boyunca altı soruyu bu kart üzerinden cevaplayacağız." | Hareket azalır | Alt bant kısmen gizli | — |
| `reveal` | (6 soru tek tek okunur) | Sabit, alt banda pan | 6 soru bandı açılır | Soru sırası README ile birebir |

### Sahne 2 — "Neden STM32?" (asset: `slides/02-neden-stm32.png`, ~18 sn)

| Cue | Ses ifadesi (taslak) | Kamera | Tamamlayıcı eylem | Teknik kontrol |
|---|---|---|---|---|
| `context_in` | "Apple ya da Qualcomm değil — STM32." | Genel plan | — | — |
| `target_named` | "Çünkü datasheet'i tamamen açık, şeması açık kaynak." | Yaklaşma, belge+şema paneline | — | — |
| `relation_start` | "Ucuz, yaygın ve endüstride gerçekten kullanılıyor." | Pan, kart görseline | Etiketler sırayla belirir | — |
| `relation_end` | — | Sabitle | Kısa doğrulama tepkisi | — |

**Geçiş (1→2):** Hero'nun kapanışındaki 6 soru bandından, "önce hangi çipi seçtiğimize" doğal geçiş.

### Sahne 3 — "Blue Pill'in İçinde Ne Var?" (asset: `slides/03-blue-pill-icinde-ne-var.png`, ~18 sn)

| Cue | Ses ifadesi (taslak) | Kamera | Tamamlayıcı eylem | Teknik kontrol |
|---|---|---|---|---|
| `context_in` | "Peki bu kartın kalbinde ne var?" | Genel plan, çip yakın çekim | — | — |
| `target_named` | "STM32F103C8T6 — 72 MHz'de çalışan bir ARM Cortex-M3." | Yaklaşma | — | 72 MHz, Cortex-M3 — birebir doğru söylenmeli |
| `target_arrived` | "64 KB Flash, 20 KB SRAM, dokuz iletişim arayüzü, 48 pinlik paket." | Sabitle | Etiketler sırayla belirir | 64KB/20KB/LQFP48 — birebir |

**Geçiş (2→3):** "Neden STM32" cevaplandıktan sonra "peki içinde ne var" sorusuna doğal geçiş.

### Sahne 4 — "Tek Sayfalık Açık Şema" (asset: `slides/04-tek-sayfalik-acik-sema.png`, ~18 sn)

| Cue | Ses ifadesi (taslak) | Kamera | Tamamlayıcı eylem | Teknik kontrol |
|---|---|---|---|---|
| `context_in` | "Bu bilgiler nereden geliyor? Şemadan." | Genel plan, şema | — | — |
| `challenge_start` | **Mikro görev:** "Şemada Power Supply bloğunu bulabilir misin?" | Hareket azalır, şema sabit | Cevap gizli, 2-3 sn bekleme | — |
| `reveal` | "İşte burada — kartı besleyen blok." | Yaklaşma, Power Supply bloğuna | Vurgu belirir | Konum README/scene-04 ile tutarlı olmalı |
| `evidence` | "Tek sayfa, ama gerçek — reset, clock, MPU, konnektörler hepsi burada okunabilir." | Uzaklaşma, tüm şema | — | — |

**Geçiş (3→4):** "İçindeki donanım bunlar" dedikten sonra "bunları nereden biliyoruz — şemadan" köprüsü.

### Sahne 5 — "Serinin Kuralı" (asset: `slides/05-serinin-kurali.png`, ~20 sn)

| Cue | Ses ifadesi (taslak) | Kamera | Tamamlayıcı eylem | Teknik kontrol |
|---|---|---|---|---|
| `context_in` | "Her bölümde üç soru soracağız." | Genel plan, blok diyagramı | — | — |
| `target_named` | "Bu ne? Neden burada? Sahada ne anlama gelir?" | Yaklaşma | 3 soru sırayla belirir | Sıra README ile birebir |
| `recall` | "Bu üç soruyla, sadece bu çipi değil, herhangi bir işlemcinin mimarisini okuyabilirsin." | Uzaklaşma | Hero'daki 6 soru bandına görsel geri dönüş ipucu | — |

**Kapanış:** Sahne 5'in `recall` cue'su aynı zamanda videonun genel kapanış geri-çağırmasını taşıyor — yeni bilgi eklenmiyor, sahne 1'in vaadine dönülüyor.

## Kısa video 1 — "STM32'nin datasheet'i neden açık?"

- **Tek soru:** Apple/Qualcomm değil de neden STM32 ile başlıyoruz?
- **Hook:** "Bu çipin kılavuzunu üretici ücretsiz veriyor. Telefonundakini asla vermez."
- **Kanıt:** Sahne 2'nin açık-datasheet/açık-şema karşılaştırması.
- **Sonuç:** Açık kaynak = gerçek şema üzerinde pratik yapabilme.
- **Uzun videoya köprü:** "Tam seride bu şemayı baştan sona okuyoruz."

## Kısa video 2 — "Bir kart gördüğünde sor bu 3 soruyu"

- **Tek soru:** Yeni bir devre kartına baktığında ilk ne sorarsın?
- **Hook:** Kamera tanımadık bir karta yaklaşır — "Bu ne, neden burada, sahada ne anlama gelir?"
- **Kanıt:** Sahne 5'in blok diyagramı + 3 soru uygulaması.
- **Sonuç:** Bu 3 soru herhangi bir çip için çalışır.
- **Uzun videoya köprü:** "Bu yöntemi STM32 üzerinden 12 bölüm boyunca uyguluyoruz."

## Ses kayıt listesi

| Klip | Metin | Telaffuz notu | Durum |
|---|---|---|---|
| VO-001 | Sahne 1 — hero anlatımı (yukarıdaki cue'ların birleşimi) | "STM32F103C8T6" tek nefeste, hızlanmadan | bekliyor |
| VO-002 | Sahne 2 — Neden STM32? | — | bekliyor |
| VO-003 | Sahne 3 — İçinde ne var? | "72 MHz", "Cortex-M3" net vurgulu | bekliyor |
| VO-004 | Sahne 4 — Tek sayfalık açık şema | — | bekliyor |
| VO-005 | Sahne 5 — Serinin kuralı | — | bekliyor |
| VO-S1 | Kısa video 1 | — | bekliyor |
| VO-S2 | Kısa video 2 | — | bekliyor |

## QA bulguları

| Zaman kodu | Sınıf | Bulgu | Düzeltme | Durum |
|---|---|---|---|---|
| — | — | (G3 sonrası, ön izleme kurgusundan sonra doldurulacak) | — | — |
