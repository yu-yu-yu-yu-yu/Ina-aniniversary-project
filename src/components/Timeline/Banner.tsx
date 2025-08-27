import React, { useState } from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";

const images = Array.from({ length: 17 }, (_, i) => ({
  src: `${process.env.PUBLIC_URL}/PLACEHOLDER.png`,
  alt: `Placeholder ${i + 1}`,
  explain: "PLACEHOLDER EXPLAIN",
  outfit: "PLACEHOLDER OUTFIT",
  artist: "PLACEHOLDER ARTIST",
}));

const BannerWrapper = styled.div`
  width: 100vw;
  margin: 0 auto 32px auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-height: 320px;
  overflow-x: hidden;
  padding: 48px 0 0 0;
  background: transparent;
`;

const Container = styled(ScrollContainer)`
  display: flex;
  align-items: flex-end;
  width: 100vw;
  max-width: 2000px;
  justify-content: space-between;
  position: relative;
  height: auto;
  cursor: grab;
  padding: 32px 0 32px 0;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BannerImgWrapper = styled.div`
  position: relative;
  margin: 0 16px;
  transition: transform 0.2s;
  &:hover {
    z-index: 2;
  }
`;

const BannerImg = styled.img`
  max-width: 400px;
  max-height: 400px;
  width: auto;
  height: auto;
  border-radius: 50% / 35%;
  border: 3px solid var(--ika-purple);
  background: #fff;
  box-shadow: 0 2px 8px #0002;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 6px 16px #0004;
    transform: scale(1.08);
  }
`;

const DialogueBox = styled.div<{ $active: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 90px;
  transform: translateX(-50%);
  min-width: 180px;
  background: var(--ika-purple); 
  color: #fff; 
  border: 2px solid var(--ina-orange);
  border-radius: 12px;
  box-shadow: 0 4px 16px #0003;
  padding: 12px 18px;
  font-size: 15px;
  z-index: 10;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};
  transition: opacity 0.15s;
`;

export const Banner = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [lockedIdx, setLockedIdx] = useState<number | null>(null);

  const handleMouseEnter = (i: number) => {
    if (lockedIdx === null) setActiveIdx(i);
  };
  const handleMouseLeave = () => {
    if (lockedIdx === null) setActiveIdx(null);
  };
  const handleClick = (i: number) => {
    setLockedIdx(lockedIdx === i ? null : i);
    setActiveIdx(i);
  };

  return (
    <BannerWrapper>
      <Container horizontal>
        {images.map((img, i) => (
          <BannerImgWrapper
            key={i}
            style={{ transform: `translateY(0px) scale(1)` }}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(i)}
          >
            <BannerImg src={img.src} alt={img.alt} />
            <DialogueBox $active={activeIdx === i || lockedIdx === i}>
              <div><b>{img.explain}</b></div>
              <div>{img.outfit}</div>
              <div>{img.artist}</div>
            </DialogueBox>
          </BannerImgWrapper>
        ))}
      </Container>
    </BannerWrapper>
  );
};