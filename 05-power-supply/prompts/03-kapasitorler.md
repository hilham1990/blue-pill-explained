# Scene: scene-03 — Kapasitörler Neden Var?

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

```text
SCENE:
Day label: "GÜN 05" — render with correct Turkish characters.
Main title: "KAPASİTÖRLER NEDEN VAR?"
Subtitle: "Giriş · Çıkış · Bypass"

Central hardware: a close-up photo of a small PCB fragment showing the RT8183-B regulator
with several small ceramic/ tantalum capacitors surrounding it on both sides (input side and
output side), realistic surface-mount capacitors, no text labels burned into the photo itself.

IMPORTANT — chip package: RT8183-B is in a real SOT-23-5 package — a small black package with
exactly 5 pins (3 on one long side, 2 on the other), NOT an 8-pin or 10-pin SOIC/MSOP package.
An additional reference image of this exact chip (as it was correctly rendered in this
chapter's hero scene) is attached — copy that exact physical package/shape/pin arrangement,
do not reinvent a different package.

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel), each
connected with a thin matching-color line to a group of capacitors in the photo, each panel
exactly one cohesive image/icon plus caption. Use ONLY the exact values given here, do not
invent any additional spec:

IMPORTANT — badge color: all three number badges (1,2,3) and all three connector lines and
all three panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Giriş Tarafı — C7, C5" — "100 nF + 10 µF, giriş gerilimini stabilize eder"
2 (blue): "Çıkış Tarafı — C6, C10" — "10 µF + 100 nF, ani akım çekişinde 3.3V'u korur"
3 (blue): "Bypass — C15" — "100 nF, regülatörün iç referansını gürültüden korur"

Do not render any additional capacitor values or reference designators beyond what is listed
above.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card: "Kural" — "Regülatör
çıkışına her zaman kapasitör konur"), each with a simple icon and short Turkish title. Then the
same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Önce anlamak,
sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same baseline, text
only, no logo/emblem.
```
