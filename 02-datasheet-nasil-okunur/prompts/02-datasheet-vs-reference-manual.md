# Scene: scene-02 — Datasheet mi, Reference Manual mı?

**Durum:** Onaylandı (2026-07-14) — tek denemede sorunsuz çıktı. Kapak sayfaları, panel metinleri
ve alt bant istenen sadelikte, hiçbir tablo/register/bölüm numarası yok, tüm metin doğru yazıldı
(GÜN 02, doğru Mİ/MI ayrımı dahil).

Kullanıcının açık talebi: bu sahne **sade** kalmalı. Register listesi, bölüm numarası veya RM0008
içindekiler ayrıntısı YOK — sadece iki belgenin kimliği ve "hangi soruda hangisi açılır" kuralı.

Kullanım: `visual-system/master-style-prompt.md` içindeki ana blok + referans görsel paragrafı
(referans: `visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu +
"BOTTOM LAYOUT" bloğu (sadeleştirilmiş: 4 değil 2 kart, çünkü karşılaştırma da ikili).

```text
SCENE:
Day label: "GÜN 02" — render with correct Turkish Ü.
Main title: "DATASHEET Mİ, REFERENCE MANUAL MI?"
Subtitle: "Genel bilgi → Datasheet. Detay → Reference Manual."

Central area: two closed/cover-view technical documents side by side, like two reference books
standing next to each other — NOT opened to any internal page, NOT showing any table, register
list, or chapter numbers. Just the two document covers, clearly two separate distinct documents.
Left cover: a datasheet-style cover with an ST Microelectronics logo and "STM32F103C8T6 Datasheet"
type title. Right cover: a reference-manual-style cover, visually thicker/larger (it is a much
longer document), with an ST Microelectronics logo and "RM0008 Reference Manual" type title.

Do not render any specific table, register name, or chapter/section number anywhere in this
scene. Keep both covers simple — title text only, no fabricated device-summary tables.

Two panels only (not four — this scene is a two-way comparison, keep it exactly two):

LEFT panel (orange, connects to the left cover): "Datasheet" — short caption: '"Bu işlemci ne
  yapabilir?" — özet özellikler, pin listesi, elektriksel limitler.'
RIGHT panel (yellow, connects to the right cover): "Reference Manual (RM0008)" — short caption:
  '"Nasıl yapılandırılır?" — her peripheral'ın yapılandırma detayları.'

Do not list any specific register names or numbers in either panel — keep the captions exactly as
short as given above, nothing more specific.

Bottom section: instead of four cards, use exactly TWO large equally-sized rounded cards forming
the core rule of this lesson:
- Card 1 (left): "Genel Bilgi" → "Datasheet"
- Card 2 (right): "Yapılandırma Detayı" → "Reference Manual"
Then, below the two cards, the same single mandatory footer row as always: bottom-left "Akademi
Usta", bottom-center "Önce anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold
navy font, same baseline, text only, no logo/emblem.
```
