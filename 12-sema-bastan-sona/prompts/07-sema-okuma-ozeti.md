# Scene: scene-07 — Şema Okuma Özeti

**Durum:** v2 — kanıt akışı ve evrensel altı soru.

Üretim: `tools/generate-slide.py 12-sema-bastan-sona/prompts/07-sema-okuma-ozeti.md 12-sema-bastan-sona/slides/07-sema-okuma-ozeti.png --mode generate`

```text
SCENE:
Day label: "GÜN 12"
Main title: "ŞEMA OKUMA ÖZETİ"
Subtitle: "Bu sıra her kartta aynı"

Use case: scientific-educational. Create one continuous diagnostic path across the page with
exactly these nine stations:
"Güç geldi" → "3.3V üretildi" → "İşlemci beslendi" → "Clock geldi" →
"Reset açıldı" → "Boot: Ana Flash" → "Firmware çalıştı" →
"USB · GPIO · LED aktif" → "SWD debug hazır".
Each station must have a different literal mini-icon and the connecting line must remain
unbroken, like current flowing through a system.

TECHNICAL LABEL LOCK — if component labels appear inside the mini-icons, use only these exact
facts: regulator "RT8183-B"; main clock "X1 · 8 MHz" with "C13/C14"; reset "R2 · 10kΩ" and
"C2 · 100nF"; boot "BOOT0=0 → Ana Flash". Prefer clean symbolic icons without component
designators. Never show AMS1117, R1/C1 for reset, or any invented crystal capacitor label.

Below the path place one technician's schematic clipboard containing exactly six universal
questions, grouped visually but not numbered as scene panels:
"Besleme nerede?" / "Clock nerede?" / "Reset devresi nasıl?" /
"Boot modu ne?" / "Peripheral'lar nereye bağlı?" / "Debug nasıl yapılıyor?"

Add a small comparison horizon with three generic boards of increasing complexity and a single
caption: "Kart değişir; kanıt sırası değişmez."
Bottom band content: "Şemayı soldan sağa değil, işlevden işleve oku."
Do not add stages or questions, use repeated summary cards, or claim every schematic has the
same page layout. Do not print any regulator, reset or clock component name other than the
locked facts above.
```
