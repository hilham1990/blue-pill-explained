# Scene: scene-01-hero — İşlemci Beslenmeden Çalışmaz

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 05" — render with correct Turkish characters.
Main title: "POWER SUPPLY"
Subtitle: "İşlemci beslenmeden çalışmaz."

Central hardware: a close-up photo of a small voltage regulator IC (SOT-23 style package,
5 pins) on a blue PCB fragment, labeled "RT8183-B" on the package, with a clear left-to-right
arrow showing "+5V" entering on the left side and "+3.3V" exiting on the right side. Do not
invent any additional markings or values on the chip beyond "RT8183-B".

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the regulator photo, each panel exactly one
cohesive image/icon plus caption. Use ONLY the exact values given here, do not invent any
additional spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "RT8183-B — LDO Regülatör" — "5V giriş, 3.3V çıkış"
2 (blue): "Neden Gerekli?" — "İşlemci 3.3V ile çalışır, 5V doğrudan verilemez"
3 (blue): "Evrensel Desen" — "ESP32 · RP2040 · nRF52 · GD32 — hepsi aynı mantık"
4 (blue): "Büyük SoC'lerde" — "Apple Silicon / Qualcomm'da bu iş bir PMIC + çoklu regülatör yapar"

Do not render any pin numbers, resistor/capacitor values, or additional specs beyond what is
listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "LDO
Regülatör", "3.3V Gerekliliği", "Evrensel Desen", "Büyük SoC'ler", each with a simple icon and
short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Önce anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold
navy font, same baseline, text only, no logo/emblem.
```
