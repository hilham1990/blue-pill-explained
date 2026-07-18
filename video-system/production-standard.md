# Video Üretim Standardı — v1.0

## Kapsam

Bu standart, bir müfredat bölümünden şu teslimatları üretir:

- 16:9 uzun video
- 9:16 kısa video(lar)
- temiz anlatım sesi
- düzeltilmiş altyazı
- kapak ve yayın metadatası
- QA raporu ve hata hafızası kaydı

## Değişmez ilkeler

1. Senaryo README'nin sesli okunmuş hâli değildir; konuşma dilinde yeniden yazılır.
2. Her sahne tek bir öğretim amacı taşır.
3. Hareket dekorasyon değil, bakışı doğru teknik noktaya yönlendirme aracıdır.
4. Görsel ile anlatım aynı anda aynı iddiayı destekler.
5. Yanlış pin/bağlantı, ters sinyal yönü veya yanlış teknik bilgi yayın engelleyicidir.
6. Anlamı değiştirmeyen küçük tipografi/dekoratif kusur tek başına yeniden üretim nedeni değildir.
7. Uzun videodan kısa video otomatik kırpılmaz; 9:16 için yeniden kadraj ve yeniden yazım yapılır.
8. Kullanıcı onayı olmadan ücretli görsel/ses üretimi otomatik tekrarlanmaz.
9. Animasyonlar paralel dekorasyon olarak değil, birbirini tamamlayan neden-sonuç zinciri olarak çalışır: kamera hedefi bulur, vurgu hedefi doğrular, çizgi ilişkiyi açıklar, ölçüm sonucu kanıtlar.
10. Her video üç etkileşim noktası içerir: açılış sorusu, orta bölümde uygulanabilir görev ve kapanışta cevabı izleyiciden geri çağırma.
11. Ses-görüntü senkronu sahne süresi tahminiyle değil, isimlendirilmiş zaman işaretleriyle (`cue`) kurulur.

## Zorunlu anlatı ritmi

### Açılış — Merak sorusu

- İlk 3–12 saniye içinde gerçek bir problem veya soru kurulur.
- Cevap hemen verilmez; izleyiciye 1,5–3 saniye düşünme alanı bırakılır.
- Kamera önce bağlamı gösterir, sonra sorunun hedefini arar.
- Soru ekrana yeni metin bindirmek yerine ses ve görsel davranışla kurulur.

### Orta bölüm — Mikro görev

- İzleyiciden şemada bir hat, kartta bir bileşen veya ölçüm noktası bulması istenir.
- Video kısa süre durur veya yavaşlar; görev tamamlanmadan cevap animasyonu başlamaz.
- Cevap sırası: hedefi bul → bağlantıyı izle → sonucu kanıtla.
- Görev, videonun ana öğrenme hedefiyle doğrudan ilişkili olmalıdır.

### Kapanış — Geri çağırma

- Anlatıcı sonucu tekrar okumadan önce izleyiciden yöntemi/sonucu hatırlaması istenir.
- Önce görsel ipuçları gösterilir; cevap daha sonra ses ve tamamlayıcı animasyonla doğrulanır.
- Kapanış yeni bilgi eklemez; bölümde kurulan görsel dili yeniden birleştirir.

## Ses–görüntü cue standardı

Her anlatım parçası ayrı kaydedilir ve aşağıdaki cue türleriyle zamanlanır:

| Cue | Anlamı | Görsel eylem |
|---|---|---|
| `context_in` | Cümle bağlamı kuruyor | Genel plan veya kontrollü uzaklaşma |
| `target_named` | Anlatıcı hedefi ilk kez söylüyor | Kamera hedefe yaklaşmaya başlar |
| `target_arrived` | Hedef kelime/cümle tamamlandı | Kamera yerleşir, hareket durur |
| `relation_start` | Bağlantı açıklanıyor | Çizgi/enerji/sinyal hareketi başlar |
| `relation_end` | Bağlantı tamamlandı | Hedefte kısa doğrulama tepkisi |
| `challenge_start` | Soru veya görev soruldu | Görsel sakinleşir, cevap gizli kalır |
| `reveal` | Düşünme süresi bitti | Cevap animasyonu başlar |
| `evidence` | Ölçüm/kanıt söyleniyor | Prob, değer veya kaynak belge görünür |
| `recall` | Kapanış geri çağırması | Önceki görsel ipuçları birleşir |

### Senkron kuralları

- Kamera hedefe, hedefin adı söylenmeden yaklaşık 0,2–0,5 saniye önce hareket etmeye başlayabilir; kelime tamamlandığında hedefe ulaşmalıdır.
- İşaretleme kamera hareketi sürerken başlamaz. Kamera yerleşir, sonra vurgu görünür.
- Vurgu ile bağlantı çizimi aynı anda başlamaz. Önce nesne tanımlanır, sonra ilişkisi çizilir.
- Çizgi hedefe ulaştığında ses cümlesindeki sonuç kelimesiyle eşleşen kısa tepki oluşur.
- Yeni sahneye geçmeden önce önceki görsel eylem kapanır veya doğal biçimde sonraki eyleme dönüşür.
- Bir ses cümlesi boyunca ekranda birden fazla bağımsız animasyon yarışmaz.
- Cümle bittiğinde kamera hâlâ hedef arıyor olmamalıdır.

## Kamera mantığı

- `Genel plan`: yeni bağlam veya soru kurulurken.
- `Yaklaşma`: anlatıcı belirli bir bileşen/pin/blok adlandırırken.
- `Sabit inceleme`: ilişki veya teknik ayrıntı açıklanırken.
- `Hat boyunca pan`: başlangıç ve hedef arasındaki bağlantı anlatılırken.
- `Uzaklaşma`: parçanın sistemdeki yerini veya bölüm özetini gösterirken.
- Kamera hareketi bir önceki eylemin sonucundan doğmalı; rastgele zoom kullanılmaz.

