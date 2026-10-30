import { useEffect, useState } from "react";

export const GLITCH_FILE = "takos/takoglitch.gif";

export const glitchThreshold = (key: number): number =>
  (Math.floor(key * 1000) % 997) / 997;

export const useGlitchProgress = (
  startMs: number,
  endMs: number | undefined,
): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!endMs) return;
    new Image().src = `${process.env.PUBLIC_URL}/${GLITCH_FILE}`;
    const t0 = performance.now();
    const id = setInterval(() => {
      const p = Math.min(
        1,
        Math.max(0, (performance.now() - t0 - startMs) / (endMs - startMs)),
      );
      setProgress(p);
      if (p >= 1) clearInterval(id);
    }, 250);
    return () => clearInterval(id);
  }, [startMs, endMs]);

  return progress;
};
