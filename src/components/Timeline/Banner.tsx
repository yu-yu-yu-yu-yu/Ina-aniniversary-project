import React, { useState } from "react";
import styled from "styled-components";
import ScrollContainer from "react-indiana-drag-scroll";
import outfits from "./outfits.json";

interface Outfit {
  title: string;
  artist: string;
  handle: string;
  username: string;
  filename: string;
  vodtitle?: string;
  video?: string;
  date?: string;
}

const images = outfits.map((item: Outfit) => ({
  title: item.title,
  artist: item.artist,
  handle: item.handle,
  username: item.username,
  filename: item.filename,
  vodtitle: item.vodtitle,
  video: item.video,
  date: item.date,
  src: `${process.env.PUBLIC_URL}/outfits/${item.filename}`,
  alt: item.title,
}));

const BannerWrapper = styled.div`
  width: 100%;
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
  width: 100%;
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

const VodLink = styled.a`
  color: var(--ina-orange);
  font-style: italic;
  font-weight: bold;
  transition: color 0.2s;
  &:hover {
    color: #fff7b2;
    background: var(--ina-orange);
    text-decoration: underline;
    border-radius: 4px;
    padding: 0 4px;
  }
`;

const BannerImgWrapper = styled.div<{ imgSrc: string }>`
  position: relative;
  margin: 0 16px;
  transition: transform 0.2s;
  &:hover {
    z-index: 2;
  }
  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 50%;
    transform: translate(50%, 50%);
    background: var(--ika-purple);
    filter: blur(50px) brightness(2) saturate(1.2);
    opacity: 0.8;
    z-index: 0;
    pointer-events: none;
  }
`;

const BannerImg = styled.img`
  max-width: 400px;
  max-height: 500px;
  width: auto;
  height: auto;
  border: 3px solid transparent;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  z-index: 1;
  &:hover {
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

  const handleMouseEnter = (i: number) => {
    setActiveIdx(i);
  };
  const handleMouseLeave = () => {
    setActiveIdx(null);
  };

  return (
    <>
      <h2 style={{ fontSize: "3em", textAlign: "center", margin: "0.5em"}}>
        Ina&apos;s Outfits Across Time
      </h2>
      <BannerWrapper>
        <Container horizontal>
          {images.map((img, i) => (
            <BannerImgWrapper
              key={i}
              imgSrc={img.src}
              style={{ transform: `translateY(0px) scale(1)` }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <BannerImg src={img.src} alt={img.alt} loading="lazy" />
              <DialogueBox $active={activeIdx === i}>
                <div style={{ textAlign: "center" }}>
                  <b style={{ fontSize: "1.25em" }}>{img.title}</b>
                </div>
                <div style={{ textAlign: "center" }}>
                  {"By:"} {img.artist} ({img.handle})
                </div>
                <br />
                {img.vodtitle && img.video ? (
                  <div style={{ textAlign: "center" }}>
                    <VodLink href={img.video} target="_blank" rel="noopener noreferrer">
                      {img.vodtitle}
                    </VodLink>
                  </div>
                ) : img.vodtitle ? (
                  <div>
                    <i>{img.vodtitle}</i>
                  </div>
                ) : null}
                {img.date && (
                  <div style={{ textAlign: "center" }}>
                    <small>{img.date}</small>
                  </div>
                )}
              </DialogueBox>
            </BannerImgWrapper>
          ))}
        </Container>
      </BannerWrapper>
    </>
  );
};