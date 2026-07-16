---
name: curriculum-slide-gen
description: Generate a "GÜN 0X" branded infographic slide for a blue-pill-explained chapter using fal.ai's openai/gpt-image-2/edit, following the fixed visual-system style bible. Use when asked to create/regenerate slide images for this curriculum.
---

# Curriculum Slide Generation (Blue Pill Explained)

Generates on-brand infographic slides for the `blue-pill-explained` STM32 curriculum. Validated 2026-07-13 after comparing fal.ai `gpt-image-1.5`, direct OpenAI `gpt-image-1`, and fal.ai `openai/gpt-image-2/edit` — **only `openai/gpt-image-2/edit`, edited from a real board photo, produced pixel-legible Turkish text and correct callout captions.** Do not substitute a different model/endpoint without re-validating quality first.

System agreed with the user 2026-07-13: **lightweight**, no parallel `day-XX/` tree, no new build scripts, no HTML/Canvas text layer — until a specific escape-hatch threshold is hit (see below).

**Bölüm 01 (`01-neden-bu-kart/`) is the first fully-completed chapter under this system — 5 approved scenes (hero, scene-02, scene-03, scene-04, scene-05) — and is the reference implementation.** When starting a new chapter, look at its `brief.json`/`scenes.json`/`prompts/` as the concrete example, not just this document.

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
    └── approved-day01.png  (attach this as the visual reference image on EVERY generation call —
                             always this file, never a previously-generated scene. Chaining
                             references caused a rendering defect to propagate across scenes on
                             2026-07-13, see "Known failure modes" below.)
