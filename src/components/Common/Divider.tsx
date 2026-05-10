import React from "react";
import styled, { keyframes } from "styled-components";

const GIF_SRC = `${process.env.PUBLIC_URL}/takoflap.gif`;

const NUM_GIFS = 8;
const GIF_SIZE = 60;
const SPEED = 10;

const travel = (mirror?: boolean) => keyframes`
  from {
    transform: translateX(${
      mirror ? `calc(100vw + ${GIF_SIZE}px)` : `-${GIF_SIZE}px`
    }) scaleX(${mirror ? -1 : 1});
  }
  to {
    transform: translateX(${
      mirror ? `-${GIF_SIZE}px` : `calc(100vw + ${GIF_SIZE}px)`
    }) scaleX(${mirror ? -1 : 1});
  }
`;

const Wrapper = styled.div<{ $topGap?: string }>`
  --divider-top-gap: ${({ $topGap }) => $topGap ?? "0px"};

  width: 100%;
  height: ${GIF_SIZE}px;
  overflow: hidden;
  position: relative;
  background: var(--background)
    url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
  padding-top: calc(var(--divider-top-gap) + 20px);
  padding-bottom: 10px;
`;

const Gif = styled.img<{ delay: number; mirror?: boolean }>`
  width: ${GIF_SIZE}px;
  height: ${GIF_SIZE}px;
  position: absolute;
  top: var(--divider-top-gap);
  left: 0;

  animation: ${({ mirror }) => travel(mirror)} ${SPEED}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const Divider: React.FC<{ mirror?: boolean; topGap?: string }> = ({
  mirror,
  topGap,
}) => {
  const spacing = SPEED / NUM_GIFS;

  return (
    <Wrapper $topGap={topGap}>
      {Array(NUM_GIFS)
        .fill(0)
        .map((_, i) => (
          <Gif
            key={i}
            src={GIF_SRC}
            alt="gif"
            delay={-(i * spacing)}
            mirror={mirror}
            draggable="false"
          />
        ))}
    </Wrapper>
  );
};

export default Divider;
