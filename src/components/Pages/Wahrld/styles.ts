import styled from "styled-components";

export const GalleryWrapper = styled.div`
  width: 100%;
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`;

export const CarouselNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 1.1em;
  font-weight: 600;
  padding: 0.5rem 0;
  user-select: none;
`;

export const CarouselCounter = styled.span`
  background: var(--dark-highlight);
  color: var(--text-color);
  border-radius: 12px;
  padding: 6px 18px;
  min-width: 90px;
  text-align: center;
`;

export const GalleryScroller = styled.div`
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
  &::-webkit-scrollbar {
    display: none;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    flex: 0 0 max(0px, calc(50vw - 220px));
  }
`;

export const EntrySlot = styled.div<{ $isPivot: boolean }>`
  position: relative;
  flex-shrink: 0;
  height: 100%;
  width: ${({ $isPivot }) => ($isPivot ? "560px" : "200px")};
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  opacity: ${({ $isPivot }) => ($isPivot ? 1 : 0.45)};
  transform: ${({ $isPivot }) => ($isPivot ? "scale(1)" : "scale(0.88)")};
  transition:
    width 0.35s,
    opacity 0.35s,
    transform 0.35s;
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

export const EntryCardWrapper = styled.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  overflow-y: auto;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
`;

export const EntryMedia = styled.div`
  border-radius: 14px;
  overflow: hidden;
  background: #000;
  flex: 1 1 auto;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const EntryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const EntryAvatar = styled.img`
  width: 48px;
  height: 48px;
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
`;

export const EntryFlag = styled.img`
  width: 22px;
  height: 16px;
  object-fit: cover;
  border-radius: 2px;
`;

export const EntryMessage = styled.p`
  margin: 0;
  line-height: 1.5;
  text-align: center;
`;

export const SocialsLink = styled.a`
  align-self: center;
  color: var(--light-highlight);
  text-decoration: underline;
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
  flex-wrap: wrap;
  padding: 12px 0 0;
`;
