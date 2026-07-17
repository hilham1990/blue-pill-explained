# Scene: scene-01-hero — GPIO ve Alternate Function

**Durum:** v4 — Gün 09'un video/slayt açılışı için sadeleştirilmiş yeni üretim promptu.

Üretim: `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/01-hero.md 09-gpio-ve-alternate-function/hero.png --mode generate`

```text
SCENE:
Day label: "GÜN 09"
Main title: "GPIO VE ALTERNATE FUNCTION"
Subtitle: "Aynı pin, farklı görev — seçimi yazılım yapar"

Use case: scientific-educational. Asset type: 16:9 curriculum hero, readable in video and
presentation mode.

Create one dominant technical signal-routing diagram, not a chip photograph. At the center,
draw a clean box labeled "GPIO Çoklayıcı / MUX". On its left place one physical pin labeled
"Fiziksel Pin". On its right place exactly four destination boxes: "DIGITAL INPUT",
"DIGITAL OUTPUT", "ANALOG INPUT", "ALTERNATE FUNCTION". Highlight only one route at a time
with a solid navy arrow; draw the other possible routes as thin pale lines. Add the exact
caption: "Bir pin çok görevli olabilir; aynı anda yalnızca seçilen görev aktiftir."

Below "ALTERNATE FUNCTION", show four small internal peripheral labels connected as possible
destinations: "USART", "SPI", "I2C", "TIMER / PWM". Do not use AF1/AF4/AF7 numbering.

Add two compact supporting panels only:
- Left panel header "GPIO Nedir?". Body: "Genel Amaçlı Giriş / Çıkış"; "Sabit değil,
  yapılandırılabilir"; one sensor → pin and one pin → LED mini-diagram.
- Right panel header "Temel Kural". Body: "Fonksiyonlar datasheet'te önceden tanımlıdır";
  "Yazılım uygun modu seçer"; "Aynı pin iki görevi aynı anda yapmaz".

Add one narrow universality strip below the main diagram with exactly these names:
"STM32 · RP2040 · nRF52 · GD32 · ESP32" and the caption "Kayıt isimleri değişir, temel kavram
değişmez." Do not draw five large chip photos; use five small consistent chip symbols.

Bottom band content: exactly three unnumbered learning-goal cards:
"Modu Ayırt Et" / "Pin Fonksiyonunu Oku" / "Bağlı Devreden Görevi Çıkar".
No extra procedure row, no technical register values, no specific pin names, no decorative
hardware, no duplicated panel content.
```
