# Scene: scene-04 — Boot Modları

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı + aşağıdaki SCENE
bloğu + BOTTOM LAYOUT bloğu. Karşılaştırma/tablo tarzı görsel — scene-03'ün şema diyagramından
farklı stil.

Üretim: `tools/generate-slide.py 07-reset-ve-boot/prompts/04-boot-modlari.md 07-reset-ve-boot/slides/04-boot-modlari.png`

```text
SCENE:
Day label: "GÜN 07" — render with correct Turkish characters.
Main title: "BOOT MODLARI"
Subtitle: "Flash · System Memory · SRAM"

Central layout: a clean 3-column comparison table/card style illustration (NOT a photo, NOT a
wiring diagram) — three columns each headed by a simple memory-block icon (a chip icon for
Flash, a small server/rom icon for System Memory, a volatile-memory icon for SRAM).

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel), each
connected with a thin matching-color line to its corresponding column above, each panel
exactly one cohesive image/icon plus caption. Use ONLY the exact values given here, do not
invent any additional spec:

IMPORTANT — badge color: all three number badges (1,2,3) and all three connector lines and
all three panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Flash — BOOT0=0" — "Normal çalışma"
2 (blue): "System Memory — BOOT0=1, BOOT1=0" — "Bootloader, firmware yükleme"
3 (blue): "SRAM — BOOT0=1, BOOT1=1" — "Test, geliştirme"

Do not render any additional boot combinations or values beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card: "Reset Anında Okunur" —
"Boot modu her reset'te yeniden belirlenir"), each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta
tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline,
text only, no logo/emblem.
```
