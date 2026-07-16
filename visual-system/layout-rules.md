# Layout Kuralları

`master-style-prompt.md`'nin niteliksel kurallarını somut/ölçülebilir hale getirir. Her sahne prompt'u yazılırken bu sınırlar kontrol edilir.

## Panel sayısı

- Bir slaytta **en fazla 4** yan panel (callout box).
- Panel sayısı 4'ten azsa (2-3), kalan alan büyütülmüş panellerle doldurulur — boş alan bırakılmaz.
- Her panel **tek bir bütünleşik görsel** içerir. İki alt-kareyi yan yana koyup tek panele sıkıştırmak yok (2026-07-13'te "Test ve Ölçüm" panelinde osiloskop+multimetre ayrı karelerdeydi, düzeltildi — bkz. `references/approved-day01.png`).

## Renk kodu — işlevsel gruplama

| Renk | Kullanım alanı |
|---|---|
| Turuncu | Belge/datasheet/referans kaynaklar |
| Mavi | Donanım bileşeni yakın çekimi (kristal, çip, vb.) |
| Sarı | Kontrol/buton/jumper/yapılandırma |
| Teal | Ölçüm/test/doğrulama |

Bu eşleme sabit tutulur — Bölüm 05'te "mavi = ölçüm" olup Bölüm 08'de "mavi = belge" olamaz.

## Yerleşim ızgarası

- Sol üst köşe: `GÜN 0X` rozeti (dolgulu lacivert kutu, beyaz metin — bkz. `references/approved-day01.png`; 2026-07-13 öncesi bu kuralda "dolgu yok" yazıyordu ama onaylanan tüm görseller dolgulu rozet kullanıyor, kural gerçek çıktıya göre güncellendi)
- Üst orta: ana başlık (büyük, kalın, lacivert)
- Başlığın hemen altı: tek satır alt mesaj (küçük, lacivert veya gri)
- Merkez: ana teknik nesne (kart, belge, şema) — sayfanın ~%35-40'ı
- Sol/sağ paneller: kalan alanı simetrik paylaşır
- Alt bant (varsa): tam genişlik, sonuç/akış/temel sorular
- Footer (her sahnede zorunlu, `master-style-prompt.md`'nin BOTTOM LAYOUT bloğu): sol="Akademi Usta", orta=slogan, sağ=URL — logo/amblem YOK, sadece metin. Sol/orta/sağ içeriğin kendisi zamanla değişebilir (bkz. Bölüm 06'daki slogan/URL güncellemesi), ama 3-kolonlu tek-satır YAPISI değişmez.

## Süre → sahne sayısı

| Video süresi | Ana sahne sayısı |
|---|---|
| 30-45 sn | 3-4 |
| 60 sn | 4-6 |
| 2 dk | 6-9 |
| 3 dk | 8-12 |
| 5 dk | 12-18 |

Ortalama sahne süresi 12-25 saniye aralığında kalmalı:
- Bir sahne 40 sn'yi geçiyorsa muhtemelen ikiye bölünmeli.
- Bir sahne 5 sn'nin altındaysa muhtemelen gereksiz.

## Sahne bölme mantığı

```
1 ana fikir = 1 sahne
1 teknik karşılaştırma = 1 sahne
1 ölçüm/teşhis adımı = 1 sahne
1 sonuç/sentez = 1 sahne
```

Görsel sayısı bölüm başlıklarının sayısına göre değil, bu mantığa göre belirlenir — model öneri sunar, son karar `brief.json`'da insan tarafından onaylanır.

**Bir önceki günün sahne sayısına çapalanma.** Gün 2 planlaması 2026-07-13'te ilk taslakta 5 sahne önerdi — sebep gerçek metin analizi değil, Gün 1'in 5 sahnesiydi. README'nin `##` başlıkları bu tablonun kategorilerine göre tek tek ve bağımsız sayıldığında gerçek sayı 6 çıktı. Her yeni bölüm için sahne sayısını o bölümün kendi metninden yeniden türet — bir önceki günün sayısını referans alma, hatta aynı sayıya çıksa bile gerekçe metinden gelmeli.

## 4-panel sınırını aşan alt-madde listelerini gruplama

Bir `##` başlığın altında 4'ten fazla madde/bileşen/kaynak varsa (Bölüm 04'te 6 fiziksel blok, Bölüm 05'te 6 dallı "3.3V nereye gidiyor" listesi, Bölüm 06'da 5 clock kaynağı), bunu iki yoldan biriyle çöz:

