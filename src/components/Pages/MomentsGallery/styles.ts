import styled from "styled-components";

export const GalleryWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: 65vh;
  overflow: visible;
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

export const MomentSlot = styled.div<{ $isPivot: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: ${({ $isPivot }) => ($isPivot ? "640px" : "220px")};
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
  justify-content: center;
  gap: 8px;
`;

export const MomentCardWrapper = styled.div`
  background: var(--dark-highlight);
  color: var(--text-color);
  border: 2px solid var(--light-highlight);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
`;

export const MomentSource = styled.div`
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  background: #000;
`;

export const MomentSourceLink = styled.a`
  display: block;
  border-radius: 14px;
  padding: 24px;
  text-align: center;
  background: var(--light-background);
  color: var(--dark-highlight);
  font-weight: 600;
  text-decoration: underline;
`;

export const MomentTitle = styled.h3`
  margin: 0;
  text-align: center;
`;

export const MomentDate = styled.small`
  display: block;
  text-align: center;
  opacity: 0.75;
`;

export const MomentContext = styled.p`
  margin: 0;
  line-height: 1.5;
`;

export const CopyLinkButton = styled.button`
  align-self: center;
  background: transparent;
  border: 2px solid var(--light-highlight);
  color: var(--light-highlight);
  border-radius: 10px;
  padding: 6px 14px;
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

export const TributeCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: var(--text-color);
  text-decoration: none;
  width: 90px;
`;

export const TributeAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid var(--light-highlight);
  object-fit: cover;
`;

export const TributeAuthor = styled.span`
  font-size: 0.8em;
  text-align: center;
  overflow-wrap: anywhere;
`;

export const NoTributesNote = styled.div`
  opacity: 0.6;
  text-align: center;
  font-size: 0.9em;
`;

export const NoMomentsYet = styled.div`
  text-align: center;
  padding: 4rem 0;
  opacity: 0.7;
`;

export const CategorySwitchRow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 12px 0 0;
`;
