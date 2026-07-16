# Scene: scene-05 — STM32'nin Besleme Pinleri

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 05" — render with correct Turkish characters.
Main title: "STM32'NİN BESLEME PİNLERİ"
Subtitle: "Dijital · Analog · VBAT"

Central layout: a SPLIT comparison diagram (clearly different in style from a flow/tree
diagram — this is a left/right divided illustration, like two labeled halves of the same
chip), showing the STM32F103C8T6 chip split down the middle with a visible dividing line:
- Left half labeled "DİJİTAL" with a slightly different fill pattern/texture
- Right half labeled "ANALOG" with a distinct fill pattern/texture
- A small separate "VBAT" battery-backup icon off to the side, connected by a thin dashed line

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel), each
connected with a thin matching-color line to its corresponding half/icon above, each panel
exactly one cohesive image/icon plus caption. Use ONLY the exact values given here, do not
invent any additional spec:

IMPORTANT — badge color: all three number badges (1,2,3) and all three connector lines and
all three panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Dijital — VDD_1,2,3 / VSS_1,2,3" — "Çekirdek ve I/O beslemesi, 3.3V / GND"
2 (blue): "Analog — VDDA / VSSA" — "ADC beslemesi, C4+C8 (100 nF) ile filtrelenmiş"
3 (blue): "VBAT" — "RTC ve yedek bellek beslemesi, 3.3V (veya pil)"

Do not render any additional pin names or values beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card: "Neden Ayrı?" —
"Analog devreler dijital gürültüye duyarlı"), each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Önce
anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same
baseline, text only, no logo/emblem.
```
