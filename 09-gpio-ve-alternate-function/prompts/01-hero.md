# Scene: scene-01-hero — Her Pin Her An Aynı Şeyi Yapmıyor

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Aynı fiziksel çip Bölüm 08'de zaten fotoğraflanıp
doğrulanmıştı: `visual-system/references/real-mpu-chip-crop.png` — siyah LQFP48 paket, dört
kenarda gümüş gull-wing pinler, üstte "STM32F103C8T6" yazısı. Aynı bölüm/seri boyunca aynı
crop kullanılır (bkz. lessons-learned.md, Bölüm 06 X1/X2 dersi).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/01-hero.md 09-gpio-ve-alternate-function/hero.png --ref visual-system/references/real-mpu-chip-crop.png`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "GPIO VE ALTERNATE FUNCTION"
Subtitle: "Modu sen belirlersin"

Central hardware: a close-up photo of the real STM32F103C8T6 chip, matching the exact real
component shown in the attached additional reference image — a black LQFP48 package with
evenly spaced silver gull-wing leads on all four edges, white silkscreen markings on top (ST
logo plus "STM32F103C8T6" text), mounted on a blue PCB fragment with visible circuit traces.
Copy the real physical package exactly — do not invent a different chip shape or marking
layout.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the chip photo, each panel exactly one cohesive
image/icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact
values given here, do not invent any additional spec:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (the "donanım yakın
çekim" function color, matching Bölüm 08's hero). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (blue, icon: a single pin with a small looping arrow, suggesting reconfiguration): "GPIO —
Genel Amaçlı" — "Sabit değil, yapılandırılabilir" / "Her pin her an aynı şeyi yapmıyor"
2 (blue, icon: a small toggle/mode-selector switch): "Modu Yazılım Seçer" — "Input · Output ·
Alternate Function · Analog" / "Aynı anda sadece biri aktif"
3 (blue, icon: a globe or network-of-chips icon): "Evrensel Desen" — "RP2040 · nRF52 · GD32 —
her Cortex-M'de aynı mantık" / "Kayıt isimleri değişir, kavram değişmez"
4 (blue, icon: a chip icon with a small branching-matrix pattern): "ESP32 Farklı Çekirdek,
Aynı Fikir" — "Xtensa/RISC-V mimarisi, Cortex-M değil" / "GPIO matrisi üzerinden aynı kavram
çalışır"

Do not render any specific pin numbers or additional technical values beyond what is listed
above — this is a conceptual overview scene, not a pin-by-pin diagram (that comes in later
scenes).

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "GPIO — Genel
Amaçlı", "Modu Yazılım Seçer", "Evrensel Desen", "ESP32 Farklı Çekirdek", each with a simple
icon and short Turkish title. Then the same single mandatory footer row: bottom-left "Akademi
Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold
navy font, same baseline, text only, no logo/emblem.
```
