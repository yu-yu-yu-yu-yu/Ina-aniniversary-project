import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import type { LoreTypography } from "../../../types/takonomicon";
import {
  BOOK_FONT_SRC,
  DIGIT_FONT_SRC,
  DROPCAP_FONT_SRC,
  EDGE_FLIP_FRACTION,
  PAGE_TEXTURES,
  PLACEHOLDER_COLORS,
} from "./assets";

const editableCss = css`
  cursor: grab;
  touch-action: none;
  outline: 1px dashed var(--light-highlight);
  outline-offset: 2px;

  &:active {
    cursor: grabbing;
  }
`;

const CHROME_SIZE = 36;
const CHROME_GAP = 8;
const CHROME_STEP = CHROME_SIZE + CHROME_GAP;
const CHROME_TOP = "clamp(8px, 2vh, 20px)";
const CHROME_LEFT = "clamp(8px, 2vw, 20px)";

const proseWrap = css`
  overflow-wrap: anywhere;
  hyphens: auto;
`;

const typographyVars = (t?: LoreTypography): string =>
  [
    t?.bodyFont && `--font-body: ${t.bodyFont}, ${BODY_FONT};`,
    t?.headingFont && `--font-heading: ${t.headingFont}, sans-serif;`,
    t?.bodyScale && `--fs-body: ${t.bodyScale};`,
    t?.headingScale && `--fs-heading: ${t.headingScale};`,
  ]
    .filter(Boolean)
    .join(" ");

const BODY_FONT = '"InaDigits", "Takohuyk", "Mulish", sans-serif';

const inkTitle = css`
  display: grid;
  grid-template-columns: auto;

  > .ink-size {
    grid-area: 1 / 1;
    visibility: hidden;
  }

  > .ink-face {
    grid-area: 1 / 1;
    align-self: start;
    height: 0;
    min-width: 0;
    contain: inline-size;
    overflow: visible;
    font-family: var(--font-heading, "InaTitle", Montserrat, sans-serif);
    font-size: 1.1em;
    font-weight: 700;
    line-height: 1;
    -webkit-text-stroke: 0.03em currentColor;
  }
`;

export const BookRoot = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--background);
`;

export const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
`;

export const HomeOverlay = styled.div`
  position: absolute;
  top: ${CHROME_TOP};
  left: ${CHROME_LEFT};
  font-size: ${(CHROME_SIZE / 1.4).toFixed(2)}px;
`;

export const ChromeButtonLayout = createGlobalStyle`
  @font-face {
    font-family: "Takohuyk";
    src: url(${BOOK_FONT_SRC}) format("truetype");
    font-display: block;
  }

  @font-face {
    font-family: "InaDigits";
    src: url(${DIGIT_FONT_SRC}) format("truetype");
    unicode-range: U+0030-0039;
    font-display: block;
  }

  @font-face {
    font-family: "InaTitle";
    src: url(${DIGIT_FONT_SRC}) format("truetype");
    font-display: block;
  }

  @font-face {
    font-family: "RevisonBooks";
    src: url(${DROPCAP_FONT_SRC}) format("truetype");
    font-display: block;
  }

  button[title="Mute BGM"],
  button[title="Unmute BGM"],
  button[title^="Switch theme"] {
    top: ${CHROME_TOP};
    bottom: auto;
    width: ${CHROME_SIZE}px;
    height: ${CHROME_SIZE}px;
    font-size: ${(CHROME_SIZE / 48) * 1.7}rem;
  }

  button[title^="Switch theme"] {
    left: calc(${CHROME_LEFT} + ${CHROME_STEP}px);
  }

  button[title="Mute BGM"],
  button[title="Unmute BGM"] {
    left: calc(${CHROME_LEFT} + ${CHROME_STEP * 2}px);
  }
`;

export const SfxMuteButton = styled.button`
  position: fixed;
  top: ${CHROME_TOP};
  left: calc(${CHROME_LEFT} + ${CHROME_STEP * 3}px);
  z-index: 1000;
  width: ${CHROME_SIZE}px;
  height: ${CHROME_SIZE}px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: var(--ink-black) 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${(CHROME_SIZE / 48) * 1.4}rem;
  box-shadow: 0 2px 8px #0002;
`;

