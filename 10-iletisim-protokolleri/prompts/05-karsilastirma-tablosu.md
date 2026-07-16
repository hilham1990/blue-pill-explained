# Scene: scene-05 — Karşılaştırma Tablosu

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Fiziksel bir bileşen yok, bu sahne 3 protokolü yan yana
karşılaştıran bir infografik. Değerler README'nin (QA'de düzeltilen) karşılaştırma tablosundan:
Kablo sayısı 2/4+/2, Hız ~1Mbps/~50Mbps/400kbps, Senkronizasyon Asenkron/Senkron/Senkron.

**Kasıtlı görsel farklılaştırma:** scene-02/03/04'ün "tek protokol + 4 panel" formatından
farklı — bu sahne 3 SÜTUNLU yan yana karşılaştırma tablosu formatı kullanır (Bölüm 05/06'daki
"SPLIT comparison" tekniğinin 3-kolonlu genişletilmiş hali).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 10-iletisim-protokolleri/prompts/05-karsilastirma-tablosu.md 10-iletisim-protokolleri/slides/05-karsilastirma-tablosu.png`

```text
SCENE:
Day label: "GÜN 10" — render with correct Turkish characters.
Main title: "KARŞILAŞTIRMA TABLOSU"
Subtitle: "UART · SPI · I2C"

Central graphic: NOT a panel-and-connector layout. Instead, a clean 3-column comparison table
(clearly different in style from the previous three scenes' single-protocol diagrams), with
column headers "UART", "SPI", "I2C" and exactly THREE rows: "Kablo Sayısı" (2 / 4+ / 2), "Hız"
(~1 Mbps / ~50 Mbps / 400 kbps), "Senkronizasyon" (Asenkron / Senkron / Senkron). Each cell
clearly legible, consistent font size across all cells. No colored border/frame around this
central content.

Four small NUMBERED callout panels below/beside the table (large colored number badge 1,2,3,4
top-left of each panel), each panel exactly one cohesive icon plus a caption of AT LEAST TWO
concrete information lines expanding on one comparison dimension. Use ONLY the exact values
given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid orange color (the "belge/şema kaynağı" function color, matching
this chapter's other protocol scenes). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a wire-count comparison icon, 2 vs 4 lines side by side): "Kablo Sayısı" —
"UART ve I2C: sadece 2" / "SPI: 4+ (her slave için +1 CS)"
2 (orange, icon: a speedometer icon): "Hız" — "SPI en hızlı (~50 Mbps)" / "UART ve I2C daha
yavaş (~1 Mbps, 400 kbps)"
3 (orange, icon: a clock-sync icon): "Senkronizasyon" — "UART asenkron — ortak clock yok" /
"SPI ve I2C senkron — clock hattı paylaşılır"
4 (orange, icon: a small crowd/multiple-devices icon): "Slave Sayısı" — "UART: sadece 1" /
"SPI: sınırsız (CS ile), I2C: 127 (adresle)"

Do not render any additional numeric value beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Kablo
Sayısı", "Hız", "Senkronizasyon", "Slave Sayısı", each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
