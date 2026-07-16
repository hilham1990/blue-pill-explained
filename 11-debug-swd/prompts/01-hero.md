# Scene: scene-01-hero — Firmware Bu Pinlerden Giriyor

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Aynı fiziksel çip Bölüm 08/09/10'da zaten fotoğraflanıp
doğrulanmıştı: `visual-system/references/real-mpu-chip-crop.png`. Aynı crop bu bölümün hero'sunda
da kullanılır.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 11-debug-swd/prompts/01-hero.md 11-debug-swd/hero.png --ref visual-system/references/real-mpu-chip-crop.png`

```text
SCENE:
Day label: "GÜN 11" — render with correct Turkish characters.
Main title: "DEBUG — SWD"
Subtitle: "Firmware bu pinlerden giriyor. Sorun da buradan tespit ediliyor."

Central hardware: a close-up photo of the real STM32F103C8T6 chip, matching the exact real
component shown in the attached additional reference image — black LQFP48 package, silver
gull-wing leads, "STM32F103C8T6" silkscreen text, blue PCB fragment. Copy the real physical
package exactly.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the chip photo, each panel exactly one cohesive
icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact values
given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color. Do NOT vary the
badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (blue, icon: two small pins with a data-pulse icon): "SWD — 2 Pinli Protokol" — "Serial Wire
Debug" / "Firmware yükleme + canlı debug, tek arayüz"
2 (blue, icon: a downward arrow into a chip, labeled with a small file icon): "Firmware
Yükleme" — "ST-Link üzerinden .hex/.bin yükler" / "CN4 konnektörü üzerinden"
3 (blue, icon: a magnifying glass over a code/variable icon): "Canlı Debug" — "Çalışırken
durdur, değişkenleri oku" / "Register seviyesinde inceleme"
4 (blue, icon: a globe or network-of-chips icon): "Evrensel Desen" — "RP2040 · nRF52 · GD32 —
SWD kullanır" / "ESP32 (Xtensa/RISC-V) JTAG kullanır — kavram benzer, arayüz farklı"

Do not render any specific pin number or connector detail beyond what is listed above — this
is a conceptual overview scene, details come in later scenes.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "SWD — 2
Pinli", "Firmware Yükleme", "Canlı Debug", "Evrensel Desen", each with a simple icon and short
Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