export const ZoomButton = styled(SfxMuteButton)`
  left: calc(${CHROME_LEFT} + ${CHROME_STEP * 5}px);
`;

export const GalleryButton = styled(SfxMuteButton)`
  left: calc(${CHROME_LEFT} + ${CHROME_STEP * 6}px);
`;

export const GalleryBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(20, 14, 8, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const GalleryPanel = styled.div`
  position: relative;
  width: min(1000px, 100%);
  max-height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px 16px 24px;
  border-radius: 12px;
  background: #f4ead5;
  color: #2a2118;
`;

export const GalleryClose = styled.button`
  position: sticky;
  top: 0;
  float: right;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #2a2118;
  background: rgba(255, 255, 255, 0.9);
  color: #2a2118;
  font-size: 1.2rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1;
`;

export const GalleryHeading = styled.h2`
  margin: 0 0 12px;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: 1.4rem;
`;

export const GalleryGroupTitle = styled.h3`
  margin: 20px 0 8px;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: 1rem;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
`;

export const GalleryThumb = styled.button`
  aspect-ratio: 1;
  padding: 6px;
  border: 1px solid #2a211833;
  border-radius: 8px;
  background: #fffaf0;
  cursor: zoom-in;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const GalleryFull = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: zoom-out;
`;

export const FlipCursor = styled.img<{
  $side: "left" | "right";
  $visible: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 64px;
  height: 64px;
  object-fit: contain;
  pointer-events: none;
  z-index: 9999;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  will-change: transform;
  transform: translate3d(var(--x, 0px), var(--y, 0px), 0) translate(-50%, -50%)
    ${({ $side }) => ($side === "right" ? "scaleX(-1)" : "")};
`;

export const CornerFlipButton = styled.button<{ $side: "left" | "right" }>`
  position: fixed;
  bottom: clamp(6px, 1.5vh, 12px);
  ${({ $side }) => $side}: clamp(6px, 1.5vw, 12px);
  z-index: 50;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.6);
  color: var(--ink-black);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.3;
  font-size: 0.85rem;
  transition: opacity 0.2s;

  &:hover:not(:disabled),
  &:focus-visible {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.1;
    cursor: not-allowed;
  }
`;

export const BookStage = styled.div<{ $hideCursor?: boolean }>`
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 3vw, 40px);
  padding-top: calc(${CHROME_TOP} + ${CHROME_SIZE}px + 6px);
  box-sizing: border-box;
  touch-action: pan-y;
  cursor: ${({ $hideCursor }) => ($hideCursor ? "none" : "auto")};
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
`;

export const BookGlow = styled.div<{ $width: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $width }) => Math.max($width, 1) * 0.9}px;
  height: 80%;
  transform: translate(-50%, -50%);
  background: var(--dark-highlight);
  filter: blur(90px) brightness(1.6) saturate(1.2);
  opacity: 0.6;
  z-index: 0;
  pointer-events: none;
`;

export type BookState = "closed-front" | "open" | "closed-back";

const closedOffset: Record<BookState, number> = {
  "closed-front": 0.5,
  open: 0,
  "closed-back": -0.5,
};

export const Book = styled.div<{
  $mobile: boolean;
  $bookState: BookState;
  $pageWidth: number;
  $tilt: number;
  $zoomed?: boolean;
}>`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: ${({ $mobile }) => ($mobile ? "460px" : "1400px")};
  overflow: ${({ $zoomed }) => ($zoomed ? "auto" : "visible")};
  touch-action: ${({ $zoomed }) => ($zoomed ? "pan-x pan-y" : "pan-y")};
  perspective: 1400px;
  transform: translateX(
      ${({ $mobile, $bookState, $pageWidth }) =>
        $mobile ? 0 : closedOffset[$bookState] * $pageWidth}px
    )
    rotate(${({ $tilt }) => $tilt}deg);
  transition: transform 0.5s ease;
`;

export const PageStackWrap = styled.div<{
  $tiltX?: number;
  $tiltY?: number;
  $zoomed?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: ${({ $zoomed }) => ($zoomed ? 0 : 1)};
  margin: ${({ $zoomed }) => ($zoomed ? "auto" : "0")};
  transform: rotateX(${({ $tiltX }) => $tiltX ?? 0}deg)
    rotateY(${({ $tiltY }) => $tiltY ?? 0}deg);
  transition: transform 0.15s ease-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: #d8cff0;
    z-index: -1;
  }

  &::before {
    transform: translate(5px, 6px) rotate(0.6deg);
  }

  &::after {
    background: #c2b6e6;
    transform: translate(9px, 11px) rotate(1.1deg);
  }
