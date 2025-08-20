import React, { useEffect, useState } from "react";
import { TakodexMessages } from "./TakodexMessages";

interface TakodexEntry {
  name: string;
  author: string;
  category: string;
  attributes: string;
  description: string;
  image: string;
}

const TakodexList = () => {
  const [entries, setEntries] = useState<TakodexEntry[]>([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/TakoEntries.json`)
      .then((res) => res.json())
      .then(setEntries);
  }, []);

  return <TakodexMessages entries={entries} />;
};

export { TakodexList };