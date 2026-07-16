# Scene: scene-02 — UART

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Pin atamaları (PA9/PA10 USART1, PA2/PA3 USART2, PB10/PB11
USART3) datasheet Table 5 ile doğrulandı (curriculum-qa, 2026-07-16). Aynı U2 şema sembolü
Bölüm 08/09'da zaten crop'lanmıştı: `visual-system/references/real-u2-schematic-crop.png` —
bu sahnede de referans olarak verilir (aynı bileşen tekrar görünüyor).

**Kasıtlı görsel farklılaştırma:** scene-03 (SPI) ve scene-04 (I2C) ile aynı turuncu rengi
paylaşır (üçü de şema/datasheet kaynaklı pin bilgisi) ama DİYAGRAM METAFORU farklı: UART = iki
NOKTA-NOKTA ok (point-to-point), SPI = çoklu-hat master/slave, I2C = ortak veriyolu (shared
bus, dallanma noktalarıyla).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 10-iletisim-protokolleri/prompts/02-uart.md 10-iletisim-protokolleri/slides/02-uart.png --ref visual-system/references/real-u2-schematic-crop.png`

```text
SCENE:
Day label: "GÜN 10" — render with correct Turkish characters.
Main title: "UART"
Subtitle: "2 kablo, asenkron"

Central graphic: a simple POINT-TO-POINT diagram (NOT a schematic symbol, NOT a bus diagram) —
two boxes labeled "İşlemci" (left) and "Karşı Taraf" (right), connected by exactly two
horizontal arrows: one arrow from "İşlemci TX" to "Karşı Taraf RX" (pointing right), one arrow
from "Karşı Taraf TX" to "İşlemci RX" (pointing left, drawn as a separate parallel line below
the first). No colored border/frame around this central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the diagram, each panel exactly one cohesive icon
plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact values given
here, do not invent any additional pin or spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and all
four panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: two parallel arrows in opposite directions): "Nasıl Çalışır?" — "2 kablo, TX
ve RX" / "Asenkron — iki taraf aynı baud rate'i bilmeli"
2 (orange, icon: a small schematic pin-pair icon): "Şemada Nerede?" — "PA9/PA10 (USART1),
PA2/PA3 (USART2)" / "PB10/PB11 (USART3)"
3 (orange, icon: a small GPS/Bluetooth module icon): "Ne Zaman Kullanılır?" — "GPS modülü
(NEO-6M/8M)" / "Bluetooth (HC-05/06), GSM (SIM800/900)"
4 (orange, icon: a simple scale/balance icon): "Avantaj / Kısıt" — "En basit protokol, uzun
mesafede çalışır" / "Yavaş, sadece 2 cihaz arası"

Do not render any pin number beyond PA9/PA10/PA2/PA3/PB10/PB11, and do not invent additional
module examples.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Nasıl
Çalışır?", "Şemada Nerede?", "Ne Zaman Kullanılır?", "Avantaj/Kısıt", each with a simple icon
and short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi
Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold
navy font, same baseline, text only, no logo/emblem.
```
