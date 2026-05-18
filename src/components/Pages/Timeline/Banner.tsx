import React, { useState, useEffect, useRef, useCallback } from "react";
import outfits from "./outfits.json";
import {
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

const groupedEntries = Object.entries(grouped);
const TOTAL = groupedEntries.length;

const LOAD_RADIUS = 2;

const initialLoaded = new Set(
  Array.from({ length: Math.min(LOAD_RADIUS + 1, TOTAL) }, (_, i) => i)
);

export const Banner = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [dupIdx, setDupIdx] = useState<Record<string, number>>({});
  const [modalImgSrc, setModalImgSrc] = useState<string | null>(null);
  const [pivotIndex, setPivotIndex] = useState(0);
  const [loadedSet, setLoadedSet] = useState<Set<number>>(initialLoaded);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const debounceTimer = useRef<number>(0);
  const pivotRef = useRef(pivotIndex);
  const programmaticRef = useRef(false);
  const programmaticTimer = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  pivotRef.current = pivotIndex;

  const expandLoad = useCallback((center: number) => {
    setLoadedSet(prev => {
      const next = new Set(prev);
      for (
        let i = Math.max(0, center - LOAD_RADIUS);
        i <= Math.min(TOTAL - 1, center + LOAD_RADIUS);
        i++
      ) {
        next.add(i);
      }
      return next;
    });
  }, []);

  const scrollToPivot = useCallback((index: number) => {
    const el = itemRefs.current[index];
    if (!el) return;
    programmaticRef.current = true;
    clearTimeout(programmaticTimer.current);
    programmaticTimer.current = window.setTimeout(() => {
      programmaticRef.current = false;
      if (containerRef.current) containerRef.current.style.scrollSnapType = "";
    }, 700);
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, TOTAL - 1));
      setPivotIndex(clamped);
      expandLoad(clamped);
      scrollToPivot(clamped);
    },
    [expandLoad, scrollToPivot]
  );

  const handleScroll = useCallback(() => {
    if (programmaticRef.current) return;
    clearTimeout(debounceTimer.current);
    debounceTimer.current = window.setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      const centerX = cRect.left + cRect.width / 2;
      let bestIdx = pivotRef.current;
      let bestDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs((rect.left + rect.width / 2) - centerX);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      if (bestIdx === pivotRef.current) return;
      setPivotIndex(bestIdx);
      expandLoad(bestIdx);
    }, 250);
  }, [expandLoad]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const el = containerRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.scrollSnapType = "none";
    el.style.cursor = "grabbing";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    containerRef.current.scrollLeft = dragStartScroll.current - (e.clientX - dragStartX.current);
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    isDragging.current = false;
    const el = containerRef.current;
    el.style.cursor = "";
    const dragDistance = Math.abs(e.clientX - dragStartX.current);
    if (dragDistance < 5) {
      el.style.scrollSnapType = "";
      return;
    }
    const cRect = el.getBoundingClientRect();
    const centerX = cRect.left + cRect.width / 2;
    let bestIdx = pivotRef.current;
    let bestDist = Infinity;
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const rect = item.getBoundingClientRect();
      const dist = Math.abs((rect.left + rect.width / 2) - centerX);
      if (dist < bestDist) { bestDist = dist; bestIdx = i; }
    });
    goTo(bestIdx);
  }, [goTo]);

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
        <h2 style={{ fontSize: "clamp(1.2rem, 4vh, 2.5rem)", textAlign: "center", margin: 0 }}>
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
        <Container
          ref={containerRef}
          onScroll={handleScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {groupedEntries.map(([title, arr], i) => {
            const outfit = arr.length > 1 ? arr[dupIdx[title] || 0] : arr[0];
            const isPivot = i === pivotIndex;
            const isLoaded = loadedSet.has(i);

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
                {isLoaded ? (
                  <>
                    <span
                      style={{ display: "block", cursor: "pointer", position: "relative", zIndex: 1 }}
                      onClick={() =>
                        setModalImgSrc(
                          `${process.env.PUBLIC_URL}/outfits/${outfit.filename}`
                        )
                      }
                    >
                      <BannerImg
                        $loaded
                        draggable={false}
                        src={`${process.env.PUBLIC_URL}/outfits/${outfit.filename}`}
                        alt={outfit.title}
                      />
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
            style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: "12px" }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};
