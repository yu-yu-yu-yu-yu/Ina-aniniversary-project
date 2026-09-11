import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Milestone, Month, Year } from "../../../types";
import { useCenterCarousel } from "../../../hooks/useCenterCarousel";
import ShareButton from "../../Common/ShareButton";
import { entrySlug } from "../../../utils/shareLink";
import {
  getMediaLink,
  getMessagesForMilestone,
  getTakoAvatar,
} from "./ScrollListUtils";
import { MonthNavItem } from "./ScrollList";
import { notifyPlayerReady } from "../../../utils/youtube";
import { useMute } from "../../Common/MuteButton";
import { CarouselCenterMark } from "../../../styles/globalStyles";
import { EdgeArrow, ExhibitCounter } from "../MomentsGallery/styles";
import {
  BubbleColumn,
  NeighborThumb,
  SpeechBubble,
  StageCenter,
  StageContainer,
  StageDate,
  StageDescription,
  StageHeading,
  StageImageFrame,
  StageMain,
  StageScroller,
  StageSkeleton,
  StageSlot,
  StageVideoFrame,
} from "./styles/List";

interface TakoMsg {
  type: string;
  text: string;
  author: string | null;
}

const TakoBubble = ({
  msg,
  index,
  side,
  slug,
}: {
  msg: TakoMsg;
  index: number;
  side: "left" | "right";
  slug: string;
}): JSX.Element => (
  <SpeechBubble className={side}>
    <img
      src={getTakoAvatar(msg.author, index)}
      alt={msg.author || "Takodachi"}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = getTakoAvatar(null, index);
      }}
    />
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
        <span style={{ flex: 1 }}>{msg.text}</span>
        <ShareButton slug={slug} label="Copy link to this message" />
      </div>
      {msg.author && (
        <div
          style={{
            fontSize: 12,
            marginTop: 6,
            color: "var(--light-highlight)",
          }}
        >
          by: {msg.author}
        </div>
      )}
    </div>
  </SpeechBubble>
);

const MilestoneStageContent = ({
  milestone,
}: {
  milestone: Milestone;
}): JSX.Element => {
  const { reportVideoPlaying } = useMute();
  const messages = getMessagesForMilestone(milestone);
  const description = messages.find((m) => m.type === "longText");
  const bubbles = messages.filter((m) => m.type !== "longText" && m.author);
  const leftBubbles = bubbles.filter((_, i) => i % 2 === 0);
  const rightBubbles = bubbles.filter((_, i) => i % 2 === 1);

  const isYt =
    milestone.video?.includes("youtube.com") ||
    milestone.video?.includes("youtu.be");
  const hrefObj: { href?: string } = {};
  if (milestone.video && !isYt) hrefObj.href = milestone.video;

  useEffect(() => {
    if (!isYt) return;
    return () => reportVideoPlaying(false);
  }, [isYt, milestone.video, reportVideoPlaying]);

  return (
    <StageMain>
      {leftBubbles.length > 0 && (
        <BubbleColumn>
          {leftBubbles.map((msg, i) => (
            <TakoBubble
              key={`${msg.type}-${i}`}
              msg={msg}
              index={i * 2}
              side="left"
              slug={`${entrySlug(milestone.label)}-${msg.type}`}
            />
          ))}
        </BubbleColumn>
      )}
      <StageCenter>
        {isYt ? (
          <StageVideoFrame
            key={milestone.video}
            src={milestone.video}
            title={milestone.label}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={(e) => notifyPlayerReady(e.currentTarget)}
          />
        ) : (
          <StageImageFrame
            src={getMediaLink(milestone.media)}
            alt={milestone.label}
          />
        )}
        <StageHeading
          {...hrefObj}
          target={hrefObj.href ? "_blank" : undefined}
          rel={hrefObj.href ? "noopener noreferrer" : undefined}
        >
          {milestone.label}
        </StageHeading>
        <StageDate>{milestone.date}</StageDate>
        {description && <StageDescription>{description.text}</StageDescription>}
      </StageCenter>
      {rightBubbles.length > 0 && (
        <BubbleColumn>
          {rightBubbles.map((msg, i) => (
            <TakoBubble
              key={`${msg.type}-${i}`}
              msg={msg}
              index={i * 2 + 1}
              side="right"
              slug={`${entrySlug(milestone.label)}-${msg.type}`}
            />
          ))}
        </BubbleColumn>
      )}
    </StageMain>
  );
};

