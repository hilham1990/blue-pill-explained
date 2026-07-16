# Scene: scene-02 — Reset Türleri

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı + aşağıdaki SCENE
bloğu + BOTTOM LAYOUT bloğu. Katalog/kart tarzı görsel (fotoğraf değil, kavramsal ikon seti).

Üretim: `tools/generate-slide.py 07-reset-ve-boot/prompts/02-reset-turleri.md 07-reset-ve-boot/slides/02-reset-turleri.png`

```text
SCENE:
Day label: "GÜN 07" — render with correct Turkish characters.
Main title: "RESET TÜRLERİ"
Subtitle: "Güç · Buton · Watchdog · Yazılım"

Central layout: a clean catalog/card-style illustration (NOT a photo, NOT a flow diagram) —
four large rounded category cards side by side, each with a simple icon (a power-plug icon for
power-related, a button icon for external button, a dog/timer icon for watchdog, a
gear/software icon for software).

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to its corresponding card above, each panel exactly
one cohesive image/icon plus caption. Use ONLY the exact values given here, do not invent any
additional spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Güç Kaynaklı — POR, PDR" — "Kart ilk beslendiğinde / gerilim düştüğünde"
2 (blue): "Buton — NRST" — "Butona basıldığında"
3 (blue): "Watchdog — IWDG, WWDG" — "Yazılım kilitlendiğinde"
4 (blue): "Yazılım" — "Yazılım kendi kendini resetlediğinde"

Do not render "BOR" or "Brown-out Reset" anywhere in this scene — it is not a real STM32F103
reset type. Do not render any additional reset types or acronyms beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Güç Kaynaklı",
"Buton", "Watchdog", "Yazılım", each with a simple icon and short Turkish title. Then the same
single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez,
ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no
logo/emblem.
```
