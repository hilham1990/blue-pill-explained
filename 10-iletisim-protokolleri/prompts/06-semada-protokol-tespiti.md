# Scene: scene-06 — Şemada Protokol Tespiti

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Fiziksel bir bileşen yok — bu sahne 3 basit görsel tanıma
kuralını gösteriyor (kaç hat, hangi isimler). README'nin kendi metnindeki kural birebir
kullanılacak.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 10-iletisim-protokolleri/prompts/06-semada-protokol-tespiti.md 10-iletisim-protokolleri/slides/06-semada-protokol-tespiti.png`

```text
SCENE:
Day label: "GÜN 10" — render with correct Turkish characters.
Main title: "ŞEMADA PROTOKOL TESPİTİ"
Subtitle: "Pin isminden doğrudan anlarsın"

Central graphic: three small side-by-side wire-pattern icons (NOT a full schematic) — a 2-wire
icon labeled "TX / RX", a 4-wire icon labeled "MOSI / MISO / SCK / CS", a 2-wire icon labeled
"SDA / SCL". Each icon visually distinct by wire count (2 vs 4 vs 2, but the 2-wire ones look
different from each other only via their labels, not shape). No colored border/frame.

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel, exactly THREE
panels here, not four — enlarge them symmetrically to fill the row), each connected with a
thin matching-color line to its corresponding icon, each panel exactly one cohesive icon plus
a caption of AT LEAST TWO concrete information lines. Use ONLY the exact values given here:

IMPORTANT — badge color: all three number badges (1,2,3) and all three connector lines and all
three panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color, matching this chapter's other scenes). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: two arrows in opposite directions): "İki Hat: TX / RX" — "→ UART" / "Pin
isimlerinde doğrudan yazar"
2 (orange, icon: four parallel lines): "Dört Hat: MOSI/MISO/SCK/CS" — "→ SPI" / "En kolay
ayırt edilen — kablo sayısı tek başına yeter"
3 (orange, icon: two lines with branch dots): "İki Hat: SDA / SCL" — "→ I2C" / "Pull-up
dirençleri de bir ipucu"

Do not render any additional pin name or protocol beyond UART/SPI/I2C.

Bottom section: use the mandatory bottom layout — 3 cards mirroring the panels: "TX/RX →
UART", "MOSI/MISO/SCK/CS → SPI", "SDA/SCL → I2C", each with a simple icon and short Turkish
title (fill the row width evenly with 3 cards instead of the usual 4). Then the same single
mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.",
bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no
logo/emblem.
```
