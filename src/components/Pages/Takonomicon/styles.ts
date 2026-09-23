import styled, { createGlobalStyle, css } from "styled-components";
import {
  BOOKMARK,
  EDGE_FLIP_FRACTION,
  FRAME,
  PAGE_PLATE,
  PAPER,
  SPINE,
} from "./assets";

const CHROME_SIZE = 36;
const CHROME_GAP = 8;
const CHROME_STEP = CHROME_SIZE + CHROME_GAP;
const CHROME_TOP = "clamp(8px, 2vh, 20px)";
const CHROME_LEFT = "clamp(8px, 2vw, 20px)";

const proseWrap = css`
  overflow-wrap: anywhere;
  hyphens: auto;
`;

export const BookRoot = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: var(--background);
`;

export const HomeOverlay = styled.div`
  position: absolute;
  top: ${CHROME_TOP};
  left: ${CHROME_LEFT};
  z-index: 20;
  font-size: ${(CHROME_SIZE / 1.4).toFixed(2)}px;
`;

export const ChromeButtonLayout = createGlobalStyle`
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
  transform: translate(-50%, -50%)
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
  box-sizing: border-box;
  cursor: ${({ $hideCursor }) => ($hideCursor ? "none" : "auto")};

  @media (max-width: 767px) {
    padding-top: calc(${CHROME_TOP} + ${CHROME_SIZE}px + 6px);
  }
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
}>`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: ${({ $mobile }) => ($mobile ? "460px" : "1400px")};
  transform: translateX(
    ${({ $mobile, $bookState, $pageWidth }) =>
      $mobile ? 0 : closedOffset[$bookState] * $pageWidth}px
  );
  transition: transform 0.5s ease;
`;

export const Leaf = styled.div<{ $width: number }>`
  position: relative;
  display: flex;
  height: 100%;
  width: ${({ $width }) => Math.max($width, 1)}px;
  max-width: 100%;
  background: var(--lightdark);
  border-radius: 18px;
  box-shadow: 0 32px 100px var(--shadow);
  overflow: hidden;
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
  background:
    url(${SPINE}) center / cover no-repeat,
    linear-gradient(
      90deg,
      transparent 0%,
      var(--dark-background) 45%,
      var(--dark-highlight) 50%,
      var(--dark-background) 55%,
      transparent 100%
    );
  opacity: 0.35;
`;

export const Viewport = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  overflow: hidden;
`;

export const Flow = styled.div<{ $pageWidth: number; $pageHeight: number }>`
  height: ${({ $pageHeight }) => Math.max($pageHeight, 1)}px;
  column-width: ${({ $pageWidth }) => Math.max($pageWidth, 1)}px;
  column-gap: 0;
  column-fill: auto;
  overflow: hidden;
  color: var(--ink-black);
  background: url(${PAPER}) repeat;
  --page-w: ${({ $pageWidth }) => Math.max($pageWidth, 1)}px;
  --page-h: ${({ $pageHeight }) => Math.max($pageHeight, 1)}px;
`;

const fullPage = css`
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
  -webkit-column-break-before: always;
  -webkit-column-break-after: always;
`;

export const TitlePage = styled.div<{ $cover?: string }>`
  ${fullPage}
  break-before: auto;
  -webkit-column-break-before: auto;
  background: ${({ $cover }) =>
      $cover ? `url(${$cover}) center / cover no-repeat` : "none"},
    var(--lightdark);
`;

export const BookTitle = styled.h1`
  ${proseWrap}
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: clamp(18px, calc(var(--page-h) * 0.08), 34px);
  color: var(--ink-black);
`;

export const BookSubtitle = styled.p`
  ${proseWrap}
  margin: 0;
  font-family: "Mulish", sans-serif;
  font-size: clamp(12px, calc(var(--page-h) * 0.035), 18px);
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
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: clamp(15px, calc(var(--page-h) * 0.055), 24px);
  color: var(--ink-black);
`;

export const DisclaimerBody = styled.p`
  ${proseWrap}
  margin: 0;
  font-family: "Mulish", sans-serif;
  font-size: clamp(12px, calc(var(--page-h) * 0.038), 17px);
  line-height: 1.5;
  color: var(--ink-black);
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
  font-family: "Mulish", sans-serif;
  font-size: clamp(11px, calc(var(--page-h) * 0.033), 15px);
  line-height: 1.4;
  color: var(--ink-black);
  opacity: 0.85;
`;

export const TocPage = styled.div`
  ${fullPage}
  align-items: stretch;
  justify-content: flex-start;
`;

export const TocList = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
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
  background: none;
  border: none;
  padding: 2px 0;
  font-family: "Mulish", sans-serif;
  font-size: clamp(11px, calc(var(--page-h) * 0.03), 14px);
  color: var(--ink-black);
  text-align: left;
  cursor: pointer;

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

export const SongOpenerPage = styled.div`
  ${fullPage}
`;

export const SongOpenerIcon = styled.img`
  width: clamp(48px, calc(var(--page-h) * 0.22), 140px);
  height: clamp(48px, calc(var(--page-h) * 0.22), 140px);
  object-fit: contain;
`;

export const StandaloneDivider = styled.div`
  ${fullPage}
