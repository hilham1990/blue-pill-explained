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
- Footer (varsa): sol=proje adı, orta=Akademi Usta logosu, sağ=kısa slogan

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
