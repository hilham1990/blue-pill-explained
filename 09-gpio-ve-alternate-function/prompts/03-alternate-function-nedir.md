# Scene: scene-03 — Alternate Function Nedir?

**Durum:** v2 — PA9 üzerinden seçim mantığını ayrıntılandıran yeni prompt.

Üretim: `tools/generate-slide.py 09-gpio-ve-alternate-function/prompts/03-alternate-function-nedir.md 09-gpio-ve-alternate-function/slides/03-alternate-function-nedir.png --mode generate`

```text
SCENE:
Day label: "GÜN 09"
Main title: "ALTERNATE FUNCTION NEDİR?"
Subtitle: "PA9 için üç olasılık, aynı anda tek seçim"

Use case: scientific-educational. Asset type: detailed 16:9 lesson slide for video and
presentation.

Create a large three-position rotary selector diagram centered on "PA9". The selector has
exactly three positions and the pointer rests clearly on only one position:
1. "GPIO" — "Genel giriş / çıkış"
2. "USART1_TX" — "Seri veri gönderme"
3. "TIM1_CH2" — "Timer kanal 2 / PWM"
Use amber only for the active selected route and pale navy for the inactive possibilities.

To the left, add a compact panel titled "Donanım Sınırı" with the exact text:
"Her fonksiyon her pine atanamaz." and "Olası eşleşmeler datasheet'te bellidir."
Include a small datasheet-table icon, not a fake readable table.

To the right, add a compact panel titled "Yazılımın Görevi" with a simple sequence:
"Pini yapılandır → Fonksiyonu seç → Peripheral kontrol etsin".
Add the exact warning: "İki görev aynı anda aktif olamaz."

Below the selector add one comparison strip:
"GPIO seçilirse CPU pini doğrudan okur/sürer" versus
"Alternate Function seçilirse pin USART veya Timer'a yönlendirilir".

Bottom band content: exactly three practical outcome cards matching the selector:
"GPIO → Buton / LED", "USART1_TX → Seri İletişim", "TIM1_CH2 → PWM".
Do not add numbered AF slots, PB6, remapping, register names, a fourth function, or repeated
number badges.
```
