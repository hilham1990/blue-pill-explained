# Scene: scene-05 — Çalışma Başlar — USB ve LED'ler

**Durum:** v3 — USB klon sapması ve LED dalları birlikte doğru gösteriliyor.

Üretim: `tools/generate-slide.py 12-sema-bastan-sona/prompts/05-calisma-baslar.md 12-sema-bastan-sona/slides/05-calisma-baslar.png --mode edit --ref visual-system/references/real-usb-crop.png --ref visual-system/references/real-led-pc13-crop.png`

```text
SCENE:
Day label: "GÜN 12"
Main title: "ÇALIŞMA BAŞLAR"
Subtitle: "USB + LED'ler aktif"

Use case: scientific-educational. Place a running STM32F103/Flash block at the center. Branch
into three exact circuits.

USB branch:
"PA11 / USBDM → R9 22Ω → USB D−"
"PA12 / USBDP → R11 22Ω → USB D+"
"Bu kartın şeması: R10 10kΩ · D+ pull-up"
Directly beside it add a visible correction badge:
"USB Full-Speed uyumlu değer: 1.5kΩ"
"10kΩ klon sapması · enumerate sorunu oluşturabilir".
Never present 10kΩ as the recommended/compliant value.

Power LED branch:
"+3.3V → D1 kırmızı → R1 510Ω → GND"
"Kart beslendiği sürece yanar."

User LED branch:
"+3.3V → D2 mavi → R5 510Ω → PC13"
"PC13 LOW → yanar" / "PC13 HIGH → söner".

Use the reference crops for physical accuracy and clean circuit lines for teaching. Add one
cause/effect strip:
"Firmware çalışır → USB haberleşir · D2 yazılımla kontrol edilir · D1 gücü gösterir".
Bottom band content:
"Gerçek şemayı oku; sonra değeri datasheet şartıyla karşılaştır."
Do not swap R9/R10/R11, reverse LED order, omit the 1.5kΩ compliance correction, use numbered
panels, or repeat branch names below.
```
