---
name: curriculum-slide-gen
description: Generate a "GÜN 0X" branded infographic slide for a blue-pill-explained chapter using fal.ai's openai/gpt-image-2/edit, following the fixed visual-system style bible. Use when asked to create/regenerate slide images for this curriculum.
---

# Curriculum Slide Generation (Blue Pill Explained)

Generates on-brand infographic slides for the `blue-pill-explained` STM32 curriculum. Validated 2026-07-13 after comparing fal.ai `gpt-image-1.5`, direct OpenAI `gpt-image-1`, and fal.ai `openai/gpt-image-2/edit` — **only `openai/gpt-image-2/edit`, edited from a real board photo, produced pixel-legible Turkish text and correct callout captions.** Do not substitute a different model/endpoint without re-validating quality first.

System agreed with the user 2026-07-13: **lightweight**, no parallel `day-XX/` tree, no new build scripts, no HTML/Canvas text layer — until a specific escape-hatch threshold is hit (see below).

## File layout (per chapter, inside the existing numbered chapter folder)

```
0X-chapter-name/
├── README.md              (existing curriculum text — source of truth for content)
├── brief.json             (pedagogical summary: goal, core message, must_show, technical_risks)
├── scenes.json             (scene-by-scene narrative breakdown + narration + duration)
├── prompts/
│   └── NN-slug.md          (final GPT Image 2 prompt per scene, references visual-system/)
├── slides/
│   └── NN-slug.png         (generated images)
├── slides-manifest.json    (video timing draft: scene_id, image, start/end, transition, zoom)
└── video/                  (only once actually rendered, via tools/render-lesson-video.mjs)
```

Shared, never duplicated per chapter:
```
visual-system/
├── master-style-prompt.md  (THE style bible — never changes; only the SCENE block per prompt changes)
├── layout-rules.md         (measurable layout/panel/color/timing rules)
├── terminology.md          (fixed Turkish/English term glossary — keep wording identical across all 12 days)
└── references/
    └── approved-day01.png  (attach this as the visual reference image on every generation call)
```

## Prerequisites

- fal.ai API key in macOS Keychain: `security find-generic-password -s "FAL_KEY" -w`
- Never echo the key to stdout/logs/files. Retrieve it inline in the same command that uses it, `unset` it after.
- Base photo for anything showing the bare board: `STM serisi/blue-pill-card-crop-preview.png` (the real, unedited Blue Pill board photo — this is what makes pin labels/chip text trustworthy on hero-style shots). For scenes centered on something else (chip close-up, schematic, datasheet), the reference image is `visual-system/references/approved-day01.png` (style only, per the "do not copy content" rule in `master-style-prompt.md`).

## Endpoint

```
POST https://queue.fal.run/openai/gpt-image-2/edit
Authorization: Key <FAL_KEY>
Content-Type: application/json
```

Body:
```json
{
  "prompt": "<master-style-prompt.md style block> + <reference-image-usage paragraph> + <SCENE block from prompts/NN-slug.md> + <BOTTOM LAYOUT (MANDATORY) block from master-style-prompt.md — always last, never left to the model>",
  "image_urls": ["data:image/png;base64,<reference image base64>"],
  "image_size": "landscape_16_9",
  "quality": "medium",
  "num_images": 1
}
```

- `quality: medium` costs ~$0.03–0.04/image and was sufficient in testing. Only go to `high` if a specific slide's text still comes out garbled at medium after one retry.
- Poll `GET https://queue.fal.run/openai/gpt-image-2/requests/{request_id}/status` every ~3s until `COMPLETED`, then `GET .../requests/{request_id}` for the `images[0].url`, then `curl` that URL to save the PNG.

## Per-chapter workflow

