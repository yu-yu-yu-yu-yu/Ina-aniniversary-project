import { SyntheticEvent } from "react";

const BASE = `${process.env.PUBLIC_URL}/lorebook`;

export const COVER_FRONT = `${BASE}/cover-front.png`;
export const COVER_BACK = `${BASE}/cover-back.png`;
export const PAPER = `${BASE}/paper.png`;
export const FRAME = `${BASE}/frame.png`;
export const DIVIDER = `${BASE}/divider.png`;
export const BOOKMARK = `${BASE}/bookmark.png`;
export const SPINE = `${BASE}/spine.png`;
export const PAGE_PLATE = `${BASE}/page-plate.png`;

export const PAGE_SKIP_SOUND = `${BASE}/page-turn-1.mp3`;
export const PAGE_STEP_SOUND = `${BASE}/page-turn-2.mp3`;

export const FLIP_CURSOR = `${BASE}/icons/tentacle_flip_cursor.png`;

// Shared by the edge-flip hover/click zone (useEdgeFlip) and its glow
// (EdgeGlow in styles.ts) so the two stay in sync.
export const EDGE_FLIP_FRACTION = 0.15;

export const artSrc = (slot: string): string => `${BASE}/art/${slot}.png`;
export const iconSrc = (subject: string): string =>
  `${BASE}/icons/${encodeURIComponent(subject)}.png`;
export const dropCapSrc = (letter: string): string =>
  `${BASE}/dropcaps/${letter.toUpperCase()}.png`;

export const concealOnError = (e: SyntheticEvent<HTMLImageElement>): void => {
  e.currentTarget.style.visibility = "hidden";
};
