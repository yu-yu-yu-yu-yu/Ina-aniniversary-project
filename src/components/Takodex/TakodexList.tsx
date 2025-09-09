import React, { useEffect, useRef } from "react";
import { TakodexMessages } from "./TakodexMessages";
import { useMute } from "../MuteButton"; 

interface TakodexEntry {
  name: string;
  author: string;
  category: string;
  attributes: string;
  description: string;
  image: string;
}

const TakodexList = () => {
  const [entries, setEntries] = React.useState<TakodexEntry[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { muted } = useMute ? useMute() : { muted: false };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
      audioRef.current.volume = 0.1;
    }
  }, [muted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/TakoEntries.json`)
      .then((res) => res.json())
      .then(setEntries);
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/リコーダービート2.mp3"}
        autoPlay
        loop
        preload="auto"
        style={{ display: "none" }}
        muted={muted}
      />
      <TakodexMessages entries={entries} />
    </>
  );
};

export { TakodexList };