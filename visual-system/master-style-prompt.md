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

CONTENT PRINCIPLE (2026-07-17, applies to every slide going forward):
Every visual element must depict something real and specific from this chapter's own content —
no empty/generic signage, no decorative icon that doesn't carry real information. Read and
understand the scene's actual teaching content before drawing anything; the image must tell
that specific story, not a generic "tech infographic" filler scene.

LAYOUT SYSTEM:
- Top-left: day label such as "GÜN 0X"
- Top-center: large lesson title
- Directly below: one short educational subtitle
- Central area: the clearest possible depiction of this scene's core concept. Use a real
  hardware/document close-up when the topic is physical (a chip, a connector, a schematic
  region). Use a literal technical block/flow diagram (multiplexer, signal path, decision
  tree, side-by-side comparison) when the topic is logical/procedural (a mode, a protocol, a
  configuration choice) — most GPIO/software/protocol topics are this second kind. Pick
  whichever actually explains the concept; never a generic decorative illustration.
- Side panels: maximum four supporting concepts. Each panel has a solid navy (or the panel's
  functional accent color) header bar across the top with a short bold white title — no
  numbered badge required. Panel body below the header holds whatever depicts that panel's
  real content best: bullet text, a small literal icon, a compact mini-diagram, or (when the
  chapter has real concrete example data, e.g. real pin/function pairings) an actual small
  data table with a header row and real values — never invented placeholder values. Where a
  central diagram exists, connect each panel to the relevant point on it with a thin
  matching-color line.
- Optional synthesis band: when this chapter's content states a principle that spans multiple
  real examples (e.g. the same concept holding across several named chip families), a single
  full-width band beneath the central area may show those real named items connected under one
  short caption stating the shared principle in the chapter's own words — not invented.
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

## Üretim modu (2026-07-17'den itibaren)

**`--mode generate` (varsayılan artık bu, `tools/generate-slide.py`):** Referans görsel YOK,
saf metinden görsel üretimi (`openai/gpt-image-2`, edit değil). Kullanıcının 2026-07-16 tarihli
geri bildirimi üzerine benimsendi: sabit `approved-day01.png` referansına `/edit` ile bağlı
kalmak, 8 bölüm sonra "her şey aynı iskelet, sadece yazı değişiyor" hissi yaratan bir şablona
dönüştü. Bu modda stil sadece yukarıdaki VISUAL IDENTITY bloğunun kelimeleriyle taşınır —
"Referans görsel kullanım kuralı" paragrafı bu modda eklenmez (aşağıda, sadece edit modu için
geçerli).

**`--mode edit`:** Eski davranış, hâlâ kullanılabilir — bir bileşenin gerçek fiziksel görünümünü
(çip paketi, konnektör, kristal) birebir korumak gerektiğinde, `--ref` ile gerçek bir fotoğraf/
şema kırpması verilerek. Bu durumda aşağıdaki referans paragrafı otomatik eklenir.

## Referans görsel kullanım kuralı (sadece `--mode edit`)

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

If the SCENE block above already specifies exact bottom band content, render ONLY that
content — do not add any further card, step, or procedure of your own invention alongside it,
even if it seems like a reasonable addition. One bottom band, one piece of content, exactly as
specified.

If the SCENE block does NOT specify bottom band content, pick whichever of these actually fits
this scene's real content, and render exactly one of them (never more than one):
- A short numbered procedure/flow (2-4 steps, connected by simple ">" arrows), when the
  chapter describes a real sequence of actions or decisions.
- A compact real comparison or reference detail (e.g. real named values placed side by side)
  that the panels above didn't have room for.
- If genuinely nothing new is left to add, a simple restatement is acceptable, but this should
  be the exception, not the default.
Cards/steps must be perfectly aligned, evenly spaced, and each carry one simple icon plus a
short Turkish label.

Below the band, ONE single footer row with three parts, evenly balanced left/center/right:
- Bottom-left: "Akademi Usta"
- Bottom-center: "Usta tahmin etmez, ölçer."
- Bottom-right: "akademiusta.com"

All three in the same bold navy font, same baseline, clearly legible — this slide will be
shared/copied widely, the link must always be readable. Balance the whole bottom section so the
card row and this single footer row feel evenly spaced with matching left/right margins — no
lopsided corners.

TEXT ONLY.
Do NOT generate any logo, icon, emblem, shield or symbol for Akademi Usta.
Use only the words "Akademi Usta", "Usta tahmin etmez, ölçer.", and "akademiusta.com" in a
clean bold font, all on one single row.

The bottom section must always look balanced, complete and professional.
Never leave empty space.
```

Bu blok tüm sahnelerde aynı kalır — sadece merkez içerik (kart, panel konuları) değişir. Hero'da 4 yerine 6 kart olması tek istisna (6 evrensel soru bandı zaten onaylı).

**Not:** Bu tek-satır-3-parça kural 2026-07-13'te, birkaç iterasyondan sonra kesinleşti. Onaylı Scene-02 (`02-neden-stm32.png`) bu kesin halden ÖNCE üretildi ve hâlâ ara-iterasyon footer'ını kullanıyor (iki satır, ortalanmış: "Akademi Usta" / "akademiusta.com/tr", logo yok ama tek satır/3-parça değil). Scene-03, 04 ve 05 zaten güncel standardı kullanıyor. Scene-02 yeniden üretilene kadar bu bir istisna olarak kalır.

**Not (2026-07-16):** İki değişiklik yapıldı, **sadece Bölüm 06'dan itibaren geçerli** — Bölüm 01-05'in 25 onaylı görseli eski haliyle kaldı, geriye dönük yeniden üretilmedi (sahne-numaralandırma değişikliğinde izlenen aynı yaklaşım, bkz. `CLAUDE.md`):
1. Orta slogan "Önce anlamak, sonra ölçmek."'ten "Usta tahmin etmez, ölçer."'e değiştirildi — daha kısa, markayı ("Usta") doğrudan taşıyan ve projenin kendi "kaynakta doğrula, tahmin etme" ilkesiyle örtüşen bir cümle.
2. Sağdaki URL "akademiusta.com/tr"'den "akademiusta.com"'a değiştirildi — gerçek site adresi `https://akademiusta.com/` olduğu için (URL'de "https://" gösterilmez, sadece temiz alan adı metni).

## Tek satırlık sistem prensibi

> Her gün bağımsız bir görsel üretme; aynı teknik eğitim kitabının bir sonraki sayfasını üret. İçerik değişsin, görsel kimlik değişmesin.

**Not (2026-07-17):** Bu prensip 13 Temmuz'da "her sahnenin `approved-day01.png`'ye `/edit` ile bağlı kalması" olarak uygulanmıştı — 8 bölüm sonra bu, kullanıcının deyimiyle "şablon" haline geldi: sadece yazı değişiyor, geri kalan her şey birebir aynı kalıyordu. Bölüm 09'dan itibaren "görsel kimlik" artık tek bir sabit referans görselin birebir kopyası değil, yukarıdaki VISUAL IDENTITY bloğunun (renkler, tipografi, genel düzen mantığı) kelimelerle taşınması anlamına geliyor — merkez kompozisyon (fotoğraf mı, diyagram mı, tablo mu) ve panel sayısı/şekli artık o bölümün gerçek içeriğine göre serbestçe belirleniyor. Bkz. yukarıdaki "CONTENT PRINCIPLE" ve "Üretim modu" bölümleri.

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
