import React, { useCallback, useEffect, useState } from "react";
import TakoMessages from "./TakoMessages";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../../Common/TakoLoading";
import { Submission } from "../../../types";
import ScrollArrow from "../../Common/BackToTop";
import { Switch } from "../../Common/Switch";
import { debounce } from "lodash";
import {
  FiltersContainer,
  Loader,
  SiteBoard,
  SearchBar,
  NavTitle,
} from "./styles";
import { Navbar, NavHome } from "../../Common/Navbar";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import { useFetch } from "../../../hooks/useFetch";

const LIMIT = 10;

const MessageBoard = (): JSX.Element => {
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
  const [isToggledOnlyImg, setIsToggledOnlyImg] = useState(false);
  const [isToggledTextOnly, setisToggledTextOnly] = useState(false);
  const searchRef = React.useRef("");

  useEffect(() => {
    if (rawData) {
      const processedData = [...rawData].reverse();
      setSourceData(processedData);
      const rows = processedData.slice(0, LIMIT);
      awaitImgs(rows).then(() => {
        setData(rows);
        setOffset(LIMIT);
        setHasMore(processedData.length > LIMIT);
      });
    }
  }, [rawData]);

  const fetchMore = async () => {
    if (data.length !== 0) {
      const resultData = isToggledOnlyImg
        ? sourceData.filter((row: Submission) => row.image !== "")
        : sourceData;

      const rows = resultData.slice(offset, LIMIT + offset);

      if (rows.length === 0) {
        setHasMore(false);
      }

      await awaitImgs(rows);

      setData((prev) => prev.concat(rows));
      setOffset((prev) => prev + LIMIT);
    }
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
        const resultData = sourceData.filter((row: Submission) => {
          return (
            row.user.toLowerCase().includes(event.target.value.toLowerCase()) ||
            row.message.toLowerCase().includes(event.target.value.toLowerCase())
          );
        });
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
    }, 1000),
    [],
  );

  const applySearch = (base: Submission[], search: string) =>
    base.filter(
      (row) =>
        row.user.toLowerCase().includes(search.toLowerCase()) ||
        row.message.toLowerCase().includes(search.toLowerCase()),
    );

  const OnlyImgToggle = async (value: boolean) => {
    const search = searchRef.current;
    if (value) {
      setData([]);
      const imgData = sourceData.filter((row: Submission) => row.image !== "");
      if (search !== "") {
        const resultData = applySearch(imgData, search);
        setHasMore(false);
        setData(resultData);
        setOffset(0);
      } else {
        const rows = imgData.slice(0, LIMIT);
        setHasMore(true);
        await awaitImgs(rows);
        setData(rows);
        setOffset(LIMIT);
      }
      setIsToggledOnlyImg(true);
      setisToggledTextOnly(false);
    } else {
      if (search !== "") {
        const resultData = applySearch(sourceData, search);
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
      setIsToggledOnlyImg(false);
    }
  };

  const OnlyTextToggle = async (value: boolean) => {
    if (value) {
      if (isToggledOnlyImg) {
        setOffset(0);
        const rows = sourceData.slice(0, LIMIT);
        setHasMore(true);
        await awaitImgs(rows);
        setData(rows);
        setOffset(LIMIT);
        setIsToggledOnlyImg(false);
      }
      setisToggledTextOnly(true);
      setIsToggledOnlyImg(false);
    } else {
      setisToggledTextOnly(false);
    }
  };

  const awaitImgs = async (data: Submission[]) => {
    const promises: Promise<unknown>[] = [];
    data.forEach((row: Submission) => {
      if (row.image && !row.image.includes("youtube")) {
        promises.push(
          new Promise((resolve) => {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + "/Artworks/" + row.image;
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
        <NavTitle>Messages from Takos</NavTitle>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading messages: {error.message}</div>
      ) : (
        <SiteBoard>
          <FiltersContainer>
            <SearchBar
              onChange={(e) => { searchRef.current = e.target.value; handleFilter(e); }}
              placeholder="Search..."
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflow: "hidden",
              }}
            >
              <Switch
                label="Only Images"
                value={isToggledOnlyImg}
                onChange={(value) => OnlyImgToggle(value)}
              />
              <Switch
                label="Only messages"
                value={isToggledTextOnly}
                onChange={(value) => OnlyTextToggle(value)}
              />
            </div>
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
              <p style={{ textAlign: "center", color: "var(--ink-black)" }}>Yay! You have seen it all.</p>
            }
          >
            <TakoMessages
              submissions={data}
              isToggledOnlyImg={isToggledOnlyImg}
              isToggledTextOnly={isToggledTextOnly}
            />
          </InfiniteScroll>
          <ScrollArrow />
        </SiteBoard>
      )}
    </div>
  );
};

export default MessageBoard;