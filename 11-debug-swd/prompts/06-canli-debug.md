# Scene: scene-06 — Canlı Debug

**Durum:** v2 — breakpoint'ten single-step'e gerçek debug döngüsü.

Üretim: `tools/generate-slide.py 11-debug-swd/prompts/06-canli-debug.md 11-debug-swd/slides/06-canli-debug.png --mode generate`

```text
SCENE:
Day label: "GÜN 11"
Main title: "CANLI DEBUG NASIL ÇALIŞIR?"
Subtitle: "Kod satırı ile çalışan donanım arasında doğrudan bağ"

Use case: scientific-educational. Create one rich debugging workbench composition: laptop IDE
on the left, generic SWD probe in the middle, Blue Pill on the right. Connect them with a thin
SWD line. Do not render readable fake source code; show only a few abstract code lines.

Overlay one five-step debug loop with distinct literal visuals:
"1 · Breakpoint" — red dot beside highlighted code line
"2 · CPU Halt" — pause icon over the MCU
"3 · İncele" — variable panel "counter = 42" and small register grid
"4 · Single Step" — one-line step arrow and program-counter marker
"5 · Continue" — green play icon and running waveform.

Add exact explanation:
"Breakpoint geldiğinde CPU durur; SRAM, register ve değişkenler SWD üzerinden okunur."
Add caution:
"CPU durdurulduğunda gerçek-zamanlı çevre birimlerinin davranışı etkilenebilir."

Bottom band content: exactly five compact control cards:
"Breakpoint" / "Halt" / "İncele" / "Step" / "Continue".
Do not add CN4 pin numbers, BOOT0, firmware-loading steps or long readable code.
```
