# Scene: scene-06 — Remapping

**Durum:** v2 — USART1'in varsayılan ve remap pin çiftini karşılaştırır.

Üretim: `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/06-remapping.md 09-gpio-ve-alternate-function/slides/06-remapping.png --mode generate`

```text
SCENE:
Day label: "GÜN 09"
Main title: "REMAPPING — YENİDEN HARİTALAMA"
Subtitle: "Aynı USART1, iki olası pin çifti"

Use case: scientific-educational. Create a symmetric two-column engineering comparison.

Left column header "VARSAYILAN EŞLEME". Draw one USART1 block connected to exactly:
"TX → PA9" and "RX → PA10".

Right column header "REMAP EŞLEMESİ". Draw the same USART1 block connected to exactly:
"TX → PB6" and "RX → PB7".

Between the columns, draw one clear curved transfer arrow labeled "AFIO ile birlikte taşınır".
Below it add the exact statement: "TX ve RX çifti birlikte remap edilir; tek tek taşınmaz."

Add one compact problem/solution band:
"PA9/PA10 başka bir görevde gerekli" → "USART1'i PB6/PB7 çiftine taşı".
Add the exact explanation: "Amaç, şema tasarımında pin çakışmasını çözmektir."

Add one small warning badge: "Remap yeni bir USART oluşturmaz; yalnız pin yolunu değiştirir."

Bottom band content: exactly two wide comparison cards:
"Varsayılan: PA9 TX · PA10 RX" and "Remap: PB6 TX · PB7 RX".
Do not use the phrase "fabrika ayarı". Do not add USART2, USART3, partial remap, numbered AF
slots, extra pins, or a four-callout layout.
```