## Bölüm üretim aşamaları

### G0 — Kaynak kilidi

- Bölüm README'si, `brief.json`, `scenes.json` ve bütün medya varlıkları okunur.
- Teknik iddialar birincil kaynak veya mühürlenmiş müfredatla eşleştirilir.
- Görsel `lessons-learned` ve video `lessons-learned` baştan sona okunur.
- Eksik medya, çelişki ve teknik riskler kaydedilir.

Çıkış koşulu: Kaynak listesi ve teknik değişmezler yazılıdır.

### G1 — Anlatı tasarımı

- Tek cümlelik bölüm vaadi
- Açılış sorusu
- Ön bilgi → kavram → kanıt → saha uygulaması → özet akışı
- Her sahnenin öğrenme amacı
- Uzun videodan bağımsız iki kısa video fikri

Çıkış koşulu: İzleyicinin videonun sonunda ne yapabildiği ölçülebilir biçimde yazılıdır.

### G2 — Sahne planı

Her sahne şunları içerir:

- kaynak görsel
- anlatım metni
- ekranda görünen kısa metin
- hareket/kadraj talimatı
- teknik değişmezler
- tahmini süre
- bir önceki ve sonraki sahneye geçiş
- isimlendirilmiş ses cue'ları ve her cue'ya bağlı tek görsel eylem

Çıkış koşulu: Sessiz izlendiğinde görsel akış, görselsiz dinlendiğinde anlatım anlaşılırdır.

### G3 — Ses prototipi

- Gerçek kullanıcı sesi sahne sahne kaydedilir.
- Ham kayıt kayıpsız biçimde korunur.
- Gürültü azaltma, EQ, hafif kompresyon ve seviye dengeleme uygulanır.
- Teknik terimler ve pin adları elle dinlenerek doğrulanır.

FluidVoice yalnızca STT/dikte ve isteğe bağlı kayıt geçmişi içindir; ses klonlama değildir.

Çıkış koşulu: Anlatım doğal, anlaşılır ve görsel tempoya uygundur.

### G4 — Ön izleme kurgusu

- Önce 16:9 ana kurgu hazırlanır.
- Statik görseller kontrollü yakınlaşma, pan, maskeleme ve vurgu ile kullanılır.
- Müzik anlatımı bastırmaz; teknik yoğunlukta azaltılır.
- Otomatik altyazı oluşturulur fakat elle düzeltilmeden kabul edilmez.

Çıkış koşulu: Zaman kodlu ilk izlenebilir sürüm vardır.

### G5 — Üçlü QA

- Teknik QA
- Pedagojik QA
- Medya/erişilebilirlik QA

Her bulgu `BLOCKER`, `MAJOR`, `MINOR` veya `ACCEPTED_NOISE` olarak sınıflandırılır.

Çıkış koşulu: Açık `BLOCKER` veya `MAJOR` yoktur.

### G6 — Dikey uyarlama

- Her kısa video tek soruyu cevaplar.
- 9:16 kadrajda bağlantı topolojisi ve etiketler kaybolmaz.
- İlk iki saniye problem veya şaşırtıcı sonuçla açılır.
- Altyazı güvenli bölgede ve en fazla iki satırdır.

Çıkış koşulu: Kısa içerik uzun videoyu izlemeden de anlaşılırdır.

### G7 — Öğrenme ve mühürleme

- Bulunan yeni hata `lessons-learned.md` dosyasına eklenir.
- Hatanın kök nedeni ve önleme kuralı yazılır.
- Yeni kural aynı bölümün önceki sahnelerine geriye dönük uygulanır.
- Teslimatlar checksum/isim/konum ve Git takibi açısından doğrulanır.

Çıkış koşulu: QA raporu onaylı, sürüm mühürlü ve yeniden üretilebilir durumdadır.

## Hata sınıfları

### BLOCKER — yayınlanamaz

- yanlış pin veya bağlantı
- ters sinyal/veri/enerji yönü
- yanlış teknik bilgi veya sayısal değer
- anlatım ile görselin birbirini yalanlaması
- eksik/bozuk dosya, sessiz ses kanalı veya görünmeyen medya

### MAJOR — düzeltilmeden yayınlanmaz

- kavramın pedagojik olarak yanlış anlaşılmasına yol açan sıra
- önemli etiketin kadraj dışında kalması
- okunamayan altyazı
- uzun sessizlik, sert ses seviyesi sıçraması
- kısa videonun bağlamsız kalması

### MINOR — planlı düzeltme

- anlamı etkilemeyen tempo veya geçiş kusuru
- küçük altyazı noktalama hatası
- gereksiz ama yanıltmayan hareket

### ACCEPTED_NOISE — yeniden üretim gerekmez

- anlamı değiştirmeyen tek harf/dekoratif metin kusuru
- teknik iddia olmayan küçük logo/AI dokusu
- izleyicinin bağlantıyı veya kavramı yanlış okumasına yol açmayan kozmetik sapma

## Ölçülebilir bölüm hedefleri

- İlk 15 saniyede problem ve vaat bulunur.
- Bir sahne mümkünse 8–35 saniye aralığındadır; daha uzunsa görsel alt vurgulara bölünür.
- Ekran metni anlatımın tamamını tekrar etmez.
- Her 45–75 saniyede görsel odak veya anlatı aşaması değişir.
- Her bölüm en az bir gerçek kaynak/şema kanıtı ve bir saha karşılığı içerir.
- Altyazı teknik terimleri kaynak metinle birebir eşleştirir.
