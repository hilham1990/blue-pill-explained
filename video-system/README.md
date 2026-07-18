# Yeniden Kullanılabilir Video Üretim Sistemi

Bu klasör tek bir müfredata değil, metin + görsel varlığı bulunan bütün Akademi Usta müfredatlarına uygulanacak üretim standardıdır.

## Tek doğruluk kaynakları

- Üretim ve kalite kapıları: [`production-standard.md`](production-standard.md)
- Her üretimden önce kullanılan kontrol listesi: [`qa-checklist.md`](qa-checklist.md)
- Tekrarlanmaması gereken video kusurları: [`lessons-learned.md`](lessons-learned.md)
- Bölüm planı şablonu: [`templates/episode-plan.md`](templates/episode-plan.md)

## Öğrenme döngüsü

```text
Kaynakları doğrula → Planla → Ön izleme → QA → Düzelt → Yayın adayı
                                     ↓
                              Kusuru sınıflandır
                                     ↓
                         lessons-learned'e kural ekle
                                     ↓
                      Aynı bölümün eski sahnelerini tara
                                     ↓
                         Sonraki üretimde kuralı uygula
```

Bir hata yalnızca düzeltilmiş sayılmaz. Kök nedeni ve tekrarını engelleyen kontrol yazılmadan üretim sistemi öğrenmiş sayılmaz.

