import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../../Common/TakoLoading";
import { Submission } from "../../../types";
import ScrollArrow from "../../Common/ScrollArrow";
import { debounce } from "lodash";
import {
  FiltersContainer,
  Loader,
  SiteBoard,
  SearchBar,
  NavTitle,
} from "./styles";
import { Navbar, NavHome } from "../../Common/Navbar";
import TakoVideos, { videoSlug } from "./TakoVideos";
import { useFetch } from "../../../hooks/useFetch";
import { toEmbed } from "../../../utils/youtube";
import { LoadError } from "../../Common/LoadError";
import { PageRoot } from "../../../styles/globalStyles";

const LIMIT = 10;

const VideoBoardContainer = ({ mode }: { mode: string }): JSX.Element => {
  const {
    data: rawData,
    loading,
    error,
  } = useFetch<Submission[]>(`${process.env.PUBLIC_URL}/data/video.json`);
  const [sourceData, setSourceData] = useState([]);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [highlightSlug, setHighlightSlug] = useState<string | null>(null);
  const sourceDataRef = useRef(sourceData);
  sourceDataRef.current = sourceData;
  const { hash } = useLocation();
  const hashHandledRef = useRef(false);

  useEffect(() => {
    if (rawData) {
      const data = rawData.map((original) => {
        const row = { ...original };
        const key = mode === "moments" ? "moment" : "wah";
        let link = row[key];
        if (link.includes("http") && !link.includes("clip")) {
          link = toEmbed(link);
        }
        if (mode === "wah") {
          row.sub = row.wah_sub;
          row.message = "";
        }
        row.image = link;
        return row;
      });
      setSourceData(data);
      const rows = data.slice(0, LIMIT);
      setData(rows);
      setOffset(LIMIT);
    }
  }, [rawData, mode]);

  useEffect(() => {
    if (hashHandledRef.current || !hash || sourceData.length === 0) return;
    const slug = hash.replace("#", "");
    const idx = sourceData.findIndex(
      (row: Submission) => videoSlug(row) === slug,
    );
    if (idx < 0) return;
    hashHandledRef.current = true;
    const rows = sourceData.slice(0, idx + 1);
    setData(rows);
    setOffset(idx + 1);
    setHasMore(sourceData.length > idx + 1);
    setHighlightSlug(slug);
  }, [hash, sourceData]);

  const fetchMore = async () => {
    if (data.length) {
      const rows = sourceData.slice(offset, LIMIT + offset);

      if (!rows.length) {
        setHasMore(false);
      }

      setData(data.concat(rows));
      setOffset(LIMIT + offset);
    }
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
    debounce((value: string) => {
      const currentSource = sourceDataRef.current;
      if (value) {
        const resultData = currentSource.filter((row: Submission) => {
          return (
            (row.user ?? "").toLowerCase().includes(value.toLowerCase()) ||
            (row.message ?? "").toLowerCase().includes(value.toLowerCase())
          );
        });
        setHasMore(false);

        setData(resultData);
        setOffset(0);
      } else {
        const rows = currentSource.slice(0, LIMIT);
        setHasMore(true);

        setData(rows);
        setOffset(LIMIT);
      }
    }, 1000),
    [],
  );

  const handleFilter = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleFilterDebounced(event.target.value);
    },
    [handleFilterDebounced],
  );

  return (
    <PageRoot>
      <Navbar>
        <NavHome />
        <NavTitle>
          {mode === "wah"
            ? "Ina around the WAH (2024)"
            : "Ina's Moments (2024)"}
        </NavTitle>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <LoadError what="videos" error={error} />
      ) : (
        <SiteBoard>
          <FiltersContainer>
            <SearchBar onChange={handleFilter} placeholder="Search..." />
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
            <TakoVideos submissions={data} highlightSlug={highlightSlug} />
          </InfiniteScroll>
          <ScrollArrow />
        </SiteBoard>
      )}
    </PageRoot>
  );
};

export default VideoBoardContainer;
