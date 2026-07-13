# Scene: scene-00-hero — Datasheet Nedir?

**Durum:** Onaylandı (2026-07-14), bilinen bir kusurla birlikte kabul edildi — bkz. "Bilinen kusur" altında.

## Bilinen kusur (2026-07-14, kullanıcı onayıyla kabul edildi)

Merkezdeki açık datasheet objesinde model gerçek olmayan/uydurma teknik içerik üretti:
- Başlık alanı "STM32F103x8, STM32F103x8 / STM32F103xC, STM32F103xD, STM32F103xE" gösteriyor —
  gerçek belgemiz sadece "STM32F103x8, STM32F103xB"; "xC/xD/xE" farklı (High-density) bir
  datasheet'in başlığı, buraya ait değil.
- "Device summary" tablosu uydurma satırlar içeriyor (STM32F103C8 iki kere tekrarlanmış,
  var olmayan "STM32F103C6"/"STM32F103C4" satırları eklenmiş).
- "Pin Görevleri" panelindeki mini tablo anlamsız (1. ve 3. sütun birebir aynı).

Kullanıcıya soruldu (sıkılaştırılmış prompt ile yeniden üretim / merkez nesneyi tablosuz
basitleştirme / olduğu gibi kabul), **"olduğu gibi kabul et"** seçildi — gerekçe: video/sosyal
medya boyutunda bu küçük yazılar zaten okunmayacak, büyük başlıklar (GÜN 02, DATASHEET NEDİR?,
4 panel başlığı, alt bant, footer) doğru ve okunaklı. Bu, Bölüm 01'in "teknik değerleri güvenle
yazdıramaz hâle gelirsen kaçış eşiğine geç" kuralına yaklaşan bir durum — eğer bir sonraki
sahnede de benzer bir uydurma-tablo sorunu çıkarsa, `master-style-prompt.md`'nin kaçış planı
eşiklerini (bkz. madde 5) tekrar değerlendir.

**Durum (önceki):** Üretiliyor (2026-07-14).

Kullanım: `visual-system/master-style-prompt.md` içindeki ana blok + referans görsel paragrafı (referans: `visual-system/references/approved-day01.png`, sadece görsel dil/stil için — Bölüm 01 içeriği kopyalanmayacak) + aşağıdaki SCENE bloğu + `master-style-prompt.md`'deki "BOTTOM LAYOUT (MANDATORY)" bloğu (en sonda, harfiyen, 4 kart — bu hero'nun kendi 6-soru bandı yok, o marka unsuru Bölüm 01'e özel).

```text
SCENE:
Day label: "GÜN 02" — render with correct Turkish Ü.
Main title: "DATASHEET NEDİR?"
Subtitle: "Bir roman değil, bir sözlük."

Central object: an open real STM32F103C8T6 datasheet document (not the Blue Pill board this
time) — visible ST Microelectronics logo, "Features" heading, and a device summary table,
spread open like a technical reference document lying on a clean surface.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each connected
with a thin matching-color line to a precise point on the open document, each panel exactly one
cohesive image plus caption — do not invent spec numbers beyond what is listed here:

1 (orange, connects to the features list): "Özellikler" — close-up of a datasheet features/specs
  list section
2 (orange, connects to a pinout diagram area): "Pin Görevleri" — close-up of a pinout table
  showing pin names
3 (orange, connects to an electrical-limits table): "Elektriksel Limitler" — close-up of a
  voltage/current ratings table
4 (blue, connects to a timing-diagram area): "Zamanlama ve Uygulama Devreleri" — close-up of a
  timing diagram plus a small application-circuit schematic snippet

Do not render two separate physical documents side by side in this scene — only the one open
Datasheet. The "two documents exist" idea is only spoken in the subtitle/caption text, not shown
as a second physical book (that comparison is a later scene's job).

Bottom section: use the mandatory bottom layout block — 4 cards (not 6, this is a chapter hero,
not the series hero), summarizing what's inside a datasheet: "Özellikler", "Pin Görevleri",
"Elektriksel Limitler", "Zamanlama", each with a simple icon and short Turkish title. Then the
centered tagline and text-only Akademi Usta footer, exactly as specified in master-style-prompt.md.
```