export const TimelineStage = ({
  milestones,
  prevMonthEntry,
  nextMonthEntry,
  onNavigate,
}: {
  milestones: Milestone[];
  prevMonthEntry?: { year: Year; month: Month } | null;
  nextMonthEntry?: { year: Year; month: Month } | null;
  onNavigate?: (month: Month, year: Year) => void;
}): JSX.Element => {
  const total = milestones.length;
  const {
    pivotIndex,
    dragging,
    goTo,
    containerRef,
    itemRefs,
    isLoaded,
    containerHandlers,
  } = useCenterCarousel(total);

  const { hash } = useLocation();
  const hasHandledHash = useRef(false);

  useEffect(() => {
    if (hasHandledHash.current || !hash) return;
    const slug = hash.replace("#", "");
    const index = milestones.findIndex((m) =>
      slug.startsWith(`${entrySlug(m.label)}-`),
    );
    if (index >= 0) {
      hasHandledHash.current = true;
      goTo(index);
    }
  }, [hash, milestones, goTo]);

  if (total === 0) {
    return (
      <StageContainer>
        <StageDescription>No milestones for this month yet.</StageDescription>
      </StageContainer>
    );
  }

  return (
    <StageContainer>
      <ExhibitCounter>
        {pivotIndex + 1} / {total}
      </ExhibitCounter>
      <EdgeArrow
        $side="left"
        onClick={() => goTo(pivotIndex - 1)}
        disabled={pivotIndex === 0}
        aria-label="Previous milestone"
      >
        <i className="fa fa-chevron-left" aria-hidden="true" />
      </EdgeArrow>
      <EdgeArrow
        $side="right"
        onClick={() => goTo(pivotIndex + 1)}
        disabled={pivotIndex >= total - 1}
        aria-label="Next milestone"
      >
        <i className="fa fa-chevron-right" aria-hidden="true" />
      </EdgeArrow>
      {dragging && <CarouselCenterMark />}
      <StageScroller
        ref={containerRef}
        $dragging={dragging}
        {...containerHandlers}
      >
        {prevMonthEntry && onNavigate && (
          <MonthNavItem
            entry={prevMonthEntry}
            direction="prev"
            onNavigate={onNavigate}
            mobile={false}
          />
        )}
        {milestones.map((milestone, i) => {
          const isPivot = i === pivotIndex;
          const showBig = isPivot && !dragging;
          return (
            <StageSlot
              key={milestone.label}
              $isPivot={isPivot}
              $dragging={dragging}
              ref={(el: HTMLDivElement | null) => {
                itemRefs.current[i] = el;
              }}
              onClick={isPivot ? undefined : () => goTo(i)}
            >
              {showBig ? (
                <MilestoneStageContent milestone={milestone} />
              ) : isLoaded(i) ? (
                <NeighborThumb>
                  <img
                    src={getMediaLink(milestone.media)}
                    alt={milestone.label}
                  />
                  <span>{milestone.label}</span>
                </NeighborThumb>
              ) : (
                <NeighborThumb>
                  <StageSkeleton />
                  <span>{milestone.label}</span>
                </NeighborThumb>
              )}
            </StageSlot>
          );
        })}
        {nextMonthEntry && onNavigate && (
          <MonthNavItem
            entry={nextMonthEntry}
            direction="next"
            onNavigate={onNavigate}
            mobile={false}
          />
        )}
      </StageScroller>
    </StageContainer>
  );
};
