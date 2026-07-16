# Scene: scene-07 — Sahada Ne Anlama Gelir?

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Fiziksel bir bileşen yok, kavramsal 3-adımlı bir teşhis
yöntemi. README'nin kendi metniyle birebir tutarlı.

**Seri-içi stil tutarlılığı:** Bölüm 08/09'un kapanış "Sahada Ne Anlama Gelir?" sahneleriyle
aynı teal/doğrulama rengi ve akış-diyagramı yaklaşımı kullanılır (seri-geneli sabit convention,
bkz. Bölüm 09 scene-08 notu).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 10-iletisim-protokolleri/prompts/07-sahada-ne-anlama-gelir.md 10-iletisim-protokolleri/slides/07-sahada-ne-anlama-gelir.png`

```text
SCENE:
Day label: "GÜN 10" — render with correct Turkish characters.
Main title: "SAHADA NE ANLAMA GELİR?"
Subtitle: "İsim yoksa modüle, pull-up'a bak"

Central graphic: a clean vertical 3-step flow diagram (NOT a photo, NOT a schematic symbol —
simple stacked boxes connected by downward arrows): box 1 "Pin isimlerine bak" → "'TX'/'RX'
yazıyorsa UART, 'SDA'/'SCL' yazıyorsa I2C" (small icon of a magnifying glass over a labeled
pin), arrow down, box 2 "İsim yoksa modülün adına bak" → "EEPROM/sensör/IMU → genelde I2C,
GPS/Bluetooth/GSM → genelde UART" (small icon of a generic module/chip), arrow down, box 3
"Hâlâ emin değilsen pull-up direncine bak" → "I2C hatlarında SDA/SCL üzerinde pull-up zorunlu"
(small icon of a resistor pulled up to a rail). Each box plain white background, thin navy
border, technical monospace-adjacent font for labels. No colored border/frame around the
overall central content beyond each individual box's own thin border.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel) placed beside
the flow, each connected with a thin matching-color line to its corresponding part of the
flow (panel 4 relates to the whole scene as a bonus tip, not one specific box), each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and all
four panel borders MUST be the exact same solid teal color (the "ölçüm/doğrulama" function
color, matching Bölüm 08/09's closing "Sahada Ne Anlama Gelir?" scenes). Do NOT vary the badge
color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own specific content:
1 (teal, icon: a magnifying glass over a labeled pin): "Adım 1 — Pin İsmine Bak" — "'TX'/'RX'
→ UART" / "'SDA'/'SCL' → I2C"
2 (teal, icon: a generic module/chip icon): "Adım 2 — Modül Tipine Bak" — "EEPROM, sensör, IMU
→ genelde I2C" / "GPS, Bluetooth, GSM → genelde UART"
3 (teal, icon: a resistor pulled up to a voltage rail): "Adım 3 — Pull-up'a Bak" — "I2C
hatlarında zorunlu" / "UART'ta genelde yok"
4 (teal, icon: a 4-wire icon with a checkmark): "Bonus — 4 Kablo Gördüysen" — "MOSI/MISO/SCK/CS
→ SPI" / "Üçü arasında en kolay ayırt edilen"

Do not render any additional diagnostic step or module example beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "1. Pin
İsmi", "2. Modül Tipi", "3. Pull-up", "4. 4 Kablo → SPI", each with a simple icon and short
Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
