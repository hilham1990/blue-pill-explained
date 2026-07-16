# Scene: scene-01-hero — Üçü de Veri Taşır, Ama Çok Farklı Çalışır

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Bu sahne fiziksel bir bileşen değil, 3 protokolü
kavramsal olarak tanıtan bir açılış. Merkez görsel için gerçek bir fotoğraf/şema gerekmiyor —
sembolik hat-sayısı ikonları yeterli.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 10-iletisim-protokolleri/prompts/01-hero.md 10-iletisim-protokolleri/hero.png`

```text
SCENE:
Day label: "GÜN 10" — render with correct Turkish characters.
Main title: "İLETİŞİM PROTOKOLLERİ"
Subtitle: "Üçü de veri taşır, ama çok farklı çalışır"

Central graphic: three simple symbolic wire-count icons side by side, NOT a schematic, NOT a
photo — just three minimal line-diagrams: a 2-wire icon labeled "UART", a 4-wire icon labeled
"SPI", a 2-wire bus icon (with small branch dots suggesting multiple devices) labeled "I2C".
Plain background, no colored border/frame.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each
connected with a thin matching-color line to the relevant icon, each panel exactly one
cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY the exact
values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color. Do NOT vary the
badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (blue, icon: a small wire-count icon with a padlock/minimal symbol): "Kablo Sayısı Az Olsun
Mu?" — "I2C — sadece 2 kablo, çok cihaz" / "Adres sistemiyle ayırt edilir"
2 (blue, icon: a speedometer/gauge icon): "Hız Önemli Mi?" — "SPI — en hızlı seçenek" / "4
kablo, tam çift yönlü (full duplex)"
3 (blue, icon: a long dashed-line/distance icon): "Mesafe Uzun Mu?" — "UART — asenkron, basit"
/ "İki taraf aynı hızı (baud rate) bilmeli"
4 (blue, icon: a simple checkmark-on-wire icon): "Basitlik Mi?" — "UART — en kolay kurulum" /
"Sadece TX/RX, ortak clock gerekmez"

Do not render any pin number or specific IC part name — this is a conceptual opening scene,
details come in later scenes.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "Az Kablo →
I2C", "Hız → SPI", "Mesafe → UART", "Basitlik → UART", each with a simple icon and short
Turkish title. Then the same single mandatory footer row: bottom-left "Akademi Usta",
bottom-center "Usta tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy
font, same baseline, text only, no logo/emblem.
```
