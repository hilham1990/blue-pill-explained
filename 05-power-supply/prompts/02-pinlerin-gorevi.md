# Scene: scene-02 — Pinlerin Görevi

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 05" — render with correct Turkish characters.
Main title: "PİNLERİN GÖREVİ"
Subtitle: "5 pin, 5 görev"

Central hardware: a close-up photo of the RT8183-B regulator IC (SOT-23 style, 5 pins) on a
blue PCB fragment, each of its 5 pins visible and clearly separated, no text labels burned
into the photo itself (labels come from the panels below).

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to a specific pin on the regulator photo, each panel
exactly one cohesive image/icon plus caption. Use ONLY the exact values given here, do not
invent any additional spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "VIN" — "+5V giriş gerilimi"
2 (blue): "VOUT" — "+3.3V çıkış gerilimi"
3 (blue): "EN (Enable)" — "+5V düğümüne bağlı, regülatörü aktif eder"
4 (blue): "GND + BP" — "GND: toprak · BP: C15 (100 nF) ile gürültü filtresi"

Do not render any additional pin numbers or values beyond what is listed above. EN must be
shown as connected to the +5V node (a short wire to the same net as VIN), not as a floating or
disconnected pin.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "VIN", "VOUT",
"EN", "GND + BP", each with a simple icon and short Turkish title. Then the same single
mandatory footer row: bottom-left "Akademi Usta", bottom-center "Önce anlamak, sonra
ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same baseline, text only,
no logo/emblem.
```
