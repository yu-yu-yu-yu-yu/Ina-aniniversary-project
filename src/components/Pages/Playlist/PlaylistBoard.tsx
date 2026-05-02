import React, { useEffect, useState } from "react";
import SongContainer from "./SongContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../../Common/TakoLoading";
import { SongData } from "../../../types/song";
import ScrollArrow from "../../Common/BackToTop";
import { Switch } from "../../Common/Switch";
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

const LIMIT = 20;

const getFiltered = (
  source: SongData[],
  filters: {
    typeFilter: SongData["type"] | null;
    archiveFilter: SongData["archived"] | null;
    duoOnly: boolean;
    groupOnly: boolean;
  },
  query: string,
): SongData[] => {
  let result = source;
  if (filters.typeFilter) result = result.filter((s) => s.type === filters.typeFilter);
  if (filters.archiveFilter) result = result.filter((s) => s.archived === filters.archiveFilter);
  if (filters.duoOnly) result = result.filter((s) => s.collab === "duo");
  if (filters.groupOnly) result = result.filter((s) => s.collab === "group");
  if (query) {
    const q = query.toLowerCase();
    result = result.filter(
      (s) =>
        s.songName?.toLowerCase().includes(q) ||
        s.songInfo?.toLowerCase().includes(q),
    );
  }
  return result;
};

const awaitImgs = async (items: SongData[]) => {
  const promises = items
    .filter((row) => row.songLink && !row.songLink.includes("youtube"))
    .map(
      (row) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = `${process.env.PUBLIC_URL}/songLinks/${row.songLink}`;
          img.onerror = () => resolve();
          img.onload = () => resolve();
        }),
    );
  await Promise.allSettled(promises);
};

const PlaylistBoard = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  const {
    data: rawData,
    loading,
    error,
  } = useFetch<SongData[]>(`${process.env.PUBLIC_URL}/data/songInfoData.json`);

  const [sourceData, setSourceData] = useState<SongData[]>([]);
  const [data, setData] = useState<SongData[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [typeFilter, setTypeFilter] = useState<SongData["type"] | null>(null);
  const [archiveFilter, setArchiveFilter] = useState<SongData["archived"] | null>(null);
  const [duoOnly, setDuoOnly] = useState(false);
  const [groupOnly, setGroupOnly] = useState(false);

  useEffect(() => {
    if (rawData) {
      setSourceData([...rawData].reverse());
    }
  }, [rawData]);

  useEffect(() => {
    if (!sourceData.length) return;
    const filters = { typeFilter, archiveFilter, duoOnly, groupOnly };
    const filtered = getFiltered(sourceData, filters, searchQuery);
    const rows = filtered.slice(0, LIMIT);
    awaitImgs(rows).then(() => {
      setData(rows);
      setOffset(LIMIT);
      setHasMore(filtered.length > LIMIT);
    });
  }, [sourceData, typeFilter, archiveFilter, duoOnly, groupOnly, searchQuery]);

  const fetchMore = async () => {
    const filters = { typeFilter, archiveFilter, duoOnly, groupOnly };
    const filtered = getFiltered(sourceData, filters, searchQuery);
    const rows = filtered.slice(offset, LIMIT + offset);
    if (rows.length === 0) {
      setHasMore(false);
      return;
    }
    await awaitImgs(rows);
    setData((prev) => prev.concat(rows));
    setOffset((prev) => prev + LIMIT);
  };

  const handleFilter = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    500,
  );

  const setType = (value: SongData["type"]) => (active: boolean) =>
    setTypeFilter(active ? value : null);

  const setArchive = (value: SongData["archived"]) => (active: boolean) =>
    setArchiveFilter(active ? value : null);

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
        <NavTitle>Ultimate Ina Playlist</NavTitle>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading: {error.message}</div>
      ) : (
        <SiteBoard>
          <FiltersContainer>
            <SearchBar onChange={handleFilter} placeholder="Search..." />
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "8px" }}>
              <Switch label="Covers"            value={typeFilter === "cover"}            onChange={setType("cover")} />
              <Switch label="Ina's Originals"   value={typeFilter === "Ina's original"}   onChange={setType("Ina's original")} />
              <Switch label="Artist's Originals" value={typeFilter === "Artist's original"} onChange={setType("Artist's original")} />
              <Switch label="Karaoke"           value={typeFilter === "karaoke"}          onChange={setType("karaoke")} />
              <Switch label="Concert"           value={typeFilter === "concert"}          onChange={setType("concert")} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
              <Switch label="Archived"          value={archiveFilter === "archived"}           onChange={setArchive("archived")} />
              <Switch label="Unofficial Archive" value={archiveFilter === "unofficial archive"} onChange={setArchive("unofficial archive")} />
              <Switch label="Duo"               value={duoOnly}  onChange={setDuoOnly} />
              <Switch label="Group"             value={groupOnly} onChange={setGroupOnly} />
            </div>
          </FiltersContainer>
          <InfiniteScroll
            style={{ overflow: "hidden" }}
            scrollThreshold="50px"
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
            <SongContainer SongData={data} />
          </InfiniteScroll>
          <ScrollArrow />
        </SiteBoard>
      )}
    </div>
  );
};

export default PlaylistBoard;
