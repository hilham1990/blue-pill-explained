# Scene: scene-05 — Firmware Yükleme Süreci

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Kavramsal süreç diyagramı, fiziksel bileşen fotoğrafı
gerekmiyor. **QA'de düzeltilen kritik nokta: BOOT0 jumper için SAYISAL pozisyon (1-2/3-4 gibi)
İDDİA EDİLMEZ** — Bölüm 07'nin kendi açık notu bu numaraların şema/fotoğraflarda
doğrulanamadığını söylüyor. Bu sahnede sadece "3.3V tarafı" / "GND tarafı" dili kullanılır.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 11-debug-swd/prompts/05-firmware-yukleme.md 11-debug-swd/slides/05-firmware-yukleme.png`

```text
SCENE:
Day label: "GÜN 11" — render with correct Turkish characters.
Main title: "FIRMWARE YÜKLEME SÜRECİ"
Subtitle: "SWD ile · USB ile"

Central graphic: a two-column SPLIT process comparison (clearly different in style from a
schematic diagram) — left column header "SWD İLE (ST-LINK)" with 3 numbered mini-steps: "1.
ST-Link'i CN4'e bağla", "2. BOOT0: normal pozisyon", "3. Flash — tamamlandı". Right column
header "USB İLE (BOOTLOADER)" with 3 numbered mini-steps: "1. BOOT0'ı 3.3V tarafına al", "2.
USB'den flash et", "3. BOOT0'ı GND tarafına geri al". Do NOT render any numbered jumper
position (like "1-2" or "3-4") — only "3.3V tarafı" / "GND tarafı" wording, matching the exact
text given. No colored border/frame around this central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines/borders
MUST be the exact same solid orange color (matching this chapter's other scenes). Do NOT vary
the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (orange, icon: a debug-probe-to-connector icon): "SWD Yöntemi" — "ST-Link/J-Link ile
doğrudan" / "BOOT0 normal pozisyonda kalır"
2 (orange, icon: a USB cable icon): "USB Yöntemi" — "Dahili bootloader kullanılır" / "BOOT0
geçici olarak 3.3V tarafına alınır"
3 (orange, icon: a software/tool icon): "STM32CubeProgrammer" — "Her iki yöntemde de kullanılır"
/ "Hex/bin dosyasını seçip Flash'a basarsın"
4 (orange, icon: a checkmark/reset icon): "Sonrasında" — "Kart resetlenir, otomatik çalışmaya
başlar" / "USB yönteminde BOOT0'ı geri almayı unutma"

Do not render any specific numbered jumper position — only the "taraf" (side) wording given
above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "SWD Yöntemi",
"USB Yöntemi", "STM32CubeProgrammer", "Sonrasında", each with a simple icon and short Turkish
title. Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center
"Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same
baseline, text only, no logo/emblem.
```
