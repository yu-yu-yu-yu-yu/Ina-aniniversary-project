import styled, { css, keyframes } from "styled-components";
import { PageContainer } from "../../Timeline/styles/List";

export const OutfitsPageContainer = styled(PageContainer)`
  height: 100vh;
  overflow-y: auto;
`;

const skeletonPulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.15; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.96); }
  to   { opacity: 1; transform: scale(1); }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 45vh;
  margin-top: 8px;
  overflow: visible;
  background: transparent;
`;

export const PivotGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 60%;
  transform: translate(-50%, -50%);
  background: var(--dark-highlight);
  filter: blur(50px) brightness(2) saturate(1.2);
  opacity: 0.8;
  z-index: 0;
  pointer-events: none;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
  cursor: grab;
  user-select: none;
  gap: 48px;
  padding: 0.5rem 0 0.75rem;
  overflow-x: scroll;
  overflow-y: hidden;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - 240px));
  }
`;

export const VodLink = styled.a`
  color: var(--light-highlight);
  font-style: italic;
  font-weight: bold;
  transition: color 0.2s;
  &:hover {
    color: var(--text-color);
    background: var(--light-highlight);
    text-decoration: underline;
    border-radius: 4px;
    padding: 0 4px;
  }
`;

export const BannerImgWrapper = styled.div<{
  $isPivot?: boolean;
}>`
  position: relative;
  flex-shrink: 0;
  width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  transform-origin: 50% 100%;
  transition:
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    filter 0.45s;
  z-index: ${({ $isPivot }) => ($isPivot ? 5 : 1)};
  ${({ $isPivot }) =>
    $isPivot
      ? `
    transform: scale(1.22);
    filter:
      drop-shadow(0 0 22px var(--light-highlight))
      drop-shadow(0 16px 40px rgba(0, 0, 0, 0.55));
  `
      : ""}
  &:hover {
    z-index: 6;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 55%;
    height: 14px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.5),
      transparent 70%
    );
    filter: blur(2px);
    z-index: 0;
    pointer-events: none;
  }
`;

export const BannerImg = styled.img<{ $loaded?: boolean }>`
  width: auto;
  height: auto;
  max-height: 75%;
  -webkit-user-drag: none;
  border: 3px solid transparent;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
  z-index: 1;
  ${({ $loaded }) =>
    $loaded
      ? css`
          animation: ${fadeIn} 0.4s ease-out;
        `
      : ""}
  &:hover {
    transform: scale(1.06);
  }
`;

export const OutfitSkeleton = styled.div`
  width: 320px;
  height: 80%;
  border-radius: 10px;
  background: var(--dark-highlight);
  animation: ${skeletonPulse} 1.6s ease-in-out infinite;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::after {
    content: "•••";
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--light-highlight);
    font-size: 2em;
    letter-spacing: 8px;
    opacity: 0.4;
  }
`;

export const ArtworkButton = styled.button`
  background: rgba(0, 0, 0, 0.52);
  color: var(--light-highlight);
  border: 1px solid var(--light-highlight);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  opacity: 0.72;
  transition:
    opacity 0.18s,
    background 0.18s;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.78);
  }
`;

export const DialogueBox = styled.div`
  box-sizing: border-box;
  width: 480px;
  margin: 24px auto 0;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 12px 18px;
  font-size: 15px;
`;

export const OutfitNamePlate = styled.div`
  align-self: center;
  width: fit-content;
  max-width: 60vw;
  margin: 10px auto 0;
  background: var(--dark-highlight);
  color: var(--text-color);
  border-radius: 12px;
  padding: 6px 18px;
  box-shadow: 0 2px 8px #0002;
  font-size: 1.25em;
  font-weight: 600;
  text-align: center;
  overflow-wrap: anywhere;
`;
