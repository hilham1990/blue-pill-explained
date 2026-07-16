# Scene: scene-01-hero — İşlemcinin Her Pini Bir Soru İşareti

**Durum:** Üretiliyor (2026-07-16).

**Gerçek görsel analizi (madde 4c):** Gerçek kart fotoğrafında (`assets/source/blue-pill-card-exact-cutout.png`)
STM32F103C8T6 çipi net görünüyor — siyah LQFP48 paket, dört kenarda eşit aralıklı gümüş renkli
gull-wing pinler, üstte beyaz baskı ST logosu + "STM32F103C8T6" yazısı, bir köşede pin-1
göstergesi küçük yuvarlak nokta. Crop `visual-system/references/real-mpu-chip-crop.png` olarak
kaydedildi, ikincil referans olarak eklenecek. Bu çip bu bölümde başka sahnelerde de (scene-02,
muhtemelen scene-06/07) fiziksel fotoğraf olarak görüneceği için aynı crop o sahnelerde de
verilecek (bkz. lessons-learned.md, Bölüm 06 X1/X2 dersi — "ana sahnede doğru çıktı" diye
sonrakilerde atlanmaz).

Üretim: `tools/generate-slide.py 08-mpu-ve-pinout/prompts/01-hero.md 08-mpu-ve-pinout/hero.png --ref visual-system/references/real-mpu-chip-crop.png`

```text
SCENE:
Day label: "GÜN 08" — render with correct Turkish characters.
Main title: "MPU VE PINOUT"
Subtitle: "İşlemcinin her pini bir soru işareti. Datasheet cevap veriyor."

Central hardware: a close-up photo of the real STM32F103C8T6 chip, matching the exact real
component shown in the attached additional reference image — a black LQFP48 package with
evenly spaced silver gull-wing leads on all four edges, white silkscreen markings on top
(ST logo plus "STM32F103C8T6" text), a small circular pin-1 indicator dot near one corner,
mounted on a blue PCB fragment with visible circuit traces. Copy the real physical package
exactly — do not invent a different chip shape, pin spacing, or marking layout.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the chip photo, each panel exactly one cohesive
image/icon plus caption. Use ONLY the exact values given here, do not invent any additional
spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color). Do NOT vary the badge color per panel.

1 (blue): "48 Pin, Çok Görev" — "Aynı pin: GPIO + Alternate Function + Analog"
2 (blue): "Datasheet Cevap Verir" — "Hangi pin hangi işlevde, Pin Description tablosunda"
3 (blue): "Evrensel Desen" — "ESP32 · RP2040 · nRF52 · GD32 — aynı mantık"
4 (blue): "Büyük SoC'lerde Ölçek" — "Apple/Qualcomm: binlerce pin, BGA, fiziksel erişim yok"

Do not render any specific pin numbers, pin names, or additional technical values beyond what
is listed above — this is a conceptual overview scene, not a pin-by-pin diagram (that comes in
later scenes).

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "48 Pin, Çok
Görev", "Datasheet Cevap Verir", "Evrensel Desen", "Büyük SoC'lerde Ölçek", each with a simple
icon and short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi
Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold
navy font, same baseline, text only, no logo/emblem.
```
