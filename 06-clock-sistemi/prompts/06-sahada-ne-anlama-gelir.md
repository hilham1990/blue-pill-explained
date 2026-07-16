# Scene: scene-06 — Sahada Ne Anlama Gelir?

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı (referans:
`visual-system/references/approved-day01.png`) + aşağıdaki SCENE bloğu + BOTTOM LAYOUT bloğu.

**Düzeltme (2026-07-16):** İlk üretimde panel 2'deki X2 kristali yanlışlıkla X1 ile aynı oval
metal-kan pakette çizildi ("32.768" etiketiyle) — gerçekte X2 küçük 4-pinli SMD paket olmalı
(bkz. scene-02/03). X1/X2 gerçek crop'ları ikincil referans olarak eklendi.

Üretim: `tools/generate-slide.py 06-clock-sistemi/prompts/06-sahada-ne-anlama-gelir.md 06-clock-sistemi/slides/06-sahada-ne-anlama-gelir.png --ref visual-system/references/real-x1-crystal-crop.png --ref visual-system/references/real-x2-crystal-crop.png`

```text
SCENE:
Day label: "GÜN 06" — render with correct Turkish characters.
Main title: "SAHADA NE ANLAMA GELİR?"
Subtitle: "Kart Açılmıyor · RTC Kayıyor"

Central hardware: a technician's hand holding an oscilloscope probe touching a Blue Pill-style
board near the crystal area, on a clean workbench background, oscilloscope screen visible in
the background showing a simple generic waveform.

Two NUMBERED panels (large colored number badge 1,2 top-left of each panel, teal =
ölçüm/doğrulama), each connected with a thin matching-color line to the board/probe, each
panel exactly one cohesive image/icon plus caption, representing the two diagnostic scenarios:

1 (teal): "Durum 1 — Kart Açılmıyor" — "X1 kristali ve kapasitörleri yerinde mi? OSC_IN/OSC_OUT'ta dalga var mı?"
2 (teal): "Durum 2 — RTC Kayıyor" — "X2 (32.768 kHz) kristali ve C9/C12 değerleri doğru mu?"

IMPORTANT — component package accuracy: two additional reference images are attached showing
the real physical appearance of X1 and X2. Panel 1's board fragment must show X1 as the real
oval grey metal-can package (marked "8.000"). Panel 2's board fragment must show X2 as the
real small black 4-pin SMD rectangular package (marked "32.768K") — do NOT draw X2 as another
oval metal-can crystal, it is a visibly smaller, different, flat black package.

Do not render any specific numeric oscilloscope reading or invented pin numbers beyond what is
listed above.

Bottom section: use the mandatory bottom layout — 4 cards (map the 2 scenarios plus 2
synthesis cards): "Kart Açılmıyor", "X1 Kontrolü", "RTC Kayıyor", "X2 Kontrolü", each with a
simple icon and short Turkish title. Then the same single mandatory footer row: bottom-left
"Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" —
same bold navy font, same baseline, text only, no logo/emblem.
```
