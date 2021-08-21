import React, { useRef, useState } from "react";
import { SeekerBar } from "./SeekerBar";
import { Milestone } from "./Milestone";
import styled from "styled-components";

const Timeline = ({ milestones }: { milestones: Milestone[] }): JSX.Element => {
  // const { events } = props;
  const timelineRef = useRef(0);

  const [cur, setCur] = useState(0);
  const isFirst = cur === 0;
  const isLast = cur === milestones.length - 1;

  const scrollStrength = 20;
  //Seeker progress for the milestones

  const trackScroll = (e: { deltaY: number }) => {
    const { deltaY: yOffset } = e;

    timelineRef.current += (yOffset / 100) * scrollStrength;
    timelineRef.current = Math.max(0, timelineRef.current);
    timelineRef.current = Math.min(
      timelineRef.current,
      (milestones.length - 1) * 100
    );
    if (Math.floor(timelineRef.current / 100) !== cur)
      setCur(Math.floor(timelineRef.current / 100));
  };

  const setIndex = (index: number) => {
    timelineRef.current = index * 100;
    setCur(index);
  };

  return (
    <>
      <TimelineContainer onWheel={trackScroll}>
        {!isFirst && (
          <Past
            media={milestones[cur - 1].media}
            setActive={() => setIndex(cur - 1)}
          />
        )}
        <Present event={milestones[cur]} />
        {!isLast && (
          <Future
            media={milestones[cur + 1].media}
            setActive={() => setIndex(cur + 1)}
          />
        )}
      </TimelineContainer>
      <SeekerBar
        milestones={milestones}
        curIndex={cur}
        setIndex={setIndex}
        progress={timelineRef.current}
      />
    </>
  );
};

function Present({ event }: { event: Milestone }) {
  return (
    <MilestoneDisplay media={event.media}>
      <span>{event.label}</span>
    </MilestoneDisplay>
  );
}

function Future({
  media,
  setActive,
}: {
  media: Milestone["media"];
  setActive: () => void;
}) {
  return <MilestonePreview preview={media} onClick={setActive} />;
}

function Past({
  media,
  setActive,
}: {
  media: Milestone["media"];
  setActive: () => void;
}) {
  return <MilestonePreview preview={media} onClick={setActive} />;
}

const TimelineContainer = styled.div`
  //height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const MilestoneDisplay = styled.div<{ media: Milestone["media"] }>`
  background: url(${(props) => props.media}) center;

  flex: 5;
`;
const MilestonePreview = styled.div<{ preview: Milestone["media"] }>`
  background: url(${(props) => props.preview}) center;
  flex: 1;
`;

export default Timeline;
