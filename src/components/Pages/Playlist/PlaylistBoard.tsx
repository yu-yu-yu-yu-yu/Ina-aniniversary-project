import React, { useCallback, useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
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
  PlaylistBackdrop,
  PlaylistDrawerContainer,
  PlaylistDrawerToggle,
  PlaylistDrawerSeparator,
  playlistFilterColors,
} from "./styles/styles";
import { Navbar, NavHome } from "../../Common/Navbar";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import { useFetch } from "../../../hooks/useFetch";

const LIMIT = 20;
const MOBILE_BREAKPOINT = 700;

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
        s.songInfo?.toLowerCase().includes(q) ||
        s.coverInfo?.toLowerCase().includes(q) ||
        s.type?.toLowerCase().includes(q) ||
        s.collab?.toLowerCase().includes(q),
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

interface FilterSwitchesProps {
  typeFilter: SongData["type"] | null;
  setType: (value: SongData["type"]) => (active: boolean) => void;
  archiveFilter: SongData["archived"] | null;
  setArchive: (value: SongData["archived"]) => (active: boolean) => void;
  duoOnly: boolean;
  setDuoOnly: (v: boolean) => void;
  groupOnly: boolean;
  setGroupOnly: (v: boolean) => void;
  mobile?: boolean;
}

const FilterSwitches = ({
  typeFilter,
  setType,
  archiveFilter,
  setArchive,
  duoOnly,
  setDuoOnly,
  groupOnly,
  setGroupOnly,
  mobile,
}: FilterSwitchesProps) => {
  const direction = mobile ? "column" : "row";
  return (
    <>
      <div style={{ display: "flex", flexDirection: direction, flexWrap: "wrap", gap: "8px" }}>
        <Switch label="Covers"             value={typeFilter === "cover"}             onChange={setType("cover")}             color={playlistFilterColors["cover"]}              mobile={mobile} />
        <Switch label="Ina's Originals"    value={typeFilter === "Ina's original"}    onChange={setType("Ina's original")}    color={playlistFilterColors["Ina's original"]}  mobile={mobile} />
        <Switch label="Artist's Originals" value={typeFilter === "Artist's original"} onChange={setType("Artist's original")} color={playlistFilterColors["Artist's original"]} mobile={mobile} />
        <Switch label="Karaoke"            value={typeFilter === "karaoke"}           onChange={setType("karaoke")}           color={playlistFilterColors["karaoke"]}            mobile={mobile} />
        <Switch label="Concert"            value={typeFilter === "concert"}           onChange={setType("concert")}           color={playlistFilterColors["concert"]}            mobile={mobile} />
      </div>
      <div style={{ display: "flex", flexDirection: direction, flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
        <Switch label="Archived"           value={archiveFilter === "archived"}           onChange={setArchive("archived")}           color={playlistFilterColors["archived"]}            mobile={mobile} />
        <Switch label="Unofficial Archive" value={archiveFilter === "unofficial archive"} onChange={setArchive("unofficial archive")} color={playlistFilterColors["unofficial archive"]} mobile={mobile} />
        <Switch label="Duo"                value={duoOnly}   onChange={setDuoOnly}   color={playlistFilterColors["duo"]}   mobile={mobile} />
        <Switch label="Group"              value={groupOnly}  onChange={setGroupOnly}  color={playlistFilterColors["group"]}  mobile={mobile} />
      </div>
    </>
  );
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
  const [archiveFilter, setArchiveFilter] = useState<SongData["archived"] | null>("archived");
  const [duoOnly, setDuoOnly] = useState(false);
  const [groupOnly, setGroupOnly] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (rawData) {
      setSourceData([...rawData].reverse());
    }
  }, [rawData]);

  const filteredData = useMemo(
    () => getFiltered(sourceData, { typeFilter, archiveFilter, duoOnly, groupOnly }, searchQuery),
    [sourceData, typeFilter, archiveFilter, duoOnly, groupOnly, searchQuery],
  );

  useEffect(() => {
    if (!sourceData.length) return;
    const rows = filteredData.slice(0, LIMIT);
    awaitImgs(rows).then(() => {
      setData(rows);
      setOffset(LIMIT);
      setHasMore(filteredData.length > LIMIT);
    });
  }, [filteredData]); // filteredData already encapsulates sourceData as a dep

  const fetchMore = async () => {
    const rows = filteredData.slice(offset, LIMIT + offset);
    if (rows.length === 0) {
      setHasMore(false);
      return;
    }
    await awaitImgs(rows);
    setData((prev) => prev.concat(rows));
    setOffset((prev) => prev + LIMIT);
  };

  const handleFilter = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    }, 500),
    [],
  );

  const setType = (value: SongData["type"]) => (active: boolean) =>
    setTypeFilter(active ? value : null);

  const setArchive = (value: SongData["archived"]) => (active: boolean) =>
    setArchiveFilter(active ? value : null);

  const filterProps: FilterSwitchesProps = {
    typeFilter,
    setType,
    archiveFilter,
    setArchive,
    duoOnly,
    setDuoOnly,
    groupOnly,
    setGroupOnly,
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
        <NavTitle>Ultimate Ina Playlist</NavTitle>
        {isMobile && (
          <PlaylistDrawerToggle
            className="fa fa-search"
            onClick={() => setDrawerOpen(true)}
          />
        )}
      </Navbar>
      {isMobile && drawerOpen && ReactDOM.createPortal(
        <>
          <PlaylistBackdrop onClick={() => setDrawerOpen(false)} />
          <PlaylistDrawerContainer>
            <SearchBar onChange={handleFilter} placeholder="Search..." style={{ marginBottom: 0 }} />
            <PlaylistDrawerSeparator>Filters</PlaylistDrawerSeparator>
            <FilterSwitches {...filterProps} mobile />
          </PlaylistDrawerContainer>
        </>,
        document.getElementById("root") as HTMLElement,
      )}
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading: {error.message}</div>
      ) : (
        <SiteBoard>
          {!isMobile && (
            <FiltersContainer>
              <SearchBar onChange={handleFilter} placeholder="Search..." />
              <FilterSwitches {...filterProps} />
            </FiltersContainer>
          )}
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
              <p style={{ textAlign: "center", color: "var(--ink-black)" }}>Yay! You have seen it all</p>
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
