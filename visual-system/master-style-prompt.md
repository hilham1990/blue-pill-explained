# Akademi Usta — Blue Pill Explained Visual System

Bu dosya, 12 bölümün tamamında **değişmeyen** ana stil promptudur. Her sahne promptu bu bloğu aynen başında taşır, altına sadece o sahneye özel `SCENE:` bölümünü ekler. Bu blok değişirse tüm seri boyunca tasarım kayması olur — değiştirmeden önce burada güncelle, tek tek promptlarda değil.

Onaylanmış referans:
- [`references/approved-day01.png`](references/approved-day01.png) — Bölüm 01 Hero görseli (2026-07-13 onaylandı). **Tek referans kaynağı budur.**

**Önemli kural (2026-07-13'te eklendi):** Her sahne HER ZAMAN doğrudan Hero'yu (`approved-day01.png`) referans alır — bir önceki üretilen sahneyi değil. Scene-02 → Scene-03 zincirlemesi denendi ve küçük bir render kusuru (üstteki regülatör IC'si "yanmış" gibi göründü) bu şekilde sahneden sahneye taşındı, ikisi de silinip yeniden üretildi. Referans zinciri kurma — her zaman kaynağa dön.

```text
Create a professional Turkish technical education infographic slide for the
"Blue Pill Explained" curriculum by Akademi Usta.

VISUAL IDENTITY:
- Clean, bright, professional engineering education style
- White to very light blue background
- Subtle printed circuit board traces in the background
- Main brand color: deep navy blue
- Secondary colors: cyan, teal, orange and yellow, used only for functional grouping
- Rounded rectangular information panels
- Thin, clean connector lines between the central hardware and explanation panels
- Realistic electronic components and laboratory equipment
- Precise engineering-document appearance
- Clear visual hierarchy
- Wide 16:9 presentation layout
- High readability on mobile and video
- Consistent spacing and margins
- No dark theme
- No cyberpunk aesthetic
- No excessive glow
- No decorative futuristic holograms
- No clutter
- No random electronic components

LAYOUT SYSTEM:
- Top-left: day label such as "GÜN 0X"
- Top-center: large lesson title
- Directly below: one short educational subtitle
- Central area: primary hardware, document or technical diagram
- Side panels: maximum four supporting concepts, each with a large colored NUMBER BADGE (1,2,3,4)
  top-left of the panel, connected to a precise point on the central hardware with a thin
  matching-color line
- Bottom section: see "Alt Bölüm (Bottom Layout) — Zorunlu" below. Mandatory on every slide,
  not just the hero.

TECHNICAL ACCURACY:
- Use realistic STM32F103C8T6 Blue Pill hardware
- Do not invent pins, components, labels or measurement values
- Do not alter the physical shape of known electronic components
- Leave uncertain technical text out instead of guessing

TYPOGRAPHY:
- Turkish text
- Bold geometric sans-serif headings
- Short labels
- Avoid long paragraphs
- Correct Turkish characters: Ç, Ğ, İ, Ö, Ş, Ü
- Every visible word must be spelled correctly
```

## Referans görsel kullanım kuralı

Her sahne promptuna, onaylı Bölüm 01 görseli referans olarak eklenirken şu paragraf da eklenir:

```text
Use the attached approved Day 01 slide only as a visual design reference.

Preserve:
- overall visual language
- white and light-blue background
- navy heading style
- rounded information panels
- connector-line style
- panel border thickness
- spacing system
- technical infographic appearance
- Akademi Usta educational identity

Do not copy:
- Day 01 content
- exact panel arrangement
- exact hardware composition
- Day 01 title or labels

Create a new layout appropriate for the new lesson while clearly belonging
to the same curriculum series.
```

## Alt Bölüm (Bottom Layout) — Zorunlu

**Sorun:** GPT Image 2, alt bölümü kendi başına tasarlamaya bırakılınca her seferinde farklı bir şey üretiyor — bazen footer eksik kalıyor, bazen Akademi Usta için kendi uydurduğu bir logo/amblem çiziyor (istenmeyen, tutarsız). Çözüm: bu bölümü asla modele bırakma, her prompt'un **sonuna** aşağıdaki bloğu harfiyen ekle. Bu, referans görsel paragrafından SONRA, en son eklenir.

```text
BOTTOM LAYOUT (MANDATORY)

Create a full-width bottom information band.

Inside the band:
- Four equally sized rounded cards (hero slide: six cards, one per universal question).
- Numbered 1-4 (hero: 1-6).
- Each card has one simple icon and one short Turkish title.
- Cards must be perfectly aligned and evenly spaced.
- Use the same layout style as the approved Day 01 slide.

Below the cards, ONE single footer row with three parts, evenly balanced left/center/right:
- Bottom-left: "Akademi Usta"
- Bottom-center: "Önce anlamak, sonra ölçmek."
- Bottom-right: "akademiusta.com/tr"

All three in the same bold navy font, same baseline, clearly legible — this slide will be
shared/copied widely, the link must always be readable. Balance the whole bottom section so the
card row and this single footer row feel evenly spaced with matching left/right margins — no
lopsided corners.

TEXT ONLY.
Do NOT generate any logo, icon, emblem, shield or symbol for Akademi Usta.
Use only the words "Akademi Usta", "Önce anlamak, sonra ölçmek.", and "akademiusta.com/tr" in a
clean bold font, all on one single row.

The bottom section must always look balanced, complete and professional.
Never leave empty space.
```

Bu blok tüm sahnelerde aynı kalır — sadece merkez içerik (kart, panel konuları) değişir. Hero'da 4 yerine 6 kart olması tek istisna (6 evrensel soru bandı zaten onaylı).

**Not:** Bu tek-satır-3-parça kural 2026-07-13'te, birkaç iterasyondan sonra kesinleşti. Onaylı Scene-02 (`02-neden-stm32.png`) bu kesin halden ÖNCE üretildi ve hâlâ ara-iterasyon footer'ını kullanıyor (iki satır, ortalanmış: "Akademi Usta" / "akademiusta.com/tr", logo yok ama tek satır/3-parça değil). Scene-03, 04 ve 05 zaten güncel standardı kullanıyor. Scene-02 yeniden üretilene kadar bu bir istisna olarak kalır.

## Tek satırlık sistem prensibi

> Her gün bağımsız bir görsel üretme; aynı teknik eğitim kitabının bir sonraki sayfasını üret. İçerik değişsin, görsel kimlik değişmesin.

## Metin üretimi — mevcut plan

GPT Image 2 metni **doğrudan** üretir (ayrı bir HTML/Canvas metin katmanı yok). Bölüm 01 testinde tüm panel başlıkları, madde işaretleri ve alt bant metni hatasız çıktı; tek eksik kartın kenarındaki dekoratif pin etiketleriydi (öğretici içeriğin parçası değil).

**Bu bir kaçış planı ile korunuyor** — aşağıdaki eşiklerden biri gerçekleşirse iki katmanlı sisteme (AI görsel + HTML/Canvas metin) geçilir:

1. En az 3 farklı günde metin hatası yüzünden yeniden üretim yapılırsa
2. Slaytların yüzde 20'sinden fazlasında tipografi tutarsızlaşırsa
3. Görsel başına iki veya daha fazla düzeltme turu gerekiyorsa
4. İngilizce/Türkçe metin karışıklığı tekrar ederse
5. Teknik değerleri resme güvenle yazdıramaz hâle gelirsen
6. 12 günlük seri 50-100 görsele büyürse

Bu eşiklerden biri tetiklenirse `render-text.mjs` gibi yeni bir araç ve `day-XX/` paralel klasör yapısı gündeme gelir — o ana kadar mevcut bölüm klasörleri + `tools/render-lesson-video.mjs` yeterli.
