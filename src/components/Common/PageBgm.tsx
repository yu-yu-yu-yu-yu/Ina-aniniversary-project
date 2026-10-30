import React from "react";
import { useAudio } from "../../hooks/useAudio";
import { useMute } from "./MuteButton";

export const PageBgm = ({
  src,
  pauseOnVideo = false,
}: {
  src: string;
  pauseOnVideo?: boolean;
}): JSX.Element => {
  const { muted, videoPlaying } = useMute();
  const audioRef = useAudio({
    muted,
    autoPlay: true,
    videoPaused: pauseOnVideo && videoPlaying,
  });
  return (
    <audio
      ref={audioRef}
      src={process.env.PUBLIC_URL + src}
      loop
      preload="auto"
      style={{ display: "none" }}
    />
  );
};
