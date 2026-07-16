# Scene: scene-06 — Sahada Ne Anlama Gelir?

**Durum:** Üretiliyor (2026-07-16).

Kullanım: `visual-system/master-style-prompt.md` ana blok + referans paragrafı + aşağıdaki SCENE
bloğu + BOTTOM LAYOUT bloğu.

Üretim: `tools/generate-slide.py 07-reset-ve-boot/prompts/06-sahada-ne-anlama-gelir.md 07-reset-ve-boot/slides/06-sahada-ne-anlama-gelir.png`

```text
SCENE:
Day label: "GÜN 07" — render with correct Turkish characters.
Main title: "SAHADA NE ANLAMA GELİR?"
Subtitle: "3 senaryo, 3 teşhis"

Central hardware: a technician's hand holding a multimeter probe near a Blue Pill-style board's
BOOT jumper and reset button area, on a clean workbench background.

Three NUMBERED panels (large colored number badge 1,2,3 top-left of each panel, teal =
ölçüm/doğrulama), each connected with a thin matching-color line to the board, each panel
exactly one cohesive image/icon plus caption, representing the three diagnostic scenarios:

1 (teal): "Durum 1 — Firmware Yüklenemiyor" — "BOOT0 3.3V'da mı? Reset sonrası mı deniyor?"
2 (teal): "Durum 2 — Sürekli Bootloader'a Giriyor" — "BOOT0 sabit 3.3V'da mı kalmış? Jumper doğru mu?"
3 (teal): "Durum 3 — Kendiliğinden Resetleniyor" — "Besleme stabil mi? NRST hattında parazit var mı?"

Do not render any specific numeric readings or invented pin numbers beyond what is listed
above.

Bottom section: use the mandatory bottom layout — 4 cards (map the 3 scenarios plus a synthesis
card): "Firmware Sorunu", "Bootloader Takılı Kalma", "Kendiliğinden Reset", "Sistematik Teşhis",
each with a simple icon and short Turkish title. Then the same single mandatory footer row:
bottom-left "Akademi Usta", bottom-center "Usta tahmin etmez, ölçer.", bottom-right
"akademiusta.com" — same bold navy font, same baseline, text only, no logo/emblem.
```
