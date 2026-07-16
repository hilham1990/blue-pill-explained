# Scene: scene-04 — STM32 Clock Kaynakları

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.
Bu sahnede gerçek fotoğraf referansı YOK — kavramsal bir katalog görseli (scene-05'in akış
diyagramından kasıtlı olarak farklı stil: burada kart/katalog düzeni, orada dikey ok zinciri).

Üretim: `tools/generate-slide.py 06-clock-sistemi/prompts/04-clock-kaynaklari.md 06-clock-sistemi/slides/04-clock-kaynaklari.png`

```text
SCENE:
Day label: "GÜN 06" — render with correct Turkish characters.
Main title: "STM32 CLOCK KAYNAKLARI"
Subtitle: "Yüksek Hızlı · PLL · Düşük Hızlı"

Central layout: a clean catalog/card-style illustration (NOT a flow diagram, NOT a photo) —
three large rounded category cards side by side, each with a simple icon representing its
category (a crystal icon for external sources, a chip/circuit icon for internal RC, a
multiplier/triangle icon for PLL). This must look like a reference catalog, distinct from a
directional flow chart.

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel), each
connected with a thin matching-color line to its corresponding card above, each panel exactly
one cohesive image/icon plus caption. Use ONLY the exact values given here, do not invent any
additional spec:

IMPORTANT — badge color: all three number badges (1,2,3) and all three connector lines and
all three panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Yüksek Hızlı — HSE + HSI" — "HSE: X1 kristali 4-16 MHz · HSI: dahili RC 8 MHz"
2 (blue): "PLL" — "Frekansı katlar: 8 MHz × 9 = 72 MHz"
3 (blue): "Düşük Hızlı — LSE + LSI" — "LSE: X2 kristali 32.768 kHz · LSI: dahili RC 40 kHz"

Do not render any additional frequency values or clock-source names beyond what is listed
above.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card: "Neden Çoklu Kaynak?" —
"Her görev için doğru hassasiyet/güç dengesi"), each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
