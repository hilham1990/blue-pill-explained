# Scene: scene-03 — Datasheet'i Baştan Sona Okuma

**Durum:** Onaylandı (2026-07-14) — tek denemede sorunsuz çıktı, hiçbir uydurma tablo/veri yok.

Kullanıcı 3 kalan sahneyi tek seferde üretmemi istedi;
her biri yine bağımsız olarak `approved-day01.png`'ye referans veriyor (zincirleme yok), her
biri üretildikten sonra ayrıca doğruluk/okunabilirlik kontrolü yapılıyor.

Bu sahne bir süreç akışıdır, 4 paralel kavram değil — bu yüzden yan panel yerine merkezde büyük,
5 adımlı yatay bir akış şeması var. Sahte bir tablo/veri riski yok çünkü içerik zaten sadece bu
5 adımın metni.

```text
SCENE:
Day label: "GÜN 02" — render with correct Turkish Ü.
Main title: "DATASHEET'İ BAŞTAN SONA OKUMA"
Subtitle: "1000 sayfayı değil, doğru bölümü oku."

Central area: ONE large horizontal 5-step flow diagram, each step a rounded icon-circle
connected by a thin arrow to the next, with a short Turkish label below each icon, exactly these
5 steps in this exact order — do not add, remove, or reorder steps:

1. (question-mark icon) "Soru Oluşur"
2. (table-of-contents / list icon) "İçindekiler Açılır"
3. (bookmark / chapter icon) "İlgili Bölüm Bulunur"
4. (open book icon) "O Bölüm Okunur"
5. (checkmark icon) "Cevap Bulunur"

Behind or beside this flow, a single closed STM32F103C8T6 Datasheet book cover (same style as
previously approved covers) as supporting context — do not open it, do not show any internal
page, table, or chapter number on it.

No side panels with numbered badges in this scene — the 5-step flow itself is the main visual
content. Do not invent any additional technical text, tables, or specification values anywhere
in this scene.

Bottom section: use the mandatory bottom layout — 4 cards summarizing the reading discipline:
"Soru" / "Arama" / "Okuma" / "Cevap", each with a simple icon and short Turkish title. Then the
same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Önce anlamak, sonra
ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same baseline, text only, no
logo/emblem.
```
