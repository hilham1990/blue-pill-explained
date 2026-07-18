# Scene: scene-06 — Sahada Ne Anlama Gelir?

**Durum:** v2 — ölçüm sırası ve doğru CN2 noktası kilitlendi.

Üretim: `tools/generate-slide.py 05-power-supply/prompts/06-sahada-ne-anlama-gelir.md 05-power-supply/slides/06-sahada-ne-anlama-gelir.png --mode generate`

```text
SCENE:
Day label: "GÜN 05"
Main title: "SAHADA NE ANLAMA GELİR?"
Subtitle: "3 ölçümle besleme zincirini doğrula"

Use case: scientific-educational. Create one continuous multimeter diagnostic path across a
simplified Blue Pill board, not numbered callout panels.

Checkpoint 1 — red probe on the power header:
"CN2 · +5V GİRİŞ"
"CN1'de +5V yoktur"
Show a small connector locator indicating CN2, never CN1.

Checkpoint 2 — probe on regulator:
"U1 · RT8183-B VOUT"
"Beklenen: 3.3V"

Checkpoint 3 — probe on MCU supply:
"U2 · VDD_1"
"Beklenen: 3.3V"

Connect the checkpoints with arrows:
"+5V var mı? → Regülatör 3.3V üretiyor mu? → 3.3V işlemciye ulaşıyor mu?"
Add a fault-isolation ruler beneath:
"5V yok → giriş/kablo" / "5V var, 3.3V yok → U1 çevresi" /
"U1 çıkışı var, VDD'de yok → hat/kopukluk".

Bottom band content:
"Ölçüm sırası: Kaynak → Dönüşüm → Yük"
Do not show CN1 as a 5V measurement point, invent MCU pin numbers beyond VDD_1, or repeat the
same three checkpoints as decorative cards.
```
