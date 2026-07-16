# Scene: scene-04 — USB Pinleri

**Durum:** Yeniden üretiliyor (2026-07-16, curriculum-qa düzeltmesi — ilk üretimde merkez
şemanın etrafına istenmeyen turuncu bir çerçeve/kutu çizilmişti, `layout-rules.md`'nin "merkez
içerik asla renkli çerçeve içine alınmaz" kuralını ihlal ediyordu. Bu kural scene-05'in 2.
üretiminde bulunup yazılmıştı ama scene-04 ondan önce üretildiği için kurala tabi olmamıştı —
şimdi uygulanıyor.)

**Gerçek görsel analizi (madde 4c):** Gerçek şemadan (`assets/source/blue-pill-schematic-source.webp`)
USB direnç ağı sıkı crop'landı: `visual-system/references/real-usb-crop.png` — USBDM → R9
(22Ω) → PA11 (pin 32); USBDP → R11 (22Ω) → PA12 (pin 33); R10 (10kΩ) pull-up, USBDP/D+ hattına
bağlı. Bu, QA'de düzeltilen doğru R-etiketleridir (README'de başlangıçta R9/R10/R11 birbirine
karışmıştı).

**Zenginleştirilmiş panel kuralı uygulanıyor (bkz. lessons-learned.md, Bölüm 08 scene-02
geri bildirimi):** her panel 2 satır somut bilgi + farklı ikon.

Üretim: `tools/generate-slide.py 08-mpu-ve-pinout/prompts/04-usb-pinleri.md 08-mpu-ve-pinout/slides/04-usb-pinleri.png --ref visual-system/references/real-usb-crop.png`

```text
SCENE:
Day label: "GÜN 08" — render with correct Turkish characters.
Main title: "USB PİNLERİ"
Subtitle: "R9 · R10 · R11 — üç direnç, tek görev"

Central hardware: a clean technical schematic diagram of the USB resistor network, matching
the attached additional reference image exactly — "USBDM" label on the left connecting
through a resistor labeled "R9 22r" to a node labeled "A11" (pin 32), and "USBDP" connecting
through a resistor labeled "R11 22r" to a node labeled "A12" (pin 33), with a third resistor
labeled "R10 10k" branching upward from the A12/USBDP node to a "+3.3V" rail marker. Thin
black schematic lines, monospace-style labels, white background. This must look like a real
schematic drawing, NOT a photograph. Copy the exact resistor positions and labels from the
attached reference — do not swap which resistor connects to which line. The central content
must NOT have any colored border, box, or frame around it — it sits directly on the plain
background, exactly like the side panels' connector lines terminate on empty space, not on a
drawn boundary line.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the schematic, each panel exactly one cohesive
image/icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact
values given here, do not invent any additional resistor or value:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color, matching the previous schematic scene). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a resistor symbol with an upward arrow to a horizontal rail line): "R10
(10kΩ) — Pull-up" — "USB host'a 'Full Speed cihazıyım' sinyali verir" / "USBDP (D+) hattına
bağlı, olmasa cihaz algılanmaz"
2 (orange, icon: a resistor symbol inline on a wire with a small '−' minus mark): "R9 —
USBDM Hattında" — "USBDM ile PA11 (pin 32) arasında, 22Ω" / "Diferansiyel hatta yansımayı
azaltır"
3 (orange, icon: a resistor symbol inline on a wire with a small '+' plus mark): "R11 —
USBDP Hattında" — "USBDP ile PA12 (pin 33) arasında, 22Ω" / "Diferansiyel hatta yansımayı
azaltır"
4 (orange, icon: a USB connector/plug icon with two parallel signal lines): "Diferansiyel
Çift Neden Önemli?" — "D+ ve D- birlikte, ters fazda çalışır" / "Hat empedansı bu yüzden
hassas, R9/R11 bunu korur"

Do not render any pin number or resistor value beyond what is explicitly listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "R10 (Pull-up)",
"R9 (USBDM)", "R11 (USBDP)", "Diferansiyel Çift", each with a simple icon matching its panel's
icon and short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi
Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold
navy font, same baseline, text only, no logo/emblem.
```
