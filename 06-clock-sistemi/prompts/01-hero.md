# Scene: scene-01-hero — Clock Olmadan İşlemci Çalışmaz

**Durum:** v2 — clock darbesi ve komut süresi doğru ayrıldı.

Üretim: `tools/generate-slide.py 06-clock-sistemi/prompts/01-hero.md 06-clock-sistemi/hero.png --mode edit --ref visual-system/references/real-chip-x1-context-crop.png`

```text
SCENE:
Day label: "GÜN 06"
Main title: "CLOCK SİSTEMİ"
Subtitle: "72 MHz = saniyede 72 milyon clock darbesi"

Use case: scientific-educational. Use the reference to show the real oval metal-can X1 crystal
marked "8.000" beside an STM32F103C8T6 on blue PCB. Keep the crystal package physically
recognizable.

Build one explanatory timing composition around it:
left, a clean square-wave labeled "Clock darbeleri";
center, the MCU advancing through three abstract execution steps;
right, two example instruction timelines:
"Basit komut · 1 veya birkaç çevrim"
"Karmaşık işlem · birden fazla çevrim".

Add exact correction statement:
"32-bit olmak veya 72 MHz çalışmak, her darbede bir tam işlem garantisi vermez."
Add a pause state showing: "Clock durursa işlemci ilerleyemez."

Small transfer note only:
"Kristal / osilatör → PLL → sistem clock yaklaşımı birçok MCU'da görülür."
Bottom band content:
"Clock ritmi belirler; komut süresini mimari ve komut türü belirler."
Never write "Her darbede bir işlem", claim four-times performance, use numbered panels, or
invent component values beyond X1=8 MHz and SYSCLK=72 MHz.
```
