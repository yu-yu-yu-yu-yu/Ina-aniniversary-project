import React from "react";
import { TakodexMessages } from "./TakodexMessages";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import { useFetch } from "../../../hooks/useFetch";
import { TakoLoading } from "../../Common/TakoLoading";

interface TakodexEntry {
  name: string;
  author: string;
  category: string;
  attributes: string;
  description: string;
  image: string;
}

const TakodexList = () => {
  const { data, loading, error } = useFetch<TakodexEntry[]>(
    `${process.env.PUBLIC_URL}/data/TakoEntries.json`,
  );
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });

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
      {loading ? (
        <TakoLoading fullPage />
      ) : error ? (
        <div>Error loading Takodex: {error.message}</div>
      ) : (
        <TakodexMessages entries={data ?? []} />
      )}
    </>
  );
};

export { TakodexList };
