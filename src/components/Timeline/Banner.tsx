import React, { useState } from "react";
import outfits from "./outfits.json";
import { BannerImg, BannerImgWrapper, BannerWrapper, Container, DialogueBox, VodLink } from "./styles/BannerStyle";

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
                  {"By:"} {img.artist} (
                  <a
                    href={`https://x.com/${img.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--ina-orange)", textDecoration: "underline" }}
                  >
                    @{img.username}
                  </a>
                  )
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