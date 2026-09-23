import { MutableRefObject, useCallback, useRef, useState } from "react";
import { EDGE_FLIP_FRACTION } from "./assets";

const canUseEdgeFlip = (): boolean => {
  if (typeof window === "undefined") return false;
  // any-hover/any-pointer (not the bare hover/pointer, which only look at
  // the *primary* input) so a mouse still works on a touchscreen laptop
  // where touch is the primary pointer. No continuous animation runs here
  // (the cursor is just repositioned on mousemove), so unlike the old SVG
  // tentacle this doesn't need a prefers-reduced-motion check.
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
}

interface UseEdgeFlipResult {
  active: boolean;
  bookElRef: MutableRefObject<HTMLDivElement | null>;
  cursorRef: MutableRefObject<HTMLImageElement | null>;
  edge: FlipEdge;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  onClick: (e: React.MouseEvent) => void;
}

// Ambient page-flip affordance: the outer EDGE_FLIP_FRACTION of the book
// on each side glows and grows a tentacle cursor when the pointer is over
// it, and a
// click anywhere in that strip turns the page. Disabled when no fine
// hover-capable pointer (mouse/trackpad) is available at all.
export const useEdgeFlip = ({
  mobile,
  canPrev,
  canNext,
  onPrev,
  onNext,
}: UseEdgeFlipArgs): UseEdgeFlipResult => {
  const [enabled] = useState(canUseEdgeFlip);
  const active = !mobile && enabled;

  const bookElRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLImageElement | null>(null);
  const [edge, setEdge] = useState<FlipEdge>(null);

  const resolveEdge = useCallback(
    (e: React.MouseEvent): FlipEdge => {
      const book = bookElRef.current;
      if (!book) return null;
      // Never hijack a real control (TOC rows, credit/artist links, the
      // bookmark ribbon, the share button) sitting inside the zone.
      if ((e.target as HTMLElement).closest("a, button")) return null;

      const rect = book.getBoundingClientRect();
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
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    },
    [active, resolveEdge],
  );

  const onMouseLeave = useCallback(() => setEdge(null), []);

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      if (!active) return;
      const clicked = resolveEdge(e);
      if (clicked === "left") onPrev();
      else if (clicked === "right") onNext();
    },
    [active, resolveEdge, onPrev, onNext],
  );

  return {
    active,
    bookElRef,
    cursorRef,
    edge: active ? edge : null,
    onMouseMove,
    onMouseLeave,
    onClick,
  };
};
