# Scene: scene-08 — Bu Serinin Sonu — Ve Başlangıcı

**Durum:** Planlanıyor (2026-07-16) — görsel HENÜZ ÜRETİLMEDİ, sadece prompt yazıldı.

**Gerçek görsel analizi (madde 4c):** Serinin son sahnesi — kavramsal bir kapanış, fiziksel
bileşen fotoğrafı gerekmiyor. **Not (brief.json teknik risk):** bu özel/son sahne olsa da,
özel bir "final tasarımı" icat edilmeyecek — aynı sabit master-style-prompt/footer kuralları
geçerli.

Üretim (henüz ÇALIŞTIRILMADI): `tools/generate-slide.py 12-sema-bastan-sona/prompts/08-serinin-sonu.md 12-sema-bastan-sona/slides/08-serinin-sonu.png`

```text
SCENE:
Day label: "GÜN 12" — render with correct Turkish characters.
Main title: "BU SERİNİN SONU — VE BAŞLANGICI"
Subtitle: "İşlemci değişir, sorular değişmez"

Central graphic: a simple checklist card showing exactly these 7 lines, each with a checkmark
icon, matching the real text: "Datasheet'i açıp ne arayacağını biliyorsun", "Part number'dan
işlemciyi tanıyorsun", "Şemadaki her bloğu anlıyorsun", "Besleme zincirini takip edebiliyorsun",
"Clock ve reset devrelerini okuyabiliyorsun", "GPIO ve iletişim hatlarını tanımlıyorsun",
"Debug pinlerini biliyorsun". No colored border/frame around this central content.

Four NUMBERED panels (large colored number badge 1,2,3,4 top-left of each panel), each panel
exactly one cohesive icon plus a caption of AT LEAST TWO concrete information lines. Use ONLY
the exact values given here:

IMPORTANT — badge color: all four number badges (1,2,3,4) and all four connector lines and
all four panel borders MUST be the exact same solid navy/dark-blue color (matching this
chapter's hero). Do NOT vary the badge color per panel.

IMPORTANT — each panel MUST use a clearly DIFFERENT icon matching its own content:
1 (blue, icon: a chip icon labeled "ESP32"): "ESP32 Şemasına Bak" — "Aynı sorular geçerli" /
"Besleme, clock, reset, boot, peripheral, debug"
2 (blue, icon: a small single-board-computer icon labeled "Raspberry Pi"): "Raspberry Pi
Şemasına Bak" — "Aynı sorular geçerli" / "Ölçek büyür, mantık aynı kalır"
3 (blue, icon: a small SoC icon labeled "Apple M1"): "Apple M1 Kartına Bak" — "Aynı sorular
geçerli" / "Karmaşıklık artar, yaklaşım değişmez"
4 (blue, icon: a graduation-cap or open-door icon): "Bu Bir Son Değil" — "Bu bir başlangıç" /
"Usta tahmin etmez, ölçer"

Do not render any additional processor/board name beyond ESP32/Raspberry Pi/Apple M1, and do
not invent a different closing message.

Bottom section: use the mandatory bottom layout — 4 cards mirroring the panels: "ESP32",
"Raspberry Pi", "Apple M1", "Bir Başlangıç", each with a simple icon and short Turkish title.
Then the same single mandatory footer row: bottom-left "Akademi Usta", bottom-center "Usta
tahmin etmez, ölçer.", bottom-right "akademiusta.com" — same bold navy font, same baseline,
text only, no logo/emblem.
```
