import { useCallback, useEffect, useRef } from "react";

interface FitTextOptions {
  min?: number;
  max?: number;
  step?: number;
}

export const useFitText = <T extends HTMLElement = HTMLDivElement>(
  deps: unknown[],
  { min = 11, max = 16, step = 0.5 }: FitTextOptions = {},
) => {
  const ref = useRef<T>(null);

  const fit = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    let size = max;
    el.style.fontSize = `${size}px`;
    while (el.scrollHeight > el.clientHeight && size > min) {
      size -= step;
      el.style.fontSize = `${size}px`;
    }
  }, [min, max, step]);

  useEffect(fit, [...deps, fit]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [fit]);

  return ref;
};
