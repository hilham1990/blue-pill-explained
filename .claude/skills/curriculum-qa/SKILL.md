---
name: curriculum-qa
description: Run a full pedagogical + structural + visual QA pass on one blue-pill-explained chapter (README, brief/scenes/manifest JSON, slides, real-source cross-check). Use before approving a chapter's media, before moving to the next day, or whenever asked to "check"/"analyze"/"review" a bölüm.
---

# Curriculum QA (Blue Pill Explained)

Standard, repeatable QA pass for one chapter (`0X-chapter-name/`). Built 2026-07-13 after a manual pass on Bölüm 01 (and a partial pass on 02-12) found two categories of defect that matter very differently:

1. **Pedagogical/factual errors** — wrong information a student would act on. These are the priority. Found on the first real run: schematic grid-coordinates (A-E / 1-8) stated in Bölüm 04/05/06/07/11 were wrong in 4 of 5 cases when checked cell-by-cell against the real schematic; Bölüm 03 contradicted its own device-summary table two paragraphs later (37 I/O vs "80 GPIO pini" with no qualifier).
2. **Visual/style polish** — garbled AI-generated pin labels, resolution mismatches, badge fill inconsistency, typos. Real, worth fixing, but never let these consume the review at the expense of #1. If time/budget is limited, #1 always wins.

**Don't confuse "the image looks fine at a glance" with "the image is correct."** Every finding in the first real run that mattered (coordinate errors, garbled pin numbers) required either cross-referencing the real source document or zooming into a cropped region — nothing was visible from a normal read of the rendered slide.

## When to run this

- Before marking a chapter's media "Tamamlandı" in `PRODUCTION.md`.
- Before starting production on the next chapter (check the chapter you're leaving, not just the one you're entering).
- Whenever the user asks to "check", "analyze", "review", or "gözden geçir" a bölüm.
- Re-run after applying fixes from a previous QA pass — confirm the fix actually landed and didn't break the cross-file ordering.

## Inputs

For chapter `0X-name/`, gather what exists (not all chapters have all files):
```
0X-name/README.md              — always exists, source of truth for content
0X-name/brief.json              — goal, core message, must_show, technical_risks (Bölüm 01+ only)
0X-name/scenes.json             — scene-by-scene breakdown, narration, duration, status
0X-name/slides-manifest.json    — video timing draft
0X-name/slides/*.png            — generated slide images
0X-name/hero.png                — chapter cover image, if any
assets/source/*                 — ground truth: real datasheet PDF, real schematic webp/png
visual-system/*.md              — style bible: master-style-prompt.md, layout-rules.md, terminology.md
PRODUCTION.md                   — declared production status, cross-check it matches reality
```

## Step 1 — Structural cross-check (fast, do this first)

- Does every image referenced in `README.md` (`![...](...)`) exist on disk? Any broken links?
- Does the scene count/order in `scenes.json` match `slides-manifest.json` match the image sequence in `README.md`? All three must agree on order and count.
- Any file under `images/` or `slides/` that nothing references anymore (orphan from a removed/renamed scene)? Flag for cleanup, don't delete without asking.
- If `brief.json` exists: is every item in `must_show` actually covered by at least one approved scene? If `brief.json` gives a `recommended_scene_count`, does the actual approved scene count match — and if not, is the mismatch explained (e.g. a scene was cut and the note says why)?
- Does `PRODUCTION.md`'s status line for this chapter match what's actually on disk (folders it references still exist, "Tamamlandı" chapters actually have `video/` output)?

## Step 2 — Real-source cross-check (this is where the pedagogical errors live)

This is the step that caught every serious error on the first run — don't skip it because the text "reads fine."

