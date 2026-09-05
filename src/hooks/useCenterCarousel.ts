import { useCallback, useEffect, useRef, useState } from "react";

export interface CenterCarouselHandlers {
  onScroll: () => void;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerCancel: (e: React.PointerEvent<HTMLDivElement>) => void;
}

export interface CenterCarousel {
  pivotIndex: number;
  goTo: (index: number) => void;
  containerRef: React.RefObject<HTMLDivElement>;
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  isLoaded: (index: number) => boolean;
  containerHandlers: CenterCarouselHandlers;
}

export const useCenterCarousel = (
  total: number,
  loadRadius = 2,
): CenterCarousel => {
  const initialLoaded = useRef(
    new Set(
      Array.from({ length: Math.min(loadRadius + 1, total) }, (_, i) => i),
    ),
  ).current;

  const [pivotIndex, setPivotIndex] = useState(0);
  const [loadedSet, setLoadedSet] = useState<Set<number>>(initialLoaded);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const debounceTimer = useRef<number>(0);
  const pivotRef = useRef(pivotIndex);
  const programmaticRef = useRef(false);
  const programmaticTimer = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  pivotRef.current = pivotIndex;

  const expandLoad = useCallback(
    (center: number) => {
      setLoadedSet((prev) => {
        const next = new Set(prev);
        for (
          let i = Math.max(0, center - loadRadius);
          i <= Math.min(total - 1, center + loadRadius);
          i++
        ) {
          next.add(i);
        }
        return next;
      });
    },
    [loadRadius, total],
  );

  const scrollToPivot = useCallback((index: number) => {
    const el = itemRefs.current[index];
    const container = containerRef.current;
    if (!el || !container) return;
    programmaticRef.current = true;
    clearTimeout(programmaticTimer.current);
    programmaticTimer.current = window.setTimeout(() => {
      programmaticRef.current = false;
      container.style.scrollSnapType = "";
    }, 700);
    const targetLeft =
      el.offsetLeft - container.clientWidth / 2 + el.offsetWidth / 2;
    container.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, total - 1));
      setPivotIndex(clamped);
      expandLoad(clamped);
      scrollToPivot(clamped);
    },
    [expandLoad, scrollToPivot, total],
  );

  useEffect(() => {
    setPivotIndex((prev) => Math.max(0, Math.min(prev, total - 1)));
  }, [total]);

  const onScroll = useCallback(() => {
    if (programmaticRef.current) return;
    clearTimeout(debounceTimer.current);
    debounceTimer.current = window.setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      const centerX = cRect.left + cRect.width / 2;
      let bestIdx = pivotRef.current;
      let bestDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.left + rect.width / 2 - centerX);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      if (bestIdx === pivotRef.current) return;
      setPivotIndex(bestIdx);
      expandLoad(bestIdx);
    }, 250);
  }, [expandLoad]);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    if ((e.target as HTMLElement).closest("button, a")) return;
    const el = containerRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.scrollSnapType = "none";
    el.style.cursor = "grabbing";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    containerRef.current.scrollLeft =
      dragStartScroll.current - (e.clientX - dragStartX.current);
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current || !containerRef.current) return;
      isDragging.current = false;
      const el = containerRef.current;
      el.style.cursor = "";
      const dragDistance = Math.abs(e.clientX - dragStartX.current);
      if (dragDistance < 5) {
        el.style.scrollSnapType = "";
        return;
      }
      const cRect = el.getBoundingClientRect();
      const centerX = cRect.left + cRect.width / 2;
      let bestIdx = pivotRef.current;
      let bestDist = Infinity;
      itemRefs.current.forEach((item, i) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const dist = Math.abs(rect.left + rect.width / 2 - centerX);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      goTo(bestIdx);
    },
    [goTo],
  );

  const isLoaded = useCallback(
    (index: number) => loadedSet.has(index),
    [loadedSet],
  );

  return {
    pivotIndex,
    goTo,
    containerRef,
    itemRefs,
    isLoaded,
    containerHandlers: {
      onScroll,
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
  };
};
