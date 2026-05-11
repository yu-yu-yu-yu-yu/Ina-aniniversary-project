import React, { useEffect, useRef, useState } from "react";
import { SeekerBar } from "./SeekerBar";
import { throttle } from "lodash";
import { Milestone } from "../../../types";
import styled from "styled-components";

const Gallery = ({ milestones }: { milestones: Milestone[] }): JSX.Element => {

  const timelineRef = useRef(0);
  const curRef = useRef(0);

  const [cur, setCur] = useState(0);
  const isFirst = cur === 0;
  const isLast = cur === milestones.length - 1;

  const scrollStrength = 20;

  const trackScroll = (e: any) => {
    const { deltaY: yOffset } = e;
    let scrollProgress = timelineRef.current;

    scrollProgress += (yOffset / 100) * scrollStrength;
    scrollProgress = Math.max(0, scrollProgress);
    scrollProgress = Math.min(scrollProgress, (milestones.length - 1) * 100);

    const nextCur = Math.floor(scrollProgress / 100);
    if (nextCur !== curRef.current || !scrollProgress) {
      curRef.current = nextCur;
      setCur(nextCur);
    }

    timelineRef.current = scrollProgress;
  };

  const setIndex = (index: number) => {
    timelineRef.current = index * 100;
    curRef.current = index;
    setCur(index);
  };

  useEffect(() => {
    const throttledScroll = throttle(trackScroll, 50);

    window.addEventListener("wheel", throttledScroll);

    return () => {
      window.removeEventListener("wheel", throttledScroll);
    };
  }, []);

  return (
    <FlexColumn>
      <TimelineContainer>
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
    </FlexColumn>
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

const FlexColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default Gallery;
