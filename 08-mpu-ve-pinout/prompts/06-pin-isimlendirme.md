# Scene: scene-06 — Pin İsimlendirme Mantığı

**Durum:** Üretiliyor (2026-07-16).

**Gerçek görsel analizi (madde 4c):** Bu sahnenin merkezi bir donanım fotoğrafı ya da şema
değil, tek bir pin adının (`PA0/WKUP/USART2_CTS/ADC12_IN0/TIM2_CH1_ETR`) parçalanması — datasheet
Table 5'ten (Doc ID 13587 Rev 11) doğrulanmış, README'de zaten QA'de düzeltilmiş haliyle duruyor
(yanlışlıkla eklenmiş "/NRST" çıkarılmıştı). Gerçek bir fotoğraf/şema referansına ihtiyaç yok —
bu sahne saf bir "etiket okuma" diyagramı.

**4-panel sınırını aşan liste grupla​ması (layout-rules.md madde "4-panel sınırını aşan
alt-madde listeleri"):** Pin adında 5 ayrı parça var (PA0, WKUP, USART2_CTS, ADC12_IN0,
TIM2_CH1_ETR). ADC12_IN0 ve TIM2_CH1_ETR ("ölçüm & zamanlama" ortak teması) TEK panelde
birleştirildi, toplam 4 panele indirildi.

Üretim: `tools/generate-slide.py 08-mpu-ve-pinout/prompts/06-pin-isimlendirme.md 08-mpu-ve-pinout/slides/06-pin-isimlendirme.png`

```text
SCENE:
Day label: "GÜN 08" — render with correct Turkish characters.
Main title: "PİN İSİMLENDİRME MANTIĞI"
Subtitle: "Aynı pin, farklı işlev"

Central graphic: the exact text string "PA0/WKUP/USART2_CTS/ADC12_IN0/TIM2_CH1_ETR" rendered
large in a monospace technical font on a plain light background, broken into 5 visually
distinct segments separated by "/" characters, each segment in a slightly different shade so
the eye can tell them apart: "PA0" then "WKUP" then "USART2_CTS" then "ADC12_IN0" then
"TIM2_CH1_ETR". Do NOT render any other pin name, number, or schematic symbol — this is a
single label being decoded, not a chip or schematic. From this central label, four thin lines
fan out downward/sideways to the four panels described below, each line originating from the
matching segment(s) of the label (the "PA0" segment connects to panel 1, "WKUP" to panel 2,
"USART2_CTS" to panel 3, and BOTH "ADC12_IN0" and "TIM2_CH1_ETR" to panel 4).

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to its segment of the central label, each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here, do not invent any additional pin name or function:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (the "belge/datasheet kaynağı"
function color, matching the two previous scenes in this chapter). Do NOT vary the badge color
per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon that matches its own specific
content, not a repeated generic icon:
1 (orange, icon: a simple GPIO pin/port icon): "PA0 — Temel Kimlik" — "Port A, Pin 0" / "GPIO:
genel giriş/çıkış olarak da kullanılabilir"
2 (orange, icon: a power/sleep-wake icon): "WKUP — Uyandırma" — "Standby modundan uyandırma
sinyali" / "Sadece bu pine özel bir görev"
3 (orange, icon: a serial-communication/signal-arrows icon): "USART2_CTS — Haberleşme" —
"USART2 akış kontrolü (Clear To Send)" / "Seri haberleşme modunda kullanılır"
4 (orange, icon: a combined waveform+clock icon): "ADC12_IN0 & TIM2_CH1_ETR — Ölçüm &
Zamanlama" — "ADC12_IN0: analog-dijital çevirici kanalı" / "TIM2_CH1_ETR: Timer 2 harici
tetikleme girişi"

Do not render any pin's alternate-function name beyond what is explicitly listed above, and
do not invent any additional segment for the label.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "PA0 (GPIO)",
"WKUP (Uyandırma)", "USART2_CTS (Haberleşme)", "ADC/TIM (Ölçüm-Zaman)", each with a simple
icon matching its panel's icon and short Turkish title. Then the same single mandatory footer
row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right
"akademiusta.com" — same bold navy font, same baseline, text only, no logo/emblem.
```
