# Scene: scene-03 — Şemada MPU Bloğu — U2

**Durum:** Yeniden üretiliyor (2026-07-16, curriculum-qa düzeltmesi).

**Gerçek görsel analizi (madde 4c) — DÜZELTİLDİ:** İlk üretimde bu dosyanın önceki hali
`visual-system/references/real-u2-schematic-crop.png`'yi YANLIŞ özetlemişti ("sağda Port B+C,
üstte besleme" diye). Referans görsel yeniden piksel seviyesinde okundu — gerçek yerleşim:
**SOL sütun** = Port A'nın TAMAMI (A0-A15, pin 10-17/29-38) + Port B'nin TAMAMI (B0-B15, pin
18-22/25-28/39-46) + C13-C15 (pin 2-4) — hepsi TEK sütunda, üst üste. **SAĞ sütun** = NRST(7),
BOOT0(44), OSC_OUT/PD1(6), OSC_IN/PD0(5), VBAT(1), VDDA(9), VSSA(8), VDD_1/2/3(24/36/48),
VSS_1/2/3(23/35/47). Sembolün ÜSTÜNDEN hiç pin çıkmıyor — sadece "U2 / STM32F103C8T6" etiketi
var orada, kablo yok. Bu üretimde bu düzeltilmiş okumaya göre çizilecek.

**Kullanıcı geri bildirimi uygulandı (2026-07-16, bkz. lessons-learned.md):** scene-02'nin
panelleri fazla kuru/genel bulundu (tek satır özet + aynı jenerik ikon her panelde). Bu
sahnede her panel en az 2 somut bilgi satırı taşıyor VE her panel için FARKLI, anlamlı bir ikon
açıkça belirtiliyor.

Üretim: `tools/generate-slide.py 08-mpu-ve-pinout/prompts/03-sema-mpu-blogu.md 08-mpu-ve-pinout/slides/03-sema-mpu-blogu.png --ref visual-system/references/real-u2-schematic-crop.png`

```text
SCENE:
Day label: "GÜN 08" — render with correct Turkish characters.
Main title: "ŞEMADA MPU BLOĞU — U2"
Subtitle: "Sol · Sağ — her pinin bir yeri var"

Central hardware: a clean technical schematic diagram of the U2 IC block, matching the
attached additional reference image EXACTLY — a rectangular IC symbol labeled "U2 /
STM32F103C8T6", thin black lines, pin names and pin numbers printed in a monospace-style
font on both sides of the box ONLY (left side: A0-A15 labels with pin numbers 10-17/29-38,
then B0-B15 with pin numbers 18-22/25-28/39-46, then C13-C15 with pin numbers 2-4, all
stacked in ONE column with their full alternate-function names; right side: NRST(7),
BOOT0(44), OSC_OUT/PD1(6), OSC_IN/PD0(5), VBAT(1), VDDA(9), VSSA(8), VDD_1(24)/VDD_2(36)/
VDD_3(48), VSS_1(23)/VSS_2(35)/VSS_3(47)). Do NOT draw any pins coming out of the TOP of the
box — the box only has a left column and a right column, nothing else. This must look like a
real schematic drawing (white background, thin precise lines, technical monospace pin
labels) — NOT a photograph, NOT a 3D rendering of a chip package. Copy every pin label and
every pin number character-by-character from the attached reference image — do not
duplicate, skip, swap, or invent any single digit or letter (each pin number must appear
exactly once, in the exact position shown in the reference).

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the schematic block, each panel exactly one
cohesive image/icon plus a caption of AT LEAST TWO concrete information lines (not just a
single generic count). Use ONLY the exact values given here, do not invent any additional
pin name or function:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color, distinct from the blue used in the previous two scenes). Do NOT vary the
badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon that matches its own specific
content, not a repeated generic chip icon:
1 (orange, icon: a signal/waveform pulse icon): "Sol Taraf — Tüm GPIO (32 Pin)" — "Port A
(PA0-15): ADC, Timer, USART1/2, USB, Debug" / "Port B (PB0-15) + PC13-15: I2C, SPI, Timer,
USART3, RTC/kristal — AYNI sütunda"
2 (orange, icon: a power-button/reset icon): "Sağ Taraf — Reset, Boot & Kristal" — "NRST (pin
7): sıfırlama" / "BOOT0 (pin 44): açılış modu" / "OSC_IN/OSC_OUT (pin 5/6): 8 MHz kristal"
3 (orange, icon: a battery/power icon): "Sağ Taraf — Besleme (9 Pin)" — "VDD/VSS x3: dijital
güç ve toprak" / "VDDA/VSSA/VBAT ayrı: analog ve RTC gürültüden korunur"
4 (orange, icon: a magnifying-glass-on-connector icon): "USB ve Debug — Hep Sol Sütunda" —
"USBDM/USBDP: A11/A12 pinleri" / "JTMS/JTCK/JTDI: A12'nin hemen altında, aynı sütunda"

Do not render any pin's alternate-function name beyond what is explicitly listed above, and
do not invent grid-coordinate labels (like A-E/1-8 schematic sheet coordinates) — this scene
shows the IC symbol only, not the full sheet.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Tüm GPIO
(Sol)", "Reset/Boot/Kristal (Sağ)", "Besleme (Sağ)", "USB + Debug (Sol Sütun)", each with a
simple icon matching its panel's icon and short Turkish title. Then the same single mandatory
footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right
"akademiusta.com" — same bold navy font, same baseline, text only, no logo/emblem.
```
