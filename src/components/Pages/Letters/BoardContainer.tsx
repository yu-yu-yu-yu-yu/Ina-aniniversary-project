import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import TakoLetters from "./TakoLetters";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../../Common/TakoLoading";
import { LetterEntry } from "../../../types";
import ScrollArrow from "../../Common/BackToTop";
import { debounce } from "lodash";
import {
  FiltersContainer,
  Loader,
  SiteBoard,
  SearchBar,
  NavTitle,
} from "./styles/styles";
import { Navbar, NavHome } from "../../Common/Navbar";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import { useFetch } from "../../../hooks/useFetch";

const LIMIT = 4;

const BoardContainer = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  const {
    data: rawData,
    loading,
    error,
  } = useFetch<LetterEntry[]>(`${process.env.PUBLIC_URL}/data/letterData.json`);

  const [sourceData, setSourceData] = useState<LetterEntry[]>([]);
  const [data, setData] = useState<LetterEntry[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const offsetRef = useRef(0);

  useEffect(() => {
    if (rawData) {
      const processedData = [...rawData].reverse();
      setSourceData(processedData);
      const rows = processedData.slice(0, LIMIT);
      awaitImgs(rows).then(() => {
        ReactDOM.unstable_batchedUpdates(() => {
          offsetRef.current = LIMIT;
          setData(rows);
          setHasMore(processedData.length > LIMIT);
        });
      });
    }
  }, [rawData]);

  const fetchMore = async () => {
    if (data.length === 0) return;
    const rows = sourceData.slice(offsetRef.current, LIMIT + offsetRef.current);
    if (rows.length === 0) {
      setHasMore(false);
      return;
    }
    await awaitImgs(rows);
    offsetRef.current += LIMIT;
    setData((prev) => prev.concat(rows));
  };

  useEffect(() => {
    if (hasMore && data.length > 0) {
      const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
      if (!isScrollable) {
        fetchMore();
      }
    }
  }, [data.length, hasMore]);

  const handleFilter = useCallback(
    debounce(async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value !== "") {
        const resultData = sourceData.filter((row: LetterEntry) =>
          row.user?.toLowerCase().includes(event.target.value.toLowerCase())
        );
        offsetRef.current = 0;
        setHasMore(false);
        setData(resultData);
      } else {
        const rows = sourceData.slice(0, LIMIT);
        await awaitImgs(rows);
        offsetRef.current = LIMIT;
        setData(rows);
        setHasMore(true);
      }
    }, 1000),
    [],
  );

  const awaitImgs = async (data: LetterEntry[]) => {
    const promises: Promise<unknown>[] = [];
    data.forEach((row: LetterEntry) => {
      if (row.image && !row.image.includes("youtube")) {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + "/letters/" + row.image;
            img.onerror = resolve;
            img.onload = resolve;
          }),
        );
      }
    });
    await Promise.allSettled(promises);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/Vanilla.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Navbar>
        <NavHome />
        <NavTitle>Letters for Ina</NavTitle>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading Letters: {error.message}</div>
      ) : (
        <SiteBoard>
          <FiltersContainer>
            <SearchBar onChange={handleFilter} placeholder="Search by name..." />
          </FiltersContainer>
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            scrollThreshold={"50px"}
            dataLength={data.length}
            next={fetchMore}
            hasMore={hasMore}
            loader={
              <Loader>
                <TakoLoading />
              </Loader>
            }
            endMessage={
              <p style={{ textAlign: "center", color: "var(--ink-black)" }}>Yay! You have seen it all</p>
            }
          >
            <TakoLetters submissions={data} />
          </InfiniteScroll>
          <ScrollArrow />
        </SiteBoard>
      )}
    </div>
  );
};

export default BoardContainer;
