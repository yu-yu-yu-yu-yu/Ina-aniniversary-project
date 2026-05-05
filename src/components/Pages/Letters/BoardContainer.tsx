import React, { useEffect, useState } from "react";
import TakoLetters from "./TakoLetters";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../../Common/TakoLoading";
import { Submission } from "../../../types";
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

const LIMIT = 10;

const BoardContainer = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  const {
    data: rawData,
    loading,
    error,
  } = useFetch<Submission[]>(`${process.env.PUBLIC_URL}/data/messageData.json`);

  const [sourceData, setSourceData] = useState<Submission[]>([]);
  const [data, setData] = useState<Submission[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (rawData) {
      const processedData = rawData.reverse();
      setSourceData(processedData);
      const rows = processedData.slice(0, LIMIT);
      awaitImgs(rows).then(() => {
        setData(rows);
        setOffset(LIMIT);
      });
    }
  }, [rawData]);

  const fetchMore = async () => {
    if (data.length !== 0) {
      const rows = sourceData.slice(offset, LIMIT + offset);
      if (rows.length === 0) {
        setHasMore(false);
      }
      await awaitImgs(rows);
      setData(data.concat(rows));
      setOffset(LIMIT + offset);
    }
  };

  const handleFilter = debounce(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value !== "") {
        const resultData = sourceData.filter((row: Submission) =>
          row.user.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setHasMore(false);
        setData(resultData);
        setOffset(0);
      } else {
        const rows = sourceData.slice(0, LIMIT);
        setHasMore(true);
        await awaitImgs(rows);
        setData(rows);
        setOffset(LIMIT);
      }
    },
    1000,
  );

  const awaitImgs = async (data: Submission[]) => {
    const promises: Promise<unknown>[] = [];
    data.forEach((row: Submission) => {
      if (row.image && !row.image.includes("youtube")) {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + "/Images/" + row.image;
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
              <p style={{ textAlign: "center" }}>Yay! You have seen it all</p>
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
