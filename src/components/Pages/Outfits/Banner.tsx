import React, { useState, useEffect, useCallback } from "react";
import outfits from "./outfits.json";
import {
  ArtworkButton,
  BannerImg,
  BannerImgWrapper,
  BannerWrapper,
  Container,
  DialogueBox,
  OutfitSkeleton,
  PageArrowButton,
  VodLink,
} from "./styles/BannerStyle";
import { Outfit } from "../../../types";
import { useCenterCarousel } from "../../../hooks/useCenterCarousel";

const images = outfits.map((item: Outfit) => ({
  ...item,
  src: `${process.env.PUBLIC_URL}/outfits/${item.filename}`,
  alt: item.title,
}));

const grouped: Record<string, Outfit[]> = {};
images.forEach((img) => {
  if (!grouped[img.title]) grouped[img.title] = [];
  grouped[img.title].push(img);
});

const groupedEntries = Object.entries(grouped);
const TOTAL = groupedEntries.length;

export const Banner = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [dupIdx, setDupIdx] = useState<Record<string, number>>({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [modalImgSrc, setModalImgSrc] = useState<string | null>(null);

  const {
    pivotIndex,
    goTo,
    containerRef,
    itemRefs,
    isLoaded,
    containerHandlers,
  } = useCenterCarousel(TOTAL);

  const swapArtwork = useCallback((title: string, arr: Outfit[]) => {
    setDupIdx((prev) => ({
      ...prev,
      [title]: ((prev[title] || 0) + 1) % arr.length,
    }));
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setDupIdx((prev) => {
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
  }, [isPlaying]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.75rem 0",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.2rem, 4vh, 2.5rem)",
            textAlign: "center",
            margin: 0,
          }}
        >
          Ina&apos;s Outfits Across Time
        </h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            fontSize: "1.25em",
            fontWeight: 600,
            userSelect: "none",
          }}
        >
          <PageArrowButton
            onClick={() => goTo(pivotIndex - 1)}
            disabled={pivotIndex === 0}
            aria-label="Previous outfit"
          >
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </PageArrowButton>
          <span
            style={{
              background: "var(--dark-highlight)",
              color: "white",
              borderRadius: 12,
              padding: "6px 18px",
              boxShadow: "0 2px 8px #0002",
              minWidth: 160,
              textAlign: "center",
            }}
          >
            Ina No. {pivotIndex + 1} / {TOTAL}
          </span>
          <PageArrowButton
            onClick={() => goTo(pivotIndex + 1)}
            disabled={pivotIndex >= TOTAL - 1}
            aria-label="Next outfit"
          >
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </PageArrowButton>
        </div>
      </div>

      <BannerWrapper>
        <Container ref={containerRef} {...containerHandlers}>
          {groupedEntries.map(([title, arr], i) => {
            const outfit = arr.length > 1 ? arr[dupIdx[title] || 0] : arr[0];
            const isPivot = i === pivotIndex;

            return (
              <BannerImgWrapper
                key={title}
                $isPivot={isPivot}
                ref={(el: HTMLDivElement | null) => {
                  itemRefs.current[i] = el;
                }}
                imgSrc={`${process.env.PUBLIC_URL}/outfits/${outfit.filename}`}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {isLoaded(i) ? (
                  <>
                    <span
                      style={{
                        display: "block",
                        cursor: "pointer",
                        position: "relative",
                        zIndex: 1,
                      }}
                      onClick={() =>
                        isPivot
                          ? setModalImgSrc(
                              `${process.env.PUBLIC_URL}/outfits/${outfit.filename}`,
                            )
                          : goTo(i)
                      }
                    >
                      <BannerImg
                        $loaded
                        draggable={false}
                        src={`${process.env.PUBLIC_URL}/outfits/${outfit.filename}`}
                        alt={outfit.title}
                      />
                    </span>
                    {arr.length > 1 && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: 8,
                          right: 8,
                          display: "flex",
                          gap: 5,
                          zIndex: 10,
                        }}
                      >
                        <ArtworkButton
                          title="Next artwork"
                          onClick={(e) => {
                            e.stopPropagation();
                            swapArtwork(title, arr);
                          }}
                        >
                          <i className="fa fa-exchange" aria-hidden="true" />
                        </ArtworkButton>
                        <ArtworkButton
                          title={
                            isPlaying ? "Pause auto-swap" : "Resume auto-swap"
                          }
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPlaying((v) => !v);
                          }}
                        >
                          <i
                            className={`fa fa-${isPlaying ? "pause" : "play"}`}
                            aria-hidden="true"
                          />
                        </ArtworkButton>
                      </div>
                    )}
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
                          style={{
                            color: "var(--light-highlight)",
                            textDecoration: "underline",
                          }}
                        >
                          @{outfit.username}
                        </a>
                        )
                      </div>
                      <br />
                      {outfit.vodtitle && outfit.video ? (
                        <div style={{ textAlign: "center" }}>
                          <VodLink
                            href={outfit.video}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
                  </>
                ) : (
                  <OutfitSkeleton
                    title="Click or scroll to load"
                    onClick={() => goTo(i)}
                  />
                )}
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
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
