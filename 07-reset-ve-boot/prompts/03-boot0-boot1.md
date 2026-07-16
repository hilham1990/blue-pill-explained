# Scene: scene-03 — BOOT0 ve BOOT1 Nasıl Bağlı?

**Durum:** Üretiliyor (2026-07-16).

**Teknik doğruluk notu (QA'de düzeltildi):** R3/R4 sabit pull-up/pull-down DEĞİL — MCU pini ile
CN5 jumper'ının ortak ucu arasında seri direnç. +3.3V ve GND jumper'a doğrudan (dirençsiz)
bağlı. Bu, Bölüm 05'teki R9/R3 hatasının aynısının burada tekrarlanmaması için kritik.

Üretim: `tools/generate-slide.py 07-reset-ve-boot/prompts/03-boot0-boot1.md 07-reset-ve-boot/slides/03-boot0-boot1.png`

```text
SCENE:
Day label: "GÜN 07" — render with correct Turkish characters.
Main title: "BOOT0 VE BOOT1 NASIL BAĞLI?"
Subtitle: "Sabit değil, jumper'a bağlı"

Central layout: a clean schematic-style illustration (NOT a photo) showing two simple circuit
diagrams side by side:
- Left: "BOOT0 pin (44)" on the left, a resistor symbol labeled "R3 100kΩ" in series, leading
  to a 3-way jumper block with two selectable positions labeled "+3.3V" and "GND" — the
  resistor must be drawn BETWEEN the pin and the jumper's common point, NOT between +3.3V and
  the pin.
- Right: "BOOT1 pin (20)" on the left, a resistor symbol labeled "R4 100kΩ" in series, leading
  to a similar jumper block with "+3.3V" and "GND" positions — same topology as BOOT0.

Two NUMBERED panels (large colored number badge 1,2 top-left of each panel), each connected
with a thin matching-color line to its corresponding diagram above, each panel exactly one
cohesive image/icon plus caption. Use ONLY the exact values given here, do not invent any
additional spec:

IMPORTANT — badge color: both number badges (1,2) and both connector lines and both panel
borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın çekim" function
color). Do NOT vary the badge color per panel.

1 (blue): "BOOT0 — Pin 44" — "R3 (100 kΩ), jumper'ın ortak ucuna seri bağlı"
2 (blue): "BOOT1 — Pin 20" — "R4 (100 kΩ), jumper'ın ortak ucuna seri bağlı"

IMPORTANT — do not draw R3 or R4 as if they connect directly between +3.3V/GND and the pin —
they must clearly sit IN SERIES between the MCU pin and the jumper's common terminal, with
+3.3V and GND shown as the jumper's own two selectable end positions.

Bottom section: use the mandatory bottom layout — 4 cards (map "BOOT0", "BOOT1", "Jumper →
3.3V", "Jumper → GND"), each with a simple icon and short Turkish title. Then the same single
mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.",
bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no logo/emblem.
```
