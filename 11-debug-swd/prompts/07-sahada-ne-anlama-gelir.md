# Scene: scene-07 — Sahada Ne Anlama Gelir?

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Kavramsal 3 durumlu teşhis senaryosu, fiziksel bileşen
fotoğrafı gerekmiyor (CN4/PA13/PA14 zaten scene-02'de gösterildi).

**Seri-içi stil tutarlılığı:** Bölüm 08/09/10'un kapanış "Sahada Ne Anlama Gelir?"
sahneleriyle aynı teal/doğrulama rengi kullanılır (seri-geneli sabit convention).

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 11-debug-swd/prompts/07-sahada-ne-anlama-gelir.md 11-debug-swd/slides/07-sahada-ne-anlama-gelir.png`

```text
SCENE:
Day label: "GÜN 11" — render with correct Turkish characters.
Main title: "SAHADA NE ANLAMA GELİR?"
Subtitle: "3 yaygın sorun, 3 teşhis"

Central graphic: three side-by-side small diagnostic cards (NOT a schematic, NOT a flow with
arrows — three parallel independent scenario boxes), each with a "Durum" label and a short
symptom description: "Durum 1: Cihaz tanınmıyor", "Durum 2: Target not found", "Durum 3: Debug
kurulamıyor". No colored border/frame around this central content beyond each card's own thin
border.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to its corresponding scenario (panel 4 is a general
tip, not tied to one scenario), each panel exactly one cohesive icon plus a caption of AT
LEAST TWO concrete information lines. Use ONLY the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and all
four panel borders MUST be the exact same solid teal color (the "ölçüm/doğrulama" function
color, matching Bölüm 08/09/10's closing scenes). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own specific content:
1 (teal, icon: a magnifying glass over a connector): "Cihaz Tanınmıyor" — "CN4 bağlantısı ve
pin sırası doğru mu?" / "GND ortak mı? (en yaygın hata)"
2 (teal, icon: a warning/error symbol): "Target Not Found" — "BOOT0=GND mi? (SWD için gerekli)"
/ "İşlemci besleniyor mu, sürücü güncel mi?"
3 (teal, icon: a locked/reconfigured pin icon): "Debug Kurulamıyor" — "PA13/PA14 yazılımda
GPIO yapılandırılmış olabilir" / "Bu pinler SWD için ayrılmalı, serbest bırakılmamalı"
4 (teal, icon: a checklist icon): "Genel İpucu" — "Önce en basitten başla: GND ortak mı?" /
"Sonra besleme, sonra pin yapılandırması"

Do not render any additional scenario beyond the three listed above.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Tanınmıyor",
"Target Not Found", "Debug Kurulamıyor", "Genel İpucu", each with a simple icon and short
Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
