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
    if (autoPlay) {
      const handleFirstInteraction = () => {
        if (audioRef.current && !muted) {
          audioRef.current.play();
        }
        window.removeEventListener("click", handleFirstInteraction);
      };
      window.addEventListener("click", handleFirstInteraction);
      return () => window.removeEventListener("click", handleFirstInteraction);
    }
  }, [autoPlay, muted]);

  return audioRef;
};