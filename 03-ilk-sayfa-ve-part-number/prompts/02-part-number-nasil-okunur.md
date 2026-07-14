# Scene: scene-02 — Part Number Nasıl Okunur?

**Durum:** Üretiliyor (2026-07-14).

Kritik kural: sadece aşağıda VERİLEN 7 gerçek bloğu yazdır (ST Table 57, sayfa 85'ten
doğrulandı) — "STM32" tek parça, harf harf bölünmüyor. Yeni bir tablo/değer uydurma.

```text
SCENE:
Day label: "GÜN 03" — render with correct Turkish Ü.
Main title: "PART NUMBER NASIL OKUNUR?"
Subtitle: "Harf harf değil, blok blok."

Central area: the text "STM32F103C8T6" rendered large, split into exactly 7 colored blocks/
segments (not 13 individual letters): [STM32] [F] [103] [C] [8] [T] [6] — each block a
distinct rounded-rectangle chip with a thin connector line down to a short label below it.
Render EXACTLY these 7 labels, in this exact order, left to right — do not add, invent, or
reorder any block:

1. "STM32" → "Cihaz ailesi: ARM tabanlı 32-bit mikrodenetleyici"
2. "F" → "Ürün tipi: genel amaçlı"
3. "103" → "Ürün alt ailesi: performance line"
4. "C" → "Pin sayısı: 48"
5. "8" → "Flash boyutu: 64 KB"
6. "T" → "Paket tipi: LQFP"
7. "6" → "Sıcaklık aralığı: -40°C / +85°C"

Do not render any additional table, any other part-number example, or any specification not
listed above. No side panels with numbered badges — this 7-block diagram is the entire central
content.

Bottom section: use the mandatory bottom layout — 4 cards summarizing the reading discipline:
"Aile ve Tip" (STM32, F), "Alt Aile" (103), "Pin ve Flash" (C, 8), "Paket ve Sıcaklık" (T, 6),
each with a simple icon and short Turkish title. Then, below the cards, ONE single footer row
with three parts, evenly balanced left/center/right:
- Bottom-left: "Akademi Usta"
- Bottom-center: "Önce anlamak, sonra ölçmek."
- Bottom-right: "akademiusta.com/tr"
All three in the same bold navy font, same baseline, clearly legible.
```
