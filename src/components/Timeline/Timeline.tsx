import React, { useState } from "react";
import { SeekerBar } from "./SeekerBar";
import { Milestone } from "./Milestone";
import styled from "styled-components";

let progress = 0;
const Timeline = ({ milestones }: { milestones: Milestone[] }): JSX.Element => {
  // const { events } = props;
  const [current, setCurrent] = useState(0);
  const isFirst = current === 0;
  const isLast = current === milestones.length - 1;

  const scrollStrength = 20;
  //Seeker progress for the milestones

  const trackScroll = (e: { deltaY: number }) => {
    const { deltaY: yOffset } = e;
    console.log("call");
    console.log(progress);
    progress += (yOffset / 100) * scrollStrength;
    progress = Math.max(0, progress);
    progress = Math.min(progress, (milestones.length - 1) * 100);
    if (Math.floor(progress / 100) !== current)
      setCurrent(Math.floor(progress / 100));
  };

  const setIndex = (index: number) => {
    progress = index * 100;
    setCurrent(index);
  };

  return (
    <>
      <TimelineContainer onWheel={trackScroll}>
        {!isFirst && (
          <Past
            media={milestones[current - 1].media}
            setActive={() => setIndex(current - 1)}
          />
        )}
        <Present event={milestones[current]} />
        {!isLast && (
          <Future
            media={milestones[current + 1].media}
            setActive={() => setIndex(current + 1)}
          />
        )}
      </TimelineContainer>
      <SeekerBar
        milestones={milestones}
        curIndex={current}
        setIndex={setIndex}
        progress={progress}
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