`;

export const Leaf = styled.div<{
  $width: number;
  $height: number;
  $zoomed?: boolean;
}>`
  position: relative;
  display: flex;
  height: ${({ $height }) => Math.max($height, 1)}px;
  width: ${({ $width }) => Math.max($width, 1)}px;
  max-width: ${({ $zoomed }) => ($zoomed ? "none" : "100%")};
  max-height: ${({ $zoomed }) => ($zoomed ? "none" : "100%")};
  background: var(--lightdark);
  border-radius: 18px;
  box-shadow:
    0 3px 6px var(--shadow),
    0 32px 100px var(--shadow);
  overflow: hidden;
  --ink-black: #2a2118;
  --text-color: #2a2118;
  --light-highlight: #b8862b;
  --dark-highlight: #6b5a45;
  --dark-background: #8a7658;
  --light-background: #d9c9a8;
`;

const EDGE_GLOW_COLOR = "rgba(167, 107, 240, 0.35)";

export const EdgeGlow = styled.div<{
  $side: "left" | "right";
  $active: boolean;
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  ${({ $side }) => $side}: 0;
  width: ${EDGE_FLIP_FRACTION * 100}%;
  z-index: 5;
  pointer-events: none;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.25s ease;
  background: linear-gradient(
    to ${({ $side }) => ($side === "left" ? "right" : "left")},
    ${EDGE_GLOW_COLOR} 0%,
    transparent 100%
  );
`;

export const Spine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 36px;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 2;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--dark-background) 40%,
    var(--dark-highlight) 50%,
    var(--dark-background) 60%,
    transparent 100%
  );
  opacity: 0.6;
`;

export const Viewport = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y;
`;

const PAGE_COLOR_LIGHT = [243, 236, 220];
const PAGE_COLOR_BROWN = [212, 184, 145];

const pageColor = (i: number): string => {
  const t = Math.abs(Math.sin(i * 12.9898));
  const [r, g, b] = PAGE_COLOR_LIGHT.map((light, c) =>
    Math.round(light + (PAGE_COLOR_BROWN[c] - light) * t),
  );
  return `rgb(${r}, ${g}, ${b})`;
};

const pageTextureLayers = (count: number, width: number): string => {
  const images: string[] = [];
  const positions: string[] = [];
  let previous = 0;
  for (let i = 0; i < count; i++) {
    const offset = 1 + (Math.floor(Math.abs(Math.sin(i + 1)) * 1e6) % 5);
    previous = (previous + offset) % PAGE_TEXTURES.length;
    images.push(`url(${PAGE_TEXTURES[previous]})`);
    positions.push(`${i * width}px 0`);
  }
  for (let i = 0; i < count; i++) {
    const color = pageColor(i);
    images.push(`linear-gradient(${color}, ${color})`);
    positions.push(`${i * width}px 0`);
  }
  return `
    background-image: ${images.join(", ")};
    background-position: ${positions.join(", ")};
  `;
};

export const Flow = styled.div<{
  $layoutWidth: number;
  $layoutHeight: number;
  $spread: number;
  $scale: number;
  $typography?: LoreTypography;
}>`
  position: relative;
  z-index: 1;
  width: ${({ $layoutWidth, $spread }) => $layoutWidth * $spread}px;
  height: ${({ $layoutHeight }) => $layoutHeight}px;
  transform: scale(${({ $scale }) => Math.max($scale, 0.01)});
  transform-origin: 0 0;
  column-width: ${({ $layoutWidth }) => $layoutWidth}px;
  column-gap: 0;
  column-fill: auto;
  overflow: hidden;
  color: var(--ink-black);
  --page-w: ${({ $layoutWidth }) => $layoutWidth}px;
  --page-h: ${({ $layoutHeight }) => $layoutHeight}px;
  ${({ $typography }) => typographyVars($typography)}
`;

