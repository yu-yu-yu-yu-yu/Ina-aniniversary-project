import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom";
import SongContainer from "./SongContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import { TakoLoading } from "../../Common/TakoLoading";
import { SongData, SongOrigin, PerformanceContext, deriveArchiveStatus } from "../../../types/song";
import ScrollArrow from "../../Common/BackToTop";
import { Switch } from "../../Common/Switch";
import { debounce } from "lodash";
import {
  Loader,
  SiteBoard,
  SearchBar,
  NavTitle,
  PlaylistDrawerSeparator,
  PlaylistBackdrop,
  PlaylistDrawerContainer,
  SongCountBadge,
  NavButtonGroup,
  ModalButton,
  DropdownContent,
  FilterGroup,
  SearchRow,
  SearchRowButtons,
  SectionHeader,
  playlistFilterColors,
} from "./styles/styles";
import { Navbar, NavHome, HintButton } from "../../Common/Navbar";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import { useFetch } from "../../../hooks/useFetch";

const LIMIT = 4;

type ArchiveFilterValue = "archived" | "unofficially archived" | "unarchived";
type GroupBy = "type" | "archive" | "collab" | "performance";

const getFiltered = (
  source: SongData[],
  filters: {
    originFilter: SongOrigin | null;
    contextFilter: PerformanceContext | null;
    sourceFilter: string | null;
    archiveFilter: ArchiveFilterValue | null;
  },
  query: string,
): SongData[] => {
  let result = source;
  if (filters.originFilter)
    result = result.filter((s) => s.origin === filters.originFilter);
  if (filters.contextFilter)
    result = result.filter((s) => s.performances.some((p) => p.context === filters.contextFilter));
  if (filters.sourceFilter)
    result = result.filter((s) => s.performances.some((p) => p.name === filters.sourceFilter));
  if (filters.archiveFilter)
    result = result.filter((s) => deriveArchiveStatus(s) === filters.archiveFilter);
  if (query) {
    const q = query.toLowerCase();
    result = result.filter(
      (s) =>
        s.songName?.toLowerCase().includes(q) ||
        s.songInfo?.toLowerCase().includes(q) ||
        s.coverInfo?.toLowerCase().includes(q) ||
        s.origin.toLowerCase().includes(q) ||
        s.collab.toLowerCase().includes(q) ||
        s.performances.some(
          (p) => p.context.toLowerCase().includes(q) || p.name?.toLowerCase().includes(q),
        ),
    );
  }
  return result;
};

const groupSongs = (songs: SongData[], by: GroupBy): { label: string; songs: SongData[] }[] => {
  if (by === "type") {
    const ina      = songs.filter((s) => s.origin === "Ina's original");
    const holo     = songs.filter((s) => s.origin === "Hololive's original");
    const covers   = songs.filter((s) => s.origin === "3rd Party" && s.performances.some((p) => p.context === "cover"));
    const thirdPty = songs.filter((s) => s.origin === "3rd Party" && !s.performances.some((p) => p.context === "cover"));
    const banana   = songs.filter((s) => s.origin === "banana");
    return [
      ...(ina.length      ? [{ label: "Ina's Original",      songs: ina      }] : []),
      ...(covers.length   ? [{ label: "Covers",              songs: covers   }] : []),
      ...(holo.length     ? [{ label: "Hololive's Original", songs: holo     }] : []),
      ...(thirdPty.length ? [{ label: "3rd Party",           songs: thirdPty }] : []),
      ...(banana.length   ? [{ label: "Banana",              songs: banana   }] : []),
    ];
  }
  if (by === "archive") {
    const archived   = songs.filter((s) => deriveArchiveStatus(s) === "archived");
    const unofficial = songs.filter((s) => deriveArchiveStatus(s) === "unofficially archived");
    const unarchived = songs.filter((s) => deriveArchiveStatus(s) === "unarchived");
    return [
      ...(archived.length   ? [{ label: "Archived",              songs: archived   }] : []),
      ...(unofficial.length ? [{ label: "Unofficially Archived", songs: unofficial }] : []),
      ...(unarchived.length ? [{ label: "Unarchived",            songs: unarchived }] : []),
    ];
  }
  if (by === "collab") {
    const solo  = songs.filter((s) => s.collab === "solo");
    const duo   = songs.filter((s) => s.collab === "duo");
    const group = songs.filter((s) => s.collab === "group");
    return [
      ...(solo.length  ? [{ label: "Solo",  songs: solo  }] : []),
      ...(duo.length   ? [{ label: "Duo",   songs: duo   }] : []),
      ...(group.length ? [{ label: "Group", songs: group }] : []),
    ];
  }
  if (by === "performance") {
    const sections: { label: string; songs: SongData[] }[] = [];
    const karaoke  = songs.filter((s) => s.performances.some((p) => p.context === "karaoke"));
    const featured = songs.filter((s) => s.performances.some((p) => p.context === "featured"));
    const banana   = songs.filter((s) => s.performances.some((p) => p.context === "banana"));
    if (karaoke.length)  sections.push({ label: "Karaoke",  songs: karaoke  });
    if (featured.length) sections.push({ label: "Featured", songs: featured });
    if (banana.length)   sections.push({ label: "Banana",   songs: banana   });
    const concertNames = Array.from(
      new Set(songs.flatMap((s) => s.performances.filter((p) => p.name).map((p) => p.name!))),
    ).sort();
    for (const name of concertNames) {
      const matching = songs.filter((s) => s.performances.some((p) => p.name === name));
      if (matching.length) sections.push({ label: name, songs: matching });
    }
    return sections;
  }
  return [];
};

