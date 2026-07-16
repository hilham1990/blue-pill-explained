# Scene: scene-02 — Besleme Zinciri

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Tüm değerler datasheet+şema ile Bölüm 05/08'de zaten
doğrulanmıştı, bu turda README'nin kendi metni (QA'de CN1→CN2 5V düzeltmesi dahil) yeniden
kontrol edildi. Fiziksel referans gerekmiyor — bu bir akış özeti.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 12-sema-bastan-sona/prompts/02-besleme-zinciri.md 12-sema-bastan-sona/slides/02-besleme-zinciri.png`

```text
SCENE:
Day label: "GÜN 12" — render with correct Turkish characters.
Main title: "BESLEME ZİNCİRİ"
Subtitle: "5V → 3.3V → İşlemci"

Central graphic: a horizontal left-to-right flow diagram with 4 stages connected by arrows:
"5V Girişi" (small USB/power icon) → "RT8183-B" (small regulator chip icon) → "3.3V Filtreli"
(small capacitor icon) → "İşlemci Beslemesi" (small chip icon). No colored border/frame.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to its corresponding flow stage, each panel exactly
one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the
exact values given here, do not invent any additional component:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid orange color (the "belge/şema kaynağı"
function color). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a USB/power-in icon): "5V Girişi" — "CN3 (USB) veya CN2'nin 5V pini" / "C7
(100n) + C5 (10u) giriş filtresi"
2 (orange, icon: a voltage-regulator chip icon): "RT8183-B Dönüşümü" — "VIN=5V → VOUT=3.3V" /
"U1, doğrusal gerilim regülatörü"
3 (orange, icon: a capacitor pair icon): "3.3V Filtreleme" — "C6 (10u) + C10 (100n)" /
"Çıkışı stabilize eder"
4 (orange, icon: a chip with multiple power-pin icon): "İşlemci Beslemesi" — "VDD_1/2/3 (pin
24/36/48), VDDA (pin 9)" / "VBAT (pin 1) — 3VB hattı, RTC için"

Do not render any pin number or value beyond what is listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "5V Girişi",
"RT8183-B", "3.3V Filtreleme", "İşlemci Beslemesi", each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
