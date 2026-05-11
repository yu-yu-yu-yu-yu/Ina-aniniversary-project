import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FloatingTakoData } from "../../../types";
import { TAKO_COUNT } from "../../../constants/takos";
const ANIMATION_DURATION = 9000;

const floatUp = keyframes`
  0% {
    transform: translateY(0) scaleX(1.5) scaleY(0.5);
    opacity: 0;
  }
  2% {
    opacity: 1;
    transform: translateY(-10px) scaleX(0.5) scaleY(1.5);
  }
  15% {
    transform: translateY(-30px) scaleX(1.3) scaleY(0.7);
  }
  30% {
    transform: translateY(-60px) scaleX(0.7) scaleY(1.3);
  }
  50% {
    transform: translateY(-100px) scaleX(1.2) scaleY(0.8);
  }
  70% {
    transform: translateY(-140px) scaleX(0.8) scaleY(1.2);
  }
  90% {
    opacity: 1;
    transform: translateY(-180px) scaleX(1.1) scaleY(0.9);
  }
  100% {
    transform: translateY(-100vh) scaleX(1) scaleY(1);
    opacity: 0;
  }
`;

const FloatingTako = styled.img<{ left: number; bottom: number }>`
  position: absolute;
  left: ${({ left }) => left}vw;
  bottom: ${({ bottom }) => bottom}px;
  height: 5vmax;
  max-height: 100px;
  min-height: 20px;
  width: auto;
  z-index: 3;
  pointer-events: none;
  animation: ${floatUp} 9s linear forwards;
`;

const TakoFloatBg = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 3;
  overflow: visible;
  overflow-x: hidden;
  pointer-events: none;
`;

const FloatingTakos = ({ freeFloat = false }: { freeFloat?: boolean }): JSX.Element => {
  const [floatingTakos, setFloatingTakos] = useState<FloatingTakoData[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sfxRef = useRef<HTMLAudioElement>(null);
  const [columnMode] = useState(!freeFloat);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const spawnCount = Math.floor(Math.random() * 3) + 1;
      const spawnHeight = document.documentElement.scrollHeight;
      const newTakos: FloatingTakoData[] = [];
      for (let i = 0; i < spawnCount; i++) {
        if (Math.random() < 0.6) {
          newTakos.push({
            key: Date.now() + Math.random() + i,
            left: columnMode ? getColumnLeft() : Math.random() * 90,
            tako: Math.floor(Math.random() * TAKO_COUNT),
            bottom: Math.random() * spawnHeight,
            createdAt: Date.now(),
          });
        }
      }
      if (newTakos.length > 0) {
        setFloatingTakos((prev) => [...prev, ...newTakos]);
      }
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const cleanup = () => {
      setFloatingTakos((prev) =>
        prev.filter((tako) => Date.now() - tako.createdAt < ANIMATION_DURATION),
      );
    };
    const cleanupInterval = setInterval(cleanup, 1000);
    return () => clearInterval(cleanupInterval);
  }, []);

  const getColumnLeft = () => {
    const isLeftColumn = Math.random() < 0.5;

    if (isLeftColumn) {
      return Math.random() * 10;
    } else {
      return 90 + Math.random() * 10;
    }
  };

  const handleTakoClick = () => {
    if (sfxRef.current) {
      sfxRef.current.volume = 0.2;
      sfxRef.current.currentTime = 0;
      sfxRef.current.play();
    }
  };

  return (
    <>
      <audio
        ref={sfxRef}
        src={process.env.PUBLIC_URL + "/inatakosound.mp3"}
        preload="auto"
        style={{ display: "none" }}
      />
      <TakoFloatBg>
        {floatingTakos.map((tako) => (
          <FloatingTako
            key={tako.key}
            left={tako.left}
            bottom={tako.bottom}
            src={`${process.env.PUBLIC_URL}/takos/${tako.tako}.png`}
            alt="floating takodachi"
            onClick={handleTakoClick}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          />
        ))}
      </TakoFloatBg>
    </>
  );
};

export default FloatingTakos;
