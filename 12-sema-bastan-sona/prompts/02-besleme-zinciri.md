# Scene: scene-02 — Besleme Zinciri

**Durum:** v2 — kesintisiz enerji yolu ve filtrelerin fiziksel anlamı.

Üretim: `tools/generate-slide.py 12-sema-bastan-sona/prompts/02-besleme-zinciri.md 12-sema-bastan-sona/slides/02-besleme-zinciri.png --mode generate`

```text
SCENE:
Day label: "GÜN 12"
Main title: "BESLEME ZİNCİRİ"
Subtitle: "5V → 3.3V → İşlemci"

Use case: scientific-educational. Draw one left-to-right copper-trace energy path, not panels:
"CN3 USB veya CN2 5V" → "C7 100n + C5 10u" → "U1 RT8183-B" →
"C6 10u + C10 100n" → "+3.3V dağıtım hattı" → "STM32F103".

At U1 show exactly "VIN 5V" and "VOUT 3.3V". Use a voltage gauge that visibly steps down
from 5.0 to 3.3. Beside each capacitor pair add a small explanatory cutaway:
"100nF: hızlı gürültüyü süzer" and "10uF: ani akım değişimini tamponlar".

From the 3.3V rail branch cleanly to:
"VDD_1/2/3 · pin 24/36/48", "VDDA · pin 9 · C4/C8 filtresi", and
"VBAT · pin 1 · 3VB hattı". Ground returns should merge into one GND rail.

Add a small multimeter checkpoint at the 3.3V rail: "Ölçüm noktası: 3.3 V".
Bottom band content: "Giriş var ama 3.3 V yoksa: önce U1 girişini, sonra çıkışını ölç."
Do not use numbered badges, repeated summary cards, extra parts, or imply that CN1 carries 5V.
```