export const PageBackdrop = styled.div<{
  $pageWidth: number;
  $pageHeight: number;
  $pageCount: number;
  $offset: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ $pageWidth, $pageCount }) =>
    Math.max($pageWidth, 1) * Math.max($pageCount, 1)}px;
  height: ${({ $pageHeight }) => Math.max($pageHeight, 1)}px;
  transform: translateX(${({ $offset }) => -$offset}px);
  pointer-events: none;
  ${({ $pageWidth, $pageCount }) =>
    pageTextureLayers(Math.max($pageCount, 1), Math.max($pageWidth, 1))}
  background-size: ${({ $pageWidth, $pageHeight }) =>
    `${Math.max($pageWidth, 1)}px ${Math.max($pageHeight, 1)}px`};
  background-repeat: no-repeat;
  background-color: #fff;
  background-blend-mode: multiply;
`;

const fullPage = css`
  clear: both;
  height: 100%;
  box-sizing: border-box;
  padding: clamp(16px, calc(var(--page-h) * 0.07), 56px)
    clamp(16px, calc(var(--page-w) * 0.08), 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(10px, calc(var(--page-h) * 0.03), 16px);
  text-align: center;
  break-before: column;
  break-after: column;
  break-inside: avoid;
  -webkit-column-break-before: always;
  -webkit-column-break-after: always;
  -webkit-column-break-inside: avoid;
`;

export const TitlePage = styled.div<{ $cover?: string }>`
  ${fullPage}
  position: relative;
  z-index: 1;
  break-before: auto;
  -webkit-column-break-before: auto;
  background: ${({ $cover }) =>
      $cover ? `url(${$cover}) center / cover no-repeat` : "none"},
    ${PLACEHOLDER_COLORS.coverFront};
`;

export const BookSubtitle = styled.p`
  ${proseWrap}
  margin: 0;
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(12px, calc(var(--page-h) * 0.035), 18px) * var(--fs-body, 1)
  );
  font-weight: 700;
  color: var(--ink-black);
  opacity: 0.75;
`;

export const DisclaimerPage = styled.div`
  ${fullPage}
  align-items: stretch;
  justify-content: center;
  text-align: left;
`;

export const DisclaimerHeading = styled.h2`
  ${proseWrap}
  ${inkTitle}
  margin: 0;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(15px, calc(var(--page-h) * 0.055), 24px) * var(--fs-heading, 1)
  );
  color: var(--ink-black);
`;

export const DisclaimerBody = styled.p`
  ${proseWrap}
  margin: 0;
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(12px, calc(var(--page-h) * 0.038), 17px) * var(--fs-body, 1)
  );
  font-weight: 700;
  line-height: 1.5;
  color: var(--ink-black);
`;

export const CreditLine = styled.p<{ $heading?: boolean }>`
  ${proseWrap}
  margin: 0;
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.022), 13px) * var(--fs-body, 1)
  );
  font-weight: 700;
  line-height: 1.3;
  color: var(--ink-black);

  ${({ $heading }) =>
    $heading &&
    css`
      margin-top: 8px;
      font-family: var(--font-heading, Montserrat, sans-serif);
      font-size: calc(
        clamp(13px, calc(var(--page-h) * 0.03), 17px) * var(--fs-heading, 1)
      );
    `}
`;

export const LegendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(6px, calc(var(--page-h) * 0.018), 12px);
`;

export const LegendRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const LegendText = styled.span`
  ${proseWrap}
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.033), 15px) * var(--fs-body, 1)
  );
  font-weight: 700;
  line-height: 1.4;
  color: var(--ink-black);
  opacity: 0.85;
`;

export const TocPage = styled.div`
  box-sizing: border-box;
  padding: clamp(16px, calc(var(--page-h) * 0.07), 56px)
    clamp(16px, calc(var(--page-w) * 0.08), 32px);
  break-before: column;
  -webkit-column-break-before: always;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

export const TocList = styled.div`
  margin-top: clamp(10px, calc(var(--page-h) * 0.03), 16px);
  display: flex;
  flex-direction: column;
  gap: clamp(4px, calc(var(--page-h) * 0.012), 8px);
`;

export const TocRow = styled.button`
  ${proseWrap}
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  width: 100%;
  background: none;
  border: none;
  padding: 2px 0;
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.03), 14px) * var(--fs-body, 1)
  );
  font-weight: 700;
  color: var(--ink-black);
  text-align: left;
  cursor: pointer;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  &:hover {
    opacity: 0.7;
  }
