import { useRef, useEffect } from "react";

interface UseAudioOptions {
  muted: boolean;
  volume?: number;
  autoPlay?: boolean;
}

export const useAudio = ({ muted, volume = 0.1, autoPlay = false }: UseAudioOptions) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
      audioRef.current.volume = volume;
    }
  }, [muted, volume]);

  useEffect(() => {
    if (!autoPlay) return;

    let handler: (() => void) | null = null;
    let cancelled = false;

    if (audioRef.current && !muted) {
      audioRef.current.play().catch(() => {
        if (cancelled) return;
        handler = () => {
          if (audioRef.current && !muted) audioRef.current.play().catch(() => {});
          if (handler) window.removeEventListener("click", handler);
        };
        window.addEventListener("click", handler);
      });
    }

    return () => {
      cancelled = true;
      if (handler) window.removeEventListener("click", handler);
    };
  }, [autoPlay, muted]);

  return audioRef;
};