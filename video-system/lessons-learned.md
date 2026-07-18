# Lessons Learned — Video Üretimi

Bu dosya bütün müfredatlar için kalıcı video hata hafızasıdır. Yeni bir bölüm planlanmadan önce baştan sona okunur.

## Kayıt şablonu

```md
### [Müfredat / Bölüm / zaman kodu] Kısa başlık (YYYY-MM-DD)

**Önem:** BLOCKER / MAJOR / MINOR / ACCEPTED_NOISE
**Ne oldu:** Gözlemlenebilir kusur.
**Neden oldu:** Süreç veya talimattaki kök neden.
**Düzeltme:** Bu sürümde yapılan işlem.
**Önleme kuralı:** Sonraki üretimlerde uygulanacak kesin kontrol.
**Geriye dönük kontrol:** Aynı bölümde/seride hangi sahneler tarandı.
**Durum:** açık / düzeltildi / kabul edildi
```

## Başlangıç kuralları

### Durağan slaytların video sanılması

**Önem:** MAJOR
**Ne oldu:** Mevcut renderer bir görseli ses süresince sabit tutabiliyor; çıktı teknik olarak MP4 olsa da profesyonel video anlatısı oluşturmuyor.
**Neden oldu:** Renderer ön izleme için yazılmış; sahne içi odak ve hareket modeli yok.
**Düzeltme:** Araç yalnızca zamanlama/ses/altyazı prototipi olarak sınıflandırıldı.
**Önleme kuralı:** Yayın adayında her sahne için `visual_action` ve `focus_target` tanımlanmadan render aşamasına geçme.
**Geriye dönük kontrol:** Henüz video render edilmedi.
**Durum:** kural oluşturuldu

### Görsel QA kurallarının videoya otomatik taşınmaması

**Önem:** BLOCKER
**Ne oldu:** Bir görsel tek başına doğru olsa bile zoom, kırpma, ok veya seslendirme eklenince bağlantı yanlış anlaşılabilir.
**Neden oldu:** Görsel onayı video zaman çizelgesinin onayıyla aynı kabul edilebilirdi.
**Düzeltme:** Video için ayrı teknik QA kapısı oluşturuldu.
**Önleme kuralı:** Kaynak görsel mühürlü olsa bile her zaman kodunda pin, bağlantı, yön ve ses-görsel iddiasını yeniden doğrula.
**Geriye dönük kontrol:** İlk pilot Gün 01'den başlayacak.
**Durum:** kural oluşturuldu

### [Blue Pill / Gün 01 / tamamı] Altyazı öğretici alt bantları kapattı (2026-07-18)

**Önem:** MAJOR
**Ne oldu:** 1080p v1 ön izlemesinde gömülü altyazı, görsellerin alt bölümündeki soru, özet ve yöntem panellerinin üzerine geldi; aynı anda iki metin katmanı okunamaz hâle geldi.
**Neden oldu:** Genel amaçlı renderer altyazıyı varsayılan olarak görüntünün altına bindiriyor ve kaynak slaytta altyazı güvenli alanı olup olmadığını bilmiyor.
**Düzeltme:** v1 yayın adayı olarak reddedildi. Gün 01 için altyazı ayrı SRT olarak korunacak; görsele gömme ancak sahneye özel güvenli bölge tanımlanırsa yapılacak.
**Önleme kuralı:** Bir kaynak görselin alt yüzde 25'inde öğretici metin veya şema varsa altyazıyı o alanın üzerine gömme; varsayılan master çıktıda temiz video + ayrı SRT üret.
**Geriye dönük kontrol:** Gün 01'in hero, STM32, şema ve yöntem sahnelerinden alınan dört zaman kodlu karede aynı çakışma doğrulandı.
**Durum:** v2 öncesi açık

### [Blue Pill / Gün 01 Short 01 / v1] Genel zoom nesneye özel anlatımın yerine geçti (2026-07-18)