`;

export const TocTitle = styled.span`
  ${proseWrap}
  flex: 1;
  min-width: 0;
`;

export const TocPageNum = styled.span`
  flex-shrink: 0;
  opacity: 0.6;
`;

export const ChapterOpener = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(6px, calc(var(--page-h) * 0.02), 12px);
  text-align: center;
  margin-bottom: clamp(12px, calc(var(--page-h) * 0.04), 24px);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
`;

export const SongOpenerIcon = styled.img`
  width: clamp(36px, calc(var(--page-h) * 0.14), 90px);
  height: clamp(36px, calc(var(--page-h) * 0.14), 90px);
  object-fit: contain;
`;

export const StandaloneDivider = styled.div`
  ${fullPage}
`;

export const StandaloneDividerTitle = styled.h2`
  ${proseWrap}
  ${inkTitle}
  margin: 0;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(15px, calc(var(--page-h) * 0.055), 26px) * var(--fs-heading, 1)
  );
  color: var(--ink-black);
  text-align: center;
`;

export const EntrySection = styled.section`
  box-sizing: border-box;
  padding: clamp(14px, calc(var(--page-h) * 0.06), 40px)
    clamp(12px, calc(var(--page-w) * 0.06), 28px);
  clear: both;
  break-before: column;
  -webkit-column-break-before: always;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

export const EntryHeader = styled.header`
  margin-bottom: clamp(10px, calc(var(--page-h) * 0.025), 18px);
  display: flex;
  flex-direction: column;
  gap: 6px;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
`;

export const EntryTitle = styled.h3`
  ${proseWrap}
  ${inkTitle}
  margin: 0;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(14px, calc(var(--page-h) * 0.05), 22px) * var(--fs-heading, 1)
  );
  color: var(--ink-black);
`;

export const EntrySubject = styled.p`
  ${inkTitle}
  margin: 0;
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(10px, calc(var(--page-h) * 0.024), 12px) * var(--fs-body, 1)
  );
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-black);
  opacity: 0.6;
`;

export const CreditRow = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CreditText = styled.span`
  ${proseWrap}
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(10px, calc(var(--page-h) * 0.024), 12px) * var(--fs-body, 1)
  );
  color: var(--ink-black);
  opacity: 0.8;

  a {
    color: var(--ink-black);
    font-weight: 700;
  }
`;

const STATUS_COLOR: Record<string, string> = {
  confirmed: "#4CAF6E",
  implied: "#E3C438",
  theory: "#E08A3C",
  thought: "#9B7BD4",
};

export const StatusBadge = styled.span<{ $status: string }>`
  padding: 2px 10px;
  border-radius: 999px;
  font-family: ${BODY_FONT};
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #20162c;
  background: ${({ $status }) =>
    STATUS_COLOR[$status] ?? "var(--light-background)"};
`;

export const StatusPips = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-right: 6px;
  vertical-align: middle;
`;

export const Pip = styled.span<{ $filled: boolean }>`
  display: inline-block;
  box-sizing: border-box;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1.5px solid currentColor;
  background: ${({ $filled }) => ($filled ? "currentColor" : "transparent")};
`;

export const Heading = styled.h4`
  ${proseWrap}
  position: relative;

  > .ink-text {
    color: transparent;
  }

  > .ink-line {
    position: absolute;
    white-space: pre;
    pointer-events: none;
    user-select: none;
    font-family: var(--font-heading, "InaTitle", Montserrat, sans-serif);
    font-size: 1.1em;
    font-weight: 700;
    -webkit-text-stroke: 0.03em currentColor;
  }

  margin: clamp(10px, calc(var(--page-h) * 0.03), 18px) 0 8px;
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(12px, calc(var(--page-h) * 0.042), 18px) * var(--fs-heading, 1)
  );
  color: var(--ink-black);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  break-after: avoid;
  -webkit-column-break-after: avoid;
`;

export const Paragraph = styled.p`
  ${proseWrap}
  margin: 0 0 12px;
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.036), 15px) * var(--fs-body, 1)
  );
  font-weight: 700;
  line-height: 1.6;
  color: var(--ink-black);
  widows: 2;
  orphans: 2;
`;

