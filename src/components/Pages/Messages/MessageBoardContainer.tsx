import React, { useEffect, useState, useMemo } from "react";
import TakoMessages from "./TakoMessages";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../../Common/TakoLoading";
import { Submission } from "../../../types";
import ScrollArrow from "../../Common/BackToTop";
import { Switch } from "../../Common/Switch";
import { debounce, DebouncedFunc } from "lodash";
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
      let resultData = sourceData;
      if (isToggledOnlyImg) {
        resultData = resultData.filter((row: Submission) => row.image !== "");
      }
      if (isToggledTextOnly) {
        resultData = resultData.filter((row: Submission) => row.message);
      }

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

  const handleFilter = useMemo(() =>
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
    }, 1000) as DebouncedFunc<(event: React.ChangeEvent<HTMLInputElement>) => Promise<void>>,
    [sourceData],
  );

  useEffect(() => {
    return () => {
      handleFilter.cancel();
    };
  }, [handleFilter]);

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
      const imgData = sourceData.filter((row: Submission) => row.image);
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
    const search = searchRef.current;
    if (value) {
      setData([]);
      const textData = sourceData.filter((row: Submission) => row.message);
      if (search !== "") {
        const resultData = applySearch(textData, search);
        setHasMore(false);
        setData(resultData);
        setOffset(0);
      } else {
        const rows = textData.slice(0, LIMIT);
        setHasMore(true);
        await awaitImgs(rows);
        setData(rows);
        setOffset(LIMIT);
      }
      setisToggledTextOnly(true);
      setIsToggledOnlyImg(false);
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
            img.src = process.env.PUBLIC_URL + "/artworks/" + row.image;
            img.onerror = resolve;
            img.onload = resolve;
          }),
        );
      }
    });
    await Promise.allSettled(promises);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--background)" }}>
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/Vanilla.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Navbar>
        <NavHome />
        <NavTitle>Artworks &amp; Messages</NavTitle>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading messages: {error.message}</div>
      ) : (
        <SiteBoard>
          <div style={{ textAlign: "center", padding: "2rem 1rem 1rem" }}>
            <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "var(--dark-highlight)", marginBottom: "1rem" }}>
              HAPPY BIRTHDAY INA! 🐙💜
            </h1>
            <video
              controls
              style={{ maxWidth: "min(720px, 100%)", width: "100%", borderRadius: "12px" }}
              src={`${process.env.PUBLIC_URL}/TakoToriDay3_InaBday.mp4`}
            />
            <p style={{ fontSize: "0.85rem", color: "var(--dark-highlight)", marginTop: "0.5rem", opacity: 0.8 }}>
              From Drawn to Dawn Fan Meeting Day 3
            </p>
          </div>
          <FiltersContainer style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <SearchBar
              onChange={(e) => { searchRef.current = e.target.value; handleFilter(e); }}
              placeholder="Search..."
              style={{ flex: 1, minWidth: "160px" }}
            />
            <div style={{ display: "flex", flexDirection: "row", overflow: "hidden", flexShrink: 0 }}>
              <Switch
                label="Only Images"
                value={isToggledOnlyImg}
                onChange={(value) => OnlyImgToggle(value)}
                color="var(--light-highlight)"
                labelColor="var(--dark-highlight)"
              />
              <Switch
                label="Only messages"
                value={isToggledTextOnly}
                onChange={(value) => OnlyTextToggle(value)}
                color="var(--light-highlight)"
                labelColor="var(--dark-highlight)"
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