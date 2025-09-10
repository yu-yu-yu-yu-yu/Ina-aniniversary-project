import React, { useState, useEffect } from "react";
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
  ...item,
  src: `${process.env.PUBLIC_URL}/outfits/${item.filename}`,
  alt: item.title,
}));

// Group by title
const grouped: Record<string, Outfit[]> = {};
images.forEach(img => {
  if (!grouped[img.title]) grouped[img.title] = [];
  grouped[img.title].push(img);
});

export const Banner = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [dupIdx, setDupIdx] = useState<Record<string, number>>({});

  // Cycle through duplicates every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDupIdx(prev => {
        const next: Record<string, number> = { ...prev };
        Object.entries(grouped).forEach(([title, arr]) => {
          if (arr.length > 1) {
            next[title] = ((prev[title] || 0) + 1) % arr.length;
          }
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 style={{ fontSize: "3em", textAlign: "center", margin: "0.5em"}}>
        Ina&apos;s Outfits Across Time
      </h2>
      <BannerWrapper>
        <Container horizontal>
          {Object.entries(grouped).map(([title, arr], i) => {
            const outfit = arr.length > 1 ? arr[dupIdx[title] || 0] : arr[0];
            return (
              <BannerImgWrapper
                key={title + i}
                imgSrc={`${process.env.PUBLIC_URL}/outfits/${outfit.filename}`}
                style={{ transform: `translateY(0px) scale(1)` }}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <BannerImg src={`${process.env.PUBLIC_URL}/outfits/${outfit.filename}`} alt={outfit.title}/>
                <DialogueBox $active={activeIdx === i}>
                  <div style={{ textAlign: "center" }}>
                    <b style={{ fontSize: "1.25em" }}>{outfit.title}</b>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    {"By:"} {outfit.artist} (
                    <a
                      href={`https://x.com/${outfit.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--ina-orange)", textDecoration: "underline" }}
                    >
                      @{outfit.username}
                    </a>
                    )
                  </div>
                  <br />
                  {outfit.vodtitle && outfit.video ? (
                    <div style={{ textAlign: "center" }}>
                      <VodLink href={outfit.video} target="_blank" rel="noopener noreferrer">
                        {outfit.vodtitle}
                      </VodLink>
                    </div>
                  ) : outfit.vodtitle ? (
                    <div>
                      <i>{outfit.vodtitle}</i>
                    </div>
                  ) : null}
                  {outfit.date && (
                    <div style={{ textAlign: "center" }}>
                      <small>{outfit.date}</small>
                    </div>
                  )}
                </DialogueBox>
              </BannerImgWrapper>
            );
          })}
        </Container>
      </BannerWrapper>
    </>
  );
};