export const DropCapLetter = styled.span`
  float: left;
  width: clamp(26px, calc(var(--page-h) * 0.09), 56px);
  height: clamp(26px, calc(var(--page-h) * 0.09), 56px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "RevisonBooks", var(--font-heading, Montserrat, sans-serif);
  font-size: calc(
    clamp(28px, calc(var(--page-h) * 0.12), 60px) * var(--fs-heading, 1)
  );
  line-height: 0.8;
  margin: 2px 8px 0 0;
  color: var(--dropcap-color, inherit);

  &[data-displaced] {
    float: none;
    display: inline-block;
    width: auto;
    height: auto;
    font-size: calc(
      clamp(20px, calc(var(--page-h) * 0.075), 34px) * var(--fs-heading, 1)
    );
    line-height: 1;
    margin: 0 4px 0 0;
    vertical-align: -0.1em;
  }
`;

export const TakodachiCard = styled.aside`
  display: flow-root;
  clear: both;
  box-sizing: border-box;
  margin: 10px 0 14px;
  padding: 8px 10px;
  border: 2px dashed var(--frame-color, var(--title-stroke));
  border-radius: 8px;
  color: var(--ink-black);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
`;

export const TakodachiImg = styled.img`
  float: left;
  width: clamp(48px, calc(var(--page-w) * 0.22), 96px);
  height: clamp(48px, calc(var(--page-w) * 0.22), 96px);
  object-fit: contain;
  border-radius: 6px;
  margin: 0 10px 4px 0;
`;

export const TakodachiName = styled.div`
  ${proseWrap}
  font-family: var(--font-heading, Montserrat, sans-serif);
  font-weight: 700;
  font-size: calc(
    clamp(12px, calc(var(--page-h) * 0.04), 16px) * var(--fs-heading, 1)
  );
  line-height: 1.2;
`;

export const TakodachiDesc = styled.p`
  ${proseWrap}
  margin: 3px 0 0;
  font-family: var(--font-body, ${BODY_FONT});
  font-size: calc(
    clamp(10px, calc(var(--page-h) * 0.032), 13px) * var(--fs-body, 1)
  );
  line-height: 1.35;
`;

export const QuoteBlock = styled.blockquote`
  ${proseWrap}
  margin: 12px 0;
  padding: 8px 16px;
  border-left: 3px solid var(--light-highlight);
  font-family: var(--font-body, ${BODY_FONT});
  font-style: italic;
  font-size: calc(
    clamp(11px, calc(var(--page-h) * 0.036), 15px) * var(--fs-body, 1)
  );
  font-weight: 700;
  color: var(--ink-black);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  cite {
    display: block;
    margin-top: 4px;
    font-size: 9px;
    font-style: normal;
    opacity: 0.6;
  }
`;

export const IllustrationFrame = styled.figure<{
  $float?: "left" | "right" | "center";
  $width?: number;
  $editable?: boolean;
}>`
  position: relative;
  margin: 12px 0;
  max-width: 100%;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    max-height: min(240px, calc(var(--page-h) * 0.13));
    object-fit: contain;
    border-radius: 8px;
    border: 6px solid var(--frame-color, var(--title-stroke));
  }

  figcaption {
    ${proseWrap}
    margin-top: 4px;
    font-family: ${BODY_FONT};
    font-size: 8px;
    opacity: 0.6;
    color: var(--ink-black);
  }

  ${({ $editable }) => $editable && editableCss}
  ${({ $float, $width }) =>
    $float
      ? css`
          float: ${$float === "center" ? "none" : $float};
          width: calc(var(--page-w) * ${$width ?? 0.4});
          margin: ${$float === "center"
            ? "6px auto 8px"
            : $float === "left"
              ? "6px 16px 8px 0"
              : "12px 0"};

          img {
            width: min(100%, calc(var(--page-h) * 0.6 * var(--ar, 100)));
            max-height: calc(var(--page-h) * 0.6);
            margin-inline: auto;
          }
        `
      : css`
          width: fit-content;
          margin: 12px auto;

          img {
            width: auto;
            max-width: 100%;
          }
        `}
`;

export const PageBreak = styled.div`
  height: 0;
  break-before: column;
  -webkit-column-break-before: always;
`;

