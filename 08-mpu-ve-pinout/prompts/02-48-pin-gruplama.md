# Scene: scene-02 — 48 Pin Nasıl Gruplanır?

**Durum:** Üretiliyor (2026-07-16).

**Gerçek görsel analizi (madde 4c):** Bu sahne hero ile aynı fiziksel bileşeni (STM32F103C8T6 çipi)
gösteriyor, bu yüzden aynı gerçek crop (`visual-system/references/real-mpu-chip-crop.png`)
tekrar ikincil referans olarak veriliyor (bkz. lessons-learned.md, Bölüm 06 X1/X2 dersi — aynı
bileşen birden fazla sahnede görünüyorsa hepsine aynı ref verilir, "ana sahnede zaten doğru
çıktı" diye atlanmaz). Panel içerikleri README'nin "STM32F103C8T6 — 48 Pin" bölümünden birebir:
Port A (16), Port B (16, TAMAMI mevcut — QA'de düzeltilen "bazı pinler yok" hatası), Port C (3,
PC13-15), Port D (2, PD0-1), özel pinler (NRST, BOOT0, VBAT, VDD x3, VDDA, VSS x3, VSSA).

Üretim: `tools/generate-slide.py 08-mpu-ve-pinout/prompts/02-48-pin-gruplama.md 08-mpu-ve-pinout/slides/02-48-pin-gruplama.png --ref visual-system/references/real-mpu-chip-crop.png`

```text
SCENE:
Day label: "GÜN 08" — render with correct Turkish characters.
Main title: "48 PİN NASIL GRUPLANIR?"
Subtitle: "4 port, 2 özel grup"

Central hardware: the same real STM32F103C8T6 chip close-up as the attached additional
reference image — a black LQFP48 package with evenly spaced silver gull-wing leads on all
four edges, white silkscreen ST logo and part-number markings, mounted on a blue PCB
fragment. Copy the real physical package exactly, same orientation and appearance as the
reference — do not invent a different chip shape or pin spacing.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the chip photo, each panel exactly one cohesive
image/icon plus caption. Use ONLY the exact values given here, do not invent any additional
pin name or count:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "Port A + Port B" — "32 GPIO pini (16 + 16)"
2 (blue): "Port C + Port D" — "5 sınırlı GPIO (PC13-15, PD0-1)"
3 (blue): "Reset + Boot" — "NRST, BOOT0"
4 (blue): "Güç + Toprak" — "VBAT, VDDA/VSSA, VDD/VSS (x3)"

Do not render any specific pin numbers on the chip photo itself, and do not draw connector
lines that claim to point at one exact physical pin location — these are category summaries,
not a pin-by-pin schematic (that comes in a later scene).

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Port A +
Port B", "Port C + Port D", "Reset + Boot", "Güç + Toprak", each with a simple icon and short
Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
