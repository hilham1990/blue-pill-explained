# Scene: scene-05 — Çalışma Başlar — USB ve LED'ler

**Durum:** v2 — çalışan MCU'dan çıkan USB ve LED dalları.

Üretim: `tools/generate-slide.py 12-sema-bastan-sona/prompts/05-calisma-baslar.md 12-sema-bastan-sona/slides/05-calisma-baslar.png --mode edit --ref visual-system/references/real-usb-crop.png --ref visual-system/references/real-led-pc13-crop.png`

```text
SCENE:
Day label: "GÜN 12"
Main title: "ÇALIŞMA BAŞLAR"
Subtitle: "USB + LED'ler aktif"

Use case: scientific-educational. Place a running STM32F103/Flash block at the center with a
green RUN pulse. From it branch into three literal output circuits, not numbered panels.

USB branch: reproduce the referenced network accurately:
"PA11 / USBDM → R9 22Ω → USB D−"
"PA12 / USBDP → R11 22Ω → USB D+"
"R10 10kΩ: D+ hattından +3.3V'a pull-up".
Add host-detection icon and caption: "Host cihazın varlığını D+ pull-up üzerinden algılar."

Power LED branch:
"+3.3V → D1 kırmızı → R1 510Ω → GND"
with a steady-light icon and "Kart beslendiği sürece yanar."

User LED branch:
"+3.3V → D2 mavi → R5 510Ω → PC13"
with a two-state switch: "PC13 LOW → yanar" / "PC13 HIGH → söner".

Use the reference crops as physical-detail guides, while the main branches remain clean
educational schematics. Bottom band content:
"Firmware çalışınca işlemci yalnız hesaplamaz; dış dünyaya sinyal üretir."
Do not swap R9/R10/R11, reverse LED component order, use numbered badges, or repeat branch names
as bottom cards.
```
