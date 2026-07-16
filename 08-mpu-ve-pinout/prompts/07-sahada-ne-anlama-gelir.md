# Scene: scene-07 — Sahada Ne Anlama Gelir?

**Durum:** Üretiliyor (2026-07-16).

**Gerçek görsel analizi (madde 4c):** README'nin BOOT0 örneği (pin 44) `curriculum-qa`'da
gerçek şemaya (`assets/source/blue-pill-schematic-source.webp`) karşı doğrulandı: R3 (100kΩ)
pin44/BOOT0 net'ini CN5 jumper'ının ORTAK (middle) ucuna bağlıyor, GND ve +3.3V jumper'ın iki
UÇ pozisyonuna doğrudan bağlı — GND'ye sabit DEĞİL. Bu doğru topoloji burada da birebir
korunacak. Panel 4'te gerçek jumper'ın fiziksel görünümünü sabitlemek için Bölüm 07'de zaten
onaylanmış gerçek fotoğraf crop'u ikincil referans olarak veriliyor:
`visual-system/references/real-reset-boot-jumper-crop.png` (sarı 2x3 CN5 header + reset
butonu).

**Kasıtlı görsel farklılaştırma:** Bu sahne bir "yöntem/worked-example" sahnesi — bölümün
diğer sahnelerinden (kart fotoğrafı, şema sembolü, şema kesiti) farklı olarak DÜZ, YUKARIDAN
AŞAĞIYA bir 4-adım akış diyagramı olacak, README'deki 4 adımla birebir aynı sırada.

Üretim: `tools/generate-slide.py 08-mpu-ve-pinout/prompts/07-sahada-ne-anlama-gelir.md 08-mpu-ve-pinout/slides/07-sahada-ne-anlama-gelir.png --ref visual-system/references/real-reset-boot-jumper-crop.png`

```text
SCENE:
Day label: "GÜN 08" — render with correct Turkish characters.
Main title: "SAHADA NE ANLAMA GELİR?"
Subtitle: "Pin no → datasheet → devre"

Central graphic: a clean vertical 4-step flow diagram (NOT a photo, NOT a schematic symbol —
a simple flow chart with 4 stacked boxes connected by downward arrows), using the exact real
BOOT0 example: box 1 "Şemada pin 44" (small icon of a chip pin), arrow down, box 2 "Datasheet
→ BOOT0 (özel pin, GPIO değil)" (small icon of an open book/document), arrow down, box 3
"Şemada bağlı devre → R3 (100kΩ) → CN5 jumper'ın ORTAK ucu; GND ve +3.3V jumper'ın iki ucuna
doğrudan bağlı" (small icon of a resistor+jumper), arrow down, box 4 "Sonuç → Jumper GND
tarafındaysa BOOT0=GND (Flash'tan başlar)" (small checkmark/flag icon). Each box plain white
background, thin navy border, technical monospace-adjacent font for the pin/component values.
Do not invent any additional pin number or resistor value beyond what is given here.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel) placed
beside the 4-step flow, each badge number matching the SAME step number in the central flow
(panel 1 badge next to flow box 1, etc.) and connected with a thin matching-color line to its
corresponding flow box, each panel exactly one cohesive icon plus a caption of AT LEAST TWO
concrete information lines expanding on that step. Use ONLY the exact values given here, do
not invent any additional pin name, resistor value, or connector name:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid teal color (the "ölçüm/doğrulama" function
color, distinct from the orange used in this chapter's schematic-reading scenes). Do NOT vary
the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon that matches its own specific step,
not a repeated generic icon:
1 (teal, icon: a magnifying glass over a chip pin): "1. Pin Numarasına Bak" — "Şemada U2
üzerinde yazan numara: 44" / "Bu numara paket değişse bile sabit referans"
2 (teal, icon: an open datasheet/book icon): "2. Datasheet'i Aç" — "Pin description tablosu:
Pin 44 = BOOT0" / "BOOT0 özel bir pin, genel GPIO değil"
3 (teal, icon: a resistor-and-jumper schematic icon): "3. Bağlı Devreye Bak" — "R3 (100kΩ) →
CN5 jumper'ın ortak ucu" / "GND ve +3.3V doğrudan jumper'ın iki ucuna bağlı, R3 üzerinden
DEĞİL"
4 (teal, icon: a checkmark/result flag icon): "4. Sonucu Çıkar" — "Jumper GND tarafındaysa:
BOOT0 = GND" / "Sonuç: Flash'tan başlar (normal çalışma modu)"

Do not render the physical jumper/board photo inside the central flow diagram itself — the
attached real photo reference is ONLY for panel 4's small icon (a tiny accurate rendering of
the real yellow 2x3 jumper header + reset button, matching its real colors/shape), the central
flow stays a clean abstract diagram, not a photo composite.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "1. Pin No",
"2. Datasheet", "3. Devre", "4. Sonuç", each with a simple icon matching its panel's icon and
short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
