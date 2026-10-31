import { SyntheticEvent } from "react";

const BASE = `${process.env.PUBLIC_URL}/lorebook`;

export const COVER_FRONT = `${BASE}/cover-front.jpg`;
export const COVER_BACK = `${BASE}/cover-back.jpg`;
export const SPINE = `${BASE}/spine.jpg`;

export interface BookmarkArt {
  src: string;
  ratio: string;
  label: string;
}

export const BOOKMARKS: BookmarkArt[] = [
  { src: `${BASE}/art/bookmark1.png`, ratio: "525 / 1530", label: "Eye" },
  {
    src: `${BASE}/art/bookmark2.png`,
    ratio: "525 / 1383",
    label: "Takodachi",
  },
];

export const COVER_RATIO = { width: 2772, height: 4012 };
const LAYOUT_PAGE_HEIGHT = 600;
export const LAYOUT_PAGE = {
  width: Math.round(
    (LAYOUT_PAGE_HEIGHT * COVER_RATIO.width) / COVER_RATIO.height,
  ),
  height: LAYOUT_PAGE_HEIGHT,
};
export const SPINE_RATIO = { width: 934, height: 4045 };

export const PAGE_TEXTURES = [1, 2, 3, 4, 5, 6].map(
  (n) => `${BASE}/page-texture-${n}.webp`,
);

export interface StickyNoteArt {
  src: string;
  box: { top: number; right: number; bottom: number; left: number };
  width: number;
  height: number;
}

const PAPER_BOX = { top: 20, right: 24, bottom: 40, left: 34 };
const HALO_BOX = { top: 34, right: 16, bottom: 20, left: 16 };

export const STICKY_NOTES: StickyNoteArt[] = [
  {
    src: `${BASE}/art/stickytako1.png`,
    box: HALO_BOX,
    width: 1901,
    height: 2331,
  },
  {
    src: `${BASE}/art/stickytako2.png`,
    box: PAPER_BOX,
    width: 1025,
    height: 1045,
  },
  {
    src: `${BASE}/art/stickytako3.png`,
    box: PAPER_BOX,
    width: 1025,
    height: 1045,
  },
  {
    src: `${BASE}/art/stickytako4.png`,
    box: PAPER_BOX,
    width: 1025,
    height: 1045,
  },
  {
    src: `${BASE}/art/stickytako5.png`,
    box: PAPER_BOX,
    width: 1025,
    height: 1045,
  },
];

export interface DoodleArt {
  src: string;
  width: number;
  height: number;
}

export const DOODLES: DoodleArt[] = [
  { src: `${BASE}/art/takodoodle1.png`, width: 600, height: 422 },
  { src: `${BASE}/art/takodoodle2.png`, width: 524, height: 350 },
  { src: `${BASE}/art/takodoodle3.png`, width: 415, height: 509 },
  { src: `${BASE}/art/takodoodle4.png`, width: 539, height: 600 },
  { src: `${BASE}/art/takodoodle5.png`, width: 395, height: 385 },
  { src: `${BASE}/art/takodoodle6.png`, width: 600, height: 598 },
  { src: `${BASE}/art/takodoodle7.png`, width: 600, height: 549 },
  { src: `${BASE}/art/takodoodle8.png`, width: 600, height: 434 },
  { src: `${BASE}/art/takodoodle9.png`, width: 600, height: 563 },
  { src: `${BASE}/art/takodoodle10.png`, width: 555, height: 600 },
  { src: `${BASE}/art/takodoodle11.png`, width: 566, height: 600 },
  { src: `${BASE}/art/takodoodle12.png`, width: 600, height: 593 },
  { src: `${BASE}/art/takodoodle13.png`, width: 600, height: 391 },
  { src: `${BASE}/art/takodoodle14.png`, width: 532, height: 600 },
  { src: `${BASE}/art/takodoodle15.png`, width: 600, height: 427 },
  { src: `${BASE}/art/takodoodle16.png`, width: 600, height: 506 },
  { src: `${BASE}/art/takodoodle17.png`, width: 600, height: 500 },
];

export const pickSeeded = <T>(seed: string, options: T[]): T => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return options[hash % options.length];
};

export const seededFraction = (seed: string): number => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return (hash % 1000) / 1000;
};

export const BOOK_FONT_SRC = `${BASE}/fonts/Takohuyk-Regular.ttf`;
export const DIGIT_FONT_SRC = `${BASE}/fonts/Ina_handwritning-Regular.ttf`;
export const DROPCAP_FONT_SRC = `${BASE}/fonts/RevisonBooksFonts-Regular.ttf`;

export const PAGE_STEP_SOUNDS = [
  `${BASE}/page-turn-2.mp3`,
  `${BASE}/page-turn-3.mp3`,
];

export const FLIP_CURSORS = [1, 2, 3].map(
  (n) => `${BASE}/icons/tentacle-cursor-${n}.png`,
);

export const EDGE_FLIP_FRACTION = 0.15;

export const artSrc = (slot: string): string => `${BASE}/art/${slot}.png`;

export const resolveImageSrc = (
  src: string | undefined,
  images: Record<string, string> | undefined,
): string | undefined => {
  if (!src) return src;
  if (
    src.startsWith("data:") ||
    src.startsWith("http:") ||
    src.startsWith("https:") ||
    src.startsWith("/") ||
    src.startsWith("./")
  )
    return src;
  return images?.[src] ?? src;
};
export const iconSrc = (key: string): string =>
  `${BASE}/icons/${encodeURIComponent(key)}.png`;
export const DEFAULT_DIVIDER = "takodachi-no-uta";

export const dividerSrc = (key: string): string =>
  `${BASE}/dividers/${encodeURIComponent(key)}.png`;
export const PLACEHOLDER_COLORS = {
  coverFront: "#e03131",
  coverBack: "#f76707",
  paper: "#f59f00",
  frame: "#74b816",
  spine: "#2f9e44",
  art: "#1971c2",
  icon: "#4263eb",
  divider: "#7048e8",
} as const;

const TRANSPARENT_PIXEL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3C/svg%3E";

export const missingAssetOnError =
  (color: string) =>
  (e: SyntheticEvent<HTMLImageElement>): void => {
    const img = e.currentTarget;
    img.onerror = null;
    img.style.background = color;
    img.src = TRANSPARENT_PIXEL;
  };
