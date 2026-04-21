import React from "react";
import styled, { keyframes } from "styled-components";

const GIF_SRC = `${process.env.PUBLIC_URL}/takoflap.gif`;

const NUM_GIFS = 8;
const GIF_SIZE = 60;
const SPEED = 10;

const travel = keyframes`
  from {
    transform: translateX(-${GIF_SIZE}px);
  }
  to {
    transform: translateX(calc(100vw + ${GIF_SIZE}px));
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: ${GIF_SIZE}px;
  overflow: hidden;
  position: relative;
  background: var(--background) url(${process.env.PUBLIC_URL}/Pattern2.png) 0 0;
  background-attachment: fixed;
  background-size: 180px;
`;

const Gif = styled.img<{ delay: number }>`
  width: ${GIF_SIZE}px;
  height: ${GIF_SIZE}px;
  position: absolute;
  top: 0;
  left: 0;

  animation: ${travel} ${SPEED}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const Divider: React.FC = () => {
  const spacing = SPEED / NUM_GIFS;

  return (
    <Wrapper>
      {Array(NUM_GIFS)
        .fill(0)
        .map((_, i) => (
          <Gif
            key={i}
            src={GIF_SRC}
            alt="gif"
            delay={-(i * spacing)}
            draggable="false"
          />
        ))}
    </Wrapper>
  );
};

export default Divider;
