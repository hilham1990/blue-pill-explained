# Scene: scene-01-hero — Debug SWD

**Durum:** v2 — sinyal zinciri merkezli yeni görsel standardı.

Üretim: `tools/generate-slide.py 11-debug-swd/prompts/01-hero.md 11-debug-swd/hero.png --mode generate`

```text
SCENE:
Day label: "GÜN 11"
Main title: "DEBUG — SWD"
Subtitle: "Firmware yükle, işlemciyi durdur, içeriyi gör"

Use case: scientific-educational. Create one dominant left-to-right hardware/debug chain,
not a chip photo with generic numbered panels:
"Bilgisayar" → "Debug Probe" → "CN4" → "PA13 / PA14" → "STM32F103 CPU".
Use a laptop icon, a clearly generic unbranded probe box, a 4-pin connector icon and a
simplified Blue Pill/CPU block.

Between probe and target draw exactly two emphasized signal paths:
"SWDIO — çift yönlü veri" with arrowheads both directions;
"SWCLK — probe'dan clock" with one arrow probe → target.
Add smaller neutral support lines "GND ortak" and "3.3 V target reference".

From the CPU branch into exactly two outcomes:
"Firmware Yükleme" with file→Flash icon;
"Canlı Debug" with breakpoint, variable and register icons.

Add compact capability strip:
"Breakpoint" / "Değişken Oku" / "Register Oku" / "Adım Adım İlerle".
Add universality note: "STM32 · RP2040 · nRF52 · GD32 → SWD" and
"ESP32 → JTAG; kavram benzer, arayüz farklı".

Bottom band content: exactly three unnumbered learning cards:
"Bağlantıyı Kur" / "Firmware Yükle" / "Canlı Debug Yap".
Do not show CN4 pin numbers, BOOT0 or bootloader steps in the hero. Do not invent a branded
probe product, logo or connector pin count beyond the simple 4-pin CN4 icon.
```
