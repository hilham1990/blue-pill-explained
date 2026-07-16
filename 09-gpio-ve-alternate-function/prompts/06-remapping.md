# Scene: scene-06 — Remapping — Yeniden Haritalama

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** USART1 remap tablosu datasheet Table 5 ile doğrulanmış
(PA9=varsayılan TX, PA10=varsayılan RX, PB6=remap TX, PB7=remap RX — curriculum-qa,
2026-07-16). Fiziksel bir bileşen fotoğrafı gerekmiyor, bu sahne kavramsal bir karşılaştırma.

**Kasıtlı görsel farklılaştırma:** Bu bölümün "1 teknik karşılaştırma = 1 sahne" kategorisi
(layout-rules.md). Diğer sahnelerin panel-etrafında-merkez-görsel yapısından farklı olarak İKİ
KOLONLU yan yana karşılaştırma düzeni kullanılacak — Bölüm 05/06'daki "SPLIT comparison"
örnekleriyle tutarlı bir teknik.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/06-remapping.md 09-gpio-ve-alternate-function/slides/06-remapping.png`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "REMAPPING — YENİDEN HARİTALAMA"
Subtitle: "Varsayılan · Remap"

Central graphic: NOT a panel-and-connector-line layout. Instead, a clean two-column SPLIT
comparison diagram (clearly different in style from a flow/schematic diagram), divided by a
thin vertical line down the middle. Left column header "VARSAYILAN" showing "USART1 TX → PA9"
and "USART1 RX → PA10" as two labeled rows with small pin icons. Right column header "REMAP"
showing "USART1 TX → PB6" and "USART1 RX → PB7" as two labeled rows with small pin icons. Both
columns visually parallel/symmetric. Below the two columns, a single centered line of text:
"Neden? Şema tasarımında esneklik — başka bir çevre birimi PA9'u kullanıyorsa, USART1 PB6'ya
taşınabilir." No colored border/frame around this central content.

Four small NUMBERED callout panels arranged around/below the split comparison (large colored
number badge 1,2,3,4 top-left of each panel), each panel exactly one cohesive icon plus a
caption of AT LEAST TWO concrete information lines. Use ONLY the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid orange color (the "belge/şema kaynağı" function color, matching
this chapter's scene-04/05). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a pin icon labeled "9"): "Varsayılan TX — PA9" — "USART1 veri gönderme,
fabrika ayarı" / "Ek işlem gerekmez"
2 (orange, icon: a pin icon labeled "10"): "Varsayılan RX — PA10" — "USART1 veri alma, fabrika
ayarı" / "PA9 ile birlikte çalışır"
3 (orange, icon: a pin icon labeled "B6" with a small curved remap arrow): "Remap TX — PB6" —
"AFIO remap biti ayarlanınca aktif olur" / "PA9 başka bir işte kullanılıyorsa tercih edilir"
4 (orange, icon: a pin icon labeled "B7" with a small curved remap arrow): "Remap RX — PB7" —
"PB6 ile birlikte taşınır" / "İkisi birlikte remap edilir, tek tek değil"

Do not render any additional pin number or peripheral beyond USART1's TX/RX pair.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "TX — PA9",
"RX — PA10", "TX (Remap) — PB6", "RX (Remap) — PB7", each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
