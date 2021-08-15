import React, {
  createRef,
  ForwardedRef,
  MutableRefObject,
  RefObject,
  useRef,
} from "react";
import { Milestone } from "./Milestone";
import styled from "styled-components";

interface INodeProps {
  active: boolean;
  passed: boolean;
  label: string;
  ref: MutableRefObject<HTMLInputElement>;
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
}: ISeekerBarProps): JSX.Element | null => {
  if (!milestones.length) return null;
  const nodeMapRef = useRef<RefObject<HTMLInputElement>[]>(
    milestones.map(() => createRef())
  );
  console.log(nodeMapRef.current);
  return (
    <NodeContainer>
      {milestones.map(({ label }, index) => (
        <SeekerNode
          key={index}
          label={label}
          ref={nodeMapRef.current[index]}
          active={index === curIndex}
          passed={index < curIndex}
          setIndex={() => setIndex(index)}
        />
      ))}
      <Progress
        position={nodeMapRef.current[curIndex].current?.offsetLeft ?? 0}
      />
    </NodeContainer>
  );
};

const Progress = ({ position }: { position: number }) => {
  return (
    <BarContainer>
      <ProgressBar progress={position} />
    </BarContainer>
  );
};

const BarContainer = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  z-index: 0;
  top: 45%;
  margin-left: 0.25em;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}px;
  transition: width 0.25s linear;
  background-color: #f29a31;
  height: 100%;
`;

const SeekerNode = React.forwardRef<HTMLInputElement, INodeProps>(
  function SeekerNode(
    { setIndex, ...props }: INodeProps,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    return (
      <StyledNode {...props} onClick={setIndex} ref={ref}>
        {/*<span>{label}</span>*/}
      </StyledNode>
    );
  }
);

const StyledNode = styled.div<{ active: boolean; passed: boolean }>`
  background: #fff;
  border: 0.35rem solid
    ${({ active, passed }) =>
      active ? "#F29A31" : passed ? "#E1D9EF" : "#564F68"};
  border-radius: 50%;
  margin: 1rem 0;
  min-width: 0.7rem;
  min-height: 0.7rem;
  padding: 5px;
  z-index: 2;
`;

const NodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //position: relative;
  background: #666666;
  padding: 0 1em;
  position: relative;
  overflow: hidden;
`;
