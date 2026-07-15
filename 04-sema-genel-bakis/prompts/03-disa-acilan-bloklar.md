# Scene: scene-03 — Dışa Açılan ve Destek Blokları

**Durum:** Üretiliyor (2026-07-15).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 04" — render with correct Turkish characters.
Main title: "DIŞA AÇILAN VE DESTEK BLOKLARI"
Subtitle: "Connectors · Reset · LEDs"

Central layout: three side-by-side hardware close-up photos (not a full board shot), one per
block, each clearly separated:
- Left: a row of male pin headers on a small blue PCB fragment (representing the CN1-CN5
  connector headers), clean close-up, pins clearly visible.
- Center: a small tactile push-button on a PCB fragment with a nearby resistor and capacitor
  (representing the reset circuit: S1, R2, C2), clean close-up.
- Right: two small LEDs close-up on a PCB fragment, one glowing red, one glowing blue.

Three NUMBERED panels, each connected with a thin matching-color line to its corresponding
photo above, each panel exactly one cohesive image/icon plus caption. Use ONLY the exact
values given here, do not invent any additional spec:

IMPORTANT — badge color: all three number badges (1, 2, 3) and all three connector lines and
all three panel borders MUST be the exact same solid navy/dark-blue color (the "donanım
yakın çekim" function color). Do NOT vary the badge color per panel — no teal, no orange, no
yellow anywhere in this scene's badges/borders. This fixed color coding is used across the
entire 12-chapter series and must stay identical in every panel of this slide.

1 (blue): "Connectors — CN1-CN5" — "CN1/CN2: GPIO · CN3: USB · CN4: SWD · CN5: BOOT"
2 (blue): "Reset — S1" — "R2 10 kΩ pull-up, C2 100 nF gürültü filtresi"
3 (blue): "LEDs — D1, D2" — "D1 kırmızı: Power LED · D2 mavi: PC13'e bağlı"

Do not render any device-summary table, extra pin numbers, or values beyond what is listed
above.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card can restate "Hepsi
şemanın dış kenarında" as a synthesis card), each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Önce
anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same
baseline, text only, no logo/emblem.
```
