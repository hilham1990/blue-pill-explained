# Scene: scene-02 — GPIO'nun 4 Modu

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Bu sahne fiziksel bir bileşeni değil, README'nin "GPIO
Modları" bölümündeki 4 kavramsal modu gösteriyor — datasheet bölüm 2.3.21 ile doğrulanmış
("configured by software as output (push-pull or open-drain), as input (with or without
pull-up or pull-down) or as peripheral alternate function"). Merkezde yine gerçek çip fotoğrafı
kullanılacak (aynı `real-mpu-chip-crop.png`), 4 mod onun etrafında gösterilecek — Bölüm 08
scene-02'nin "kavramsal grup + gerçek çip fotoğrafı" formatıyla tutarlı.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/02-gpionun-4-modu.md 09-gpio-ve-alternate-function/slides/02-gpionun-4-modu.png --ref visual-system/references/real-mpu-chip-crop.png`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "GPIO'NUN 4 MODU"
Subtitle: "Input · Output · Alternate Function · Analog"

Central hardware: the same close-up photo of the real STM32F103C8T6 chip as the attached
reference image — black LQFP48 package, silver gull-wing leads, "STM32F103C8T6" silkscreen
text, blue PCB fragment. Copy the real physical package exactly.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the chip photo, each panel exactly one cohesive
icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact values
given here, do not invent any additional mode or sub-mode:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color. Do NOT vary the
badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (blue, icon: an arrow pointing INTO a pin, signal entering): "Input (Giriş)" — "Dışarıdan
sinyal okur" / "Alt modlar: Floating, Pull-up, Pull-down, Analog"
2 (blue, icon: an arrow pointing OUT of a pin, signal leaving): "Output (Çıkış)" — "Dışarıya
sinyal gönderir" / "Push-Pull (HIGH+LOW) veya Open-Drain (sadece LOW)"
3 (blue, icon: a pin connecting into a small peripheral-block icon): "Alternate Function" —
"Pin bir çevre birimine devredilir" / "USART, SPI, I2C, Timer, USB..."
4 (blue, icon: a small ADC waveform-to-digital-steps icon): "Analog" — "ADC/DAC için ham
sinyal" / "Dijital giriş tamponu devre dışı"

Do not render any specific pin number, port letter, or peripheral register name beyond what is
listed above — this is a conceptual mode overview, not a specific-pin example (that comes in
scene-03).

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Input
(Giriş)", "Output (Çıkış)", "Alternate Function", "Analog", each with a simple icon and short
Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
