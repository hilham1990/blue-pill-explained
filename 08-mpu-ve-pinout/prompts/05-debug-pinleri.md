# Scene: scene-05 — Debug Pinleri

**Durum:** Yeniden üretiliyor (2026-07-16) — kullanıcı ilk üretimde önemli bir hata yakaladı.

**Düzeltme (kullanıcı geri bildirimiyle bulundu):** İlk üretim README'nin "Bu 5 pin CN4
üzerinden dışarı çıkıyor" iddiasını olduğu gibi görselleştirmişti. Gerçek şemadan
(`assets/source/blue-pill-schematic-source.webp`) CN4 (SRP4) konnektörü zoom'landı
(`visual-system/references/real-cn4-connector-crop.png`) — CN4 SADECE 4 pinli: Pin1=+3.3V,
Pin2=DIO(JTMS/SWDIO), Pin3=DCLK(JTCK/SWCLK), Pin4=GND. Yani SADECE SWDIO+SWCLK gerçekten CN4'e
çıkıyor. JTDI/JTDO/JNTRST için kartta ayrı bir JTAG konnektörü YOK — bu 3 pin sadece genel GPIO
header sıralarında duruyor. README bu ayrımla düzeltildi, bu sahne de düzeltilmiş haliyle
yeniden üretiliyor (bkz. lessons-learned.md, "Pin numaraları doğrulandı ama konnektör-bağlantı
iddiası doğrulanmadı").

**Zenginleştirilmiş panel kuralı uygulanıyor:** her panel 2 satır somut bilgi + farklı ikon.

**3. üretim düzeltmeleri (2026-07-16, kullanıcı 2. üretimi piksel piksel inceleyip 2 yeni kusur
buldu — bkz. lessons-learned.md):** (1) 2. üretimde merkez şemanın etrafına istenmeyen mavi bir
çerçeve çizilmişti — bu prompt artık merkez içeriğin çerçevesiz kalması gerektiğini açıkça
belirtiyor. (2) Panel 1'in ikonu "(4 Pin)" başlığına rağmen 5 pin göstermişti — artık her panel
ikonunun göstereceği TAM sayı açıkça yazılıyor.

Üretim: `tools/generate-slide.py 08-mpu-ve-pinout/prompts/05-debug-pinleri.md 08-mpu-ve-pinout/slides/05-debug-pinleri.png --ref visual-system/references/real-debug-crop.png --ref visual-system/references/real-cn4-connector-crop.png`

```text
SCENE:
Day label: "GÜN 08" — render with correct Turkish characters.
Main title: "DEBUG PİNLERİ"
Subtitle: "Sadece SWD çıkar — JTAG'ın ayrı konnektörü yok"

Central hardware: a clean technical schematic diagram fragment matching the attached
additional reference images exactly — on the left, a vertical pin list "DIO 34", "DCLK 37",
"A15 38", "B3 39", "B4 40" with their alternate-function labels (JTMS/SWDIO[PA13],
JTCK/SWCLK[PA14], JTDI[...], JTDO[...], JNTRST[...], each spelled with its exact correct
letters, no extra stray strokes on any character); on the right, the real 4-pin CN4 (SRP4)
connector symbol with its 4 labeled pins "+3.3V", "DIO", "DCLK", "GND", connected ONLY to the
DIO and DCLK lines — draw the JTDI/JTDO/JNTRST lines going nowhere near CN4, ending as plain
open pins with no connector attached. Thin black schematic lines, monospace-style labels,
white background, NOT a photograph. Copy the exact pin numbers, labels, and the CN4 4-pin
connector exactly as shown in the attached references — do not connect JTDI/JTDO/JNTRST to
CN4 or to any connector.

IMPORTANT — central content framing: the central schematic fragment must sit directly on the
plain page background with NO colored border, box, outline, or frame drawn around it — do not
enclose it in a rounded rectangle or any panel-like shape. Only the four numbered side panels
have borders; the central area never does.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the schematic, each panel exactly one cohesive
image/icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact
values given here, do not invent any additional pin or connector:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color, matching the previous schematic scenes). Do NOT vary the badge color per
panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content, and each
icon's pin/element count must EXACTLY match the number stated in its own caption — count them
before finalizing, do not draw one more or one fewer than specified:
1 (orange, icon: a small pin-header connector icon showing EXACTLY 4 pins in a single enclosed
housing — not 5, not 3, count them: four): "SWD — CN4'e Çıkar (4 Pin)" — "JTMS/SWDIO (PA13,
pin 34) + JTCK/SWCLK (PA14, pin 37)" / "CN4: +3.3V / DIO / DCLK / GND"
2 (orange, icon: EXACTLY 3 loose GPIO pins with NO connector housing around them — not 4, not
5, count them: three — clearly different from panel 1's enclosed 4-pin connector icon):
"JTAG Pinleri — Ayrı Konnektör Yok" — "JTDI (PA15,38), JTDO (PB3,39), JNTRST (PB4,40)" /
"Sadece genel GPIO header'da, kendi bağlantını sen kurarsın"
3 (orange, icon: an exact small schematic-style connector box showing EXACTLY 4 pins,
matching CN4's real symbol): "CN4 (SRP4) — Kartın Tek Debug Çıkışı" — "Pin1 +3.3V · Pin2 DIO ·
Pin3 DCLK · Pin4 GND" / "Kartta bundan başka dahili debug konnektörü yok"
4 (orange, icon: a forward-pointing arrow/preview icon, no pins): "Günlük Kullanım: Sadece
SWD" — "Pratikte 4 pin (CN4) yeterli" / "Tam JTAG gerekirse Bölüm 11'de ek kablolama
anlatılacak"

Do not render any pin number or alternate-function name beyond what is explicitly listed
above, and do not draw a connector housing around JTDI/JTDO/JNTRST.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "SWD → CN4",
"JTAG (Konnektörsüz)", "CN4 (SRP4)", "Sadece SWD Yeterli", each with a simple icon matching
its panel's icon and short Turkish title. Then the same single mandatory footer row:
bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right
"akademiusta.com" — same bold navy font, same baseline, text only, no logo/emblem.
```
