# Scene: scene-06 — GPIO ve Debug Dışarı Çıkar

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** CN4'ün gerçek crop'u zaten var:
`visual-system/references/real-cn4-connector-crop.png` (Pin2=DIO, Pin3=DCLK — QA'de
düzeltildi, Gün 11'de bulunan aynı hata). **CN1/CN2'nin GPIO dağılımı bu turda README'nin
kendi metniyle YENİDEN doğrulandı ve düzeltildi** — gerçek dağılım basit bir "PA0-15/PB3-15"
bölünmesi değil, PA13/14 (CN4'te) ve PB2 (CN5'te) hiçbir GPIO konnektöründe yok.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 12-sema-bastan-sona/prompts/06-gpio-ve-debug.md 12-sema-bastan-sona/slides/06-gpio-ve-debug.png --ref visual-system/references/real-cn4-connector-crop.png`

```text
SCENE:
Day label: "GÜN 12" — render with correct Turkish characters.
Main title: "GPIO VE DEBUG DIŞARI ÇIKAR"
Subtitle: "CN1 · CN2 · CN4"

Central graphic: three small connector icons side by side — "CN1" (20-pin header outline),
"CN2" (20-pin header outline), and "CN4" matching the attached reference image exactly (4-pin
header, pins "4 3 2 1", with DCLK/DIO/+3.3V labels copied precisely from the reference — do
not swap DCLK and DIO). No colored border/frame.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here, do not invent any additional pin:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid orange color (matching this chapter's other scenes). Do NOT vary
the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a 20-pin header icon labeled "1"): "CN1" — "PA0-7, PB0/1/10/11, PC13-15" /
"3VB, +3.3V, GND"
2 (orange, icon: a 20-pin header icon labeled "2"): "CN2" — "PA8-12/15, PB3-9/12-15" / "+3.3V,
+5V, GND"
3 (orange, icon: a highlighted "missing pin" icon): "Ne Yok?" — "PA13/PA14 — CN4'te (SWD)" /
"PB2 — CN5'te (BOOT1 seçimi)"
4 (orange, icon: a 4-pin header icon matching the real CN4): "CN4 — Debug" — "Pin2=DIO,
Pin3=DCLK" / "ST-Link buradan bağlanır"

Do not render any pin beyond what is listed above, and do not claim a simple contiguous
PA0-PA15 or PB0-PB15 range on any single connector.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "CN1", "CN2",
"Ne Yok?", "CN4 — Debug", each with a simple icon and short Turkish title. Then the same
single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez,
ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no
logo/emblem.
```
