import React from "react";
import { Milestone } from "./Milestone";
import styled from "styled-components";

interface INodeProps {
  active: boolean;
  label: string;
  setIndex: () => void;
}

interface ISeekerBarProps {
  milestones: Milestone[];
  curIndex: number;
  setIndex: (index: number) => void;
  progress: number;
}

export const SeekerBar = ({
  milestones,
  curIndex,
  setIndex,
}: ISeekerBarProps): JSX.Element => (
  <NodeContainer>
    {milestones.length > 1 &&
      milestones.map(({ label }, index) => (
        <SeekerNode
          key={index}
          label={label}
          active={index === curIndex}
          setIndex={() => setIndex(index)}
        />
      ))}
    <ProgressBar progress={50} />
  </NodeContainer>
);

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarProgress />
    </ProgressBarContainer>
  );
};

const SeekerNode = ({ label, setIndex, active }: INodeProps) => {
  return (
    <StyledNode onClick={setIndex} active={active}>
      <span>{label}</span>
    </StyledNode>
  );
};

const ProgressBarContainer = styled.div``;

const ProgressBarProgress = styled.div``;

const NodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //position: relative;
  background: #666666;
`;

const StyledNode = styled.div<{ active: boolean }>`
  background: ${(props) => (props.active ? "blue" : "red")};
  margin: 15px;
  min-width: 1rem;
  min-height: 1rem;
  padding: 5px;
`;