**Önem:** MAJOR
**Ne oldu:** İlk dikey pilotta sahneler kısa ve hareketliydi; ancak zoom, ilerleme çizgisi ve başlık dışında anlatılan datasheet/şema/kart nesnesini işaretleyen sahneye özel bir grafik yoktu. İki orta sahne de fazla benzer görünüyordu.
**Neden oldu:** İlk kısa-video rendererı yalnızca genel kadraj ve metin katmanlarını destekliyordu; manifestte nesneye bağlı callout alanı yoktu.
**Düzeltme:** Renderer'a sahneye özel vurgu kutusu ve etiket desteği eklendi; datasheet, şema ve gerçek kart ayrı kadrajlarla işaretlendi.
**Önleme kuralı:** Bir sahnede anlatım belirli bir nesneyi adlandırıyorsa yalnızca genel zoom kullanma; o nesne için zaman kodlu `callout`, çizgi, ok veya maske tanımla. Ardışık iki sahnede aynı kaynak kullanılıyorsa odak ve işaretlenen nesne farklı olmalıdır.
**Geriye dönük kontrol:** Gün 01 Short 01'in beş sahnesi tarandı; 2, 3 ve 4. sahneler güncellendi.
**Durum:** v2'de düzeltildi

### [Blue Pill / Gün 01 yatay pilot] Motion Canvas tarayıcı exporter performansı (2026-07-18)

**Önem:** MAJOR
**Ne oldu:** 41 saniye / 1.241 karelik Motion Canvas pilotunun yarım ölçekli FFmpeg exportu 7 dakikayı aşmasına rağmen tamamlanmadı; tarayıcı oturumu ilk denemede başka sayfaya yönlendirildiğinde render da kesildi.
**Neden oldu:** Motion Canvas resmi exporter kareleri tarayıcı üzerinden işliyor; ilk projede ön izleme ve final render yolu ayrılmamıştı, ayrıca ortak Playwright oturumu kullanılmıştı.
**Düzeltme:** Motion Canvas için izole `motioncanvas` tarayıcı oturumu oluşturuldu. Uzun süren deneme durduruldu; proje/animasyon derlemesi başarılı ve editör ön izlemesi çalışır durumda tutuldu.
**Önleme kuralı:** Önce yalnızca seçilmiş 5–10 saniyelik aralığı çeyrek ölçekte QA render et; görsel akış onaylanmadan bütün bölümü export etme. Motion Canvas renderı her zaman ayrı tarayıcı oturumunda çalıştır. Tam 1080p finali yalnızca mühürlü zaman çizelgesinden al.
**Geriye dönük kontrol:** Gün 01 pilotunda medya, ses ve 1.241 karelik timeline editörde doğrulandı; tamamlanmış MP4 henüz yok.
**Durum:** hızlı QA render yolu kurulacak

### [Blue Pill / Gün 01 / tamamı] Hareket talimatı render edilmedi (2026-07-18)

**Önem:** MAJOR
**Ne oldu:** Manifestte `visual_action` ve `focus_target` olmasına rağmen v1 renderer her görseli ses boyunca tamamen sabit tuttu; 30–65 saniyelik sahneler slayt gösterisi hissi verdi.
**Neden oldu:** Eski renderer bu alanları okumuyor; yalnızca görseli ölçekleyip ses süresince döngüye alıyor.
**Düzeltme:** v1 yalnızca süre ve Yelda ses testi olarak tutuldu, görüntü kalitesi onay sürümü sayılmadı.
**Önleme kuralı:** Renderer gerçekten uygulamadığı bir manifest alanını destekliyormuş gibi kabul etme. Yayın ön izlemesinde her sahne için en az bir göz yönlendiren hareket zaman kodunda gözle doğrulanmalıdır.
**Geriye dönük kontrol:** Gün 01'in yedi sahnesinin tamamı etkileniyor.
**Durum:** v2 öncesi açık
