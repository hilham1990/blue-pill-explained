# Scene: scene-03 — SPI

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Pin atamaları (PA4-7 SPI1, PB12-15 SPI2) datasheet
Table 5 ile doğrulandı (curriculum-qa, 2026-07-16). Aynı U2 şema sembolü referans olarak
verilir: `visual-system/references/real-u2-schematic-crop.png`.

**Kasıtlı görsel farklılaştırma:** scene-02 (UART, nokta-nokta ok diyagramı) ve scene-04 (I2C,
ortak veriyolu) ile aynı turuncu rengi paylaşır ama DİYAGRAM METAFORU farklı: SPI = çoklu-hat
MASTER/SLAVE kutu diyagramı (4 ayrı paralel hat).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 10-iletisim-protokolleri/prompts/03-spi.md 10-iletisim-protokolleri/slides/03-spi.png --ref visual-system/references/real-u2-schematic-crop.png`

```text
SCENE:
Day label: "GÜN 10" — render with correct Turkish characters.
Main title: "SPI"
Subtitle: "4 kablo, senkron"

Central graphic: a MASTER/SLAVE box diagram (NOT a schematic symbol, NOT a point-to-point or
bus diagram) — two boxes labeled "Master" (left) and "Slave" (right), connected by exactly
FOUR parallel horizontal lines, each clearly labeled: "MOSI" (arrow master→slave), "MISO"
(arrow slave→master), "SCK" (arrow master→slave, labeled "clock"), "CS" (arrow master→slave,
labeled "chip select"). No colored border/frame around this central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the diagram, each panel exactly one cohesive icon
plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact values given
here, do not invent any additional pin or spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and all
four panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color, matching scene-02). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: four parallel lines with a small clock symbol): "Nasıl Çalışır?" — "4 kablo:
MOSI/MISO/SCK/CS" / "Senkron — master clock üretiyor"
2 (orange, icon: a small schematic pin-group icon): "Şemada Nerede?" — "PA4-7 (SPI1: NSS/SCK/
MISO/MOSI)" / "PB12-15 (SPI2)"
3 (orange, icon: a small flash-memory/SD-card icon): "Ne Zaman Kullanılır?" — "Flash bellek
(W25Q64), SD kart" / "OLED ekran (SSD1306)"
4 (orange, icon: a simple scale/balance icon): "Avantaj / Kısıt" — "Hızlı (10-50 Mbps), full
duplex" / "Her slave için +1 CS kablosu gerekir"

Do not render any pin number beyond PA4/PA5/PA6/PA7/PB12/PB13/PB14/PB15, and do not invent
additional module examples.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Nasıl
Çalışır?", "Şemada Nerede?", "Ne Zaman Kullanılır?", "Avantaj/Kısıt", each with a simple icon
and short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi
Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold
navy font, same baseline, text only, no logo/emblem.
```
