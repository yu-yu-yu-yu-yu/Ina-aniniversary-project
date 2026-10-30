import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { LAYOUT_PAGE } from "./assets";

const MOBILE_BREAKPOINT = 768;
const BLANK_PAGE_ATTR = "data-blank-page";

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
  layoutWidth: number;
  layoutHeight: number;
  scale: number;
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
  pageXOf: (clientX: number) => number;
  pageYOf: (clientY: number) => number;
  hasUserNavigated: RefObject<boolean>;
  remeasure: () => void;
}

export const usePaginatedFlow = (
  onTurn?: (isDirectJump: boolean) => void,
  pageRatio?: { width: number; height: number },
  zoom = 1,
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
  const lastCountRef = useRef(Infinity);
  const bookFontReadyRef = useRef(!document.fonts);

  const pagesPerSpread = spreadSpan(page, pageCount, !mobile);
  const scale = pageWidth / LAYOUT_PAGE.width;

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

    let boxWidth = frameWidth;
    let boxHeight = frameHeight;
    if (pageRatio) {
      const wantWidth = pageRatio.width * spread;
      const scale = Math.min(
        frameWidth / wantWidth,
        frameHeight / pageRatio.height,
      );
      boxWidth = wantWidth * scale;
      boxHeight = pageRatio.height * scale;
    }
    boxWidth *= zoom;
    boxHeight = Math.round(boxHeight * zoom);
    const width = Math.round(boxWidth / spread);

    flow.querySelector<HTMLElement>(`[${BLANK_PAGE_ATTR}]`)?.remove();
    const caps = Array.from(
      flow.querySelectorAll<HTMLElement>("[data-dropcap]"),
    );
    caps.forEach((cap) => cap.removeAttribute("data-displaced"));
    const displaced = caps.map((cap) => {
      const para = cap.parentElement;
      return (
        !!para &&
        Math.floor((cap.offsetLeft + 5) / LAYOUT_PAGE.width) !==
          Math.floor((para.offsetLeft + 5) / LAYOUT_PAGE.width)
      );
    });
    caps.forEach((cap, i) => {
      if (displaced[i]) cap.setAttribute("data-displaced", "");
    });
    let count = Math.max(1, Math.round(flow.scrollWidth / LAYOUT_PAGE.width));
    if (count % 2 === 1) {
      const filler = document.createElement("div");
      filler.setAttribute(BLANK_PAGE_ATTR, "");
      filler.style.height = "100%";
      filler.style.setProperty("break-before", "column");
      filler.style.setProperty("-webkit-column-break-before", "always");
      flow.insertBefore(filler, flow.lastElementChild);
      count += 1;
    }

    setMobile(isMobile);
    setPageWidth(width);
    setPageHeight(boxHeight);
    setPageCount(count);
    const assetsPending =
      !bookFontReadyRef.current ||
      document.fonts?.status === "loading" ||
      Array.from(flow.querySelectorAll("img")).some((img) => !img.complete);
    if (!assetsPending) setMeasured(true);
    setPage((prev) => {
      const wasAtEnd = prev >= lastCountRef.current - 1;
      lastCountRef.current = count;
      const start = wasAtEnd ? count - 1 : spreadStart(prev, count, twoUp);
      flow.scrollLeft = start * LAYOUT_PAGE.width;
      return start;
    });
  }, [pageRatio, zoom]);

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
    const fonts = document.fonts;
    if (!fonts) return;
    const done = () => {
      bookFontReadyRef.current = true;
      measure();
    };
    Promise.all([
      fonts.load('16px "Takohuyk"'),
      fonts.load('16px "RevisonBooks"'),
    ])
      .then(() => fonts.ready)
      .then(done, done);
    fonts.addEventListener("loadingdone", scheduleMeasure);
    return () => fonts.removeEventListener("loadingdone", scheduleMeasure);
  }, [measure, scheduleMeasure]);

  useLayoutEffect(() => {
    const flow = flowElRef.current;
    if (flow) flow.scrollLeft = page * LAYOUT_PAGE.width;
  }, [page, pageWidth, pageCount, pagesPerSpread, mobile]);

  const hasUserNavigated = useRef(false);

  const turnTo = useCallback(
    (target: number, isUserAction = true, isDirectJump = false) => {
      const flow = flowElRef.current;
      if (!flow || pageWidth <= 0) return;
      if (isUserAction) hasUserNavigated.current = true;
      const start = spreadStart(target, pageCount, !mobile);
      if (isUserAction && start !== page) onTurn?.(isDirectJump);
      flow.scrollLeft = start * LAYOUT_PAGE.width;
      lastCountRef.current = pageCount;
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
      let x = 0;
      for (
        let node: HTMLElement | null = el;
        node && node !== flow;
        node = node.offsetParent as HTMLElement | null
      )
        x += node.offsetLeft;
      return Math.max(0, Math.floor(x / LAYOUT_PAGE.width + 0.02));
    },
    [pageWidth],
  );

  const pageXOf = useCallback(
    (clientX: number) => {
      const flow = flowElRef.current;
      if (!flow || pageWidth <= 0) return 0;
      const flowRect = flow.getBoundingClientRect();
      return (
        ((clientX - flowRect.left) / scale + flow.scrollLeft) /
        LAYOUT_PAGE.width
      );
    },
    [pageWidth, scale],
  );

  const pageYOf = useCallback(
    (clientY: number) => {
      const flow = flowElRef.current;
      if (!flow || pageHeight <= 0) return 0;
      const flowRect = flow.getBoundingClientRect();
      return (clientY - flowRect.top) / pageHeight;
    },
    [pageHeight],
  );

  return {
    frameRef,
    flowRef,
    page,
    pageCount,
    pagesPerSpread,
    pageWidth,
    pageHeight,
    layoutWidth: LAYOUT_PAGE.width,
    layoutHeight: LAYOUT_PAGE.height,
    scale,
    mobile,
    measured,
    turnTo,
    next,
    prev,
    pageOf,
    pageXOf,
    pageYOf,
    hasUserNavigated,
    remeasure: scheduleMeasure,
  };
};
