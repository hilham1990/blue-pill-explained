# Scene: scene-04 — Pinout'ta Renkler Ne Anlatıyor?

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Gerçek renkli pinout kartı `assets/source/blue-pill-pinout-source.webp`
piksel piksel incelenip renkler doğrulandı (curriculum-qa, 2026-07-16): Sarı=Serial, Açık
yeşil=SPI, Turuncu=I2C(+USB), Mor=PWM, Pembe=CAN, Bej=Analog. Bu görsel zaten README'de TAM
BOYUTTA gösteriliyor (SKILL.md madde 9 — gerçek kaynak belge her zaman ayrıca tam boyutta
kalır). **Bu AI sahnesi kartın TAMAMINI (20+ renkli kutu) yeniden çizmeye ÇALIŞMAMALI** —
teknik risk olarak brief.json'da not edildi, yoğun/küçük metin+renk kombinasyonu yüksek
bozulma riski taşır (bkz. Bölüm 08 scene-03'ün 3 denemesi). Bunun yerine sahne SADECE birkaç
temsili örnek kutu + doğru renk-fonksiyon eşlemesini gösterir.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/04-pinoutta-renkler.md 09-gpio-ve-alternate-function/slides/04-pinoutta-renkler.png --ref assets/source/blue-pill-pinout-source.webp`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "PINOUT'TA RENKLER NE ANLATIYOR?"
Subtitle: "Her renk bir çevre birimi"

Central graphic: NOT a full pinout board redraw. Instead, a simple vertical stack of exactly
SIX small labeled color-swatch rows (like a legend key), each row showing a solid color
rectangle next to its function name, in this EXACT order and EXACT colors (match the attached
reference image's actual colors, do not invent different shades):
"Sarı → Serial (USART)"
"Açık yeşil → SPI"
"Turuncu → I2C (+ USB)"
"Mor → PWM (Timer)"
"Pembe → CAN"
"Bej → Analog giriş"
This legend key sits on a plain background, no colored border/frame around it, no attempt to
draw the full board or all 40+ pins — just this simple 6-row color key.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the legend key, each panel exactly one cohesive
icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact values
given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (the "belge/kaynak" function
color, matching this chapter's other schematic/reference-reading scenes). Do NOT vary the
badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a small serial-signal arrows icon in yellow accent): "Sarı = Serial" —
"USART TX/RX hatları" / "Seri haberleşme için kullanılır"
2 (orange, icon: a small SPI clock+data icon in light-green accent): "Açık Yeşil = SPI" —
"SCK/MISO/MOSI/NSS hatları" / "Yüksek hızlı senkron haberleşme"
3 (orange, icon: a small two-wire bus icon in orange accent): "Turuncu = I2C" — "SDA/SCL
hatları" / "Aynı renk USB DP/DM için de kullanılır"
4 (orange, icon: a small waveform-pulse icon in purple accent): "Mor = PWM (Timer)" — "Motor
kontrolü, LED parlaklığı" / "Timer kanallarına bağlı"

Do not render any specific pin name (PA_x, PB_x) or the full board photo — this scene is only
about the color legend itself, the real full pinout card is already shown separately in the
lesson text.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Sarı =
Serial", "Açık Yeşil = SPI", "Turuncu = I2C", "Mor = PWM", each with a simple icon and short
Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
