import { MutableRefObject, useCallback, useRef, useState } from "react";
import { EDGE_FLIP_FRACTION } from "./assets";

const canUseEdgeFlip = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(any-hover: hover) and (any-pointer: fine)")
    .matches;
};

export type FlipEdge = "left" | "right" | null;

interface UseEdgeFlipArgs {
  mobile: boolean;
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  disabled?: boolean;
}

interface UseEdgeFlipResult {
  active: boolean;
  bookElRef: MutableRefObject<HTMLDivElement | null>;
  cursorRef: MutableRefObject<HTMLImageElement | null>;
  edge: FlipEdge;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
  onTouchCancel: () => void;
}

const SWIPE_MIN_PX = 50;

export const useEdgeFlip = ({
  mobile,
  canPrev,
  canNext,
  onPrev,
  onNext,
  disabled = false,
}: UseEdgeFlipArgs): UseEdgeFlipResult => {
  const [enabled] = useState(canUseEdgeFlip);
  const active = !mobile && enabled && !disabled;

  const bookElRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLImageElement | null>(null);
  const [edge, setEdge] = useState<FlipEdge>(null);

  const resolveEdge = useCallback(
    (e: React.MouseEvent): FlipEdge => {
      const book = bookElRef.current;
      if (!book) return null;
      if ((e.target as HTMLElement).closest("a, button")) return null;

      const rect = book.getBoundingClientRect();
      if (e.clientX < rect.left) return canPrev ? "left" : null;
      if (e.clientX > rect.right) return canNext ? "right" : null;
      if (e.clientY < rect.top || e.clientY > rect.bottom) return null;
      const zone = rect.width * EDGE_FLIP_FRACTION;
      if (e.clientX < rect.left + zone) return canPrev ? "left" : null;
      if (e.clientX > rect.right - zone) return canNext ? "right" : null;
      return null;
    },
    [canPrev, canNext],
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!active) return;
      const next = resolveEdge(e);
      setEdge(next);
      if (next && cursorRef.current) {
        cursorRef.current.style.setProperty("--x", `${e.clientX}px`);
        cursorRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    },
    [active, resolveEdge],
  );

  const onMouseLeave = useCallback(() => setEdge(null), []);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (!active) return;
      if (!window.getSelection()?.isCollapsed) return;
      const clicked = resolveEdge(e);
      if (clicked === "left") onPrev();
      else if (clicked === "right") onNext();
    },
    [active, resolveEdge, onPrev, onNext],
  );

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const t = e.touches[0];
      touchStart.current =
        e.touches.length === 1 && !disabled
          ? { x: t.clientX, y: t.clientY }
          : null;
    },
    [disabled],
  );

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStart.current;
      touchStart.current = null;
      if (!start) return;
      if (!window.getSelection()?.isCollapsed) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy) * 1.5)
        return;
      if (dx < 0 && canNext) onNext();
      else if (dx > 0 && canPrev) onPrev();
    },
    [canPrev, canNext, onPrev, onNext],
  );

  const onTouchCancel = useCallback(() => {
    touchStart.current = null;
  }, []);

  return {
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
    active,
    bookElRef,
    cursorRef,
    edge: active ? edge : null,
    onMouseMove,
    onMouseLeave,
    onClick,
  };
};
