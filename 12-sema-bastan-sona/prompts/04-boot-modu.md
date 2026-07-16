# Scene: scene-04 — Boot Modu Belirlenir

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Gerçek CN5 jumper fotoğrafı Bölüm 07/08'de zaten
çekilmişti: `visual-system/references/real-reset-boot-jumper-crop.png`. **QA'de düzeltilen
kritik nokta:** R3/R4 SABİT pull-down DEĞİL — ikisi de CN5'in kendi ortak ucuna seri bağlı,
GND/+3.3V jumper'ın seçilebilir iki tarafı. Bu, Bölüm 05/07/08'de tekrar tekrar düzeltilen
aynı kavramsal hatanın Gün 12'de yeniden ortaya çıkmış hali — prompt bunu açıkça doğru
gösterecek.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 12-sema-bastan-sona/prompts/04-boot-modu.md 12-sema-bastan-sona/slides/04-boot-modu.png --ref visual-system/references/real-reset-boot-jumper-crop.png`

```text
SCENE:
Day label: "GÜN 12" — render with correct Turkish characters.
Main title: "BOOT MODU BELİRLENİR"
Subtitle: "R3/R4 sabit değil, jumper seçer"

Central graphic: a clean schematic diagram (NOT a photo for the main diagram) showing: "BOOT0
(pin 44) ── R3 (100kΩ) ── [CN5 ortak uç]" with the CN5 jumper block showing two selectable
side connections "+3.3V" and "GND" branching from the common point — explicitly showing R3
goes to the JUMPER'S COMMON terminal, NOT directly to GND. Below it, the same structure for
"BOOT1 (PB2, pin 20) ── R4 (100kΩ) ── [CN5 ortak uç]". No colored border/frame around this
central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here, do not invent any additional pin or resistor:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid yellow/amber color (the "kontrol/jumper" function color). Do NOT
vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (yellow, icon: a resistor-to-jumper schematic icon): "BOOT0 — Pin 44" — "R3 (100kΩ) →
jumper'ın ortak ucu" / "Sabit pull-down DEĞİL"
2 (yellow, icon: a small jumper cap icon matching the real photo's yellow header): "Jumper
Konumu" — "GND tarafı → Flash'tan başla (varsayılan)" / "3.3V tarafı → Bootloader"
3 (yellow, icon: a resistor-to-jumper schematic icon, mirrored): "BOOT1 — PB2, Pin 20" — "R4
(100kΩ) → CN5'in kendi ortak ucu" / "Aynı mantık, sabit pull-down DEĞİL"
4 (yellow, icon: a real photo of the physical yellow 2x3 jumper header, matching the attached
reference): "Fiziksel Jumper" — "CN5, kartın üzerinde sarı 2x3 header" / "Reset butonunun
hemen yanında"

Do not render R3/R4 as if directly wired to GND — they must visibly connect to the jumper's
common terminal, matching the attached reference image's real topology.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "BOOT0",
"Jumper Konumu", "BOOT1", "Fiziksel Jumper", each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta
tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline,
text only, no logo/emblem.
```
