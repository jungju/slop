from __future__ import annotations

import argparse
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


CANVAS_SIZE = (1536, 2048)
PANEL_SIZE = (716, 760)
PANEL_POSITIONS = ((40, 260), (780, 260), (40, 1044), (780, 1044))
COLORS = {
    "cream": "#f8f0df",
    "paper": "#fffdf8",
    "navy": "#082a57",
    "mustard": "#efb51a",
    "cobalt": "#2d67ad",
}
FONT_REGULAR = Path(r"C:\Windows\Fonts\NotoSansKR-Regular.ttf")
FONT_BOLD = Path(r"C:\Windows\Fonts\NotoSansKR-Bold.ttf")


def main() -> None:
    args = parse_args()
    episode_root = args.episode.resolve()
    input_root = args.input_dir.resolve()
    output_root = args.out_dir.resolve()
    dialogue_path = episode_root / "story" / "dialogue.json"
    dialogue = json.loads(dialogue_path.read_text(encoding="utf-8"))
    panels = dialogue.get("panels")
    if not isinstance(panels, list) or len(panels) != 4:
        raise ValueError("dialogue.json에는 정확히 네 개의 panels 항목이 필요합니다.")
    if not FONT_REGULAR.is_file() or not FONT_BOLD.is_file():
        raise FileNotFoundError("Noto Sans KR 글꼴을 찾을 수 없습니다.")

    canvas = Image.new("RGB", CANVAS_SIZE, COLORS["cream"])
    draw = ImageDraw.Draw(canvas)

    for index, panel_data in enumerate(panels):
        source = find_panel_source(input_root, index + 1)
        art = ImageOps.exif_transpose(Image.open(source)).convert("RGB")
        art = ImageOps.fit(
            art,
            PANEL_SIZE,
            method=Image.Resampling.LANCZOS,
            centering=gravity_centering(panel_data.get("gravity")),
        )
        canvas.paste(art, PANEL_POSITIONS[index])

    draw.rounded_rectangle(
        (12, 12, CANVAS_SIZE[0] - 12, CANVAS_SIZE[1] - 12),
        radius=18,
        outline=COLORS["navy"],
        width=6,
    )
    draw.rounded_rectangle(
        (518, 22, 1018, 94),
        radius=34,
        fill=COLORS["navy"],
        outline=COLORS["navy"],
        width=4,
    )

    draw_centered_text(
        draw,
        dialogue.get("kicker") or "AI 뉴스 네 컷",
        (543, 28, 993, 86),
        FONT_BOLD,
        32,
        COLORS["paper"],
    )
    draw_centered_text(
        draw,
        dialogue.get("title") or "",
        (78, 104, 1458, 236),
        FONT_BOLD,
        58,
        COLORS["navy"],
    )

    for index, position in enumerate(PANEL_POSITIONS):
        left, top = position
        right = left + PANEL_SIZE[0]
        bottom = top + PANEL_SIZE[1]
        draw.rounded_rectangle(
            (left, top, right, bottom),
            radius=18,
            outline=COLORS["navy"],
            width=6,
        )
        draw.ellipse(
            (left + 4, top + 4, left + 72, top + 72),
            fill=COLORS["navy"],
            outline=COLORS["paper"],
            width=2,
        )
        draw_centered_text(
            draw,
            str(index + 1),
            (left + 4, top + 4, left + 72, top + 72),
            FONT_BOLD,
            34,
            COLORS["paper"],
        )
        draw_balloon(draw, panels[index], position)

    draw_centered_text(
        draw,
        dialogue.get("footer") or "AI 뉴스는 출처와 한계를 함께 봐야 해요.",
        (108, 1900, 1428, 1986),
        FONT_BOLD,
        30,
        COLORS["navy"],
    )

    output_root.mkdir(parents=True, exist_ok=True)
    output_path = output_root / "page-01-source.png"
    canvas.save(output_path, format="PNG", optimize=True)
    with Image.open(output_path) as result:
        if result.size != CANVAS_SIZE or result.format != "PNG":
            raise ValueError(f"합성 결과 형식이 올바르지 않습니다: {result.size} {result.format}")
    print(output_path)


