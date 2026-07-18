# Scene: scene-04 — Boot Modu Belirlenir

**Durum:** v2 — gerçek jumper topolojisi ve eksiksiz seçim matrisi.

Üretim: `tools/generate-slide.py 12-sema-bastan-sona/prompts/04-boot-modu.md 12-sema-bastan-sona/slides/04-boot-modu.png --mode edit --ref visual-system/references/real-reset-boot-jumper-crop.png`

```text
SCENE:
Day label: "GÜN 12"
Main title: "BOOT MODU BELİRLENİR"
Subtitle: "İki jumper, üç başlangıç yolu"

Use case: scientific-educational. Main visual is one exact conceptual CN5 circuit, not panels:
"BOOT0 · pin 44 → R3 100kΩ → CN5 BOOT0 ortak ucu";
"BOOT1 · PB2 pin 20 → R4 100kΩ → CN5 BOOT1 ortak ucu".
For each common terminal show two selectable sides, GND and +3.3V. R3/R4 must visibly end at
the jumper common terminals; never draw them as fixed pull-down resistors.

Beside the circuit place a compact 2-bit decision matrix with exactly three rows:
"BOOT0=0 · BOOT1=X → Ana Flash"
"BOOT0=1 · BOOT1=0 → System Memory / dahili bootloader"
"BOOT0=1 · BOOT1=1 → SRAM".
Use three destination icons: Flash chip, ROM bootloader doorway, SRAM memory grid.

Include a small physical CN5 inset matching the yellow 2x3 header reference and show the reset
button nearby only as an orientation landmark. Add note: "BOOT pinleri reset sırasında okunur."
Bottom band content: "Normal kullanım: BOOT0=0 → Ana Flash".
Do not say BOOT0=1 always means bootloader, omit the BOOT1 condition, use numbered badges, or
invent jumper position numbers.
```
