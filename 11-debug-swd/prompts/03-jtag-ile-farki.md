# Scene: scene-03 — SWD ve JTAG

**Durum:** v2 — gerçek sinyal topolojileriyle karşılaştırma.

Üretim: `tools/generate-slide.py 11-debug-swd/prompts/03-jtag-ile-farki.md 11-debug-swd/slides/03-jtag-ile-farki.png --mode generate`

```text
SCENE:
Day label: "GÜN 11"
Main title: "SWD VE JTAG ARASINDAKİ FARK"
Subtitle: "İki sinyal · dört temel JTAG sinyali"

Use case: scientific-educational. Create a balanced split comparison with literal topology
diagrams, not four numbered callouts.

Left "SWD": one debug probe connected to one Cortex-M target using exactly:
"SWDIO ↔" and "SWCLK →". Add support icons for GND/reference without counting them as debug
signals. Caption: "2 debug sinyali · az pin · Blue Pill CN4".

Right "JTAG": one probe connected through a chain of exactly three chip icons. Show exactly
four core signal labels: "TMS", "TCK", "TDI", "TDO". TDI enters the first chip, flows through
the chain, TDO exits the last chip; TMS/TCK are shared. Add small optional note:
"nTRST bazı sistemlerde eklenebilir." Caption: "Çok çipli scan chain".

Comparison strip with exactly:
"Pin kullanımı: SWD daha az" / "Zincir: JTAG güçlü" /
"STM32 SWJ-DP: ikisini de destekler".

Bottom band content: exactly three decision cards:
"Blue Pill → SWD" / "Çok Çipli Zincir → JTAG" / "İkisi de Debug Arayüzü".
Do not say JTAG always has exactly five mandatory signals. Do not add pin numbers or CN4
pinout here.
```