export const PageNumber = styled.div<{ $corner: "left" | "right" }>`
  position: absolute;
  bottom: clamp(6px, 1.5vh, 16px);
  ${({ $corner }) => ($corner === "left" ? "left" : "right")}: clamp(
    10px,
    2vw,
    24px
  );
  z-index: 10;
  color: #6a45a8;
  font-family: ${BODY_FONT};
  font-size: clamp(14px, calc(var(--page-h) * 0.03), 20px);
  line-height: 1;
`;

export const PageJump = styled.div`
  position: fixed;
  top: ${CHROME_TOP};
  left: calc(${CHROME_LEFT} + ${CHROME_STEP * 7}px);
  z-index: 1000;
  --ink-black: #2a2118;
`;

export const PageCounter = styled.button`
  cursor: pointer;
  height: ${CHROME_SIZE}px;
  min-width: ${CHROME_SIZE}px;
  padding: 0 14px;
  box-sizing: border-box;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  border: var(--ink-black) 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  color: var(--ink-black);
  font-family: ${BODY_FONT};
  font-size: ${(CHROME_SIZE / 48) * 1.2}rem;
  box-shadow: 0 2px 8px #0002;
`;

export const StatusMessage = styled.div`
  color: var(--text-color);
  text-align: center;
  padding: 24px;
  font-family: "Mulish", sans-serif;
`;

export const BackCoverPage = styled.div<{ $src: string }>`
  height: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  background:
    url(${({ $src }) => $src}) center / cover no-repeat,
    ${PLACEHOLDER_COLORS.coverBack};
  break-before: column;
  -webkit-column-break-before: always;
`;

export const EntryDivider = styled.div`
  --db: clamp(8px, calc(var(--page-h) * 0.03), 18px);
  display: block;
  box-sizing: border-box;
  width: calc(100% / 3.2);
  height: var(--db);
  margin: 0 auto 18px;
  transform-origin: 50% calc(var(--db) - 14px / 2.2);
  transform: scale(3.2);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  pointer-events: none;
`;

export const EntryDividerImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: translate(
      calc(var(--page-w) * var(--dx, 0) / 320),
      calc(var(--page-h) * var(--dy, 0) / 320)
    )
    rotate(calc(var(--dr, 0) * 1deg)) scale(var(--ds, 1));
`;

const RIBBON_W = "clamp(68px, 7.2vw, 104px)";
const RIBBON_PEEK = "clamp(52px, 4.6vw, 76px)";

const ribbonDrop = keyframes`
  0% {
    transform: translateY(-14px);
  }
  60% {
    transform: translateY(4px);
  }
  80% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Ribbon = styled.button<{
  $hasBookmark: boolean;
  $revealed: boolean;
  $justPlaced: boolean;
  $mobile: boolean;
}>`
  position: absolute;
  top: ${({ $revealed, $hasBookmark, $mobile }) =>
    $revealed || (!$hasBookmark && !$mobile)
      ? "clamp(-16px, -2vh, -6px)"
      : `calc(${RIBBON_PEEK} * -1)`};
  background: transparent;
  ${({ $mobile, $hasBookmark }) =>
    $hasBookmark
      ? css`
          left: ${$mobile ? "50%" : "75%"};
          margin-left: calc(${RIBBON_W} / -2);
        `
      : $mobile
        ? css`
            left: calc(100% - ${RIBBON_W} - clamp(4px, 1.5vw, 20px));
          `
        : css`
            left: 100%;
            margin-left: clamp(2px, 0.8vw, 12px);
          `}
  z-index: 10;
  display: block;
  width: ${RIBBON_W};
  max-height: ${({ $revealed, $hasBookmark, $mobile }) =>
    $revealed || (!$hasBookmark && !$mobile) ? "400px" : RIBBON_PEEK};
  overflow: hidden;
  border: none;
  padding: 0;
  cursor: pointer;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35));
  transition:
    top 0.45s ease,
    left 0.45s ease,
    margin-left 0.45s ease,
    max-height 0.45s ease;
  ${({ $justPlaced }) =>
    $justPlaced &&
    css`
      animation: ${ribbonDrop} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    `}
`;

export const RibbonArt = styled.span<{ $src: string; $ratio: string }>`
  display: block;
  width: 100%;
  aspect-ratio: ${({ $ratio }) => $ratio};
  background: url(${({ $src }) => $src}) center top / contain no-repeat;
`;

