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

- Sol üst köşe: `GÜN 0X` rozeti (lacivert çerçeve, dolgu yok)
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
