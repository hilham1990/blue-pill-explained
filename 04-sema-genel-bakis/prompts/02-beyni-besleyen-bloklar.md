# Scene: scene-02 — Beyni Besleyen ve Çalıştıran Bloklar

**Durum:** Üretiliyor (2026-07-15).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 04" — render with correct Turkish characters.
Main title: "BEYNİ BESLEYEN VE ÇALIŞTIRAN BLOKLAR"
Subtitle: "MPU · Power Supply · Crystal"

Central layout: three side-by-side hardware close-up photos (not a full board shot), one per
block, each clearly separated:
- Left: STM32F103C8T6 chip close-up, clearly legible "STM32F103C8T6" marking on the package.
- Center: a small voltage regulator IC on a PCB fragment (representing the RT8183-B power
  regulator), with nearby ceramic capacitors, clean close-up.
- Right: a small crystal oscillator component close-up (metal can crystal, two legs), clean
  close-up.

Three NUMBERED panels, each connected with a thin matching-color line to its corresponding
photo above, each panel exactly one cohesive image/icon plus caption. Use ONLY the exact
values given here, do not invent any additional spec:

IMPORTANT — badge color: all three number badges (1, 2, 3) and all three connector lines and
all three panel borders MUST be the exact same solid navy/dark-blue color (the "donanım
yakın çekim" function color). Do NOT vary the badge color per panel — no teal, no orange, no
yellow anywhere in this scene's badges/borders. This fixed color coding is used across the
entire 12-chapter series and must stay identical in every panel of this slide.

1 (blue): "MPU — U2" — "STM32F103C8T6, kartın beyni, tüm bloklar ona bağlı"
2 (blue): "Power Supply — U1" — "RT8183-B, 5V girişi 3.3V'a çevirir"
3 (blue): "Crystal — X1, X2" — "X1: 8.000 MHz ana clock · X2: 32.768 kHz RTC"

Do not render any device-summary table, pin numbers, or resistor/capacitor values beyond what
is listed above.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card can restate "Tüm
bloklar MPU'ya bağlanır" as a synthesis card), each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Önce
anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same
baseline, text only, no logo/emblem.
```
