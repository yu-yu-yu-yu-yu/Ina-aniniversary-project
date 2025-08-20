import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import HomeFooter from "./HomeFooter";
import Logo from "./Logo";
import Lore from "./Lore";
import Quote from "./Quote";
import Menu from "./Menu";

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
  width: 100px;
  z-index: 1;
  pointer-events: none;
  animation: ${floatUp} 15s linear forwards;
`;

const TakoFloatBg = styled.div<{ height: number }>`
  position: absolute;
  pointer-events: none;
  top: 0; left: 0; width: 100vw; height: ${({ height }) => height}px;
  z-index: 2;
  overflow: visible;
  pointer-events: none;
`;

const Home = styled.div`
  position: relative;
`;

const takoCount = 72;

interface FloatingTakoData {
  key: number;
  left: number;
  tako: number;
  bottom: number;
  createdAt: number;
}

const ANIMATION_DURATION = 15000;

const HomeContent = (): JSX.Element => {
  const [floatingTakos, setFloatingTakos] = useState<FloatingTakoData[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const spawnCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < spawnCount; i++) {
        if (Math.random() < 0.5) {
          const randomTako = Math.floor(Math.random() * takoCount);
          const spawnBottom = Math.random() * document.documentElement.scrollHeight;
          const newTako: FloatingTakoData = {
            key: Date.now() + Math.random() + i,
            left: Math.random() * 80 + 10,
            tako: randomTako,
            bottom: spawnBottom,
            createdAt: Date.now(),
          };
          setFloatingTakos((prev) => [...prev, newTako]);
        }
      }
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const cleanup = () => {
      setFloatingTakos((prev) =>
        prev.filter((tako) => Date.now() - tako.createdAt < ANIMATION_DURATION)
      );
    };
    const cleanupInterval = setInterval(cleanup, 1000);
    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <>
      <TakoFloatBg height={document.documentElement.scrollHeight}>
        {floatingTakos.map((tako) => (
          <FloatingTako
            key={tako.key}
            left={tako.left}
            bottom={tako.bottom}
            src={`${process.env.PUBLIC_URL}/takos/${tako.tako}.png`}
            alt="floating takodachi"
          />
        ))}
      </TakoFloatBg>
      <Home>
        <Logo />
        <Quote />
        <Lore />
        <Menu />
        <HomeFooter />
      </Home>
    </>
  );
};

export default HomeContent;
