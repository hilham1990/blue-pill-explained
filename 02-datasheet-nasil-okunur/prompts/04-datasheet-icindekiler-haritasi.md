# Scene: scene-04 — Datasheet İçindekiler Haritası

**Durum:** Onaylandı (2026-07-14) — tek denemede sorunsuz çıktı. Doc ID 13587 ve tüm 6 bölüm
numarası (3,4,5,6,7) zoom ile tek tek doğrulandı, hiçbir rakam bozulmamış.

Kritik kural: bu sahnede sadece aşağıda VERİLEN gerçek, doğrulanmış metni yazdır — yeni bir
device-summary tablosu, farklı bir part number listesi veya farklı bir başlık UYDURMA (bkz.
scene-00-hero'nun bilinen kusuru). Bu bir bölüm/İçindekiler listesi, bir spec tablosu değil.

```text
SCENE:
Day label: "GÜN 02" — render with correct Turkish Ü.
Main title: "DATASHEET — İÇİNDEKİLER HARİTASI"
Subtitle: "Doc ID 13587 Rev 11"

Central area: a vertical chapter-map / table-of-contents diagram, styled like a clean document
outline (not a spreadsheet table, not a device-summary table). Render EXACTLY these 6 entries,
in this exact order, top to bottom, each as one row with a chapter icon, the title, and the
chapter/page label in parentheses — do not add, invent, or reorder any entry, do not add extra
part-number tables anywhere in this scene:

1. "Features" (kapak sayfası — BİZ BURADAN BAŞLIYORUZ)
2. "Pinouts and Pin Description" (Bölüm 3)
3. "Memory Mapping" (Bölüm 4)
4. "Electrical Characteristics" (Bölüm 5)
5. "Package Characteristics" (Bölüm 6)
6. "Ordering Information Scheme" (Bölüm 7 — sona yakın, başında değil)

A single closed STM32F103C8T6 Datasheet book cover to one side as supporting context only — do
not open it, do not render any internal table or additional text on it.

No numbered side panels in this scene — the chapter list itself is the central content.

Bottom section: use the mandatory bottom layout — 4 cards: "Kapak / Features", "Pinler",
"Elektriksel", "Sıralama (Ordering, sonda)", each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Önce
anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same baseline,
text only, no logo/emblem.
```