export const RibbonPicker = styled.div`
  position: fixed;
  top: ${CHROME_TOP};
  left: calc(${CHROME_LEFT} + ${CHROME_STEP * 4}px);
  z-index: 1000;
`;

export const RibbonPickerButton = styled(SfxMuteButton)`
  position: static;
`;

export const RibbonPickerMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  display: flex;
  gap: 8px;
  padding: 8px;
  border: var(--ink-black) 2px solid;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px #0002;
`;

export const RibbonPickerOption = styled.button<{
  $src: string;
  $ratio: string;
  $active: boolean;
}>`
  width: 40px;
  aspect-ratio: ${({ $ratio }) => $ratio};
  border: 2px solid
    ${({ $active }) => ($active ? "var(--light-highlight)" : "transparent")};
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  background: url(${({ $src }) => $src}) center / contain no-repeat;
`;

export const StickyNoteFrame = styled.div<{
  $rotate: number;
  $side?: "left" | "right";
  $editable?: boolean;
}>`
  position: relative;
  float: ${({ $side }) => $side ?? "right"};
  width: clamp(80px, calc(var(--page-w) * 0.34), 170px);
  margin: ${({ $side }) =>
    $side === "left" ? "0 14px 10px 0" : "0 0 10px 14px"};
  transform: rotate(${({ $rotate }) => $rotate}deg);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  ${({ $editable }) => $editable && editableCss}
`;

export const StickyNoteImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const StickyNoteText = styled.div<{
  $box: { top: number; right: number; bottom: number; left: number };
}>`
  position: absolute;
  container-type: inline-size;
  box-sizing: border-box;
  padding: 2%;
  top: ${({ $box }) => $box.top}%;
  right: ${({ $box }) => $box.right}%;
  bottom: ${({ $box }) => $box.bottom}%;
  left: ${({ $box }) => $box.left}%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: safe center;
  gap: 2px;
  text-align: center;
`;

export const StickyNoteLine = styled.span`
  overflow-wrap: anywhere;
  font-family: ${BODY_FONT};
  font-weight: 700;
  font-size: clamp(7px, 11cqw, 13px);
  line-height: 1.25;
  color: #f4d35e;
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.6),
    0 0 4px rgba(0, 0, 0, 0.4);
`;

export const Doodle = styled.img<{
  $rotate: number;
  $side: "left" | "right";
  $editable?: boolean;
}>`
  float: ${({ $side }) => $side};
  width: clamp(40px, calc(var(--page-w) * 0.18), 80px);
  height: auto;
  margin: 4px 10px 8px 10px;
  transform: rotate(${({ $rotate }) => $rotate}deg);
  pointer-events: none;
  opacity: 0.9;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  ${({ $editable }) =>
    $editable &&
    css`
      pointer-events: auto;
      ${editableCss}
    `}
`;

export const SongIcon = styled.img`
  width: clamp(18px, calc(var(--page-h) * 0.06), 36px);
  height: clamp(18px, calc(var(--page-h) * 0.06), 36px);
  object-fit: contain;
`;

export const PageJumpMenu = styled(RibbonPickerMenu)`
  flex-direction: column;
  align-items: stretch;
  white-space: nowrap;
`;

export const PageJumpRow = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${BODY_FONT};
  font-size: 0.9rem;
  color: var(--ink-black);

  input {
    width: 4.5ch;
    font: inherit;
    color: inherit;
    padding: 2px 6px;
    border: var(--ink-black) 2px solid;
    border-radius: 6px;
    background: #fff;
  }
`;

export const PageJumpButton = styled.button`
  font: inherit;
  font-family: ${BODY_FONT};
  font-size: 0.9rem;
  color: var(--ink-black);
  padding: 2px 10px;
  border: var(--ink-black) 2px solid;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
`;

export const DoodlePage = styled.div`
  ${fullPage}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 0;
  padding: clamp(10px, calc(var(--page-h) * 0.04), 28px);
`;

export const DoodleCell = styled.div`
  position: relative;
  min-width: 0;
  min-height: 0;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 88%;
    max-height: 88%;
    object-fit: contain;
    transform: translate(calc(-50% + var(--dx, 0%)), calc(-50% + var(--dy, 0%)))
      rotate(var(--rot, 0deg));
  }
`;
