# Scene: scene-05 — Blue Pill'de Boot Jumper'ı

**Durum:** Üretiliyor (2026-07-16).

**Gerçek görsel analizi (madde 4c):** Aynı `real-reset-boot-jumper-crop.png` kullanılıyor — bu
fotoğrafta yalnızca 2 pinli, sarı, kilitli bir jumper konnektörü görünüyor (şemanın 6 pinli CN5
footprint'inin tamamı değil). Prompt bunu icat etmiyor, sadece görüneni tarif ediyor.

Üretim: `tools/generate-slide.py 07-reset-ve-boot/prompts/05-boot-jumper.md 07-reset-ve-boot/slides/05-boot-jumper.png --ref visual-system/references/real-reset-boot-jumper-crop.png`

```text
SCENE:
Day label: "GÜN 07" — render with correct Turkish characters.
Main title: "BLUE PILL'DE BOOT JUMPER'I"
Subtitle: "Firmware yükleme adımları"

Central hardware: a close-up photo of a small yellow shrouded 2-pin jumper connector on a blue
PCB fragment, matching the exact real jumper shown in the attached additional reference image —
copy its real yellow shrouded 2-pin shape exactly, do not invent additional pins or a different
connector style.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the jumper photo, each panel exactly one cohesive
image/icon plus caption, representing the 4 upload steps. Use ONLY the exact values given here,
do not invent any additional spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Adım 1" — "Jumper'ı 3.3V tarafına al"
2 (blue): "Adım 2" — "Kartı resetle veya yeniden besle"
3 (blue): "Adım 3" — "Firmware yükle (USB veya USART)"
4 (blue): "Adım 4" — "Jumper'ı GND'ye al, resetle — normal çalışma başlar"

Do not render any specific jumper pin numbers (e.g. "1-2" or "3-4") since the real physical
silkscreen numbering is not verified — only refer to "3.3V tarafı" and "GND tarafı" as given
above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "3.3V'a Al",
"Resetle", "Yükle", "GND'ye Al", each with a simple icon and short Turkish title. Then the same
single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez,
ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no
logo/emblem.
```
