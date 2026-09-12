import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FloatingBalloonData } from "../../../types";
import { useTheme } from "../../Common/ThemeProvider";
import { ThemeName } from "../../../types";

const ANIMATION_DURATION = 20000;
const MAX_BALLOON_WIDTH_PERCENT = 18;
const MIN_BALLOON_WIDTH_PERCENT = 8;

interface BalloonDef {
  src: string;
}

const g = (color: string): BalloonDef => ({
  src: `balloons/generic/balloon-generic-${color}.png`,
});
const mv = (name: string): BalloonDef => ({
  src: `balloons/mv/balloon-mv-${name}.png`,
});
const tk = (name: string): BalloonDef => ({
  src: `balloons/takos/balloon-takos-${name}.png`,
});

const takoShapes: BalloonDef[] = [
  tk("0"),
  tk("1"),
  tk("cookies"),
  tk("uhh-i-think-she-needs-help"),
];

const themePool: Record<ThemeName, BalloonDef[]> = {
  Standard: [
    mv("meconopsis"),
    mv("violet"),
    mv("temari"),
    mv("tako8takover"),
    g("purple"),
    g("pink"),
    g("white"),
    g("yellow"),
    g("fushia"),
    g("orange"),
    g("green"),
    g("lime"),
    ...takoShapes,
  ],
  Violet: [
    mv("violet"),
    g("blue"),
    g("blueagain"),
    g("violet"),
    g("sky"),
    g("cyan"),
    g("purple"),
    ...takoShapes,
  ],
  Meconopsis: [
    mv("meconopsis"),
    g("blue"),
    g("blueagain"),
    g("cyan"),
    g("purple"),
    g("sky"),
    g("violet"),
    ...takoShapes,
  ],
  Temari: [
    mv("temari"),
    g("red"),
    g("lightred"),
    g("orange"),
    g("pink"),
    g("fushia"),
    g("yellow"),
    ...takoShapes,
  ],
  TakoTakover: [
    mv("tako8takover"),
    g("purple"),
    g("fushia"),
    g("pink"),
    g("violet"),
    g("sky"),
    ...takoShapes,
  ],
};

const floatBalloon = (swayOffset: number) => keyframes`
  0% {
    transform: translateY(0) translateX(0) rotate(-2deg);
    opacity: 0;
  }
  8% { opacity: 1; }
  25% { transform: translateY(-32.5vh) translateX(${swayOffset}px) rotate(3deg); }
  50% { transform: translateY(-65vh) translateX(${-swayOffset * 0.7}px) rotate(-2deg); }
  75% {
    transform: translateY(-97.5vh) translateX(${swayOffset * 0.9}px) rotate(2deg);
  }
  98% { opacity: 1; }
  100% {
    transform: translateY(-130vh) translateX(0) rotate(0deg);
    opacity: 0;
  }
`;

const FloatingBalloon = styled.img<{
  left: number;
  bottom: number;
  swayOffset: number;
  $heightScale: number;
}>`
  position: absolute;
  left: ${({ left }) => left}vw;
  bottom: ${({ bottom }) => bottom}px;
  height: ${({ $heightScale }) => (20 * $heightScale).toFixed(2)}vmax;
  max-height: ${({ $heightScale }) => Math.round(260 * $heightScale)}px;
  min-height: ${({ $heightScale }) => Math.round(180 * $heightScale)}px;
  width: clamp(70px, 12vw, 160px);
  max-width: 18vw;
  object-fit: contain;
  z-index: 0;
  pointer-events: none;
  will-change: transform;
  animation: ${({ swayOffset }) => css`
    ${floatBalloon(swayOffset)} 12s ease-in-out forwards
  `};
`;

const BalloonFloatBg = styled.div`
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  width: 95vw;
  height: 100%;
  z-index: 3;
  overflow: visible;
  overflow-x: hidden;
`;

const FloatingBalloons = (): JSX.Element => {
  const [balloons, setBalloons] = useState<FloatingBalloonData[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    themePool[theme].forEach((def) => {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}/${def.src}`;
    });
  }, [theme]);

  useEffect(() => {
    const spawn = () => {
      const pool = themePool[theme];
      const spawnCount = Math.floor(Math.random() * 2) + 1;
      const spawnHeight = document.documentElement.scrollHeight;

      const newBalloons: FloatingBalloonData[] = [];
      for (let i = 0; i < spawnCount; i++) {
        if (Math.random() < 0.96) {
          const def = pool[Math.floor(Math.random() * pool.length)];
          const widthPercent =
            Math.random() *
              (MAX_BALLOON_WIDTH_PERCENT - MIN_BALLOON_WIDTH_PERCENT) +
            MIN_BALLOON_WIDTH_PERCENT;
          newBalloons.push({
            key: Date.now() + Math.random() + i,
            left: Math.random() * (100 - widthPercent - 6),
            src: def.src,
            bottom: Math.random() * spawnHeight,
            createdAt: Date.now(),
            heightScale: Math.random() * 0.6 + 0.4,
            swayOffset:
              (Math.random() * 30 + 10) * (Math.random() < 0.5 ? 1 : -1),
          });
        }
      }
      if (newBalloons.length > 0) {
        setBalloons((prev) => [...prev, ...newBalloons]);
      }
    };
    const start = () => {
      intervalRef.current = setInterval(spawn, 2000);
    };
    const stop = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    const onVisibility = () =>
      document.visibilityState === "hidden" ? stop() : start();
    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [theme]);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setBalloons((prev) =>
        prev.filter((b) => Date.now() - b.createdAt < ANIMATION_DURATION),
      );
    }, 2000);
    return () => clearInterval(cleanupInterval);
  }, []);

  return (
    <BalloonFloatBg>
      {balloons.map((b) => (
        <FloatingBalloon
          key={b.key}
          left={b.left}
          bottom={b.bottom}
          swayOffset={b.swayOffset}
          $heightScale={b.heightScale}
          src={`${process.env.PUBLIC_URL}/${b.src}`}
          alt="floating balloon"
        />
      ))}
    </BalloonFloatBg>
  );
};

export default FloatingBalloons;
