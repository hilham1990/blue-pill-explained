# Scene: scene-08 — Sahada Ne Anlama Gelir?

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Kavramsal bir akıl yürütme örneği (PB6/I2C1_SCL/USART1_TX),
fiziksel bir bileşen fotoğrafı gerekmiyor. PB6'nın iki gerçek fonksiyonu zaten scene-05'te
datasheet ile doğrulanmıştı.

**Seri-içi stil tutarlılığı:** Bölüm 08 scene-07 ("Sahada Ne Anlama Gelir?") teal/doğrulama
rengiyle 4-adımlı bir akış diyagramı kullanmıştı. Bu bölümün kendi "Sahada Ne Anlama Gelir?"
sahnesi de AYNI teal rengi ve benzer akış-diyagramı yaklaşımını kullanır — bu, bölüm-içi
"kasıtlı farklılaştırma" kuralının kapsamı DIŞINDA: o kural aynı bölüm içindeki iki farklı
sahne için, bu ise serinin farklı günlerinde TEKRARLANAN aynı bölüm-türü (kapanış/doğrulama
sahnesi) için tutarlılık — bkz. footer/branding gibi seri-geneli sabit kalan unsurlar.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/08-sahada-ne-anlama-gelir.md 09-gpio-ve-alternate-function/slides/08-sahada-ne-anlama-gelir.png`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "SAHADA NE ANLAMA GELİR?"
Subtitle: "Devreye bak, modu çıkar"

Central graphic: a clean vertical flow diagram (NOT a photo, NOT a schematic symbol — simple
stacked boxes connected by downward arrows), using the exact real PB6 example: box 1 "Pin:
PB6/I2C1_SCL/USART1_TX" (small icon of a chip pin with two branching labels), arrow down, box
2 "Bağlı devreye bak" (small icon of a magnifying glass over a circuit trace), arrow down,
splitting into TWO parallel boxes side by side: box 3a "EEPROM bağlıysa" → "I2C modu
kullanılıyor" (small EEPROM chip icon) and box 3b "Seri modül bağlıysa" → "USART modu
kullanılıyor" (small module/antenna icon). Each box plain white background, thin navy border,
technical monospace-adjacent font for the pin/component values. No colored border/frame around
the overall central content beyond each individual box's own thin border.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel) placed beside
the flow, each connected with a thin matching-color line to its corresponding part of the
flow, each panel exactly one cohesive icon plus a caption of AT LEAST TWO concrete information
lines. Use ONLY the exact values given here, do not invent any additional component:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and all
four panel borders MUST be the exact same solid teal color (the "ölçüm/doğrulama" function
color, matching Bölüm 08's own closing "Sahada Ne Anlama Gelir?" scene). Do NOT vary the badge
color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own specific content:
1 (teal, icon: a chip pin with two small branching labels): "Pinin Birden Fazla İsmi Var" —
"PB6/I2C1_SCL/USART1_TX" / "Yazılımı okumadan bile devreden anlaşılır"
2 (teal, icon: a magnifying glass over a circuit trace): "Bağlı Devreye Bak" — "Hangi bileşen
bağlı olduğuna dikkat et" / "EEPROM mu, seri modül mü?"
3 (teal, icon: a small EEPROM/memory chip icon): "EEPROM Bağlıysa" — "I2C modu kullanılıyor
demektir" / "SDA/SCL hattı olarak çalışıyor"
4 (teal, icon: a small module/antenna icon): "Seri Modül Bağlıysa" — "USART modu kullanılıyor
demektir" / "TX/RX hattı olarak çalışıyor"

Do not render any pin number beyond PB6, and do not invent additional alternate-function names.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "İki İsim",
"Devreye Bak", "EEPROM → I2C", "Modül → USART", each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
