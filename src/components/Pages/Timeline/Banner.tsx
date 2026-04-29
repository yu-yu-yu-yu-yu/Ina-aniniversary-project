import React, { useState, useEffect } from "react";
import outfits from "./outfits.json";
import { BannerImg, BannerImgWrapper, BannerWrapper, Container, DialogueBox, VodLink } from "./styles/BannerStyle";
import { Outfit } from "../../../types";

const images = outfits.map((item: Outfit) => ({
  ...item,
  src: `${process.env.PUBLIC_URL}/outfits/${item.filename}`,
  alt: item.title,
}));

const grouped: Record<string, Outfit[]> = {};
images.forEach(img => {
  if (!grouped[img.title]) grouped[img.title] = [];
  grouped[img.title].push(img);
});

export const Banner = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [dupIdx, setDupIdx] = useState<Record<string, number>>({});
  const [modalImgSrc, setModalImgSrc] = useState<string | null>(null);

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          marginBottom: "12px",
          marginTop: "-18px",
          fontSize: "1.25em",
          color: "var(--dark-highlight)",
          fontWeight: 600,
          userSelect: "none",
        }}
      >
        <span style={{ fontSize: "1.5em", opacity: 0.7 }}>&#8592;</span>
        <span style={{ background: "var(--dark-highlight)", color: "white", borderRadius: 12, padding: "6px 18px", boxShadow: "0 2px 8px #0002" }}>
          Drag to scroll
        </span>
        <span style={{ fontSize: "1.5em", opacity: 0.7 }}>&#8594;</span>
      </div>
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
                <span
                  style={{ display: "block", cursor: "pointer" }}
                  onClick={() => setModalImgSrc(`${process.env.PUBLIC_URL}/outfits/${outfit.filename}`)}
                >
                  <BannerImg src={`${process.env.PUBLIC_URL}/outfits/${outfit.filename}`} alt={outfit.title}/>
                </span>
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
                      style={{ color: "var(--light-highlight)", textDecoration: "underline" }}
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
      {modalImgSrc && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setModalImgSrc(null)}
        >
          <img
            src={modalImgSrc}
            alt="Artwork"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "12px",
            }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};