1. **Mantıksal gruplama** (tercih edilen): maddeleri ortak bir temaya göre 2-4 gruba topla, her grup bir panel olsun. Bölüm 05'in 6 dalı "MPU Beslemesi / Pull-up Dirençleri / Dışa Açılan Noktalar" olarak 3 panele indirildi; Bölüm 06'nın 5 kaynağı "Yüksek Hızlı / PLL / Düşük Hızlı" olarak 3 panele indirildi. Grup başlığı madde sayısını değil, ortak işlevi yansıtmalı.
2. **Sahneyi ikiye bölme**: gruplama pedagojik olarak zorlanıyorsa (Bölüm 04'teki 6 blok görevi, MPU/Power/Crystal'ı "çekirdek" ile Connectors/Reset/LEDs'i "destek" olarak ikiye ayırıp 2 ayrı sahne yapıldı), tek sahne yerine 2 sahne üret — panel sayısını 4'e zorlamak yerine gerçek içerik kaç panele doğal olarak sığıyorsa ona göre sahne sayısını artır.

Hangi yöntem seçilirse seçilsin, karar `brief.json`'ın `technical_risks` alanında açıkça gerekçelendirilir — "4 panel sınırına uymak için X şu şekilde gruplandı/bölündü" diye.

## Aynı konuya değinen birden fazla sahnede kasıtlı görsel farklılaştırma

Bir bölümde iki farklı sahne aynı teknik konuya (aynı bileşen, aynı sayılar) farklı açılardan değiniyorsa — Bölüm 05'te "3.3V Nereye Gidiyor?" (dağılım/hedef) ile "STM32'nin Besleme Pinleri" (dijital/analog ayrımın nedeni); Bölüm 06'da "STM32 Clock Kaynakları" (katalog/liste) ile "Blue Pill'de Clock Nasıl Akıyor?" (gerçek sayılarla akış zinciri) — bu iki sahne görsel olarak BİLİNÇLİ şekilde farklı stilde çizilir, aksi halde öğrenciye aynı görselin tekrarı gibi görünür:

- Biri **katalog/kart düzeni** (yan yana kartlar, akış oku yok) olabilirken diğeri **dikey akış diyagramı** (yukarıdan aşağı oklarla bağlı kutular) olabilir.
- Biri **dağılım/ok-takibi** (tek kaynaktan çok hedefe giden oklar) olabilirken diğeri **bölünmüş/karşılaştırma** (iki yarıya ayrılmış tek nesne) olabilir.

Prompt'ta bu farklılaştırma açıkça belirtilir ("NOT a flow diagram, NOT a photo — a catalog/card style", "a SPLIT comparison diagram, clearly different in style from a flow/tree diagram" gibi), modele bırakılmaz.

## Filtreleme/stabilize etme anlatan panellerde "önce/sonra" inseti

Bir panel kapasitör/regülatör gibi bir bileşenin **gürültü filtreleme, dalgalanma azaltma veya stabilize etme** görevini anlatıyorsa (örn. "kapasitörler neden var" gibi), panelin görseli SADECE bileşenin gerçek fotoğrafı olmamalı — bileşeni tamamen soyut bir dalga formuyla DEĞİŞTİRMEK de yanlış (component-tanıma hedefi kaybolur, bkz. Bölüm 06 kullanıcı geri bildirimi 2026-07-16). Doğrusu: gerçek bileşen fotoğrafının yanına/altına küçük bir "önce/sonra" dalga formu inseti eklemek — dalgalı/gürültülü bir sinyalin bileşen sembolünden geçip düz/temiz bir sinyale dönüştüğünü gösteren mini bir diyagram. İkisi (gerçek fotoğraf + mini diyagram) TEK bir bütünleşik panel görseli olarak kalır, biri diğerinin yerine geçmez, iki ayrı kolaj-fotoğraf da değildir. İlk uygulama: Bölüm 06 scene-03 ("Yük Kapasitörleri Neden Var?").
