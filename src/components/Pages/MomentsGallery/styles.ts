import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { NavTitle } from "../../../styles/globalStyles";

export const FLOOR_HEIGHT = "clamp(130px, 20vh, 240px)";
export const SUBNAV_HEIGHT = "clamp(70px, 9vh, 96px)";

export const DimSharedButtons = createGlobalStyle`
  button[title="Mute BGM"],
  button[title="Unmute BGM"],
  button[title^="Switch theme"] {
    opacity: 0.45;
    transition: opacity 0.2s;
  }
  button[title="Mute BGM"]:hover,
  button[title="Unmute BGM"]:hover,
  button[title^="Switch theme"]:hover {
    opacity: 1;
  }
`;

export const CompactNavTitle = styled(NavTitle)`
  font-size: clamp(22px, 3.2vw, 34px);
  line-height: 1.15;
`;

export const GalleryWall = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(
      rgba(255, 255, 255, 0.14),
      rgba(255, 255, 255, 0.14)
    ),
    radial-gradient(
      ellipse at center 40%,
      var(--light-background) 0%,
      transparent 60%
    ),
    linear-gradient(
      180deg,
      var(--dark-background) 0%,
      var(--dark-background) 78%,
      var(--dark-highlight) 100%
    );
`;

export const EdgeArrow = styled.button<{ $side: "left" | "right" }>`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  height: clamp(120px, 26vh, 240px);
  ${({ $side }) => ($side === "left" ? "left: 0;" : "right: 0;")}
  width: clamp(48px, 7vw, 120px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    ${({ $side }) => ($side === "left" ? "90deg" : "270deg")},
    rgba(0, 0, 0, 0.28),
    transparent
  );
  color: var(--light-highlight);
  font-size: clamp(1.2em, 2.4vw, 2em);
  border: none;
  cursor: pointer;
  opacity: 0.25;
  transition: opacity 0.2s;
  &:hover:not(:disabled),
  &:focus-visible {
    opacity: 1;
  }
  &:focus-visible {
    outline: 2px solid var(--light-highlight);
    outline-offset: -4px;
  }
  &:disabled {
    opacity: 0.08;
    cursor: not-allowed;
  }
`;

export const GalleryScroller = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
  min-height: 0;
  box-sizing: border-box;
  cursor: grab;
  user-select: none;
  gap: 20px;
  padding: calc(${SUBNAV_HEIGHT} + 12px) clamp(56px, 8vw, 128px)
    calc(${FLOOR_HEIGHT} + 48px);
  overflow-x: scroll;
  overflow-y: visible;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  --pivot-w: min(1040px, calc(100% - 320px));
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - var(--pivot-w) / 2));
  }
`;

export const MomentSlot = styled.div<{ $isPivot: boolean; $dragging: boolean }>`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  width: ${({ $isPivot, $dragging }) =>
    $isPivot && !$dragging ? "var(--pivot-w)" : "140px"};
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  opacity: ${({ $isPivot, $dragging }) => ($isPivot && !$dragging ? 1 : 0.5)};
  transform: ${({ $isPivot, $dragging }) =>
    $isPivot && !$dragging ? "scale(1)" : "scale(0.9)"};
  transition:
    opacity 0.35s,
    transform 0.35s;
  cursor: ${({ $isPivot }) => ($isPivot ? "default" : "pointer")};
`;

export const NeighborFrame = styled.div`
  height: 60%;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: var(--text-color);
`;

export const NeighborImg = styled.div<{ $src?: string }>`
  width: 110px;
  height: 76px;
  border-radius: 6px;
  border: 3px solid var(--light-highlight);
  background-color: var(--lightdark);
  background-image: ${({ $src }) => ($src ? `url(${$src})` : "none")};
  background-size: cover;
  background-position: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
`;

export const NeighborLabel = styled.small`
  text-align: center;
  overflow-wrap: anywhere;
`;

export const NoMomentsYet = styled.div`
  color: var(--text-color);
  text-align: center;
  padding: 4rem 0;
  opacity: 0.7;
`;

export const SubNavBar = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  z-index: 1;
`;

export const CategorySwitchRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background: var(--dark-background);
  padding: 3px clamp(12px, 4vw, 48px);
  box-sizing: border-box;
`;

export const YearNavRow = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background: var(--lightdark);
  padding: 3px clamp(12px, 4vw, 48px) 4px;
  box-sizing: border-box;
`;

export const YearButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) =>
    $active ? "var(--dark-highlight)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "var(--text-color)" : "var(--dark-highlight)"};
  border: 1px solid var(--dark-highlight);
  border-radius: 8px;
  padding: 1px 7px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s;
  &:hover {
    background: var(--dark-highlight);
    color: var(--text-color);
  }
`;

export const WoodFloor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${FLOOR_HEIGHT};
  z-index: 0;
  background-image: url("${process.env
    .PUBLIC_URL}/gallery_assets/WoodFloor_placeholder.png");
  background-size: 100% 340%;
  background-position: center bottom;
  background-repeat: no-repeat;
  pointer-events: none;
`;

export const ExhibitCounter = styled.span`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.8);
  color: var(--ink-black);
  border: var(--ink-black) 2px solid;
  border-radius: 24px;
  height: 48px;
  min-width: 48px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  opacity: 0.45;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  box-shadow: 0 2px 8px #0002;
`;

export const ExhibitLayout = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 32px;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
  }
`;

export const ExhibitStageColumn = styled.div`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1100px) {
    width: 100%;
    flex: 0 0 auto;
  }
`;

