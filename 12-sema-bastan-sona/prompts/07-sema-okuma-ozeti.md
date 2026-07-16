# Scene: scene-07 — Şema Okuma Özeti

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Kavramsal bir akış özeti, fiziksel bileşen fotoğrafı
gerekmiyor. README'nin kendi akış sırasıyla birebir tutarlı.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 12-sema-bastan-sona/prompts/07-sema-okuma-ozeti.md 12-sema-bastan-sona/slides/07-sema-okuma-ozeti.png`

```text
SCENE:
Day label: "GÜN 12" — render with correct Turkish characters.
Main title: "ŞEMA OKUMA ÖZETİ"
Subtitle: "Bu sıra her kartta aynı"

Central graphic: a clean vertical flow diagram with exactly these stages connected by downward
arrows, matching the real text exactly: "Güç geldi" → "3.3V üretiliyor" → "İşlemci besleme
aldı" → "Clock veriyor" → "Reset açıldı" → "Boot modu: Flash" → "Firmware çalışıyor" → "USB,
GPIO, LED aktif" → "SWD ile debug hazır". Each stage a small plain white box with thin navy
border, technical monospace-adjacent font. No colored border/frame around the overall content
beyond each individual box's own border.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel) placed beside
the flow, each panel exactly one cohesive icon plus a caption of AT LEAST TWO concrete
information lines, presenting the "6 soru" from the lesson text as two questions per panel.
Use ONLY the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid teal color (the "ölçüm/doğrulama" function color, matching this
series' closing "Sahada Ne Anlama Gelir?" convention — this scene plays a similar synthesis
role). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (teal, icon: a battery+clock combined icon): "1-2. Besleme, Clock" — "Besleme nerede?" /
"Clock nerede?"
2 (teal, icon: a reset+boot combined icon): "3-4. Reset, Boot" — "Reset devresi nasıl?" /
"Boot modu ne?"
3 (teal, icon: a peripheral-connector icon): "5. Peripheral'lar" — "Peripheral'lar nereye
bağlı?" / "USB, GPIO, I2C, SPI..."
4 (teal, icon: a debug-probe icon): "6. Debug" — "Debug nasıl yapılıyor?" / "SWD, JTAG, ya da
başka bir arayüz?"

Do not render any additional stage or question beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Besleme,
Clock", "Reset, Boot", "Peripheral'lar", "Debug", each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
