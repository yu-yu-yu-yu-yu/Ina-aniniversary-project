import React, { useState } from "react";
import { TakoPeek } from "./styles/menuStyles";

const TAKO_COUNT = 72;

type PeekRequest = {
  x: number;
  width: number;
  count?: number;
};

type Tako = {
  id: number;
  src: string;
  left: number;
};

let setTakosGlobal: React.Dispatch<React.SetStateAction<Tako[]>> | null = null;

export const useTakoPeek = () => {
  const triggerPeek = ({ x, width, count = 1 }: PeekRequest) => {
    if (!setTakosGlobal) return;

    const takos = Array.from({ length: count }, (_, i) => {
      const offset = (i + 1) / (count + 1);
      return {
        id: Math.random(),
        src: `${process.env.PUBLIC_URL}/takos/${Math.floor(
          Math.random() * TAKO_COUNT,
        )}.png`,
        left: x + width * offset,
      };
    });

    setTakosGlobal(takos);
  };

  const clearPeek = () => {
    if (!setTakosGlobal) return;
    setTakosGlobal([]);
  };

  return { triggerPeek, clearPeek };
};

export const TakoPeekLayer = () => {
  const [takos, setTakos] = useState<Tako[]>([]);
  setTakosGlobal = setTakos;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {takos.map((tako) => (
        <TakoPeek
          key={tako.id}
          src={tako.src}
          active={true}
          style={{
            position: "absolute",
            left: tako.left,
            top: 0,
          }}
        />
      ))}
    </div>
  );
};
