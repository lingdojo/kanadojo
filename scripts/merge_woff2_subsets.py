#!/usr/bin/env python3
"""
This script is for merging WOFF2 subsets from Google Fonts into 
a single WOFF2 file per family directory under public/fonts/. We're
doing this to get all the fonts locally, so we don't have to wait
5+ minutes on builds for fonts to download from Google. Running
this script can take tens of minutes because merging fonts is slow
but it only needs to be done once per font, and it has performance
benefits at runtime.

make sure you have these pip libraries installed:
"fonttools[woff]" brotli
"""

import os
import glob
import tempfile
import shutil

from fontTools.ttLib import TTFont, woff2
from fontTools.merge import Merger


ROOT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "fonts")


def merge_family(dirpath) -> None:
    woff2_files = sorted(glob.glob(os.path.join(dirpath, "*.woff2")))
    family = os.path.basename(dirpath)

    if len(woff2_files) <= 1:
        print(f"[skip] {family}: only {len(woff2_files)} .woff2 file(s)")
        return

    print(f"[merge] {family}: {len(woff2_files)} subsets")

    tmpdir = tempfile.mkdtemp(prefix=f"merge_{family}_")
    ttf_paths = []

    try:
        # decompress each WOFF2 to TTF
        for w2_path in woff2_files:
            base = os.path.basename(w2_path)
            ttf_path = os.path.join(tmpdir, base + ".ttf")
            woff2.decompress(w2_path, ttf_path)
            ttf_paths.append(ttf_path)

        # merge all TTFs into one
        merger = Merger()
        merged_font = merger.merge(ttf_paths)

        merged_ttf_path = os.path.join(tmpdir, f"{family}-merged.ttf")
        print(f"saving merged TTF to {os.path.basename(merged_ttf_path)}")
        merged_font.save(merged_ttf_path)

        # re-encode merged TTF to WOFF2
        merged_woff2_path = os.path.join(dirpath, f"{family}-merged.woff2")
        print(f"writing merged WOFF2 to {merged_woff2_path}")
        tt = TTFont(merged_ttf_path)
        tt.flavor = "woff2"
        tt.save(merged_woff2_path)
        
        # delete the original subset WOFF2 files
        for w2_path in woff2_files:
            try:
                os.remove(w2_path)
                print(f"deleted subset WOFF2: {os.path.basename(w2_path)}")
            except OSError as e:
                print(f"warning: could not delete {w2_path}: {e}")

        print(f"[done] {family}: {merged_woff2_path}")

    finally:
        # clean up temporary TTFs
        shutil.rmtree(tmpdir, ignore_errors=True)


def main():
    root = os.path.abspath(ROOT_DIR)
    print(f"Root fonts dir: {root}")
    if not os.path.isdir(root):
        raise SystemExit(f"{root} does not exist or is not a directory :(")

    for entry in sorted(os.listdir(root)):
        dirpath = os.path.join(root, entry)
        if not os.path.isdir(dirpath):
            continue
        try:
            merge_family(dirpath)
        except Exception as e:
            print(f"[error] failed to merge {entry}: {e}")


if __name__ == "__main__":
    main()

