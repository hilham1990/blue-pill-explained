# Scene: scene-03 — Clock ve Reset Hazır

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** X1/X2 kristallerinin gerçek fotoğrafları Bölüm 06'da
zaten çekilmişti: `visual-system/references/real-x1-crystal-crop.png`,
`real-x2-crystal-crop.png`. Reset devresi (R2/C2/S1) Bölüm 07'de doğrulanmıştı.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 12-sema-bastan-sona/prompts/03-clock-ve-reset.md 12-sema-bastan-sona/slides/03-clock-ve-reset.png --ref visual-system/references/real-x1-crystal-crop.png --ref visual-system/references/real-x2-crystal-crop.png`

```text
SCENE:
Day label: "GÜN 12" — render with correct Turkish characters.
Main title: "CLOCK VE RESET HAZIR"
Subtitle: "72 MHz + RTC + NRST"

Central graphic: two small side-by-side diagrams — left: "X1 (8 MHz) → PLL ×9 → 72 MHz
SYSCLK" as a simple labeled arrow chain with a small crystal icon matching the real X1
component's physical appearance from the attached reference; right: "X2 (32.768 kHz) → LSE →
RTC" as a simple labeled arrow chain with a small crystal icon matching the real X2 component's
physical appearance from the attached reference. Copy each crystal's real physical
package/shape from its respective reference image — do not swap X1 and X2's appearance. No
colored border/frame.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid orange color (matching this chapter's scene-02). Do NOT vary the
badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: an 8 MHz crystal icon matching X1's real shape): "Ana Clock — X1" — "8 MHz,
OSC_IN(PD0)/OSC_OUT(PD1)" / "PLL ×9 ile 72 MHz SYSCLK üretir"
2 (orange, icon: a small RTC/clock-face icon): "RTC Clock — X2" — "32.768 kHz,
OSC32_IN(PC14)/OSC32_OUT(PC15)" / "LSE üzerinden RTC'yi besler"
3 (orange, icon: a resistor+capacitor+button icon): "Reset Devresi" — "R2 (10kΩ) + C2 (100nF)
+ S1 butonu" / "+3.3V'tan NRST'e"
4 (orange, icon: a HIGH/LOW toggle icon): "NRST Durumu" — "HIGH → çalışıyor" / "LOW (butona
basınca) → reset"

Do not render any additional crystal, capacitor value, or pin beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "X1 — Ana
Clock", "X2 — RTC Clock", "Reset Devresi", "NRST Durumu", each with a simple icon and short
Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