const awaitImgs = async (items: SongData[]) => {
  const promises = items
    .filter((row) => {
      const first = row.performances[0];
      return first?.link && !first.link.includes("youtube");
    })
    .map(
      (row) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = `${process.env.PUBLIC_URL}/songLinks/${row.performances[0].link}`;
          img.onerror = () => resolve();
          img.onload = () => resolve();
        }),
    );
  await Promise.allSettled(promises);
};

const DropdownPanel = ({
  label,
  icon,
  children,
}: {
  label: string;
  icon: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + 8, left: rect.left });
    }
    setOpen((o) => !o);
  };

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        dropRef.current && !dropRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <>
      <ModalButton ref={btnRef} onClick={handleToggle}>
        <i className={`fa ${icon}`} /> {label}
      </ModalButton>
      {open && ReactDOM.createPortal(
        <DropdownContent
          ref={dropRef}
          style={{ position: "fixed", top: pos.top, left: pos.left }}
        >
          {children}
        </DropdownContent>,
        document.body,
      )}
    </>
  );
};

interface FiltersPanelProps {
  originFilter: SongOrigin | null;
  setOrigin: (value: SongOrigin) => (active: boolean) => void;
  contextFilter: PerformanceContext | null;
  setContext: (value: PerformanceContext) => (active: boolean) => void;
  sourceFilter: string | null;
  setSource: (value: string) => (active: boolean) => void;
  archiveFilter: ArchiveFilterValue | null;
  setArchive: (value: ArchiveFilterValue) => (active: boolean) => void;
  sources: string[];
}

const FiltersPanel = ({
  originFilter, setOrigin,
  contextFilter, setContext,
  sourceFilter, setSource,
  archiveFilter, setArchive,
  sources,
}: FiltersPanelProps) => (
  <>
    <FilterGroup>
      <Switch label="Ina's Originals"      value={originFilter === "Ina's original"}      onChange={setOrigin("Ina's original")}      color={playlistFilterColors["Ina's original"]}      mobile />
      <Switch label="Hololive's Originals" value={originFilter === "Hololive's original"} onChange={setOrigin("Hololive's original")} color={playlistFilterColors["Hololive's original"]} mobile />
      <Switch label="3rd Partys"  value={originFilter === "3rd Party"}  onChange={setOrigin("3rd Party")}  color={playlistFilterColors["3rd Party"]}  mobile />
      <Switch label="Banana"      value={originFilter === "banana"}      onChange={setOrigin("banana")}      color={playlistFilterColors["banana"]}      mobile />
      <Switch label="Covers"             value={contextFilter === "cover"}            onChange={setContext("cover")}            color={playlistFilterColors["cover"]}              mobile />
      <Switch label="Karaoke"            value={contextFilter === "karaoke"}          onChange={setContext("karaoke")}          color={playlistFilterColors["karaoke"]}            mobile />
      <Switch label="Concert"             value={contextFilter === "concert"}           onChange={setContext("concert")}           color={playlistFilterColors["concert"]}           mobile />
      <Switch label="Featured"            value={contextFilter === "featured"}          onChange={setContext("featured")}          color={playlistFilterColors["featured"]}          mobile />
      <Switch label="Banana"              value={contextFilter === "banana"}            onChange={setContext("banana")}            color={playlistFilterColors["banana"]}            mobile />
    </FilterGroup>
    <PlaylistDrawerSeparator>Archive</PlaylistDrawerSeparator>
    <FilterGroup>
      <Switch label="Archived"   value={archiveFilter === "archived"}             onChange={setArchive("archived")}             color={playlistFilterColors["archived"]}              mobile />
      <Switch label="Unofficial" value={archiveFilter === "unofficially archived"} onChange={setArchive("unofficially archived")} color={playlistFilterColors["unofficially archived"]} mobile />
    </FilterGroup>
    {sources.length > 0 && (
      <>
        <PlaylistDrawerSeparator>Source</PlaylistDrawerSeparator>
        <FilterGroup>
          {sources.map((src) => (
            <Switch
              key={src}
              label={src}
              value={sourceFilter === src}
              onChange={setSource(src)}
              color={playlistFilterColors["concert"]}
              mobile
            />
          ))}
        </FilterGroup>
      </>
    )}
  </>
);

