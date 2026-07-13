# Scene: scene-04 — Tek Sayfalık Açık Şema

**Durum:** Üretiliyor (2026-07-13). Numaralı panel + zorunlu tek-satır footer standardına göre yazıldı, referans olarak doğrudan Hero kullanılıyor (zincirleme yok).

```text
SCENE:
Day label: "GÜN 01"
Main title: "TEK SAYFALIK AÇIK ŞEMA"
Subtitle: "Karmaşık değil, ama gerçek."

Central visual: a clean, realistic full single-page schematic overview of the Blue Pill board
(not the physical board photo this time — the topic is the schematic itself).

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each connected
with a thin matching-color line to a precise point on the central schematic, each panel exactly
one cohesive image:
1 (teal): "Tüm Şema Tek Sayfa" — zoomed-out view confirming the whole schematic fits one page
2 (blue): "Power Supply Bloğu" — close-up of the power supply block schematic labeled "RT8183-B"
3 (yellow): "Reset Bloğu" — close-up of the reset circuit schematic labeled "S1, R2, C2"
4 (orange): "Açık Kaynak Tasarımcı Notu" — a small handwritten-style designer note reading
  "Free Willy / Planet Earth / Solar System"
```

Kullanım: `visual-system/master-style-prompt.md` içindeki ana blok + referans görsel paragrafı (Hero, sadece marka/panel/footer stili için — bu sahnede merkez görsel kart değil şema olduğu için "board rendering fidelity" notu uygulanmaz) + yukarıdaki SCENE bloğu + `master-style-prompt.md`'deki güncel "BOTTOM LAYOUT (MANDATORY)" bloğu (tek satır footer: sol="Akademi Usta", orta="Önce anlamak, sonra ölçmek.", sağ="akademiusta.com/tr").
