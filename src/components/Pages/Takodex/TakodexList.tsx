import React from "react";
import { TakodexMessages } from "./TakodexMessages";
import { useFetch } from "../../../hooks/useFetch";
import { TakoLoading } from "../../Common/TakoLoading";
import { PageBgm } from "../../Common/PageBgm";
import { LoadError } from "../../Common/LoadError";

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

  return (
    <>
      <PageBgm src="/リコーダービート2.mp3" />
      {loading ? (
        <TakoLoading fullPage />
      ) : error ? (
        <LoadError what="Takodex" error={error} />
      ) : (
        <TakodexMessages entries={data ?? []} />
      )}
    </>
  );
};

export default TakodexList;
