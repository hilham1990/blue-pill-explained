# Scene: scene-07 — LED Örneği — PC13

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Gerçek kart fotoğrafında (`assets/source/blue-pill-card-exact-cutout.png`)
PC13 LED'i bulundu ve crop'landı: `visual-system/references/real-led-pc13-crop.png` — SWD
header ile kristal arasında, "PWR" (sol, D1/kırmızı) ve "PC13" (sağ, D2/mavi) silkscreen
etiketli iki küçük SMD LED yan yana. Fotoğrafta LED'ler sönük/takılı halde olduğu için renk
net ayırt edilemiyor — renk kimliği şemadan doğrulandı (D2=Blue, curriculum-qa). Devre sırası
da QA'de düzeltildi: gerçek şema +3.3V→D2→R5(510Ω)→PC13 sırasını gösteriyor (README'nin
önceki taslağında R5/D2 ters yazılmıştı).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/07-led-ornegi-pc13.md 09-gpio-ve-alternate-function/slides/07-led-ornegi-pc13.png --ref visual-system/references/real-led-pc13-crop.png`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "LED ÖRNEĞİ — PC13"
Subtitle: "LOW = yanar, HIGH = söner"

Central hardware: a close-up photo of the real small blue SMD LED on the Blue Pill board,
matching the physical package/shape/size shown in the attached additional reference image — a
small black rectangular surface-mount LED package (NOT a large 5mm through-hole dome LED),
mounted on the blue PCB near the crystal, with a faint blue glow suggesting it is lit. Copy the
real physical SMD package exactly — do not draw a generic large round LED.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the chip/LED photo, each panel exactly one
cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact
values given here, do not invent any additional component or value:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color, matching this chapter's scene-01/02). Do NOT vary the badge color per
panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (blue, icon: a simple LED diode schematic symbol, colored blue): "D2 — Mavi LED" — "+3.3V
hattına anot tarafından bağlı" / "Blue Pill'in üzerinde hazır lehimli"
2 (blue, icon: a resistor symbol): "R5 — 510Ω" — "LED akımını sınırlar" / "D2'nin katot
tarafında, PC13'e doğru"
3 (blue, icon: a downward arrow into a pin, labeled LOW): "PC13 = LOW" — "Akım 3.3V'tan
PC13'e akar" / "LED yanar"
4 (blue, icon: an upward arrow away from a pin, labeled HIGH): "PC13 = HIGH" — "Potansiyel
farkı yok, akım akmaz" / "LED söner"

Do not render any other resistor/LED/component beyond D2 and R5, and do not render the whole
board — this is a tight close-up of just this one LED area.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "D2 — Mavi
LED", "R5 — 510Ω", "PC13 = LOW (Yanar)", "PC13 = HIGH (Söner)", each with a simple icon and
short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
