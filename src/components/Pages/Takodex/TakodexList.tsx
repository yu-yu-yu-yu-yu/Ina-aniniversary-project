import React, { useEffect } from "react";
import { TakodexMessages } from "./TakodexMessages";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";

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
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });

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
