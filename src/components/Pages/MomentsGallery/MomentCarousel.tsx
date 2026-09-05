import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Moment } from "../../../types";
import { useCenterCarousel } from "../../../hooks/useCenterCarousel";
import { PageArrowButton } from "../Outfits/styles/BannerStyle";
import MomentCard from "./MomentCard";
import {
  CarouselCounter,
  CarouselNav,
  GalleryScroller,
  GalleryWrapper,
  MomentDate,
  MomentSlot,
  MomentTitle,
  NeighborCard,
  NoMomentsYet,
} from "./styles";

const MomentCarousel = ({ moments }: { moments: Moment[] }): JSX.Element => {
  const total = moments.length;
  const { pivotIndex, goTo, containerRef, itemRefs, containerHandlers } =
    useCenterCarousel(total);
  const { hash } = useLocation();
  const hasHandledHash = useRef(false);

  useEffect(() => {
    if (hasHandledHash.current || !hash) return;
    const slug = hash.replace("#", "");
    const index = moments.findIndex((m) => m.slug === slug);
    if (index >= 0) {
      hasHandledHash.current = true;
      goTo(index);
    }
  }, [hash, moments, goTo]);

  if (total === 0) {
    return <NoMomentsYet>No moments yet — check back soon!</NoMomentsYet>;
  }

  return (
    <GalleryWrapper>
      <CarouselNav>
        <PageArrowButton
          onClick={() => goTo(pivotIndex - 1)}
          disabled={pivotIndex === 0}
          aria-label="Previous moment"
        >
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </PageArrowButton>
        <CarouselCounter>
          {pivotIndex + 1} / {total}
        </CarouselCounter>
        <PageArrowButton
          onClick={() => goTo(pivotIndex + 1)}
          disabled={pivotIndex >= total - 1}
          aria-label="Next moment"
        >
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </PageArrowButton>
      </CarouselNav>
      <GalleryScroller ref={containerRef} {...containerHandlers}>
        {moments.map((moment, i) => {
          const isPivot = i === pivotIndex;
          return (
            <MomentSlot
              key={moment.slug}
              id={moment.slug}
              $isPivot={isPivot}
              ref={(el: HTMLDivElement | null) => {
                itemRefs.current[i] = el;
              }}
              onClick={isPivot ? undefined : () => goTo(i)}
            >
              {isPivot ? (
                <MomentCard moment={moment} />
              ) : (
                <NeighborCard>
                  <MomentTitle>{moment.title}</MomentTitle>
                  <MomentDate>{moment.date}</MomentDate>
                </NeighborCard>
              )}
            </MomentSlot>
          );
        })}
      </GalleryScroller>
    </GalleryWrapper>
  );
};

export default MomentCarousel;