- **Any schematic grid-coordinate reference** (e.g. "D6–E7 koordinatları") — open `assets/source/blue-pill-schematic-source.webp` (or equivalent), crop/zoom the named cell, and confirm the named block is actually there. Check every single one; they are not consistent even within one chapter's own claims.
- **Any numeric spec claim** (Flash/SRAM size, pin count, I/O count, frequency, resistor/capacitor value, timer/DMA/ADC channel count) — cross-check against `assets/source/STM32F103X8-datasheet.pdf` (Table 1 device summary, Table 2 peripheral counts, or the relevant section) for the *specific part number used* (STM32F103C8T6), not a different family member's numbers.
- **Any pin name/number claim** (e.g. "VDD_1 pin 24", "BOOT0 pin 44") — cross-check against the real schematic, not against a different chapter's redraw of it.
- Watch specifically for **family-generic vs. specific-part numbers being mixed without a qualifier** — the real datasheet's Figure 1 block diagram and headline spec text describe the whole STM32F103x8/xB family (e.g. "128 KB Flash", "80 GPIO") while the actual Blue Pill chip (C8T6) has smaller specific numbers (64 KB, 37 I/O). Both are "correct" in their own context but need a qualifier when they appear near each other, or a reader will see a contradiction.

## Step 3 — Visual inspection (open every image, don't skim)

For each slide/hero image:
- Read the image, then crop+zoom (via a short Python/PIL snippet, `sips` for dimensions) any area with small text: pin header labels, device-summary tables, schematic pin numbers. AI-generated board photos and AI-redrawn schematics are the highest-risk areas — garbled/duplicated/missing digits and letters have shown up repeatedly and are invisible at normal viewing size.
- Chip name spelled correctly everywhere it's rendered (`STM32F103C8T6` — watch for mangling like "GTM32").
- Panel count ≤4 (per `layout-rules.md`); each panel is one cohesive photo, not two sub-frames collaged.
- Color→function mapping consistent with `layout-rules.md` (orange=belge, blue=donanım, yellow=kontrol, teal=ölçüm) — and consistent with how *other* chapters already used it.
- `GÜN 0X` badge present, correct two-digit number, matches current style (check `layout-rules.md`, which itself gets corrected if it drifts from what's actually approved — the rule should describe reality, not the reverse).
- Footer three-part row present if the chapter uses the branded-slide format: Akademi Usta / tagline / URL, text-only, no invented logo.
- Image resolution/aspect ratio consistent across all images in the same chapter (a hero at a different resolution than its own chapter's slides is a process-hygiene flag, not just cosmetic — it'll rescale differently in `render-lesson-video.mjs`).

## Step 4 — Internal + cross-chapter consistency

- Does the same fact (a spec number, a pin name, a terminology choice) get stated identically everywhere it recurs in this chapter? (Bölüm 03's 37-vs-80-GPIO contradiction was two paragraphs apart in the same file.)
- Does this chapter's forward-reference ("Bölüm 05'te tam analiz yapacağız") actually get paid off in that later chapter?
- Terminology matches `terminology.md` exactly — flag any silent EN/TR mixing or a concept renamed mid-series.
- `sen`/`siz` register is consistent within the document (the series addresses the learner as `sen` throughout — a stray `siz` or a subject/possessive mismatch like "elimde" instead of "elinde" reads as a real grammar error, not style).

## Step 5 — Language pass

- Turkish vowel-harmony on question particles (mı/mi/mu/mü) and suffixes.
- Basic typo scan on headings and pull-quotes (these get re-read/re-recorded most, so errors there compound into narration/subtitles later).

## Output format

Report findings **most-severe-first**, in this order, and say explicitly if a category found nothing:

1. **Pedagojik/faktüel hatalar** — wrong facts, broken coordinate/pin references, internal contradictions. Always include the concrete verification (what you cross-referenced, what the real value is) — not just "this seems off."
2. **Yapısal tutarsızlıklar** — ordering/count mismatches across README/scenes.json/manifest, broken links, orphan files.
3. **Görsel kusurlar** — garbled text, collaged panels, color-code drift, resolution mismatch.
4. **Dil/yazım** — grammar, vowel harmony, typos.

Do not let category 3-4 findings crowd out or dilute category 1 in the summary — lead with pedagogical correctness, note the rest as secondary polish. If asked to also fix (not just report), apply category 1 and 2 fixes as direct text edits; treat category 3 fixes (image regeneration) as requiring explicit go-ahead since they cost real money via `curriculum-slide-gen` and can destroy already-approved/rendered media — confirm scope before regenerating anything.