```

## Prerequisites

- fal.ai API key in macOS Keychain: `security find-generic-password -s "FAL_KEY" -w`
- Never echo the key to stdout/logs/files — `tools/generate-slide.py` retrieves it inline and never prints it.
- Reference image for every generation call, no exceptions: `visual-system/references/approved-day01.png` (sent automatically as the primary reference by the script). Never reference a previously-generated scene as the PRIMARY reference instead of this file — see `visual-system/lessons-learned.md`.

## Generation tool

Use `tools/generate-slide.py` (repo root) rather than hand-rolling the fal.ai call:

```
python3 tools/generate-slide.py 0X-chapter/prompts/NN-slug.md 0X-chapter/slides/NN-slug.png [--ref EXTRA_IMAGE]...
```

- Always sends `visual-system/references/approved-day01.png` as the primary (style/layout) reference.
- Every `--ref PATH` given is an ADDITIONAL image for component physical-accuracy (a real photo/schematic crop from `assets/source/`, or a crop of an already-approved scene in the SAME chapter showing the same real-world component) — see `CLAUDE.md`'s "Gerçek görsel analizi" step for when to use this.
- `quality: medium` (hardcoded) costs ~$0.03–0.04/image and was sufficient in testing. Only bump to `high` in the script if a specific slide's text still comes out garbled after one retry.
- Polls the fal.ai queue automatically and saves the final PNG to the given output path.

## Per-chapter workflow

1. Read the chapter's `README.md`. If `brief.json` doesn't exist yet, write it first (goal, core message, audience, must_show, technical_risks) — don't jump straight to images.
2. Write `scenes.json`: use the visual-count formula in `layout-rules.md` (12–25s per scene; 1 main idea = 1 scene). Get the scene breakdown right before generating anything. Scene ids number sequentially starting at `scene-01-hero`, no gaps (see `CLAUDE.md` for why earlier chapters have a `scene-00`/missing-`scene-01` gap — don't copy that). **If the chapter has a hero slide, check every scene's `visual_focus` against the hero's own panel/band content before approving the scene list — a scene that just re-asks the same sub-topics the hero already covered (same hardware close-ups, same concepts, just phrased as questions) is redundant and should be cut, not generated.** (Caught 2026-07-13 on Bölüm 01: a "Bu Seri Ne Öğretiyor?" scene re-covered besleme/clock/BOOT0-RESET, all already shown in the hero's own panels — deleted after already being generated and embedded, wasting a paid generation.)
3. **Before writing any `prompts/NN-slug.md`, read [`visual-system/lessons-learned.md`](../../../visual-system/lessons-learned.md) in full and apply every relevant prevention rule to the prompt you're about to write.** This is the single running log of every real defect found in past generations (badge-color drift, chip package inconsistency, fabricated document tables, etc.) — check reactively-found defects here don't recur, don't wait to rediscover them.
3b. **Real-image audit, per scene, before writing that scene's prompt.** For the specific real-world component/hardware this scene's central image will depict, check `assets/source/` (real board photo `blue-pill-card-exact-cutout.png`, real schematic `blue-pill-schematic-source.webp`, pinout `blue-pill-pinout-source.webp`, ST's own `stm32f-overview.png`) for an actual photo/crop of it. If one exists: zoom in, extract concrete facts (package type, pin count, color, exact markings), write those into the prompt instead of a generic guess, and pass the crop as a secondary `--ref` image to `generate-slide.py` so the model copies the real appearance. If no real photo exists for that component (e.g. RT8183-B's physical package is never visible in our source photos, likely mounted on the board's underside — see `lessons-learned.md`): pin down ONE depiction in the chapter's first scene that needs it, then pass a crop of THAT already-approved scene as the `--ref` for every later scene in the same chapter needing the same component, so it never silently drifts.
4. Write one `prompts/NN-slug.md` per scene: `master-style-prompt.md`'s fixed block + the reference-image paragraph + a SCENE block specific to that scene (title, subtitle, panel contents, captions).
5. Generate one slide at a time, save to `slides/NN-slug.png`, mark `scenes.json`'s `status` field `"approved"` once the user confirms it.
6. Show the result to the user before moving to the next scene — do not batch-generate a whole chapter without a check-in.
7. Every image must earn its place: it has to visually match and complete what that specific chapter's text teaches at that point in sequence — not generic decorative filler.
8. Update `slides-manifest.json` timings once real narration audio durations are known (this file is a draft until then).
9. **When a scene's whole subject is a real source document (a datasheet page, a schematic), embed that ORIGINAL document at full size in the README, right after the branded slide — don't rely on the branded slide alone.** The AI composite always shrinks the central document to fit next to the callout panels, which makes it too small to actually read for the teaching purpose it's there for. Both images stay in the README, in sequence, at normal size — the original is not a footnote/link, it's a full peer image (see scene-04 and scene-05 in Bölüm 01, both fixed this way 2026-07-13).

## Hard rules (from layout-rules.md / terminology.md — don't relitigate per-scene)

- Max 4 callout panels per slide.
- **Every panel holds exactly one cohesive photo — never two sub-frames collaged into one panel.** (Caught 2026-07-13: a "Test ve Ölçüm" panel had oscilloscope + multimeter as two separate frames glued together; fixed by asking for one single workbench photo showing both instruments.)
- Fixed color→function mapping: orange = belge/datasheet, blue = donanım bileşeni yakın çekim, yellow = kontrol/buton/jumper, teal = ölçüm/test.
- Chip name is always `STM32F103C8T6` — verify it didn't get mangled (seen failure: "GTM32").
- Use `terminology.md`'s exact wording for recurring concepts (Besleme, Clock, Reset, Boot, Peripheral'lar, Debug, Datasheet, Reference Manual) — don't let a later chapter silently switch to a different Turkish/English mix for the same concept.
- **Never leave the bottom section/footer to the model's own judgment.** Always append the exact "BOTTOM LAYOUT (MANDATORY)" block from `master-style-prompt.md` at the end of every prompt: a full-width 4-card band (6 on hero), then **one single footer row, three parts, evenly balanced**: bottom-left "Akademi Usta", bottom-center "Önce anlamak, sonra ölçmek.", bottom-right "akademiusta.com/tr" — same bold navy font, same baseline. **Text only, no logo/emblem** (left unconstrained, the model invents a different Akademi Usta logo every time). This exact 3-part single-row footer is what's approved on all 4 of Bölüm 01's images (2026-07-13) — went through two earlier iterations (stacked two-line footer, then centered-only) before landing here; don't regress to those.
- **Always reference `approved-day01.png` directly — never a previously-generated scene.** Chaining references (scene N+1 using scene N as its reference image) let a rendering defect compound across generations.
- **Before deleting any image on a "delete image N" instruction, restate the exact file path back and get it confirmed if there's any ambiguity in what N refers to.** A numbered list you gave the user (or vice versa) can be re-numbered in their head differently than in scenes.json — deleting the wrong file (2026-07-13: deleted an approved AI scene when the user meant an old unstyled screenshot) means restoring from git history and redoing the surrounding edits.
- **Don't shrink or demote an already-approved image out of its normal in-sequence display while fixing something else.** Adding a new full-size reference image next to an approved one doesn't mean the approved one becomes a footnote/link — it stays a normal peer image unless the user explicitly asks to de-emphasize it.

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

**Every image-composition defect (reference chaining, fabricated tables, badge-color drift, chip-package inconsistency, etc.) is tracked in [`visual-system/lessons-learned.md`](../../../visual-system/lessons-learned.md), not here — read it before writing prompts, and add new entries there when you find a new defect.**

One non-composition lesson that stays here because it's about tool/model selection, not image content: fal.ai `gpt-image-1.5` (not `gpt-image-2`) and direct OpenAI `gpt-image-1` both produced visibly garbled Turkish captions/badges in side-by-side tests — confirmed worse than `gpt-image-2`. If the user names an exact model, use that literal name/search it first — don't substitute your own guess from training knowledge (this exact mistake cost several wasted paid generations on 2026-07-13; `gpt-image-2` postdates this assistant's training cutoff and was missed on the first few passes).
