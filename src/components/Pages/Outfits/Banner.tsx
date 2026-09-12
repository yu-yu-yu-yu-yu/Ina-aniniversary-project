import React, { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import outfits from "./outfits.json";
import ShareButton from "../../Common/ShareButton";
import {
  ArtworkButton,
  BannerImg,
  BannerImgWrapper,
  BannerWrapper,
  Container,
  DialogueBox,
  OutfitNamePlate,
  OutfitSkeleton,
  PivotGlow,
  VodLink,
} from "./styles/BannerStyle";
import { EdgeArrow, ExhibitCounter } from "../MomentsGallery/styles";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
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

  const [activeTitle, activeArr] = groupedEntries[pivotIndex];
  const activeOutfit =
    activeArr.length > 1 ? activeArr[dupIdx[activeTitle] || 0] : activeArr[0];
  const socialHandle = (
    activeOutfit.handle?.trim() || activeOutfit.username?.trim() || ""
  ).replace(/^@/, "");
  const socialUrl = socialHandle ? `https://x.com/${socialHandle}` : undefined;

  const { hash } = useLocation();
  const hasHandledHash = useRef(false);

  useEffect(() => {
    if (hasHandledHash.current || !hash) return;
    const slug = hash.replace("#", "");
    for (let i = 0; i < groupedEntries.length; i++) {
      const [title, arr] = groupedEntries[i];
      const dupIndex = arr.findIndex((o) => o.filename === slug);
      if (dupIndex >= 0) {
        hasHandledHash.current = true;
        setDupIdx((prev) => ({ ...prev, [title]: dupIndex }));
        goTo(i);
        break;
      }
    }
  }, [hash, goTo]);

  return (
    <>
      <ExhibitCounter>
        {pivotIndex + 1} / {TOTAL}
      </ExhibitCounter>

      <EdgeArrow
        $side="left"
        onClick={() => goTo(pivotIndex - 1)}
        disabled={pivotIndex === 0}
        aria-label="Previous outfit"
      >
        <i className="fa fa-chevron-left" aria-hidden="true" />
      </EdgeArrow>
      <EdgeArrow
        $side="right"
        onClick={() => goTo(pivotIndex + 1)}
        disabled={pivotIndex >= TOTAL - 1}
        aria-label="Next outfit"
      >
        <i className="fa fa-chevron-right" aria-hidden="true" />
      </EdgeArrow>

      <OutfitNamePlate>{activeOutfit.title}</OutfitNamePlate>

      <BannerWrapper>
        <PivotGlow />
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
              >
                {isLoaded(i) ? (
                  <>
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        height: "100%",
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

      <DialogueBox>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            marginBottom: 8,
          }}
        >
          <img
            src={getTakoAvatar(activeOutfit.artist, pivotIndex)}
            alt={activeOutfit.artist}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = getTakoAvatar(null, pivotIndex);
            }}
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
          <span>
            {"By:"} {activeOutfit.artist}
            {socialUrl ? (
              <>
                {" "}(
                <a
                  href={socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--light-highlight)",
                    textDecoration: "underline",
                  }}
                >
                  @{socialHandle}
                </a>
                )
              </>
            ) : null}
          </span>
          <ShareButton
            slug={activeOutfit.filename}
            label="Copy link to this artwork"
          />
        </div>
        {activeOutfit.vodtitle && activeOutfit.video ? (
          <div style={{ textAlign: "center" }}>
            <VodLink
              href={activeOutfit.video}
              target="_blank"
              rel="noopener noreferrer"
            >
              {activeOutfit.vodtitle}
            </VodLink>
          </div>
        ) : activeOutfit.vodtitle ? (
          <div>
            <i>{activeOutfit.vodtitle}</i>
          </div>
        ) : null}
        {activeOutfit.date && (
          <div style={{ textAlign: "center" }}>
            <small>{activeOutfit.date}</small>
          </div>
        )}
      </DialogueBox>

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
