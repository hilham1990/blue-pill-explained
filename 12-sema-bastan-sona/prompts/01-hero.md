# Scene: scene-01-hero — Artık Her Bloğu Biliyoruz

**Durum:** v2 — tek sistem haritası ve bölge vurguları.

Üretim: `tools/generate-slide.py 12-sema-bastan-sona/prompts/01-hero.md 12-sema-bastan-sona/hero.png --mode edit --ref assets/source/blue-pill-schematic-source.webp`

```text
SCENE:
Day label: "GÜN 12"
Main title: "ŞEMA BAŞTAN SONA"
Subtitle: "Artık her bloğu biliyoruz"

Use case: scientific-educational. Build one coherent schematic-reading map, not numbered
panels. Place a simplified but recognizable overview of the referenced Blue Pill schematic in
the center. Preserve its major regions: Connectors upper-left, MCU upper-right, Power Supply,
LEDs and Reset along the bottom. Pin-level text need not be readable.

Illuminate four regions around the same sheet with distinct functional overlays:
"BESLEME" — 5V enters, RT8183-B creates 3.3V;
"CLOCK · RESET · BOOT" — timing and startup conditions;
"USB · GPIO · LED" — firmware-controlled outputs;
"SWD DEBUG" — programming and live inspection.
Connect these regions as one clockwise learning journey ending at SWD, using icons that explain
each function: power plug/regulator, crystal/reset/jumper, USB/connector/LED, debug probe.

Add a small progress ribbon: "Gücü izle → Başlangıcı doğrula → Çıkışları bul → Debug et".
Bottom band content must add one new conclusion only:
"Tek tek öğrendiğimiz bloklar artık tek bir çalışan sistem."
Do not use numbered badges, four repeated bottom cards, readable fake pin labels, or a colored
frame around the whole schematic.
```
