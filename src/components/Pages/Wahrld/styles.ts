import styled from "styled-components";

export const GalleryWrapper = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const GalleryScroller = styled.div<{ $dragging: boolean }>`
  display: flex;
  align-items: stretch;
  width: 100%;
  flex: 1;
  min-height: 0;
  cursor: grab;
  user-select: none;
  gap: 32px;
  padding: 1.5rem 0;
  overflow-x: scroll;
  overflow-y: hidden;
  touch-action: pan-x;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  --pivot-w: min(760px, max(320px, calc(100% - 320px)));
  --neighbor-w: 200px;
  --edge-w: ${({ $dragging }) =>
    $dragging ? "var(--neighbor-w)" : "var(--pivot-w)"};
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50% - var(--edge-w) / 2));
  }
`;

export const EntrySlot = styled.div<{ $isPivot: boolean; $dragging: boolean }>`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  width: ${({ $isPivot, $dragging }) =>
    $isPivot && !$dragging ? "var(--pivot-w)" : "var(--neighbor-w)"};
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  opacity: ${({ $isPivot, $dragging }) => ($isPivot && !$dragging ? 1 : 0.45)};
  transform: ${({ $isPivot, $dragging }) =>
    $isPivot && !$dragging ? "scale(1)" : "scale(0.55)"};
  transition:
    width 0.4s ease,
    opacity 0.35s,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  cursor: ${({ $isPivot }) => ($isPivot ? "default" : "pointer")};
`;

export const NeighborCard = styled.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const EntryCardWrapper = styled.div<{ $maxWidth?: number }>`
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 20px;
  padding: clamp(10px, 2.5vw, 20px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 100%;
  margin-top: auto;
  margin-bottom: auto;
  overflow-y: auto;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  ${({ $maxWidth }) =>
    $maxWidth
      ? `
    align-self: center;
    width: fit-content;
    max-width: min(100%, ${$maxWidth}px);
  `
      : `
    align-self: stretch;
    width: 100%;
  `}
`;

export const EntryMedia = styled.div<{ $aspect?: number | null }>`
  border-radius: 14px;
  overflow: hidden;
  background: #000;
  flex: 0 1 auto;
  max-height: min(58vh, 520px);
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $aspect }) =>
    $aspect &&
    `
    align-self: center;
    max-width: 100%;
    aspect-ratio: ${$aspect};
  `}

  img,
  video {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
    display: block;
  }
`;

export const EntryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const EntryAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`;

export const NeighborAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`;

export const EntryUser = styled.span`
  font-weight: 700;
  font-size: 0.95em;
`;

export const EntryFlag = styled.span`
  font-size: 20px;
  line-height: 1;

  &[src] {
    width: 28px;
    height: auto;
    border-radius: 3px;
  }
`;

export const EntryMessage = styled.p`
  margin: 0 auto;
  max-width: 60ch;
  font-size: clamp(13px, 1.6vw, 16px);
  line-height: 1.5;
  text-align: center;
`;

export const SocialsLink = styled.a`
  align-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid var(--light-highlight);
  background: var(--light-highlight);
  color: var(--dark-highlight);
  font-weight: 700;
  text-decoration: none;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
`;

export const NoEntriesYet = styled.div`
  text-align: center;
  padding: 4rem 0;
  opacity: 0.7;
`;

export const KindSwitchRow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 12px 0 0;
`;

export const SearchInput = styled.input`
  height: 32px;
  width: 200px;
  max-width: 60vw;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--light-highlight);
  background: var(--dark-highlight);
  color: var(--text-color);
  font-size: 13px;
  box-sizing: border-box;

  &::placeholder {
    color: var(--text-color);
    opacity: 0.6;
  }
`;
