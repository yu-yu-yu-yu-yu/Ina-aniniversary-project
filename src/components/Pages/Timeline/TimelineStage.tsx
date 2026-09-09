import React, { useEffect, useRef } from "react";
import { Milestone, Month, Tags, Year } from "../../../types";
import { useCenterCarousel } from "../../../hooks/useCenterCarousel";
import {
  getMediaLink,
  getMessagesForMilestone,
  getTakoAvatar,
  tagColors,
} from "./ScrollListUtils";
import { MonthNavItem } from "./ScrollList";
import { notifyPlayerReady } from "../../../utils/youtube";
import { useMute } from "../../Common/MuteButton";
import { CarouselCenterMark } from "../../../styles/globalStyles";
import {
  BubbleColumn,
  NeighborThumb,
  PageArrowButton,
  RailContainer,
  RailNode,
  SpeechBubble,
  StageCenter,
  StageContainer,
  StageCounter,
  StageDate,
  StageDescription,
  StageHeading,
  StageImageFrame,
  StageMain,
  StageNav,
  StageScroller,
  StageSkeleton,
  StageSlot,
  StageVideoFrame,
} from "./styles/List";

const NODE_GAP = 110;
const PAD = 90;
const AMP = 26;
const MID = 70;
const RAIL_HEIGHT = 160;

const waveY = (x: number): number => MID + AMP * Math.sin(x / 170);
const nodeX = (i: number): number => PAD + i * NODE_GAP;

const buildTentaclePath = (upToX: number): string => {
  let d = `M 0 ${waveY(0).toFixed(1)}`;
  for (let x = 8; x <= upToX; x += 8) {
    d += ` L ${x} ${waveY(x).toFixed(1)}`;
  }
  return d;
};

const getNodeColor = (tags?: Tags): string | null => {
  if (!tags) return null;
  const key = (Object.keys(tagColors) as (keyof typeof tagColors)[]).find(
    (k) => tags[k],
  );
  return key ? tagColors[key] : null;
};

interface TakoMsg {
  type: string;
  text: string;
  author: string | null;
}

const TakoBubble = ({
  msg,
  index,
  side,
}: {
  msg: TakoMsg;
  index: number;
  side: "left" | "right";
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
    <div>
      <span>{msg.text}</span>
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
            />
          ))}
        </BubbleColumn>
      )}
    </StageMain>
  );
};

const TentacleRail = ({
  milestones,
  activeIndex,
  onSelect,
}: {
  milestones: Milestone[];
  activeIndex: number;
  onSelect: (index: number) => void;
}): JSX.Element | null => {
  const total = milestones.length;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current?.querySelector<HTMLButtonElement>(
      `[data-rail-index="${activeIndex}"]`,
    );
    node?.scrollIntoView({
      inline: "center",
      block: "nearest",
      behavior: "smooth",
    });
  }, [activeIndex]);

  if (total === 0) return null;

  const width = nodeX(total - 1) + PAD * 2;
  const basePath = buildTentaclePath(width);
  const progressPath = buildTentaclePath(Math.min(nodeX(activeIndex), width));

  return (
    <RailContainer ref={containerRef}>
      <svg
        width={width}
        height={RAIL_HEIGHT}
        viewBox={`0 0 ${width} ${RAIL_HEIGHT}`}
      >
        <defs>
          <linearGradient id="tentacleGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--dark-highlight)" />
            <stop offset="100%" stopColor="var(--light-highlight)" />
          </linearGradient>
        </defs>
        <path
          d={basePath}
          stroke="url(#tentacleGrad)"
          strokeWidth={22}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d={basePath}
          stroke="var(--light-background)"
          strokeWidth={6}
          strokeLinecap="round"
          fill="none"
          opacity={0.35}
          transform="translate(0,-6)"
        />
        <path
          d={progressPath}
          stroke="var(--light-highlight)"
          strokeWidth={22}
          strokeLinecap="round"
          fill="none"
        />
        {milestones.map((m, i) => (
          <circle
            key={`sucker-${m.label}`}
            cx={nodeX(i)}
            cy={waveY(nodeX(i))}
            r={4}
            fill="var(--dark-highlight)"
            opacity={0.6}
          />
        ))}
      </svg>
      {milestones.map((m, i) => {
        const color = getNodeColor(m.tags);
        return (
          <RailNode
            key={m.label}
            data-rail-index={i}
            $active={i === activeIndex}
            style={{
              left: nodeX(i),
              top: waveY(nodeX(i)),
              ...(color
                ? {
                    borderColor: color,
                    background: i === activeIndex ? color : undefined,
                  }
                : {}),
            }}
            onClick={() => onSelect(i)}
            title={m.label}
          />
        );
      })}
    </RailContainer>
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

  if (total === 0) {
    return (
      <StageContainer>
        <StageDescription>No milestones for this month yet.</StageDescription>
      </StageContainer>
    );
  }

  return (
    <StageContainer>
      <StageNav>
        <PageArrowButton
          onClick={() => goTo(pivotIndex - 1)}
          disabled={pivotIndex === 0}
          aria-label="Previous milestone"
        >
          <i className="fa fa-chevron-left" aria-hidden="true" />
        </PageArrowButton>
        <StageCounter>
          {pivotIndex + 1} / {total}
        </StageCounter>
        <PageArrowButton
          onClick={() => goTo(pivotIndex + 1)}
          disabled={pivotIndex >= total - 1}
          aria-label="Next milestone"
        >
          <i className="fa fa-chevron-right" aria-hidden="true" />
        </PageArrowButton>
      </StageNav>
      {dragging && <CarouselCenterMark />}
      <StageScroller ref={containerRef} {...containerHandlers}>
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
      <TentacleRail
        milestones={milestones}
        activeIndex={pivotIndex}
        onSelect={goTo}
      />
    </StageContainer>
  );
};
