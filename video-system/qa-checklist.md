# Video QA Kontrol Listesi

Bu liste her ön izleme ve yayın adayı için doldurulur. “Baktım” yeterli değildir; kanıt olarak zaman kodu yazılır.

## 1. Dosya ve yapı

- [ ] Kaynak görsellerin tamamı mevcut ve doğru sırada.
- [ ] Anlatım, müzik ve efekt kanalları ayrı tutulmuş.
- [ ] 16:9 ve 9:16 çıktılar doğru çözünürlükte açılıyor.
- [ ] Başlangıç, bitiş ve seek sırasında siyah/bozuk kare yok.
- [ ] Dosya adları, bölüm numarası ve sürüm eşleşiyor.

## 2. Teknik doğruluk

- [ ] Her pin adı kaynakla karşılaştırıldı.
- [ ] Bağlantıların başlangıç ve bitiş noktaları doğrulandı.
- [ ] Ok/sinyal/enerji yönleri doğru.
- [ ] Voltaj, frekans, kapasite ve hız değerleri doğru.
- [ ] Görsel ile o anda söylenen cümle aynı teknik gerçeği anlatıyor.
- [ ] Önceki bölümlerde sabitlenen konnektör/bileşen yapısı korunuyor.

## 3. Pedagoji

- [ ] Açılış, izleyicinin problemini ilk 15 saniyede kuruyor.
- [ ] Yeni terim kullanılmadan veya kullanıldığı anda açıklanıyor.
- [ ] Her sahnede tek ana öğretim amacı var.
- [ ] Kavramdan gerçek şemaya ve saha kullanımına geçiş açık.
- [ ] Bölüm sonunda izleyicinin öğrendiği şey üç kısa maddede özetleniyor.
- [ ] Sonraki bölüme doğal köprü kuruluyor.
- [ ] Açılışta cevap verilmeden önce gerçek bir soru ve düşünme alanı var.
- [ ] Orta bölümde ana hedefle ilişkili uygulanabilir bir mikro görev var.
- [ ] Kapanışta izleyici sonucu görsel ipuçlarıyla geri çağırıyor.

## 3A. Ses–görüntü senkronu

- [ ] Her önemli cümlede `target_named`, `relation_start`, `reveal` veya `evidence` gibi bir cue var.
- [ ] Kamera hedef kelime tamamlandığında doğru noktaya ulaşmış.
- [ ] Kamera hareketi bittikten sonra işaretleme başlamış.
- [ ] Nesne tanımlandıktan sonra bağlantı çizilmiş.
- [ ] Bağlantı hedefe ulaştığında ses de sonuç ifadesine ulaşmış.
- [ ] Soru/görev sorulduktan sonra cevap animasyonundan önce düşünme boşluğu bırakılmış.
- [ ] Birbiriyle yarışan iki bağımsız animasyon yok.
- [ ] Yeni sahne, önceki görsel eylemi mantıksal olarak tamamlıyor veya dönüştürüyor.

## 4. Görsel kurgu

- [ ] Hareket, anlatılan noktaya yönlendiriyor.
- [ ] Önemli bağlantı zoom veya kırpma nedeniyle kaybolmuyor.
- [ ] Aynı hareket kalıbı yorucu biçimde tekrarlanmıyor.
- [ ] Ekran yazısı mevcut görsel yazısını kapatmıyor.
- [ ] 9:16 sürüm ayrı kadrajlanmış; yalnızca merkezden kırpılmamış.
- [ ] Yakınlaşma hedef gösteriyor; uzaklaşma parçayı sisteme geri bağlıyor.
- [ ] Aynı zoom/işaretleme kalıbı ardışık sahnelerde tekrarlanmıyor.

## 5. Ses

- [ ] Dip gürültüsü, patlama ve clipping yok.
- [ ] Cümle başları/sonları kesilmemiş.
- [ ] Teknik terimler doğru telaffuz edilmiş.
- [ ] Ses seviyesi video boyunca tutarlı.
- [ ] Müzik konuşmayı örtmüyor.
- [ ] Yapay ve aşırı işlenmiş ses hissi yok.

## 6. Altyazı ve erişilebilirlik

- [ ] Altyazı konuşmayla zaman uyumlu.
- [ ] En fazla iki satır ve okunabilir uzunlukta.
- [ ] `STM32F103C8T6`, pinler ve protokol adları elle doğrulandı.
- [ ] Altyazı önemli şema ayrıntısını kapatmıyor.
- [ ] Sessiz izleyen biri ana fikri takip edebiliyor.

## 7. Öğrenme kaydı

- [ ] Her bulgu önem sınıfı ve zaman koduyla kaydedildi.
- [ ] Yeni hata için kök neden yazıldı.
- [ ] Tekrarı önleyen kopyalanabilir kontrol kuralı yazıldı.
- [ ] Yeni kural aynı bölümün önceki sahnelerine uygulandı.
- [ ] Açık BLOCKER/MAJOR kalmadı.
