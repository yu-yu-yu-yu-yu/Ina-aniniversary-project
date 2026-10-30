import { useCallback, useEffect, useRef, useState } from "react";

const MAX_TILT_DEG = 5;

const canUseTilt = (): boolean => {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return false;
  return window.matchMedia("(any-hover: hover) and (any-pointer: fine)")
    .matches;
};

interface UseTiltResult {
  tiltX: number;
  tiltY: number;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

export const use3DTilt = (active: boolean): UseTiltResult => {
  const [enabled] = useState(canUseTilt);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const effectiveActive = active && enabled;
  const activeRef = useRef(effectiveActive);
  activeRef.current = effectiveActive;

  useEffect(() => {
    if (!effectiveActive) setTilt({ x: 0, y: 0 });
  }, [effectiveActive]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!activeRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const clampedX = Math.max(-1, Math.min(1, nx));
    const clampedY = Math.max(-1, Math.min(1, ny));
    setTilt({
      x: -clampedY * MAX_TILT_DEG,
      y: clampedX * MAX_TILT_DEG,
    });
  }, []);

  const onMouseLeave = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return { tiltX: tilt.x, tiltY: tilt.y, onMouseMove, onMouseLeave };
};
