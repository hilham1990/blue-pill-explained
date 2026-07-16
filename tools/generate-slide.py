#!/usr/bin/env python3
"""Generate one curriculum slide via fal.ai openai/gpt-image-2/edit.

Usage:
  generate-slide.py <scene_prompt_md> <output_png> [--ref PATH]...

Always sends visual-system/references/approved-day01.png as the FIRST reference image
(style/layout/branding anchor — never swap this for anything else, see
visual-system/lessons-learned.md). Any --ref PATH given is appended as an ADDITIONAL
reference image, for when this scene's central hardware has a real photo/schematic crop
worth copying the physical appearance from (a real board photo, a real schematic crop, or
a crop of an earlier scene in the SAME chapter that already rendered the same component
correctly). See CLAUDE.md's "Gerçek görsel analizi" step before deciding what to pass here.

Reads the master-style-prompt.md fixed block + reference-usage paragraph + bottom-layout
block from the repo's visual-system/master-style-prompt.md, extracts the SCENE block from
the given scene prompt markdown file, concatenates them, and calls the fal.ai API.
"""
import sys, os, re, json, base64, subprocess, time, urllib.request, argparse

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def extract_code_block(text):
    m = re.search(r"```text\n(.*?)\n```", text, re.DOTALL)
    if not m:
        raise SystemExit("no ```text block found")
    return m.group(1)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("scene_md_path")
    ap.add_argument("out_png_path")
    ap.add_argument("--ref", action="append", default=[], help="additional reference image path (repeatable)")
    args = ap.parse_args()

    primary_ref = os.path.join(REPO, "visual-system/references/approved-day01.png")

    master = open(os.path.join(REPO, "visual-system/master-style-prompt.md")).read()
    style_block = extract_code_block(master)
    all_blocks = re.findall(r"```text\n(.*?)\n```", master, re.DOTALL)
    ref_paragraph = all_blocks[1]
    bottom_layout = all_blocks[2]

    scene_md = open(args.scene_md_path).read()
    scene_block = extract_code_block(scene_md)

    extra_note = ""
    if args.ref:
        extra_note = (
            "\n\nADDITIONAL REFERENCE IMAGE(S): beyond the Day 01 style reference above, "
            f"{len(args.ref)} additional image(s) are attached showing the REAL physical "
            "appearance of a specific component this scene must depict. Copy the real "
            "physical package/shape/pin-count/color exactly as shown in those additional "
            "images — do not invent a different package. The Day 01 image is for overall "
            "layout/style only; these additional images are for component physical accuracy."
        )

    full_prompt = "\n\n".join([style_block, ref_paragraph, scene_block, bottom_layout]) + extra_note

    image_urls = []
    for p in [primary_ref] + args.ref:
        with open(p, "rb") as f:
            b64 = base64.b64encode(f.read()).decode()
        ext = os.path.splitext(p)[1].lstrip(".") or "png"
        image_urls.append(f"data:image/{ext};base64,{b64}")

    fal_key = subprocess.run(
        ["security", "find-generic-password", "-s", "FAL_KEY", "-w"],
        capture_output=True, text=True, check=True
    ).stdout.strip()

    payload = json.dumps({
        "prompt": full_prompt,
        "image_urls": image_urls,
        "image_size": "landscape_16_9",
        "quality": "medium",
        "num_images": 1
    }).encode()

    req = urllib.request.Request(
        "https://queue.fal.run/openai/gpt-image-2/edit",
        data=payload,
        headers={
            "Authorization": f"Key {fal_key}",
            "Content-Type": "application/json"
        },
        method="POST"
    )
    with urllib.request.urlopen(req) as resp:
        submit = json.loads(resp.read())

    status_url = submit["status_url"]
    response_url = submit["response_url"]
    print("submitted:", submit.get("request_id"), file=sys.stderr)

    auth_header = {"Authorization": f"Key {fal_key}"}

    while True:
        status_req = urllib.request.Request(status_url, headers=auth_header)
        with urllib.request.urlopen(status_req) as resp:
            status = json.loads(resp.read())
        st = status.get("status")
        print("status:", st, file=sys.stderr)
        if st == "COMPLETED":
            break
        if st in ("ERROR",):
            raise SystemExit(f"generation failed: {status}")
        time.sleep(3)

    response_req = urllib.request.Request(response_url, headers=auth_header)
    with urllib.request.urlopen(response_req) as resp:
        result = json.loads(resp.read())
    fal_key = None  # drop reference, best effort

    image_url = result["images"][0]["url"]
    urllib.request.urlretrieve(image_url, args.out_png_path)
    print("saved:", args.out_png_path, file=sys.stderr)

if __name__ == "__main__":
    main()