def draw_balloon(
    draw: ImageDraw.ImageDraw,
    panel_data: dict,
    position: tuple[int, int],
) -> None:
    panel_left, panel_top = position
    bubble_width = 570
    bubble_height = 220
    side = "right" if panel_data.get("bubbleSide") == "right" else "left"
    tail_side = "right" if panel_data.get("tailSide") == "right" else "left"
    bubble_left = (
        panel_left + 54
        if side == "left"
        else panel_left + PANEL_SIZE[0] - bubble_width - 54
    )
    bubble_top = panel_top + 70
    bubble_right = bubble_left + bubble_width
    bubble_bottom = bubble_top + bubble_height
    tail_base_left = bubble_right - 150 if tail_side == "right" else bubble_left + 90
    tail_tip_x = bubble_right - 78 if tail_side == "right" else bubble_left + 68
    tail_points = (
        (tail_base_left, bubble_bottom - 5),
        (tail_base_left + 62, bubble_bottom - 5),
        (tail_tip_x, bubble_bottom + 62),
    )
    draw.polygon(
        tail_points,
        fill=COLORS["paper"],
        outline=COLORS["navy"],
        width=5,
    )
    draw.rounded_rectangle(
        (bubble_left, bubble_top, bubble_right, bubble_bottom),
        radius=40,
        fill=COLORS["paper"],
        outline=COLORS["navy"],
        width=5,
    )
    text = str(panel_data.get("text") or "").strip()
    if not text:
        raise ValueError("말풍선 문구가 비어 있습니다.")
    draw_centered_text(
        draw,
        text,
        (bubble_left + 35, bubble_top + 23, bubble_right - 35, bubble_bottom - 23),
        FONT_BOLD,
        balloon_point_size(text),
        COLORS["navy"],
        spacing=8,
    )


def draw_centered_text(
    draw: ImageDraw.ImageDraw,
    text: str,
    box: tuple[int, int, int, int],
    font_path: Path,
    start_size: int,
    fill: str,
    spacing: int = 4,
) -> None:
    left, top, right, bottom = box
    max_width = right - left
    max_height = bottom - top
    size = start_size
    while size >= 18:
        font = ImageFont.truetype(str(font_path), size=size)
        bounds = draw.multiline_textbbox(
            (0, 0),
            text,
            font=font,
            spacing=spacing,
            align="center",
        )
        width = bounds[2] - bounds[0]
        height = bounds[3] - bounds[1]
        if width <= max_width and height <= max_height:
            x = left + (max_width - width) / 2 - bounds[0]
            y = top + (max_height - height) / 2 - bounds[1]
            draw.multiline_text(
                (x, y),
                text,
                font=font,
                fill=fill,
                spacing=spacing,
                align="center",
            )
            return
        size -= 2
    raise ValueError(f"텍스트가 지정 영역에 들어가지 않습니다: {text}")


def balloon_point_size(text: str) -> int:
    length = len("".join(text.split()))
    if length > 52:
        return 27
    if length > 40:
        return 30
    return 34


def gravity_centering(value: object) -> tuple[float, float]:
    normalized = str(value or "center").lower()
    if normalized == "north":
        return (0.5, 0.0)
    if normalized == "south":
        return (0.5, 1.0)
    return (0.5, 0.5)


def find_panel_source(root: Path, number: int) -> Path:
    identifier = f"{number:02d}"
    candidates = (
        f"panel-{identifier}-source.png",
        f"panel-{identifier}.png",
        f"panel-{identifier}.webp",
        f"page-{identifier}-source.png",
        f"page-{identifier}.png",
        f"page-{identifier}.webp",
    )
    for candidate in candidates:
        path = root / candidate
        if path.is_file():
            return path
    raise FileNotFoundError(f"{root.name}에서 {number}번 패널 원본을 찾을 수 없습니다.")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--episode", type=Path, required=True)
    parser.add_argument("--input-dir", type=Path, required=True)
    parser.add_argument("--out-dir", type=Path, required=True)
    return parser.parse_args()


if __name__ == "__main__":
    main()
