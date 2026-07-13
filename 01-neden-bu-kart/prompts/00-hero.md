# Scene: scene-00-hero

**Durum:** Onaylandı (2026-07-13). Bu görsel bu pipeline üzerinden değil, doğrudan kullanıcı tarafından ChatGPT arayüzünden üretildi ve `visual-system/references/approved-day01.png` olarak referans alındı. Buraya ayrıca kaydediliyor çünkü bu serinin **görsel kimlik referansıdır** — sonraki tüm prompt'lar bu görseli örnek gösterir.

Ham prompt kullanıcıda saklı değil (ChatGPT arayüzünden üretildi), bu yüzden geriye dönük bir prompt metni yok. İleride bu sahne yeniden üretilmesi gerekirse, `master-style-prompt.md` + aşağıdaki SCENE bloğu kullanılabilir:

```text
SCENE:
Day label: "GÜN 01"
Main title: "NEDEN BLUE PILL?"
Subtitle: "Küçük bir kart, eksiksiz bir donanım laboratuvarı." (word "eksiksiz" highlighted in yellow)

Central hardware: real STM32F103C8T6 Blue Pill board photo, unmodified.

Four panels around the board, each exactly one cohesive image + short bullet text:
- Orange (top-left): "Datasheet ve Pin Dizilimi" — STM32F103C8T6, LQFP48 paket, tüm pinler dışarı çıkarılmış, güç/clock/reset/boot/debug/iletişim pinleri tam erişilebilir. Real datasheet pinout page image.
- Blue (top-right): "8.000 MHz Kristal Osilatör" — MCU'nun ana clock kaynağı, zamanlama ve iletişim bununla senkronize çalışır. Crystal close-up photo.
- Yellow (bottom-left): "BOOT0 Jumperi ve RESET Tuşu" — BOOT0: 0→Ana Flash (Normal Çalışma), 1→System Memory (Bootloader). RESET Tuşu: MCU'yu yeniden başlatır. Single close-up photo showing both.
- Teal (bottom-right): "Test ve Ölçüm: Osiloskop ve Multimetre" — Gerçek mühendislik burada başlar. Ölçebileceğin noktalar: 5V giriş, 3.3V regülatör çıkışı, VDD ve GND pinleri, OSC sinyali, RESET hattı, SWDIO/SWCLK. ONE single workbench photo with oscilloscope and multimeter together.

Bottom band, full width: "BU SERİ HANGİ SORULARA CEVAP VERİYOR?" — 6 numbered icon cards: Besleme nerede? / Clock nerede? / Reset devresi nasıl? / Boot modu ne? / Peripheral'lar nereye bağlı? / Debug nasıl yapılıyor? — each with a one-line explanation.

Footer: "Blue Pill Explained – Donanımı Okumayı Öğren" (left) · Akademi Usta logo (center) · "Kart örnek — Sorular evrensel." (right)
```
