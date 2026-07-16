# Scene: scene-04 — 3.3V Nereye Gidiyor?

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 05" — render with correct Turkish characters.
Main title: "3.3V NEREYE GİDİYOR?"
Subtitle: "MPU · Pull-up'lar · Dış Bağlantılar"

Central layout: a distribution/flow diagram — a single "+3.3V" labeled node at the top-center,
with three distinct branch lines flowing DOWNWARD to three destination icons arranged
left-to-right (a tree/flowchart style, NOT a schematic redraw, NOT a photo — this is a
conceptual flow diagram, clearly different in style from a "split/comparison" diagram):
- Left branch: an icon of the STM32F103C8T6 chip
- Center branch: an icon of two small resistors
- Right branch: icons of a pin header connector and an LED side by side

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel), each
connected with a thin matching-color line to its corresponding branch/destination above, each
panel exactly one cohesive image/icon plus caption. Use ONLY the exact values given here, do
not invent any additional spec:

IMPORTANT — badge color: all three number badges (1,2,3) and all three connector lines and
all three panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "MPU Beslemesi" — "VDD_1, VDD_2, VDD_3 (dijital) + VDDA (analog, ADC için)"
2 (blue): "Pull-up Dirençleri" — "R10 (10 kΩ): USB D+ hattını 3.3V'a çeker · R3: BOOT0'ı jumper'a bağlar"
3 (blue): "Dışa Açılan Noktalar" — "CN1/CN2 +3.3V pinleri · LED devresi"

Do not render R9 or R11 anywhere in this scene as if they were pull-up resistors — they are
NOT part of this 3.3V distribution (they are 22 ohm series resistors on the USB data lines,
unrelated to this diagram). Do not invent any additional destination beyond the three listed.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card: "Kaynak" — "RT8183-B
VOUT"), each with a simple icon and short Turkish title. Then the same single mandatory
footer row: bottom-left "Akademi Usta", bottom-center "Önce anlamak, sonra ölçmek.",
bottom-right "akademiusta.com/tr" — same bold navy font, same baseline, text only, no
logo/emblem.
```
