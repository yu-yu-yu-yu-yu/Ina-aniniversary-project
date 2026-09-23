import { RefObject, useCallback, useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export const spreadStart = (
  target: number,
  pageCount: number,
  twoUp: boolean,
): number => {
  const last = pageCount - 1;
  const clamped = Math.max(0, Math.min(target, last));
  if (!twoUp || clamped === 0 || clamped === last) return clamped;
  return clamped - ((clamped - 1) % 2);
};

export const spreadSpan = (
  start: number,
  pageCount: number,
  twoUp: boolean,
): number => {
  const last = pageCount - 1;
  if (!twoUp || start === 0 || start >= last) return 1;
  return start + 1 >= last ? 1 : 2;
};

type DivRefCallback = (node: HTMLDivElement | null) => void;

export interface PaginatedFlow {
  frameRef: DivRefCallback;
  flowRef: DivRefCallback;
  page: number;
  pageCount: number;
  pagesPerSpread: number;
  pageWidth: number;
  pageHeight: number;
  mobile: boolean;
  measured: boolean;
  turnTo: (
    page: number,
    isUserAction?: boolean,
    isDirectJump?: boolean,
  ) => void;
  next: () => void;
  prev: () => void;
  pageOf: (el: HTMLElement | null) => number;
  hasUserNavigated: RefObject<boolean>;
}

export const usePaginatedFlow = (
  onTurn?: (isDirectJump: boolean) => void,
): PaginatedFlow => {
  const frameElRef = useRef<HTMLDivElement | null>(null);
  const flowElRef = useRef<HTMLDivElement | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const rafRef = useRef<number | null>(null);

  const [mobile, setMobile] = useState(false);
  const [pageWidth, setPageWidth] = useState(() =>
    Math.max(window.innerWidth / 2, 1),
  );
  const [pageHeight, setPageHeight] = useState(() =>
    Math.max(window.innerHeight, 1),
  );
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);
  const [measured, setMeasured] = useState(false);

  const pagesPerSpread = spreadSpan(page, pageCount, !mobile);

  const measure = useCallback(() => {
    const frame = frameElRef.current;
    const flow = flowElRef.current;
    if (!frame || !flow) return;
    const frameWidth = frame.clientWidth;
    const frameHeight = frame.clientHeight;
    if (frameWidth <= 0 || frameHeight <= 0) return;
    const isMobile = frameWidth < MOBILE_BREAKPOINT;
    const twoUp = !isMobile;
    const spread = twoUp ? 2 : 1;
    const width = frameWidth / spread;
    const count = Math.max(1, Math.round(flow.scrollWidth / width));

    setMobile(isMobile);
    setPageWidth(width);
    setPageHeight(frameHeight);
    setPageCount(count);
    setMeasured(true);
    setPage((prev) => {
      const start = spreadStart(prev, count, twoUp);
      flow.scrollLeft = start * width;
      return start;
    });
  }, []);

  const scheduleMeasure = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      measure();
    });
  }, [measure]);

  const frameRef = useCallback<DivRefCallback>(
    (node) => {
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      frameElRef.current = node;
      if (node) {
        const observer = new ResizeObserver(() => scheduleMeasure());
        observer.observe(node);
        resizeObserverRef.current = observer;
      }
    },
    [scheduleMeasure],
  );

  const flowRef = useCallback<DivRefCallback>(
    (node) => {
      const prev = flowElRef.current;
      if (prev) {
        prev.removeEventListener("load", scheduleMeasure, true);
        prev.removeEventListener("error", scheduleMeasure, true);
      }
      flowElRef.current = node;
      if (node) {
        node.addEventListener("load", scheduleMeasure, true);
        node.addEventListener("error", scheduleMeasure, true);
      }
    },
    [scheduleMeasure],
  );

  useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      resizeObserverRef.current?.disconnect();
    },
    [],
  );

  useEffect(() => {
    if (!document.fonts) return;
    document.fonts.ready.then(measure).catch(() => undefined);
  }, [measure]);

  const hasUserNavigated = useRef(false);

  const turnTo = useCallback(
    (target: number, isUserAction = true, isDirectJump = false) => {
      const flow = flowElRef.current;
      if (!flow || pageWidth <= 0) return;
      if (isUserAction) hasUserNavigated.current = true;
      const start = spreadStart(target, pageCount, !mobile);
      if (isUserAction && start !== page) onTurn?.(isDirectJump);
      flow.scrollLeft = start * pageWidth;
      setPage(start);
    },
    [mobile, pageCount, pageWidth, page, onTurn],
  );

  const next = useCallback(
    () => turnTo(page + pagesPerSpread),
    [page, pagesPerSpread, turnTo],
  );
  const prev = useCallback(() => turnTo(page - 1), [page, turnTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const active = document.activeElement;
      if (
        active &&
        (active.tagName === "INPUT" || active.tagName === "TEXTAREA")
      ) {
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const pageOf = useCallback(
    (el: HTMLElement | null) => {
      const flow = flowElRef.current;
      if (!el || !flow || pageWidth <= 0) return 0;
      const flowRect = flow.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const offset = elRect.left - flowRect.left + flow.scrollLeft;
      return Math.max(0, Math.floor(offset / pageWidth));
    },
    [pageWidth],
  );

  return {
    frameRef,
    flowRef,
    page,
    pageCount,
    pagesPerSpread,
    pageWidth,
    pageHeight,
    mobile,
    measured,
    turnTo,
    next,
    prev,
    pageOf,
    hasUserNavigated,
  };
};