interface GroupPanelProps {
  groupBy: GroupBy | null;
  setGroupBy: (v: GroupBy) => (active: boolean) => void;
}

const GroupPanel = ({ groupBy, setGroupBy }: GroupPanelProps) => (
  <FilterGroup>
    <Switch label="By Type"        value={groupBy === "type"}        onChange={setGroupBy("type")}        color={playlistFilterColors["Ina's original"]}   mobile />
    <Switch label="By Archive"     value={groupBy === "archive"}     onChange={setGroupBy("archive")}     color={playlistFilterColors["archived"]}          mobile />
    <Switch label="By Collab"      value={groupBy === "collab"}      onChange={setGroupBy("collab")}      color={playlistFilterColors["duo"]}               mobile />
    <Switch label="By Performance" value={groupBy === "performance"} onChange={setGroupBy("performance")} color={playlistFilterColors["concert"]}           mobile />
  </FilterGroup>
);

const HelpPanel = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px", color: "var(--text-color)", maxWidth: "280px" }}>
    <div>
      <strong style={{ color: "var(--dark-highlight)" }}>Search</strong>
      <p style={{ margin: "4px 0 0" }}>Type to filter by song name, artist, or performance source.</p>
    </div>
    <div>
      <strong style={{ color: "var(--dark-highlight)" }}>Filters</strong>
      <p style={{ margin: "4px 0 0" }}>Filter by origin (Ina&apos;s, Hololive&apos;s, 3rd Party), performance type (Cover, Karaoke, Concert), or archive status.</p>
    </div>
    <div>
      <strong style={{ color: "var(--dark-highlight)" }}>Group</strong>
      <p style={{ margin: "4px 0 0" }}>Group all songs by origin, archive status, collab type, or performance venue.</p>
    </div>
    <div>
      <strong style={{ color: "var(--dark-highlight)" }}>Ina ver. / Orig. ver.</strong>
      <p style={{ margin: "4px 0 0" }}>Globally switches all cards to show the original song version. Click the subtitle on any individual card to cycle through all available performances for that song.</p>
    </div>
  </div>
);

