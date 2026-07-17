# Scene: scene-02 — GPIO'nun 4 Pratik Kullanım Biçimi

**Durum:** v3 üretim promptu (2026-07-17) — video ve slayt anlatımında Gün 09 içeriğini
hero'dan bir adım daha ayrıntılı açmak için yeniden yazıldı. v1'de Analog hem Input altında
hem ayrı ana mod olarak gösterilmiş ve aynı yapılandırma iki kez sayılarak "9 olası
yapılandırma" sonucu çıkarılmıştı. Bu sürüm o sayımı kaldırır ve STM32F103 register mantığını
başlangıç seviyesinde doğru biçimde açıklar.

**Teknik çerçeve:** STM32F103'te GPIO yapılandırması `MODE` ve `CNF` bitleriyle yapılır.
Analog, donanım açısından giriş yapılandırmalarından biridir; fakat öğrencinin kullanım
amacını kolay ayırt etmesi için bu derste ayrı bir pratik kullanım başlığı olarak gösterilir.
STM32F103C8'de ADC vardır, DAC yoktur; bu nedenle görselde yalnızca ADC/analog giriş anlatılır.
Alternate Function tarafı da F1 ailesine uygun biçimde çıkış sürüşü üzerinden gösterilir:
AF Push-Pull ve AF Open-Drain.

Üretim: `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/02-gpionun-4-modu.md 09-gpio-ve-alternate-function/slides/02-gpionun-4-modu.png --mode generate`

```text
SCENE:
Day label: "GÜN 09" — render with correct Turkish characters.
Main title: "GPIO'NUN 4 KULLANIM BİÇİMİ"
Subtitle: "Oku · Sür · Çevre birimine devret · Analog ölç"

Teaching purpose: this is the detailed explanatory slide that follows the chapter hero. It
must help a beginner answer two questions: "Pin hangi yönde çalışıyor?" and "Sinyali kim
kontrol ediyor?" The image must read clearly both as a 16:9 presentation slide and as a video
frame. Prefer diagrams and short labels over paragraphs.

Central area: create one large, clean, left-to-right decision diagram titled "Bir GPIO pini
nasıl kullanılır?" Start with a single box "GPIO Pini", then branch into exactly FOUR practical
usage cards. The four cards are not an arithmetic count and must not be added together.

Card 1 — header "1 · DIGITAL INPUT" in navy:
- Main signal diagram: a small switch or sensor on the left sends a signal arrow INTO the MCU
  pin on the right.
- Exact labels: "Pin dışarıdan seviye okur" and "0 veya 1"
- Under it, show exactly THREE compact configuration chips: "Floating", "Pull-up",
  "Pull-down".
- Tiny warning label: "Floating giriş bağlantısızsa belirsiz kalabilir."

Card 2 — header "2 · DIGITAL OUTPUT" in navy:
- Main signal diagram: the MCU pin on the left sends a signal arrow OUT toward a small LED on
  the right.
- Exact labels: "Pin dış devreyi sürer" and "LOW veya HIGH"
- Under it, show exactly TWO compact mini-circuits:
  "Push-Pull — HIGH ve LOW sürer"
  "Open-Drain — yalnız LOW sürer; HIGH için pull-up gerekir"
- The Open-Drain mini-circuit must visibly include one external pull-up resistor to a positive
  supply rail. Do not show a pull-up resistor in the Push-Pull mini-circuit.

Card 3 — header "3 · ALTERNATE FUNCTION" in navy:
- Main signal diagram: an internal peripheral box labeled "USART / SPI / I2C / TIMER" controls
  the physical pin through a small routing arrow.
- Exact labels: "Pini GPIO yazılımı değil, seçilen çevre birimi kullanır" and "Aynı anda
  yalnızca seçilen görev aktiftir"
- Under it, show exactly TWO compact configuration chips: "AF Push-Pull" and
  "AF Open-Drain".
- Do not use numbered AF slots such as AF1, AF4 or AF7; STM32F103 does not use that
  terminology.

Card 4 — header "4 · ANALOG INPUT" in orange:
- Main signal diagram: a potentiometer produces a smooth analog waveform, the waveform enters
  the MCU pin, then a small box labeled "ADC" converts it into a stepped numeric-level icon.
- Exact labels: "Gerilim seviyesi ADC tarafından ölçülür" and
  "Dijital giriş tamponu devre dışı"
- Add one small clarification badge: "STM32F103'te analog, bir giriş yapılandırmasıdır."
- Do not mention or draw a DAC anywhere.

Place the four cards in a balanced 2-by-2 grid around the central "GPIO Pini" origin, with
clear arrows showing signal direction. Each card must use a different literal diagram matching
its function; do not reuse the same generic chip icon four times. Keep all text large enough
for mobile/video viewing. No long datasheet quotation and no decorative component photography.

Directly below the four-card diagram, add one narrow synthesis strip with exactly this text:
"Önce kullanım amacını seç: oku, sür, çevre birimine devret veya analog ölç."
Add a smaller second line:
"Not: Analog ayrı bir kullanım amacı olarak gösterilir; STM32F103 donanımında giriş
yapılandırmasıdır."

Do not show "4 + 2 + 2 + 1 = 9", "9 olası yapılandırma", "ADC/DAC", output-speed values,
register bit values, a second procedure band, or any specific pin number. Do not invent extra
steps, cards, modes, peripherals, technical values or captions.

Bottom band content: render exactly FOUR compact real-world example cards, evenly spaced and
not numbered:
- "Buton → Digital Input" with a push-button icon
- "LED → Digital Output" with an LED icon
- "USART TX → Alternate Function" with a serial waveform icon
- "Potansiyometre → Analog Input" with a potentiometer and ADC icon
These examples must be the ONLY content inside the bottom information band. Do not add a
second selection procedure, arithmetic summary, or any additional card row.
```