1. Read the chapter's `README.md`. If `brief.json` doesn't exist yet, write it first (goal, core message, audience, must_show, technical_risks) — don't jump straight to images.
2. Write `scenes.json`: use the visual-count formula in `layout-rules.md` (12–25s per scene; 1 main idea = 1 scene). Get the scene breakdown right before generating anything. **If the chapter has a hero slide, check every scene's `visual_focus` against the hero's own panel/band content before approving the scene list — a scene that just re-asks the same sub-topics the hero already covered (same hardware close-ups, same concepts, just phrased as questions) is redundant and should be cut, not generated.** (Caught 2026-07-13 on Bölüm 01: a "Bu Seri Ne Öğretiyor?" scene re-covered besleme/clock/BOOT0-RESET, all already shown in the hero's own panels — deleted after already being generated and embedded, wasting a paid generation.)
3. Write one `prompts/NN-slug.md` per scene: `master-style-prompt.md`'s fixed block + the reference-image paragraph + a SCENE block specific to that scene (title, subtitle, panel contents, captions).
4. Generate one slide at a time, save to `slides/NN-slug.png`, mark `scenes.json`'s `status` field `"approved"` once the user confirms it.
5. Show the result to the user before moving to the next scene — do not batch-generate a whole chapter without a check-in.
6. Every image must earn its place: it has to visually match and complete what that specific chapter's text teaches at that point in sequence — not generic decorative filler.
7. Update `slides-manifest.json` timings once real narration audio durations are known (this file is a draft until then).

## Hard rules (from layout-rules.md / terminology.md — don't relitigate per-scene)

- Max 4 callout panels per slide.
- **Every panel holds exactly one cohesive photo — never two sub-frames collaged into one panel.** (Caught 2026-07-13: a "Test ve Ölçüm" panel had oscilloscope + multimeter as two separate frames glued together; fixed by asking for one single workbench photo showing both instruments.)
- Fixed color→function mapping: orange = belge/datasheet, blue = donanım bileşeni yakın çekim, yellow = kontrol/buton/jumper, teal = ölçüm/test.
- Chip name is always `STM32F103C8T6` — verify it didn't get mangled (seen failure: "GTM32").
- Use `terminology.md`'s exact wording for recurring concepts (Besleme, Clock, Reset, Boot, Peripheral'lar, Debug, Datasheet, Reference Manual) — don't let a later chapter silently switch to a different Turkish/English mix for the same concept.
- **Never leave the bottom section/footer to the model's own judgment.** Always append the exact "BOTTOM LAYOUT (MANDATORY)" block from `master-style-prompt.md` at the end of every prompt: a full-width 4-card band (6 on hero), centered "Önce anlamak, sonra ölçmek.", and a **text-only** "Akademi Usta" footer. Explicitly forbid the model from drawing its own logo/emblem for Akademi Usta — left unconstrained, it invents a different one each time.

## Escape hatch — when to stop doing this by hand and build the two-layer (AI + HTML/Canvas text) system instead

Only build `render-text.mjs` / a separate typography layer / a parallel `day-XX/` tree if **any** of these happen:
1. At least 3 different days need a re-render because of text errors.
2. More than ~20% of slides show typography drifting from the style bible.
3. Any single slide needs 2+ correction rounds.
4. English/Turkish term mixing keeps recurring despite `terminology.md`.
5. Technical values (pin numbers, frequencies, resistor/capacitor values) keep coming out wrong.
6. The series grows past ~50–100 images total.

Until then, GPT Image 2 generates the text directly — it was accurate enough in the approved Day 01 hero image.

## Known failure modes (don't repeat these)

- Pure text-to-image (no reference photo) → the model hallucinates fake pin labels and misspells the chip name. Always edit from a real photo.
- fal.ai `gpt-image-1.5` (not `gpt-image-2`) and direct OpenAI `gpt-image-1` both produced visibly garbled Turkish captions/badges in side-by-side tests — confirmed worse than `gpt-image-2`. If the user names an exact model, use that literal name/search it first — don't substitute your own guess from training knowledge (this exact mistake cost several wasted paid generations on 2026-07-13; `gpt-image-2` postdates this assistant's training cutoff and was missed on the first few passes).