const PlaylistBoard = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  const { data: rawData, loading, error } = useFetch<SongData[]>(
    `${process.env.PUBLIC_URL}/data/songInfoData.json`,
  );

  const [sourceData, setSourceData] = useState<SongData[]>([]);
  const [data, setData] = useState<SongData[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const offsetRef = useRef(0);
  const filteredDataRef = useRef<SongData[]>([]);

  const [showOriginal, setShowOriginal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [originFilter, setOriginFilter] = useState<SongOrigin | null>(null);
  const [contextFilter, setContextFilter] = useState<PerformanceContext | null>(null);
  const [sourceFilter, setSourceFilter] = useState<string | null>(null);
  const [archiveFilter, setArchiveFilter] = useState<ArchiveFilterValue | null>("archived");
  const [groupBy, setGroupByState] = useState<GroupBy | null>("type");
  const [groupedOffset, setGroupedOffset] = useState(LIMIT);
  const groupedOffsetRef = useRef(LIMIT);
  const groupedFetchingRef = useRef(false);

  useEffect(() => {
    if (rawData) setSourceData([...rawData].reverse());
  }, [rawData]);

  const sources = useMemo(() => {
    const names = new Set<string>();
    sourceData.forEach((s) => s.performances.forEach((p) => { if (p.name) names.add(p.name); }));
    return Array.from(names).sort();
  }, [sourceData]);

  const filteredData = useMemo(
    () => getFiltered(sourceData, { originFilter, contextFilter, sourceFilter, archiveFilter }, searchQuery),
    [sourceData, originFilter, contextFilter, sourceFilter, archiveFilter, searchQuery],
  );
  filteredDataRef.current = filteredData;

  useEffect(() => {
    if (!sourceData.length || groupBy) return;
    const rows = filteredData.slice(0, LIMIT);
    awaitImgs(rows).then(() => {
      offsetRef.current = LIMIT;
      setData(rows);
      setHasMore(filteredData.length > LIMIT);
    });
  }, [filteredData, groupBy]);

  useEffect(() => {
    if (hasMore && data.length > 0 && !groupBy) {
      const raf = requestAnimationFrame(() => {
        const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
        if (!isScrollable) fetchMore();
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [data.length, hasMore, groupBy]);

  const fetchMore = async () => {
    const current = filteredDataRef.current;
    const rows = current.slice(offsetRef.current, LIMIT + offsetRef.current);
    if (rows.length === 0) { setHasMore(false); return; }
    await awaitImgs(rows);
    offsetRef.current += LIMIT;
    setData((prev) => prev.concat(rows));
  };

  const allGrouped = useMemo(
    () => groupBy ? groupSongs(filteredData, groupBy) : null,
    [filteredData, groupBy],
  );

  const groupOrdered = useMemo(
    () => allGrouped ? allGrouped.flatMap((g) => g.songs) : [],
    [allGrouped],
  );
  const groupOrderedRef = useRef<SongData[]>([]);
  groupOrderedRef.current = groupOrdered;

  useEffect(() => {
    if (!groupBy) return;
    groupedOffsetRef.current = LIMIT;
    groupedFetchingRef.current = false;
    setGroupedOffset(LIMIT);
  }, [filteredData, groupBy]);

  const fetchMoreGrouped = async () => {
    if (groupedFetchingRef.current) return;
    groupedFetchingRef.current = true;
    const ordered = groupOrderedRef.current;
    const slice = ordered.slice(groupedOffsetRef.current, groupedOffsetRef.current + LIMIT);
    if (!slice.length) { groupedFetchingRef.current = false; return; }
    await awaitImgs(slice);
    groupedOffsetRef.current += LIMIT;
    setGroupedOffset(groupedOffsetRef.current);
    groupedFetchingRef.current = false;
  };

  useEffect(() => {
    if (!groupBy) return;
    if (groupedOffset >= groupOrderedRef.current.length) return;
    const raf = requestAnimationFrame(() => {
      const isScrollable = document.documentElement.scrollHeight > window.innerHeight;
      if (!isScrollable) fetchMoreGrouped();
    });
    return () => cancelAnimationFrame(raf);
  }, [groupedOffset, groupBy, groupOrdered.length]);

  const visibleGrouped = useMemo(
    () => groupBy ? groupSongs(groupOrdered.slice(0, groupedOffset), groupBy) : null,
    [groupOrdered, groupBy, groupedOffset],
  );

  const handleFilter = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    }, 500),
    [],
  );

  const setOrigin  = (value: SongOrigin)        => (active: boolean) => setOriginFilter(active ? value : null);
  const setContext = (value: PerformanceContext) => (active: boolean) => setContextFilter(active ? value : null);
  const setSource  = (value: string)             => (active: boolean) => setSourceFilter(active ? value : null);
  const setArchive = (value: ArchiveFilterValue) => (active: boolean) => setArchiveFilter(active ? value : null);
  const setGroupBy = (value: GroupBy)            => (active: boolean) => setGroupByState(active ? value : null);

  const filterProps: FiltersPanelProps = {
    originFilter, setOrigin, contextFilter, setContext,
    sourceFilter, setSource, archiveFilter, setArchive, sources,
  };
  const groupProps: GroupPanelProps = { groupBy, setGroupBy };

  const filterDropdown = (
    <DropdownPanel label="Filters" icon="fa-filter">
      <FiltersPanel {...filterProps} />
    </DropdownPanel>
  );

  const groupDropdown = (
    <DropdownPanel label="Group" icon="fa-th-list">
      <GroupPanel {...groupProps} />
    </DropdownPanel>
  );

  const helpButton = (
    <DropdownPanel label="Help" icon="fa-question-circle">
      <HelpPanel />
    </DropdownPanel>
  );

  const versionToggle = (
    <ModalButton active={showOriginal} onClick={() => setShowOriginal((v) => !v)}>
      <i className="fa fa-exchange" />
      {showOriginal ? "Orig. ver." : "Ina ver."}
    </ModalButton>
  );

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
        <NavTitle>Ultimate Ina Playlist</NavTitle>
        <NavButtonGroup>
          <HintButton onClick={() => setDrawerOpen(true)}>
            <i className="fa fa-filter" /> Filters
          </HintButton>
        </NavButtonGroup>
      </Navbar>

      {drawerOpen && ReactDOM.createPortal(
        <>
          <PlaylistBackdrop onClick={() => setDrawerOpen(false)} />
          <PlaylistDrawerContainer>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ font: "normal normal 700 16px/20px Montserrat", color: "var(--text-color)" }}>
                Filters &amp; Search
              </span>
              <ModalButton onClick={() => setDrawerOpen(false)} style={{ minWidth: "unset", padding: "6px 12px" }}>
                <i className="fa fa-times" />
              </ModalButton>
            </div>
            {sourceData.length > 0 && (
              <SongCountBadge style={{ justifyContent: "center" }}>
                <i className="fa fa-music" /> Ina has sung: {sourceData.length} songs!
              </SongCountBadge>
            )}
            <SearchBar onChange={handleFilter} placeholder="Search..." style={{ marginBottom: 0 }} />
            <PlaylistDrawerSeparator>Filters</PlaylistDrawerSeparator>
            <FiltersPanel {...filterProps} />
            <PlaylistDrawerSeparator>Group</PlaylistDrawerSeparator>
            <GroupPanel {...groupProps} />
            <PlaylistDrawerSeparator>Version</PlaylistDrawerSeparator>
            <ModalButton active={showOriginal} onClick={() => setShowOriginal((v) => !v)} style={{ width: "100%" }}>
              <i className="fa fa-exchange" />
              {showOriginal ? "Orig. ver." : "Ina ver."}
            </ModalButton>
            <PlaylistDrawerSeparator>Help</PlaylistDrawerSeparator>
            <HelpPanel />
          </PlaylistDrawerContainer>
        </>,
        document.body,
      )}

      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading: {error.message}</div>
      ) : (
        <SiteBoard>
          <SearchRow>
            <SearchRowButtons>
              {filterDropdown}
              {groupDropdown}
              {versionToggle}
              {helpButton}
              {sourceData.length > 0 && (
                <SongCountBadge>
                  <i className="fa fa-music" /> Ina has sung: {sourceData.length} songs!
                </SongCountBadge>
              )}
            </SearchRowButtons>
            <SearchBar onChange={handleFilter} placeholder="Search..." style={{ marginBottom: 0, flex: "1 1 0", maxWidth: "50%", marginLeft: "auto" }} />
          </SearchRow>

          {visibleGrouped ? (
            <InfiniteScroll
              style={{ overflow: "hidden" }}
              scrollThreshold="50px"
              dataLength={Math.min(groupedOffset, groupOrdered.length)}
              next={fetchMoreGrouped}
              hasMore={groupedOffset < groupOrdered.length}
              loader={<Loader><TakoLoading /></Loader>}
              endMessage={<p style={{ textAlign: "center", color: "var(--ink-black)" }}>Yay! You have seen it all</p>}
            >
              {visibleGrouped.map(({ label, songs }) => (
                <React.Fragment key={label}>
                  <SectionHeader>{label}</SectionHeader>
                  <SongContainer SongData={songs} showOriginal={showOriginal} />
                </React.Fragment>
              ))}
            </InfiniteScroll>
          ) : (
            <InfiniteScroll
              style={{ overflow: "hidden" }}
              scrollThreshold="50px"
              dataLength={data.length}
              next={fetchMore}
              hasMore={hasMore}
              loader={<Loader><TakoLoading /></Loader>}
              endMessage={
                <p style={{ textAlign: "center", color: "var(--ink-black)" }}>Yay! You have seen it all</p>
              }
            >
              <SongContainer SongData={data} showOriginal={showOriginal} />
            </InfiniteScroll>
          )}
          <ScrollArrow />
        </SiteBoard>
      )}
    </div>
  );
};

export default PlaylistBoard;