export const Frame = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  height: min(480px, calc(100vh - 320px));
  box-sizing: border-box;
  border: 10px solid var(--light-highlight);
  outline: 3px solid var(--lightdark);
  outline-offset: -14px;
  border-radius: 6px;
  background: #000;
  box-shadow:
    0 0 40px rgba(0, 0, 0, 0.5),
    0 22px 50px rgba(0, 0, 0, 0.55);
  overflow: hidden;
`;

export const FrameMedia = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  iframe,
  video,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: 0;
  }
`;

export const MomentSourceLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px;
  text-align: center;
  background: var(--light-background);
  color: var(--dark-highlight);
  font-weight: 600;
  text-decoration: underline;
  box-sizing: border-box;
`;

export const SwapRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  color: var(--text-color);
  font-size: 0.85em;
  z-index: 2;
`;

export const FloorArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${FLOOR_HEIGHT};
  z-index: 2;
  pointer-events: none;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const bob = keyframes`
  0%, 100% { margin-top: 0; }
  50% { margin-top: -6px; }
`;

const flash = keyframes`
  0%, 92%, 100% { opacity: 0; }
  95% { opacity: 0.9; }
`;

export const FanSprite = styled.img<{
  $left: number;
  $bottom: number;
  $scale: number;
  $flip: boolean;
  $dim?: boolean;
  $delay: number;
  $hidden: boolean;
  $front?: boolean;
  $interactive?: boolean;
}>`
  position: absolute;
  left: ${({ $left }) => $left}%;
  bottom: ${({ $bottom }) => $bottom}%;
  width: clamp(44px, 8vw, 100px);
  pointer-events: ${({ $interactive }) => ($interactive ? "auto" : "none")};
  z-index: ${({ $front }) => ($front ? 5 : 1)};
  transform-origin: 50% 100%;
  filter: ${({ $dim }) => ($dim ? "brightness(0.72)" : "none")};
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transform: translateX(-50%)
    scale(${({ $hidden, $scale }) => ($hidden ? $scale * 0.4 : $scale)})
    scaleX(${({ $flip }) => ($flip ? -1 : 1)})
    rotateY(${({ $hidden }) => ($hidden ? 180 : 0)}deg);
  transition:
    left 0.6s ease,
    bottom 0.6s ease,
    transform 0.6s ease,
    opacity 0.5s ease;
  animation: ${bob} 3.2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity 0.3s ease;
    transform: translateX(-50%) scale(${({ $scale }) => $scale})
      scaleX(${({ $flip }) => ($flip ? -1 : 1)});
  }
`;

export const CameraFlash = styled.div<{
  $left: number;
  $bottom: number;
  $flip: boolean;
}>`
  position: absolute;
  left: ${({ $left }) => $left}%;
  bottom: ${({ $bottom }) => $bottom}%;
  transform: translate(${({ $flip }) => ($flip ? "-140%" : "40%")}, -10%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff, transparent 70%);
  pointer-events: none;
  opacity: 0;
  animation: ${flash} 6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

export const CommenterBubbleWrap = styled.div<{
  $left: number;
  $bottom: number;
}>`
  position: absolute;
  left: ${({ $left }) => $left}%;
  bottom: ${({ $bottom }) => $bottom}%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 3;
  pointer-events: auto;
  animation: ${float} 4s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Bubble = styled.div`
  position: relative;
  max-width: 190px;
  background: color-mix(in srgb, var(--light-background) 72%, transparent);
  color: var(--ink-black);
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 12.5px;
  line-height: 1.35;
  text-align: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
  cursor: default;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -6px;
    width: 12px;
    height: 12px;
    background: color-mix(in srgb, var(--light-background) 72%, transparent);
    border-radius: 0 0 4px 0;
    transform: translateX(-50%) rotate(45deg);
  }
`;

export const BubbleText = styled.span`
  display: block;
  max-height: 4.2em;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MoreIndicator = styled.span`
  position: absolute;
  right: 10px;
  bottom: 4px;
  color: var(--dark-highlight);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 1px;
  pointer-events: none;
`;

export const ReactionName = styled.span`
  font-size: 10px;
  color: var(--text-color);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  max-width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PlacardCard = styled.div`
  flex: 0 0 300px;
  align-self: center;
  max-width: 340px;
  height: min(240px, calc((100vh - 320px) / 2));
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 10px;
  padding: 14px 16px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  @media only screen and (max-width: 1100px) {
    max-width: 90vw;
    width: 100%;
    flex: 0 0 auto;
  }
`;

export const PlacardTitle = styled.h3`
  margin: 0;
  min-width: 0;
  font-size: 1.05em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PlacardMeta = styled.small`
  display: block;
  flex-shrink: 0;
  opacity: 0.75;
`;

export const PlacardContext = styled.p`
  margin: 0;
  line-height: 1.5;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 82%, transparent 100%);
`;

export const PlacardCredit = styled.div`
  font-size: 0.85em;
  flex-shrink: 0;
  opacity: 0.85;
  border-top: 1px solid var(--light-highlight);
  padding-top: 6px;
`;

export const PlacardReactionList = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  list-style: none;
  flex-direction: column;
  gap: 6px;
  font-size: 0.85em;
  @media only screen and (max-width: 900px) {
    display: flex;
  }
`;

export const PlacardReactionRow = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PlacardReactionAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const CopyLinkButton = styled.button`
  flex-shrink: 0;
  background: transparent;
  border: 2px solid var(--light-highlight);
  color: var(--light-highlight);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }
`;

export const TributeRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TributeCard = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  width: 74px;
  ${({ $active }) =>
    $active
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.65;
        `}
`;

export const TributeAvatar = styled.img<{ $active: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid
    ${({ $active }) => ($active ? "var(--light-highlight)" : "transparent")};
  object-fit: cover;
`;

export const TributeAuthor = styled.span`
  font-size: 0.72em;
  text-align: center;
  overflow-wrap: anywhere;
`;
