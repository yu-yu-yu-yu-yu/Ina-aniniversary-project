import React from "react";
import { Moment } from "../../../types";
import { CenterCarousel } from "../../../hooks/useCenterCarousel";
import { parseYouTube } from "../../../utils/youtube";
import MomentCard from "./MomentCard";
import {
  GalleryScroller,
  MomentSlot,
  NeighborFrame,
  NeighborImg,
  NeighborLabel,
  NoMomentsYet,
} from "./styles";

const neighborThumb = (moment: Moment): string | undefined => {
  if (moment.image) return moment.image;
  const ytRef = parseYouTube(moment.sourceUrl);
  return ytRef ? `https://i.ytimg.com/vi/${ytRef.id}/hqdefault.jpg` : undefined;
};

const MomentCarousel = ({
  moments,
  carousel,
}: {
  moments: Moment[];
  carousel: CenterCarousel;
}): JSX.Element => {
  const total = moments.length;
  const {
    pivotIndex,
    dragging,
    goTo,
    containerRef,
    itemRefs,
    isLoaded,
    containerHandlers,
  } = carousel;
  if (total === 0) {
    return <NoMomentsYet>No moments yet, check back soon!</NoMomentsYet>;
  }

  return (
    <GalleryScroller
      ref={containerRef}
      $dragging={dragging}
      {...containerHandlers}
    >
      {moments.map((moment, i) => {
        const isPivot = i === pivotIndex;
        const showBig = isPivot && !dragging;
        const isNear = Math.abs(i - pivotIndex) <= 2;
        return (
          <MomentSlot
            key={moment.slug}
            id={moment.slug}
            $isPivot={isPivot}
            $dragging={dragging}
            $isNear={isNear}
            ref={(el: HTMLDivElement | null) => {
              itemRefs.current[i] = el;
            }}
            onClick={isPivot ? undefined : () => goTo(i)}
          >
            {showBig ? (
              <MomentCard key={moment.slug} moment={moment} />
            ) : (
              <NeighborFrame>
                <NeighborImg
                  $src={isLoaded(i) ? neighborThumb(moment) : undefined}
                />
                <NeighborLabel>
                  {moment.title} · {moment.date}
                </NeighborLabel>
              </NeighborFrame>
            )}
          </MomentSlot>
        );
      })}
    </GalleryScroller>
  );
};

export default MomentCarousel;
