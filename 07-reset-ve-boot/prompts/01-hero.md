# Scene: scene-01-hero — Temiz Başlıyor Muyum?

**Durum:** Üretiliyor (2026-07-16).

**Gerçek görsel analizi (madde 4c):** Gerçek kart fotoğrafında (`assets/source/blue-pill-card-exact-cutout.png`)
reset butonu (S1) net görünüyor — kare, metalik, ortası altın renkli bir tact-switch. Crop
`visual-system/references/real-reset-boot-jumper-crop.png` olarak kaydedildi, ikincil referans
olarak eklenecek.

Üretim: `tools/generate-slide.py 07-reset-ve-boot/prompts/01-hero.md 07-reset-ve-boot/hero.png --ref visual-system/references/real-reset-boot-jumper-crop.png`

```text
SCENE:
Day label: "GÜN 07" — render with correct Turkish characters.
Main title: "RESET VE BOOT"
Subtitle: "Nereden başlayacağım? Temiz başlıyor muyum?"

Central hardware: a close-up photo of a square tactile push-button (reset button, metallic with
a golden-brass colored center) on a blue PCB fragment, matching the exact real button shown in
the attached additional reference image — copy its real square metallic shape, do not invent a
round or differently-shaped button. Small nearby components (a resistor and capacitor) visible
beside it, no text labels burned into the photo itself.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the button photo, each panel exactly one cohesive
image/icon plus caption. Use ONLY the exact values given here, do not invent any additional
spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Reset Devresi" — "R2 (10 kΩ) + C2 (100 nF) + S1 butonu"
2 (blue): "İki Soru" — "Nereden başlayacağım? Temiz başlıyor muyum?"
3 (blue): "Evrensel Desen" — "RP2040 · nRF52 · GD32 — aynı BOOT pin mantığı"
4 (blue): "ESP32 ve Büyük SoC'ler" — "ESP32: strapping pinleri · Apple/Qualcomm: secure-boot zinciri"

Do not render any pin numbers, resistor/capacitor values beyond what is listed above, or any
additional coordinate.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Reset Devresi",
"İki Soru", "Evrensel Desen", "Büyük SoC'ler", each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta
tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline,
text only, no logo/emblem.
```
