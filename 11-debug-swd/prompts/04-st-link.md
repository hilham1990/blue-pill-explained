# Scene: scene-04 — Programlama Aracı — ST-Link

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** ST-Link, Blue Pill kartının bir parçası DEĞİL — harici
bir cihaz, `assets/source/`'da gerçek bir fotoğrafı YOK. **Teknik risk (brief.json'da not
edildi): bu sahne ST-Link'i belirli bir gerçek model gibi (ör. ST-Link V2 klonu, mavi USB
çubuk) sunmaya çalışmamalı** — jenerik/ikonik bir "debug probe" temsili kullanılacak (basit bir
kutu + USB konnektör + 4 kablo çıkışı), gerçek bir ürün fotoğrafı gibi iddialı çizilmeyecek.
CN4 tarafı için gerçek crop kullanılabilir: `visual-system/references/real-cn4-connector-crop.png`.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 11-debug-swd/prompts/04-st-link.md 11-debug-swd/slides/04-st-link.png --ref visual-system/references/real-cn4-connector-crop.png`

```text
SCENE:
Day label: "GÜN 11" — render with correct Turkish characters.
Main title: "PROGRAMLAMA ARACI — ST-LINK"
Subtitle: "4 kablo, CN4'e bağlanır"

Central graphic: a simple connection diagram (NOT a specific real product photo) — on the left,
a generic/iconic debug-probe box (plain rectangle with a small USB connector icon and "ST-Link"
text label, clearly a simplified icon, not a photorealistic product rendering), on the right,
the CN4 connector matching the attached reference image (4-pin header, pins "4 3 2 1"). Between
them, exactly FOUR labeled wires: "3.3V", "SWDIO", "SWCLK", "GND", each connecting the probe
icon to its corresponding CN4 pin. No colored border/frame around this central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to its wire, each panel exactly one cohesive icon
plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact values given
here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (matching this chapter's
scene-02/03). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a small battery/voltage icon): "3.3V — Pin 1" — "Opsiyonel besleme hattı" /
"Kart zaten kendi gücüyle çalışıyorsa gerekmez"
2 (orange, icon: a data-signal icon): "SWDIO — Pin 2" — "Veri hattı (DIO)" / "PA13'e bağlı"
3 (orange, icon: a clock-pulse icon): "SWCLK — Pin 3" — "Clock hattı (DCLK)" / "PA14'e bağlı"
4 (orange, icon: a ground-symbol icon): "GND — Pin 4" — "Ortak toprak" / "En yaygın bağlantı
hatası: GND ortak değilse iletişim kurulamaz"

Do not render any brand logo or a specific realistic ST-Link product design — keep the probe
side purely iconic/simplified. Do not render any pin number beyond CN4's 4 pins.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "3.3V", "SWDIO",
"SWCLK", "GND", each with a simple icon and short Turkish title. Then the same single
mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.",
bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no
logo/emblem.
```
