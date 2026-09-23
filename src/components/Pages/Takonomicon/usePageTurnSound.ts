import { useCallback, useEffect, useRef, useState } from "react";
import { PAGE_SKIP_SOUND, PAGE_STEP_SOUND } from "./assets";

const SFX_MUTE_KEY = "takonomicon-sfx-muted";
const RELATIVE_ONSET_THRESHOLD = 0.08;
const ONSET_WINDOW_SAMPLES = 512;
const MIN_RATE = 0.92;
const MAX_RATE = 1.08;
const RAPID_TURN_MS = 260;

interface TrimmedBuffer {
  buffer: AudioBuffer;
  start: number;
  duration: number;
}

const windowPeak = (data: Float32Array, from: number, size: number): number => {
  let peak = 0;
  const end = Math.min(data.length, from + size);
  for (let i = from; i < end; i++) {
    const magnitude = Math.abs(data[i]);
    if (magnitude > peak) peak = magnitude;
  }
  return peak;
};

const detectOnsetRange = (
  buffer: AudioBuffer,
): { start: number; duration: number } => {
  const data = buffer.getChannelData(0);
  const overallPeak = windowPeak(data, 0, data.length);
  if (overallPeak === 0) return { start: 0, duration: buffer.duration };
  const threshold = overallPeak * RELATIVE_ONSET_THRESHOLD;

  let first = 0;
  while (
    first < data.length &&
    windowPeak(data, first, ONSET_WINDOW_SAMPLES) < threshold
  ) {
    first += ONSET_WINDOW_SAMPLES;
  }
  let last = Math.max(0, data.length - ONSET_WINDOW_SAMPLES);
  while (
    last > first &&
    windowPeak(data, last, ONSET_WINDOW_SAMPLES) < threshold
  ) {
    last -= ONSET_WINDOW_SAMPLES;
  }
  if (first >= last) return { start: 0, duration: buffer.duration };

  return {
    start: first / buffer.sampleRate,
    duration: (last + ONSET_WINDOW_SAMPLES - first) / buffer.sampleRate,
  };
};

const loadTrimmedBuffer = (
  ctx: AudioContext,
  src: string,
): Promise<TrimmedBuffer | null> =>
  fetch(src)
    .then((res) => res.arrayBuffer())
    .then((data) => ctx.decodeAudioData(data))
    .then((buffer): TrimmedBuffer => ({ buffer, ...detectOnsetRange(buffer) }))
    .catch(() => null);

export interface PageTurnSound {
  play: (isDirectJump: boolean) => void;
  muted: boolean;
  toggleMuted: () => void;
}

export const usePageTurnSound = (): PageTurnSound => {
  const [muted, setMuted] = useState(() => {
    try {
      return localStorage.getItem(SFX_MUTE_KEY) === "1";
    } catch {
      return false;
    }
  });
  const ctxRef = useRef<AudioContext | null>(null);
  const stepBufferRef = useRef<TrimmedBuffer | null>(null);
  const skipBufferRef = useRef<TrimmedBuffer | null>(null);
  const lastTurnAtRef = useRef(0);
  const currentSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: AudioContext;
    try {
      ctx = new AudioContext({ latencyHint: "interactive" });
    } catch {
      return;
    }
    ctxRef.current = ctx;

    const unlock = () => {
      if (ctx.state === "suspended") ctx.resume().catch(() => undefined);
    };
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);

    loadTrimmedBuffer(ctx, PAGE_STEP_SOUND).then((result) => {
      if (!cancelled) stepBufferRef.current = result;
    });
    loadTrimmedBuffer(ctx, PAGE_SKIP_SOUND).then((result) => {
      if (!cancelled) skipBufferRef.current = result;
    });

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      ctx.close().catch(() => undefined);
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(SFX_MUTE_KEY, muted ? "1" : "0");
    } catch {
      undefined;
    }
  }, [muted]);

  const play = useCallback(
    (isDirectJump: boolean) => {
      const ctx = ctxRef.current;
      if (muted || !ctx) return;

      const now = performance.now();
      const isRapidBurst = now - lastTurnAtRef.current < RAPID_TURN_MS;
      lastTurnAtRef.current = now;

      const trimmed =
        isDirectJump || isRapidBurst
          ? skipBufferRef.current
          : stepBufferRef.current;
      if (!trimmed) return;

      if (ctx.state === "suspended") ctx.resume().catch(() => undefined);

      const previous = currentSourceRef.current;
      if (previous) {
        try {
          previous.stop();
        } catch {
          undefined;
        }
      }

      const source = ctx.createBufferSource();
      source.buffer = trimmed.buffer;
      source.playbackRate.value =
        MIN_RATE + Math.random() * (MAX_RATE - MIN_RATE);
      source.connect(ctx.destination);
      source.onended = () => {
        if (currentSourceRef.current === source) {
          currentSourceRef.current = null;
        }
      };
      currentSourceRef.current = source;
      source.start(0, trimmed.start, trimmed.duration);
    },
    [muted],
  );

  const toggleMuted = useCallback(() => setMuted((m) => !m), []);

  return { play, muted, toggleMuted };
};
