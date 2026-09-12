import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export interface CenterCarouselHandlers {
  onScroll: () => void;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerCancel: (e: React.PointerEvent<HTMLDivElement>) => void;
}

export interface CenterCarousel {
  pivotIndex: number;
  dragging: boolean;
  goTo: (index: number) => void;
  containerRef: React.RefObject<HTMLDivElement>;
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  isLoaded: (index: number) => boolean;
  containerHandlers: CenterCarouselHandlers;
}

const DRAG_THRESHOLD = 5;
const FOLLOW_DURATION = 420;

const getMaxScroll = (el: HTMLElement) => {
  const scrollWidth = Number.isFinite(el.scrollWidth) ? el.scrollWidth : 0;
  const clientWidth = Number.isFinite(el.clientWidth) ? el.clientWidth : 0;
  return Math.max(0, scrollWidth - clientWidth);
};

export const useCenterCarousel = (
  total: number,
  loadRadius = 2,
  resetKey?: string | number,
): CenterCarousel => {
  const initialLoaded = useRef(
    new Set(
      Array.from({ length: Math.min(loadRadius + 1, total) }, (_, i) => i),
    ),
  ).current;

  const [pivotIndex, setPivotIndex] = useState(0);
  const [loadedSet, setLoadedSet] = useState<Set<number>>(initialLoaded);
  const [dragging, setDragging] = useState(false);
  const [scrollTick, setScrollTick] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const debounceTimer = useRef<number>(0);
  const pivotRef = useRef(pivotIndex);
  const programmaticRef = useRef(false);
  const followRaf = useRef<number>(0);
  const scrollTargetRef = useRef(0);
  const pointerActive = useRef(false);
  const isDragging = useRef(false);
  const dragPointerId = useRef(0);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const dragMaxScroll = useRef(0);
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

  const followScroll = useCallback((index: number) => {
    const el = itemRefs.current[index];
    const container = containerRef.current;
    if (!el || !container) return;
    cancelAnimationFrame(followRaf.current);
    programmaticRef.current = true;
    container.style.scrollSnapType = "none";
    const start = performance.now();
    const from = container.scrollLeft;
    const step = (now: number) => {
      const target = itemRefs.current[index];
      if (target && container) {
        const progress = Math.min((now - start) / FOLLOW_DURATION, 1);
        const eased = 1 - (1 - progress) ** 3;
        const dest =
          target.offsetLeft -
          container.clientWidth / 2 +
          target.offsetWidth / 2;
        container.scrollLeft = from + (dest - from) * eased;
      }
      if (now - start < FOLLOW_DURATION) {
        followRaf.current = requestAnimationFrame(step);
      } else {
        programmaticRef.current = false;
        container.style.scrollSnapType = "";
      }
    };
    followRaf.current = requestAnimationFrame(step);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, total - 1));
      scrollTargetRef.current = clamped;
      setPivotIndex(clamped);
      expandLoad(clamped);
      setScrollTick((t) => t + 1);
    },
    [expandLoad, total],
  );

  useLayoutEffect(() => {
    if (scrollTick === 0) return;
    followScroll(scrollTargetRef.current);
  }, [scrollTick, followScroll]);

  useEffect(() => () => cancelAnimationFrame(followRaf.current), []);

  useEffect(() => {
    if (total <= 0) {
      setPivotIndex(0);
      setLoadedSet(new Set());
      return;
    }
    setPivotIndex((prev) => Math.max(0, Math.min(prev, total - 1)));
  }, [total]);

  useEffect(() => {
    if (resetKey === undefined) return;
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = 0;
      container.style.scrollSnapType = "";
      container.style.cursor = "";
    }
    if (total <= 0) {
      setPivotIndex(0);
      setLoadedSet(new Set());
      return;
    }
    const nextLoaded = new Set(
      Array.from({ length: Math.min(loadRadius + 1, total) }, (_, index) => index),
    );
    setLoadedSet(nextLoaded);
    setPivotIndex(0);
    setDragging(false);
    isDragging.current = false;
    pointerActive.current = false;
    dragPointerId.current = 0;
    dragStartX.current = 0;
    dragStartScroll.current = 0;
    scrollTargetRef.current = 0;
  }, [loadRadius, resetKey, total]);

  const onScroll = useCallback(() => {
    if (programmaticRef.current || isDragging.current) return;
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
    if ((e.target as HTMLElement).closest("button, a, video, input, textarea")) {
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const pointerX =
      typeof e.clientX === "number"
        ? e.clientX
        : typeof (e as { pageX?: number }).pageX === "number"
          ? (e as { pageX?: number }).pageX ?? 0
          : 0;
    const maxScroll = getMaxScroll(el);
    dragMaxScroll.current = maxScroll;
    pointerActive.current = true;
    dragPointerId.current = e.pointerId;
    dragStartX.current = pointerX;
    dragStartScroll.current = Math.min(
      Math.max(Number.isFinite(el.scrollLeft) ? el.scrollLeft : 0, 0),
      maxScroll,
    );
    e.preventDefault();
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!pointerActive.current || !el) return;
    const pointerX =
      typeof e.clientX === "number"
        ? e.clientX
        : typeof (e as { pageX?: number }).pageX === "number"
          ? (e as { pageX?: number }).pageX ?? dragStartX.current
          : dragStartX.current;
    if (!isDragging.current) {
      if (Math.abs(pointerX - dragStartX.current) < DRAG_THRESHOLD) return;
      isDragging.current = true;
      setDragging(true);
      cancelAnimationFrame(followRaf.current);
      programmaticRef.current = false;
      if (typeof el.setPointerCapture === "function") {
        el.setPointerCapture(dragPointerId.current);
      }
      el.style.scrollSnapType = "none";
      el.style.cursor = "grabbing";
    }
    const maxScroll = getMaxScroll(el);
    dragMaxScroll.current = maxScroll;
    e.preventDefault();
    const nextScroll = dragStartScroll.current - (pointerX - dragStartX.current);
    el.scrollLeft = Math.min(Math.max(nextScroll, 0), maxScroll);
  }, []);

  const onPointerUp = useCallback(
    (_e: React.PointerEvent<HTMLDivElement>) => {
      const el = containerRef.current;
      if (!pointerActive.current || !el) return;
      pointerActive.current = false;
      if (!isDragging.current) return;
      isDragging.current = false;
      setDragging(false);
      if (
        typeof el.releasePointerCapture === "function" &&
        typeof el.hasPointerCapture === "function" &&
        el.hasPointerCapture(dragPointerId.current)
      ) {
        el.releasePointerCapture(dragPointerId.current);
      }
      el.style.cursor = "";
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
    dragging,
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
