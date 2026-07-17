# Scene: scene-07 — LED Örneği PC13

**Durum:** v2 — gerçek LED bölgesi ve aktif-low akım yolunu birlikte öğretir.

Üretim: `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/07-led-ornegi-pc13.md 09-gpio-ve-alternate-function/slides/07-led-ornegi-pc13.png --mode edit --ref visual-system/references/real-led-pc13-crop.png`

```text
SCENE:
Day label: "GÜN 09"
Main title: "PC13 LED NEDEN LOW'DA YANAR?"
Subtitle: "Akımı pin sağlamaz; LOW olduğunda toprağa çeker"

Use case: scientific-educational. Input image: the attached crop shows the real PC13 LED area
on the Blue Pill. Preserve the small SMD scale and board context; do not invent a large round
through-hole LED and do not add artificial glow to the photo.

Use a balanced split composition:
- Left: the real board-area close-up, with subtle labels "D2 / PC13" and "R5" only where
  visible or clearly indicated. Keep the LED unlit as in the reference.
- Right: a large, clean vertical circuit path in this exact order:
  "+3.3 V → D2 (Mavi LED) → R5 (510 Ω) → PC13".

Below the circuit draw two side-by-side state diagrams:
- "PC13 = LOW" with a continuous blue current arrow from +3.3 V through D2 and R5 into PC13;
  exact result label "Akım akar → LED yanar".
- "PC13 = HIGH" with no current arrow and equal-potential marks; exact result label
  "Potansiyel farkı yok → LED söner".

Add one compact identity note: "PC13-TAMPER-RTC: aynı fiziksel pin GPIO çıkışı veya RTC tamper
girişi olarak kullanılabilir."

Bottom band content: exactly four unnumbered chain cards:
"+3.3 V" / "D2 — Mavi LED" / "R5 — 510 Ω" / "PC13 — Akımı LOW'da çeker".
Do not reverse D2 and R5, do not say HIGH turns the LED on, do not add another resistor or LED,
do not show the whole board.
```
