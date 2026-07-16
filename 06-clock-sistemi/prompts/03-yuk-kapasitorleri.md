# Scene: scene-03 — Yük Kapasitörleri Neden Var?

**Durum:** Üretiliyor (2026-07-16).

**Tasarım kararı (kullanıcıyla 2026-07-16'da netleşti):** Kapasitörü soyut bir dalga formuyla
DEĞİŞTİRMİYORUZ (bu component-tanıma hedefini kaybettirir) — gerçek kapasitör fotoğrafının
yanına/altına küçük bir "önce/sonra" dalga inseti EKLİYORUZ. İkisi tek bir bütünleşik panel
görseli olarak kalır.

**Gerçek görsel analizi (madde 4c):** Aynı X1/X2 crop'ları kullanılıyor (bkz. scene-02) — bu
sahnede kapasitörler her kristalin yanında gösteriliyor, kristallerin paketleri scene-02 ile
tutarlı kalmalı.

Üretim: `tools/generate-slide.py 06-clock-sistemi/prompts/03-yuk-kapasitorleri.md 06-clock-sistemi/slides/03-yuk-kapasitorleri.png --ref visual-system/references/real-x1-crystal-crop.png --ref visual-system/references/real-x2-crystal-crop.png`

```text
SCENE:
Day label: "GÜN 06" — render with correct Turkish characters.
Main title: "YÜK KAPASİTÖRLERİ NEDEN VAR?"
Subtitle: "Doğru frekans için doğru kapasitör"

Central layout: two side-by-side close-up photos on blue PCB fragments:
- Left: X1 (oval grey metal-can crystal, marked "8.000", matching the attached real reference)
  with two small ceramic capacitors visible beside it on the PCB.
- Right: X2 (small black SMD crystal, marked "32.768K", matching the attached real reference)
  with two small ceramic capacitors visible beside it on the PCB.

Two NUMBERED panels (large colored number badge 1,2 top-left of each panel), each connected
with a thin matching-color line to its corresponding photo above. Each panel is ONE cohesive
composition containing BOTH: (a) the real capacitor component photo, AND (b) a small clean
inset diagram right next to it showing "before/after" — a slightly noisy/wobbly waveform on
the left flowing through a simple capacitor symbol into a clean flat waveform on the right.
This inset must be small, simple, and clearly part of the same panel, not a separate collaged
photo. Use ONLY the exact values given here, do not invent any additional spec:

IMPORTANT — badge color: both number badges (1,2) and both connector lines and both panel
borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın çekim" function
color). Do NOT vary the badge color per panel.

1 (blue): "X1 Kapasitörleri — C13, C14" — "12 pF, doğru frekansa oturtur"
2 (blue): "X2 Kapasitörleri — C9, C12" — "100 pF, doğru frekansa oturtur"

Do not render any additional capacitor values or reference designators beyond what is listed
above.

Bottom section: use the mandatory bottom layout — 4 cards (fourth card: "Kural" — "Yanlış
kapasitör = yanlış frekans"), each with a simple icon and short Turkish title. Then the same
single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez,
ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline, text only, no
logo/emblem.
```
