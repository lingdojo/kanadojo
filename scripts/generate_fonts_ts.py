#!/usr/bin/env python3
"""
This script reads fonts.config.json, uses merged WOFF2s under public/fonts/,
optionally subsets them if specified in fonts.config.json (e.g. latin-only),
then generates a WOFF2 for the subset, and features/Themes/data/fonts.ts for
compatability with existing code.
"""

import json
import os
import fnmatch
import re
from pathlib import Path
import shutil

from fontTools import subset as ft_subset
from fontTools import ttLib

ROOT = Path(__file__).resolve().parents[1]
CONFIG_GLOB = f"{ROOT}/**/*fonts.config.json"
CONFIG_RE = re.compile(fnmatch.translate(CONFIG_GLOB), re.IGNORECASE)
#CONFIG_PATH = ROOT / "features" / "Themes" / "data" / "fonts.config.json"
CONFIG_PATHS = [
    Path(root) / filename
    for root, _, files in os.walk(ROOT)
    for filename in files
    if CONFIG_RE.match(os.path.join(root, filename))
]
PUBLIC_FONTS_DIR = ROOT / "public" / "fonts"
REL_PUBLIC_FONTS_DIR = "public/fonts"
APP_FONTS_DIR = ROOT / "app" / "fonts"

#OUTPUT_TS_PATH = ROOT / "features" / "Themes" / "data" / "fonts.ts"

OUTPUT_TS_PATHS = [
    config_path.with_name(
        re.sub(r"\.config\.json$", ".ts", config_path.name, flags=re.IGNORECASE)
    )
    for config_path in CONFIG_PATHS
]


def subset_unicode_set(subsets):
    """
    Map subset names to a set of codepoints (ints).
    Right now we only handle 'latin'. Unknown subsets are None,
    which mean no subsetting.
    """
    unicodes = set()
    for s in subsets:
        s = s.lower()
        if s == "latin":
            # basic Latin + Latin-1 Supplement (0x0020–0x00FF)
            unicodes.update(range(0x20, 0x100))
        elif s in ("all", "*"):
            # explicit "no subsetting"
            return None
        else:
            # unknown subset keyword, stop subsetting and use full font
            return None

    return sorted(unicodes) if unicodes else None


def font_is_already_subset(font_path: Path, unicodes):
    if unicodes is None:
        return False

    font = ttLib.TTFont(str(font_path))
    cmap = font["cmap"].getBestCmap()
    extra = [cp for cp in cmap.keys() if cp not in unicodes]
    return len(extra) == 0


def subset_woff2(in_path: Path, out_path: Path, unicodes):
    options = ft_subset.Options()
    options.flavor = "woff2"
    options.with_zopfli = False

    sub = ft_subset.Subsetter(options=options)
    sub.populate(unicodes=unicodes)

    font = ft_subset.load_font(str(in_path), options)
    sub.subset(font)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    ft_subset.save_font(font, str(out_path), options)


def generate():
    for CONFIG_PATH, OUTPUT_TS_PATH in zip(CONFIG_PATHS, OUTPUT_TS_PATHS):
        cfg = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
        fonts_cfg = cfg["fonts"]

        ts_lines = []
        ts_lines.append("import localFont from 'next/font/local';\n")

        font_entries_for_array = []

        for f in fonts_cfg:
            # TS variable name
            key = f["key"]
            # display name for UI
            family = f["family"]
            slug = f["slug"]
            subsets = f.get("subsets", [])
            weights = f.get("weights", ["400"])
            display = f.get("display", "swap")
            preload = bool(f.get("preload", False))
            fallback = f.get("fallback", ["system-ui", "sans-serif"])
            style = f.get("style", "normal")

            merged_path = PUBLIC_FONTS_DIR / slug / f"{slug}-merged.woff2"

            if not merged_path.is_file():
                raise SystemExit(f"Missing merged font file: {merged_path}")

            unicode_set = subset_unicode_set(subsets)

            # decide output path and whether to subset
            # we only generate ONE file per font (weight list is for CSS weight info)
            if unicode_set is None or font_is_already_subset(merged_path, unicode_set):
                # use merged file directly
                final_font_path = merged_path
                print(f"[{family}] using merged font only --> {final_font_path}")
            else:
                subset_suffix = "-".join(subsets)
                out_filename = f"{slug}-{weights[0]}-{subset_suffix}.woff2"
                out_path = PUBLIC_FONTS_DIR / slug / out_filename
                out_rel = REL_PUBLIC_FONTS_DIR + f"/{slug}/{out_filename}"

                if not out_path.exists():
                    print(f"[{family}] creating subset --> {out_path}")
                    subset_woff2(merged_path, out_path, unicode_set)
                else:
                    print(f"[{family}] subset already exists --> {out_path}")
                
                final_font_path = out_path

            # ensure font is available under app/fonts for next/font/local
            app_font_dir = APP_FONTS_DIR / slug
            app_font_dir.mkdir(parents=True, exist_ok=True)
            app_font_path = app_font_dir / final_font_path.name

            if not app_font_path.exists():
                shutil.copy2(final_font_path, app_font_path)
                print(f"[{family}] copied font to app dir --> {app_font_path}")
            else:
                print(f"[{family}] font already present in app dir --> {app_font_path}")

            # path to use in TS is relative to the generated .ts file
            rel_app_path = os.path.relpath(app_font_path, OUTPUT_TS_PATH.parent)
            ts_src_path = rel_app_path.replace(os.sep, "/")

            # build TS localFont definition
            ts_lines.append(f"export const {key} = localFont({{")
            ts_lines.append("  src: [")
            for w in weights:
                ts_lines.append(
                    f"    {{ path: '{ts_src_path}', weight: '{w}', style: '{style}' }},"
                )
            ts_lines.append("  ],")
            ts_lines.append(f"  display: '{display}',")
            ts_lines.append(f"  preload: {str(preload).lower()},")
            fb = ", ".join(f"'{x}'" for x in fallback)
            ts_lines.append(f"  fallback: [{fb}]")
            ts_lines.append("});\n")

            font_entries_for_array.append(
                f"  {{ name: '{family}', font: {key} }}"
            )

        ts_lines.append("const fonts = [")
        ts_lines.append(",\n".join(font_entries_for_array))
        ts_lines.append("];\n")
        ts_lines.append("export default fonts;\n")

        OUTPUT_TS_PATH.parent.mkdir(parents=True, exist_ok=True)
        OUTPUT_TS_PATH.write_text("\n".join(ts_lines), encoding="utf-8")
        print(f"\nWrote {OUTPUT_TS_PATH}")


if __name__ == "__main__":
  generate()

