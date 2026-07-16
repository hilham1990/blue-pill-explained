# Scene: scene-03 — JTAG ile Farkı Nedir?

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Kavramsal karşılaştırma, fiziksel bileşen fotoğrafı
gerekmiyor. SWJ-DP'nin (SWD+JTAG ikisini birden destekleyen arayüz) gerçek datasheet
metniyle Bölüm 09'da zaten doğrulanmıştı.

**Kasıtlı görsel farklılaştırma:** Bölüm 08 scene-05 (Debug Pinleri) hangi FİZİKSEL pinlerin
hangi konnektöre çıktığını gösteren bir şema-kesiti sahnesiydi. Bu sahne farklı: SWD/JTAG'ı
PROTOKOL olarak karşılaştıran, fiziksel şema içermeyen soyut bir karşılaştırma (2 kolonlu
split, Bölüm 09 scene-06 remapping karşılaştırmasıyla aynı teknik).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 11-debug-swd/prompts/03-jtag-ile-farki.md 11-debug-swd/slides/03-jtag-ile-farki.png`

```text
SCENE:
Day label: "GÜN 11" — render with correct Turkish characters.
Main title: "JTAG İLE FARKI NEDİR?"
Subtitle: "2 sinyal · 4-5 sinyal"

Central graphic: a two-column SPLIT comparison diagram (clearly different in style from a
schematic or flow diagram), divided by a thin vertical line. Left column header "SWD" showing
a simple 2-line icon (two wires). Right column header "JTAG" showing a simple 4-5-line icon
(four or five wires). No colored border/frame around this central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid orange color (matching this chapter's scene-02). Do NOT vary the
badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a wire-count comparison icon, 2 vs 4 lines): "Pin Sayısı" — "SWD: 2 sinyal" /
"JTAG: 4-5 sinyal"
2 (orange, icon: a chain-link icon): "Zincir" — "SWD: tek işlemci" / "JTAG: birden fazla çipi
zincirleyebilir"
3 (orange, icon: a small trophy/star icon): "Yaygınlık" — "SWD: modern ARM'lerde standart" /
"JTAG: eski, çok-çipli sistemlerde"
4 (orange, icon: a chip icon with two small labeled ports): "STM32'de İkisi de Var" — "SWJ-DP
arayüzü ikisini de destekler" / "Blue Pill'de SWD daha pratik — CN4 zaten hazır"

Do not render any pin number beyond the general wire-count comparison.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Pin Sayısı",
"Zincir", "Yaygınlık", "STM32'de İkisi de Var", each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
