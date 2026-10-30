import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router-dom";
import TakoLetters, { letterSlug } from "./TakoLetters";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../../Common/TakoLoading";
import { LetterEntry } from "../../../types";
import ScrollArrow from "../../Common/ScrollArrow";
import { debounce } from "lodash";
import {
  FiltersContainer,
  Loader,
  SiteBoard,
  SearchBar,
  NavTitle,
} from "./styles/styles";
import { Navbar, NavHome, NavHelp } from "../../Common/Navbar";
import { useFetch } from "../../../hooks/useFetch";
import { PageBgm } from "../../Common/PageBgm";
import { LoadError } from "../../Common/LoadError";
import { PageRoot } from "../../../styles/globalStyles";
import { preloadImages } from "../../../utils/preloadImages";

const LIMIT = 4;

const BoardContainer = (): JSX.Element => {
  const {
    data: rawData,
    loading,
    error,
  } = useFetch<LetterEntry[]>(`${process.env.PUBLIC_URL}/data/letterData.json`);

  const [sourceData, setSourceData] = useState<LetterEntry[]>([]);
  const sourceDataRef = useRef<LetterEntry[]>([]);
  const [data, setData] = useState<LetterEntry[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const offsetRef = useRef(0);
  const [initialOpenIndex, setInitialOpenIndex] = useState<number | null>(null);
  const hashHandledRef = useRef(false);
  const { hash } = useLocation();

  useEffect(() => {
    if (rawData) {
      const processedData = [...rawData].reverse();
      setSourceData(processedData);
      sourceDataRef.current = processedData;
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

  useEffect(() => {
    if (hashHandledRef.current || !hash || sourceData.length === 0) return;
    const slug = hash.replace("#", "");
    const idx = sourceData.findIndex((l) => letterSlug(l.image) === slug);
    if (idx < 0) return;
    hashHandledRef.current = true;
    const rows = sourceData.slice(0, idx + 1);
    awaitImgs(rows).then(() => {
      ReactDOM.unstable_batchedUpdates(() => {
        offsetRef.current = idx + 1;
        setData(rows);
        setHasMore(sourceData.length > idx + 1);
        setInitialOpenIndex(idx);
      });
    });
  }, [hash, sourceData]);

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
      const isScrollable =
        document.documentElement.scrollHeight > window.innerHeight;
      if (!isScrollable) {
        fetchMore();
      }
    }
  }, [data.length, hasMore]);

  const handleFilterDebounced = useCallback(
    debounce(async (value: string) => {
      const currentSource = sourceDataRef.current;
      if (value !== "") {
        const resultData = currentSource.filter((row: LetterEntry) =>
          row.user?.toLowerCase().includes(value.toLowerCase()),
        );
        offsetRef.current = 0;
        setHasMore(false);
        setData(resultData);
      } else {
        const rows = currentSource.slice(0, LIMIT);
        await awaitImgs(rows);
        offsetRef.current = LIMIT;
        setData(rows);
        setHasMore(currentSource.length > LIMIT);
      }
    }, 500),
    [],
  );

  const handleFilter = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleFilterDebounced(event.target.value);
    },
    [handleFilterDebounced],
  );

  const awaitImgs = (data: LetterEntry[]) =>
    preloadImages(
      data
        .filter((row) => row.image && !row.image.includes("youtube"))
        .map((row) => `${process.env.PUBLIC_URL}/letters/${row.image}`),
    );

  return (
    <PageRoot>
      <PageBgm src="/Vanilla.mp3" />
      <Navbar>
        <NavHome />
        <NavTitle>Letters for Ina</NavTitle>
        <NavHelp label="Show letters usage hint">
          <p>
            Hover an envelope to peek at it, click to open the full letter.
            Inside, use the ‹ › buttons or your arrow keys to move between
            letters, and Esc to close. The zoom controls at the bottom let you
            read small handwriting up close.
          </p>
        </NavHelp>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <LoadError what="letters" error={error} />
      ) : (
        <SiteBoard>
          <FiltersContainer>
            <SearchBar
              onChange={handleFilter}
              placeholder="Search by name..."
            />
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
              <p style={{ textAlign: "center", color: "var(--ink-black)" }}>
                Yay! You have seen it all
              </p>
            }
          >
            <TakoLetters
              submissions={data}
              initialOpenIndex={initialOpenIndex}
            />
          </InfiniteScroll>
          <ScrollArrow />
        </SiteBoard>
      )}
    </PageRoot>
  );
};

export default BoardContainer;
