# Video Üretim Araçları

Bu dosya, müfredat görsellerinden YouTube videoları ve TikTok/Instagram kısa videoları üretirken değerlendireceğimiz kaynakları kalıcı olarak kaydeder.

## Kaynaklar

### FluidVoice

- Kaynak: https://github.com/altic-dev/FluidVoice
- Amaç: macOS üzerinde mikrofondan konuşmayı yerel olarak yazıya dönüştürme (speech-to-text/dikte).
- Kullanım alanımız: Anlatımı kendi sesimizle kaydetmek, konuşma metnini çıkarmak ve isteğe bağlı yerel ses geçmişini ZIP olarak dışa aktarmak.
- Önemli sınır: Ses klonlama veya text-to-speech aracı değildir. Yazılmış metni kullanıcının sesini taklit ederek seslendirmez.
- Gereksinimler: macOS 15+, mikrofon izni; modele göre Apple Silicon veya Whisper ile Intel desteği.

### OpenCut

- Kaynak: https://github.com/OpenCut-app/OpenCut
- Amaç: Açık kaynak video düzenleme; CapCut alternatifi.
- Kullanım alanımız: Görselleri, anlatımı, altyazıları ve geçişleri birleştirme; yatay ve dikey çıktı hazırlama.

### claude-video

- Kaynak: https://github.com/bradautomates/claude-video
- Amaç: Videoyu indirme, karelerini çıkarma, sesini yazıya dökme ve içerik analizi için modele sunma.
- Kullanım alanımız: Oluşturulan videoların anlatım, tempo, sahne sırası ve içerik uyumunu analiz etme.

## Planlanan iş akışı

1. Ders metninden platforma uygun senaryo hazırlanır.
2. Mevcut ders görselleri sahnelere dağıtılır; gerekiyorsa ara görseller üretilir.
3. Anlatım gerçek kullanıcı sesiyle kaydedilir veya ayrıca seçilecek bir ses klonlama/TTS aracıyla üretilir.
4. OpenCut ile kurgu, altyazı, müzik ve geçişler tamamlanır.
5. claude-video benzeri analiz akışıyla teknik doğruluk, tempo ve sahne-anlatım eşleşmesi denetlenir.
6. YouTube için 16:9; TikTok, Instagram Reels ve YouTube Shorts için 9:16 çıktılar alınır.

Ayrıntılı, müfredattan bağımsız üretim ve QA standardı için [`video-system/`](video-system/) klasörüne bakın.

## Ses terminolojisi

- **Ses kaydı:** Mikrofonla gerçek sesi WAV/M4A gibi bir dosyaya almak.
- **Speech-to-text (STT):** Konuşmayı yazıya çevirmek. FluidVoice bu gruptadır.
- **Text-to-speech (TTS):** Yazıyı yapay sesle okutmak.
- **Ses klonlama:** Bir kişinin örnek kayıtlarından o kişiye benzeyen TTS sesi oluşturmak.
