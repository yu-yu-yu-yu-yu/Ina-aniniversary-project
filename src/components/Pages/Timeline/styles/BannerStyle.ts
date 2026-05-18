import styled, { css, keyframes } from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

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
  height: 70vh;
  overflow: visible;
  background: transparent;
`;

export const Container = styled(ScrollContainer)`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  cursor: grab;
  gap: 48px;
  padding: 1.2rem 0 1.2rem;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50vw - 200px));
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
  imgSrc: string;
  $isPivot?: boolean;
}>`
  position: relative;
  flex-shrink: 0;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  transition:
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
    filter 0.45s;
  z-index: ${({ $isPivot }) => ($isPivot ? 5 : 1)};
  ${({ $isPivot }) =>
    $isPivot
      ? `
    transform: scale(1.22) translateY(-16px);
    filter:
      drop-shadow(0 0 22px var(--light-highlight))
      drop-shadow(0 16px 40px rgba(0, 0, 0, 0.55));
  `
      : ""}
  &:hover {
    z-index: 6;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 50%;
    transform: translate(-50%, -30%);
    background: var(--dark-highlight);
    filter: blur(50px) brightness(2) saturate(1.2);
    opacity: 0.8;
    z-index: 0;
    pointer-events: none;
  }
`;

export const BannerImg = styled.img<{ $loaded?: boolean }>`
  width: auto;
  height: auto;
  max-height: calc(70vh / 1.22);
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
  width: 280px;
  height: calc(70vh / 1.22);
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

export const PageArrowButton = styled.button`
  background: var(--dark-highlight);
  border: 2px solid var(--light-highlight);
  border-radius: 50%;
  width: 2.2em;
  height: 2.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: var(--light-highlight);
  font-size: 1.1em;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background: var(--light-highlight);
    color: var(--dark-highlight);
  }
`;

export const DialogueBox = styled.div<{ $active: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 90px;
  transform: translateX(-50%);
  min-width: 180px;
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--shadow);
  padding: 12px 18px;
  font-size: 15px;
  z-index: 10;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
  transition: opacity 0.15s;
`;
