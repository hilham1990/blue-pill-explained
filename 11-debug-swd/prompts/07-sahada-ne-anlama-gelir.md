# Scene: scene-07 — Sahada SWD Teşhisi

**Durum:** v2 — en basit elektriksel kontrolden recovery bağlantısına kanıt sırası.

Üretim: `tools/generate-slide.py 11-debug-swd/prompts/07-sahada-ne-anlama-gelir.md 11-debug-swd/slides/07-sahada-ne-anlama-gelir-v2.png --mode generate`

```text
SCENE:
Day label: "GÜN 11"
Main title: "SWD BAĞLANTISI KURULMUYORSA"
Subtitle: "En basit elektriksel kontrolden başla"

Use case: scientific-educational. Create a teal diagnostic evidence path enriched with
multimeter, connector, clock and reset visuals; not empty scenario boxes.

Exactly four sequential stages:

Stage 1 "Güç ve GND": multimeter probes on target.
"3.3 V var mı?" / "Probe ve kart GND'si ortak mı?"

Stage 2 "CN4 ve Sinyaller": enlarged 4-pin connector icon.
"Pin2 DIO/SWDIO" / "Pin3 DCLK/SWCLK" / "Ters veya gevşek bağlantı var mı?"

Stage 3 "Bağlantı Ayarı": probe clock icon and reset button.
"SWD frekansını düşür" / "Connect under reset dene".
Show SWCLK pulses becoming slower and probe holding NRST low as a conceptual recovery method;
do not claim NRST is present on CN4.

Stage 4 "Firmware Pinleri Kapattı mı?": PA13/PA14 pin-mux icon.
"Firmware PA13/PA14'ü GPIO yaptıysa debug kaybolabilir" /
"Recovery sonrası pinleri SWD için serbest bırak".

Add exact correction note:
"BOOT0=GND normal Flash başlangıcı içindir; SWD erişiminin zorunlu koşulu değildir."

Finish with evidence order:
"Ölç → Kabloyu doğrula → Frekansı düşür / reset altında bağlan → Firmware'i düzelt".

Bottom band content: exactly four method cards:
"3.3 V + GND" / "SWDIO + SWCLK" / "Under Reset" / "PA13 + PA14".
Do not recommend BOOT0 as the primary SWD fix, add a fifth scenario, claim NRST is on CN4, or
invent CN4 pin numbers beyond Pin2/Pin3 used above.
```
