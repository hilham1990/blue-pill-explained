# Gün 01 Video Planı — Neden Bu Kart?

## Kimlik

- Müfredat: Blue Pill Explained
- Bölüm: 01 — Neden Bu Kart?
- Sürüm: plan-v1
- Hedef izleyici: Elektroniğe yeni başlayan teknisyen/tamirci
- Bölüm sonunda izleyici şunu yapabilir: Blue Pill'in neden öğretim kartı seçildiğini ve seride her donanım için sorulacak üç temel soruyu açıklayabilir.

## Uzun video

- Tek cümlelik vaat: Bu küçük kartı ezberlemek yerine herhangi bir elektronik kartı okumaya nereden başlayacağını öğreneceksin.
- Açılış sorusu: Elinde hiç tanımadığın bir işlemci kartı varsa ilk olarak neye bakarsın?
- Hedef süre: 5–7 dakika
- Ana teknik değişmezler: `STM32F103C8T6`, Cortex-M3, 72 MHz, 64 KB Flash, 20 KB SRAM, LQFP48; şemadaki “MPU” etiketi teknik olarak MCU'yu ifade eder.
- Açılış sorusu: “Elinde hiç tanımadığın bir elektronik kart varsa ilk olarak neyi incelersin?” — cevap öncesi 2,2 saniye düşünme alanı.
- Orta görev: Datasheet'ten şemaya geçen hattın işlemcide ulaştığı noktayı izleyicinin gözle bulması.
- Kapanış geri çağırması: Kart → belge → şema → ölçüm zincirini anlatıcı sonucu söylemeden önce görsel olarak yeniden birleştirmek.

## Gün 01 cue zinciri

| Cue | Ses/Görev | Kamera ve tamamlayıcı eylem |
|---|---|---|
| `context_in` | Bilinmeyen kart bağlamı | Kart yakın planından kontrollü genel plana çık |
| `challenge_start` | “İlk olarak neyi incelersin?” | Kamera durur, tarama ışığı söner, 2,2 sn bekle |
| `reveal` | “Önce belgesini açarız” | Datasheet bölgesine yaklaş; varınca belgeyi aydınlat |
| `relation_start` | “Aynı bağlantıyı şemada takip ederiz” | Belgedeki pinden şemaya çizgi başlat |
| `challenge_start` | “Hangi noktaya ulaştığını bul” | Çizgiyi tamamlamadan dur ve cevap alanını gizle |
| `reveal` | Düşünme süresi biter | Çizgiyi hedef pine kadar tamamla |
| `evidence` | “Gerçek kart üzerinde ölçeriz” | Şemadan karta dönüş; kamera yerleşince problar gelsin |
| `recall` | Yöntemi hatırla | Kart, belge, şema ve ölçümü tek akışta birleştir |

| Zaman | Kaynak | Anlatım amacı | Görsel hareket | Ekran metni | Teknik kontrol |
|---|---|---|---|---|---|
| 00:00–00:15 | `hero.png` | Bilinmeyen kart problemine kanca | Kart yakın planından altı soruya kontrollü açılma | “Bu kartı nereden okumaya başlarsın?” | Görseldeki teknik etiketleri yeni oklarla değiştirme |
| 00:15–00:35 | `hero.png` | Bölüm vaadi ve seri yaklaşımı | Üç ana soruyu sırayla aydınlat | “Bu ne? Neden burada? Sahada ne demek?” | Altı evrensel soru ile üç metodoloji sorusunu karıştırma |
| 00:35–01:30 | `slides/02-neden-stm32.png` | Açık belge ve erişilebilirlik gerekçesi | Belge → kart → kullanım alanı odağı | “Açık belge · Açık şema · Gerçek donanım” | “Tam açık kaynak donanım” yerine belge/şema erişimini doğru ifade et |
| 01:30–02:45 | `slides/03-blue-pill-icinde-ne-var.png` | Kartın yeterince basit ama gerçek olduğunu göster | Çipten çekirdek, bellek ve arayüzlere sırayla yaklaş | “STM32F103C8T6” | Sayısal değerleri ve paket tipini kaynakla doğrula |
| 02:45–03:55 | `slides/04-tek-sayfalik-acik-sema.png` + gerçek şema | Tek sayfalık şemanın öğrenme avantajı | Genel şemadan power/clock/reset bölgelerine pan | “Karmaşık değil, ama gerçek” | Şemada olmayan yeni bağlantı/etiket bindirme |
| 03:55–05:25 | `slides/05-serinin-kurali.png` | Üç soruluk yöntemi öğret | Üç soruyu ayrı ayrı vurgula; blok diyagramında örnekle | “Bu ne? · Neden burada? · Sahada ne anlama gelir?” | GPIO/APB örnekleri README ile eşleşmeli |
| 05:25–06:00 | tüm sahnelerden kısa geri çağırma | Öğrenmeyi özetle ve Gün 02'ye köprü kur | Üç kısa eşleşmiş kesit; hızlı ama okunabilir | “Sonraki: Datasheet nasıl okunur?” | Yeni teknik iddia ekleme |

## Anlatım tonu

- Öğretmen gibi yukarıdan konuşma; birlikte kartı inceliyormuş gibi anlat.
- İlk kullanımda “datasheet”, “clock” ve “boot” terimlerini bir cümleyle açıkla.
- README'deki listeyi okumak yerine her özelliğin bu kartı neden öğretilebilir yaptığına bağla.
- Hız hedefi yaklaşık 135–155 Türkçe kelime/dakika; teknik değerlerde kısa duraklama bırak.

## Kısa video 1

- Tek soru: Neden eğitim için Apple veya Qualcomm yerine STM32 seçiyoruz?
- Hook: “İşlemci öğrenmek için en güçlü çipi değil, en okunabilir çipi seçmelisin.”
- Kanıt: Açık datasheet, erişilebilir şema ve gerçek kart.
- Sonuç: Blue Pill amaç değil, donanım okuma laboratuvarıdır.

## Kısa video 2

- Tek soru: Bir elektronik karta bakınca sorulacak ilk üç soru nedir?
- Hook: “Kartın adını bilmiyor olsan bile bu üç soruyla başlayabilirsin.”
- Kanıt: Bu ne? Neden burada? Sahada ne anlama gelir?
- Sonuç: Ezber yerine tekrar kullanılabilir inceleme yöntemi.

## İlk pilotun kabul koşulları

- İlk onay turunda Yelda ile 30–45 saniyelik açılış prototipi hazırlanmalı; görsel kurgu onayından sonra gerçek kullanıcı sesiyle değiştirilmelidir.
- Hero üzerinde en az üç farklı odak hareketi denenmiş olmalı.
- Açılış altyazısı 16:9 ve 9:16 güvenli bölgede kontrol edilmeli.
- Teknik QA'da açık BLOCKER/MAJOR bulunmamalı.
- Bulunan her yeni hata `video-system/lessons-learned.md` içine işlenmeli.