`;

export const StandaloneDividerTitle = styled.h2`
  ${proseWrap}
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: clamp(15px, calc(var(--page-h) * 0.055), 26px);
  color: var(--ink-black);
  text-align: center;
`;

export const EntrySection = styled.section`
  box-sizing: border-box;
  padding: clamp(14px, calc(var(--page-h) * 0.06), 40px)
    clamp(12px, calc(var(--page-w) * 0.06), 28px);
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
  margin: 0;
  font-family: Montserrat, sans-serif;
  font-size: clamp(14px, calc(var(--page-h) * 0.05), 22px);
  color: var(--ink-black);
`;

export const EntrySubject = styled.p`
  margin: 0;
  font-family: "Mulish", sans-serif;
  font-size: clamp(10px, calc(var(--page-h) * 0.024), 12px);
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
  font-family: "Mulish", sans-serif;
  font-size: clamp(10px, calc(var(--page-h) * 0.024), 12px);
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
  font-family: "Mulish", sans-serif;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #20162c;
  background: ${({ $status }) =>
    STATUS_COLOR[$status] ?? "var(--light-background)"};
`;

export const StatusPips = styled.span`
  letter-spacing: 0.12em;
  opacity: 0.85;
  margin-right: 6px;
`;

export const Heading = styled.h4`
  ${proseWrap}
  margin: clamp(10px, calc(var(--page-h) * 0.03), 18px) 0 8px;
  font-family: Montserrat, sans-serif;
  font-size: clamp(12px, calc(var(--page-h) * 0.042), 18px);
  color: var(--ink-black);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
`;

export const Paragraph = styled.p`
  ${proseWrap}
  margin: 0 0 12px;
  font-family: "Mulish", sans-serif;
  font-size: clamp(11px, calc(var(--page-h) * 0.036), 15px);
  line-height: 1.6;
  color: var(--ink-black);
  widows: 2;
  orphans: 2;
`;

export const DropCapImg = styled.img`
  float: left;
  width: clamp(26px, calc(var(--page-h) * 0.09), 56px);
  height: clamp(26px, calc(var(--page-h) * 0.09), 56px);
  object-fit: contain;
  margin: 2px 8px 0 0;
`;

export const DropCapLetter = styled.span`
  float: left;
  width: clamp(26px, calc(var(--page-h) * 0.09), 56px);
  height: clamp(26px, calc(var(--page-h) * 0.09), 56px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, sans-serif;
  font-size: clamp(28px, calc(var(--page-h) * 0.12), 60px);
  line-height: 0.8;
  margin: 2px 8px 0 0;
  color: var(--ink-black);
`;

export const QuoteBlock = styled.blockquote`
  ${proseWrap}
  margin: 12px 0;
  padding: 8px 16px;
  border-left: 3px solid var(--light-highlight);
  font-family: "Mulish", sans-serif;
  font-style: italic;
  font-size: clamp(11px, calc(var(--page-h) * 0.036), 15px);
  color: var(--ink-black);
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  cite {
    display: block;
    margin-top: 4px;
    font-size: 11px;
    font-style: normal;
    opacity: 0.6;
  }
`;

export const IllustrationFrame = styled.figure`
  margin: 12px 0;
  max-width: 100%;
  max-height: min(260px, calc(var(--page-h) * 0.15));
  break-inside: avoid;
  -webkit-column-break-inside: avoid;

  img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    max-height: min(240px, calc(var(--page-h) * 0.13));
    object-fit: contain;
    border-radius: 8px;
    border-image: url(${FRAME}) 40 fill / 20px round;
  }

  figcaption {
    ${proseWrap}
    margin-top: 4px;
    font-family: "Mulish", sans-serif;
    font-size: 10px;
    opacity: 0.6;
    color: var(--ink-black);
  }
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
  padding: 2px 10px;
  border-radius: 999px;
  background:
    url(${PAGE_PLATE}) center / contain no-repeat,
    var(--dark-highlight);
  color: var(--text-color);
  font-family: "Mulish", sans-serif;
  font-size: 12px;
`;

export const PageCounter = styled.div`
  position: absolute;
  bottom: clamp(4px, 1.5vh, 16px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  padding: 2px 14px;
  border-radius: 999px;
  background:
    url(${PAGE_PLATE}) center / contain no-repeat,
    var(--dark-highlight);
  color: var(--text-color);
  font-family: "Mulish", sans-serif;
  font-size: 12px;
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
  background:
    url(${({ $src }) => $src}) center / cover no-repeat,
    var(--lightdark);
  break-before: column;
  -webkit-column-break-before: always;
`;

export const EntryDivider = styled.img`
  display: block;
  width: 60%;
  height: clamp(8px, calc(var(--page-h) * 0.03), 18px);
  margin: 0 auto 18px;
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
`;

export const Ribbon = styled.button<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  right: clamp(16px, 4vw, 48px);
  z-index: 10;
  width: 28px;
  height: 44px;
  border: none;
  cursor: pointer;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
  background:
    url(${BOOKMARK}) center / contain no-repeat,
    var(--dark-highlight);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%);
`;

export const SongIcon = styled.img`
  width: clamp(18px, calc(var(--page-h) * 0.06), 36px);
  height: clamp(18px, calc(var(--page-h) * 0.06), 36px);
  object-fit: contain;
`;
