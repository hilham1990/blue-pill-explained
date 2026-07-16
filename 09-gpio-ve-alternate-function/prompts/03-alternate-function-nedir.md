# Scene: scene-03 — Alternate Function Nedir?

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** PA9'un 3 fonksiyonu datasheet Table 5 ile doğrulanmış:
"PA9/USART1_TX/TIM1_CH2" (Bölüm 08 QA'sında zaten çapraz kontrol edilmişti). Bu sahnenin fiziksel
bir bileşen fotoğrafına ihtiyacı yok — kavramsal bir "seçim" diyagramı.

**Kasıtlı görsel farklılaştırma (layout-rules.md):** Bölüm 08 scene-06 ("Pin İsimlendirme
Mantığı", PA0 örneği) bir etiket-ayrıştırma/fan-out stiliydi — statik, "bu pinin 5 ismi var"
vurgusu, turuncu renk. Bu sahne KASITLI olarak farklı: bir SEÇİCİ ANAHTAR/DÜĞME metaforu (aynı
anda sadece BİR pozisyon aktif olabilir vurgusu), sarı renk (kontrol/yapılandırma fonksiyon
rengi, mavi/turuncu değil).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/03-alternate-function-nedir.md 09-gpio-ve-alternate-function/slides/03-alternate-function-nedir.png`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "ALTERNATE FUNCTION NEDİR?"
Subtitle: "Aynı anda sadece biri aktif"

Central graphic: a clean conceptual diagram of a rotary selector switch/dial (NOT a photo, NOT
a schematic symbol — a simple technical illustration of a 3-position selector knob, like a
mode-select dial), labeled "PA9" at its center pivot, with a pointer/indicator currently
resting on ONE of three labeled positions arranged around the dial: "GPIO (varsayılan)",
"USART1_TX", "TIM1_CH2". The pointer clearly rests on only one position at a time — do not
render it ambiguously between two positions. Plain background, no colored border/frame around
this central content.

Four NUMBERED panels are NOT needed at 4 — use exactly THREE panels here (one per position),
large colored number badge 1,2,3 top-left of each panel, each connected with a thin
matching-color line to its corresponding dial position, each panel exactly one cohesive icon
plus a caption of AT LEAST TWO concrete information lines. If three panels leave extra space,
enlarge the three panels symmetrically to fill it — do not invent a fourth panel.

IMPORTANT — badge color: all three number badges (1,2,3) and all three connector lines and all
three panel borders MUST be the exact same solid yellow/amber color (the "kontrol/yapılandırma"
function color — distinct from the blue used in scene-01/02 and the orange used elsewhere in
this chapter). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (yellow, icon: a simple GPIO pin icon): "GPIO (Varsayılan)" — "Genel giriş/çıkış olarak
kullanılır" / "Hiçbir çevre birimine bağlı değil"
2 (yellow, icon: a serial-communication signal-arrows icon): "USART1_TX" — "USART1 veri
gönderme hattı" / "Seri haberleşme modunda kullanılır"
3 (yellow, icon: a timer/clock-pulse icon): "TIM1_CH2" — "Timer 1, kanal 2" — "PWM üretimi
veya sinyal ölçümü için kullanılır"

Do not render any pin number or additional alternate-function name beyond what is listed
above.

Bottom section: use the mandatory bottom layout — 3 cards mirroring the panels: "GPIO
(Varsayılan)", "USART1_TX", "TIM1_CH2", each with a simple icon and short Turkish title (fill
the row width evenly with 3 cards instead of the usual 4). Then the same single mandatory
footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right
"akademiusta.com" — same bold navy font, same baseline, text only, no logo/emblem.
```
