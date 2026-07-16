# Scene: scene-05 — Çalışma Başlar — USB ve LED'ler

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** USB direnç ağının gerçek crop'u Bölüm 08'de zaten
çekilmişti: `visual-system/references/real-usb-crop.png`. LED'in gerçek fotoğrafı Bölüm 09'da
çekilmişti: `visual-system/references/real-led-pc13-crop.png`. **QA'de düzeltilen kritik
noktalar:** USB direnç etiketleri (USBDM→R9, USBDP→R11, R10=pull-up — önceki taslakta
üçü de karışmıştı) ve LED devre sırası (+3.3V→diyot→direnç, ters değil).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 12-sema-bastan-sona/prompts/05-calisma-baslar.md 12-sema-bastan-sona/slides/05-calisma-baslar.png --ref visual-system/references/real-usb-crop.png --ref visual-system/references/real-led-pc13-crop.png`

```text
SCENE:
Day label: "GÜN 12" — render with correct Turkish characters.
Main title: "ÇALIŞMA BAŞLAR"
Subtitle: "USB + LED'ler aktif"

Central graphic: two small schematic excerpts side by side — left: the USB resistor network
matching the attached reference image exactly (USBDM → R9 22r, USBDP → R11 22r, R10 10k
pull-up to +3.3V — copy the exact real labels, do not swap R9/R10/R11); right: the two LEDs
matching the real board's small SMD LED appearance from the attached reference (D1 red
labeled "PWR", D2 blue labeled "PC13"), each with its own resistor (R1 510r for D1, R5 510r
for D2) drawn in the real schematic order (+3.3V → diode → resistor → GND/PC13). No colored
border/frame around this central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here, do not invent any additional component or swap any resistor
label:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid orange color (matching this chapter's scene-02/03). Do NOT vary
the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a chip icon with a small "RUN" indicator): "Firmware Çalışıyor" — "Flash'tan
kod çalışır" / "Reset ve boot tamamlandı"
2 (orange, icon: a USB cable icon): "USB Aktif" — "USBDM→R9(22Ω), USBDP→R11(22Ω)" / "R10
(10kΩ) pull-up → Host'a Full Speed sinyali"
3 (orange, icon: a red LED icon): "Power LED — D1" — "+3.3V → D1 → R1(510Ω) → GND" / "Kart
beslendiği sürece yanar"
4 (orange, icon: a blue LED icon): "Kullanıcı LED'i — D2" — "+3.3V → D2 → R5(510Ω) → PC13" /
"PC13=LOW yanar, HIGH söner"

Do not render any pin number or resistor value beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Firmware
Çalışıyor", "USB Aktif", "Power LED (D1)", "Kullanıcı LED'i (D2)", each with a simple icon and
short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
