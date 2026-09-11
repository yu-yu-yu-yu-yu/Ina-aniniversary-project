import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { WahrldEntry, WahrldKind } from "../../../types";
import { useFetch } from "../../../hooks/useFetch";
import { useCenterCarousel } from "../../../hooks/useCenterCarousel";
import { useAudio } from "../../../hooks/useAudio";
import { entrySlug } from "../../../utils/shareLink";
import { Navbar, NavHome } from "../../Common/Navbar";
import {
  CarouselCenterMark,
  CompactNavTitle,
  SiteBoard,
} from "../../../styles/globalStyles";
import { Switch } from "../../Common/Switch";
import { TakoLoading } from "../../Common/TakoLoading";
import { useMute } from "../../Common/MuteButton";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import { EdgeArrow, ExhibitCounter } from "../MomentsGallery/styles";
import WahrldCard, { getEntryAvatar } from "./WahrldCard";
import {
  EntrySlot,
  GalleryScroller,
  GalleryWrapper,
  KindSwitchRow,
  NeighborAvatar,
  NeighborCard,
  NoEntriesYet,
} from "./styles";

const KIND_LABEL: Record<WahrldKind, string> = {
  image: "Images",
  video: "Videos",
};

const KINDS = Object.keys(KIND_LABEL) as WahrldKind[];

const WahrldPage = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  const { data, loading, error } = useFetch<WahrldEntry[]>(
    `${process.env.PUBLIC_URL}/data/wahrldData.json`,
  );
  const [kindFilter, setKindFilter] = useState<WahrldKind | null>(null);

  const entries = useMemo(() => data ?? [], [data]);
  const filtered = useMemo(
    () => (kindFilter ? entries.filter((e) => e.kind === kindFilter) : entries),
    [entries, kindFilter],
  );

  const setKind = (value: WahrldKind) => (active: boolean) =>
    setKindFilter(active ? value : null);

  const total = filtered.length;
  const {
    pivotIndex,
    dragging,
    goTo,
    containerRef,
    itemRefs,
    containerHandlers,
  } = useCenterCarousel(total);

  const wahrldSlug = (entry: WahrldEntry) =>
    entrySlug(entry.user, entry.country);

  const { hash } = useLocation();
  const hasHandledHash = useRef(false);

  useEffect(() => {
    if (hasHandledHash.current || !hash || entries.length === 0) return;
    const slug = hash.replace("#", "");
    const target = entries.find((e) => wahrldSlug(e) === slug);
    if (!target) return;
    if (kindFilter && target.kind !== kindFilter) {
      setKindFilter(null);
      return;
    }
    const index = filtered.findIndex((e) => wahrldSlug(e) === slug);
    if (index >= 0) {
      hasHandledHash.current = true;
      goTo(index);
    }
  }, [hash, entries, filtered, kindFilter, goTo]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--background)",
      }}
    >
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/リコーダービート2.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Navbar>
        <NavHome />
        <CompactNavTitle>Ina around the WAHrld</CompactNavTitle>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading submissions: {error.message}</div>
      ) : (
        <SiteBoard
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <KindSwitchRow>
            {KINDS.map((kind) => (
              <Switch
                key={kind}
                label={KIND_LABEL[kind]}
                value={kindFilter === kind}
                onChange={setKind(kind)}
                labelColor="var(--dark-highlight)"
              />
            ))}
          </KindSwitchRow>
          {total === 0 ? (
            <NoEntriesYet>No submissions yet, check back soon!</NoEntriesYet>
          ) : (
            <GalleryWrapper>
              <ExhibitCounter>
                {pivotIndex + 1} / {total}
              </ExhibitCounter>
              <EdgeArrow
                $side="left"
                onClick={() => goTo(pivotIndex - 1)}
                disabled={pivotIndex === 0}
                aria-label="Previous submission"
              >
                <i className="fa fa-chevron-left" aria-hidden="true" />
              </EdgeArrow>
              <EdgeArrow
                $side="right"
                onClick={() => goTo(pivotIndex + 1)}
                disabled={pivotIndex >= total - 1}
                aria-label="Next submission"
              >
                <i className="fa fa-chevron-right" aria-hidden="true" />
              </EdgeArrow>
              {dragging && <CarouselCenterMark />}
              <GalleryScroller
                ref={containerRef}
                $dragging={dragging}
                {...containerHandlers}
              >
                {filtered.map((entry, i) => {
                  const isPivot = i === pivotIndex;
                  const showBig = isPivot && !dragging;
                  const slug = wahrldSlug(entry);
                  return (
                    <EntrySlot
                      key={`${entry.user}-${i}`}
                      id={slug}
                      $isPivot={isPivot}
                      $dragging={dragging}
                      ref={(el: HTMLDivElement | null) => {
                        itemRefs.current[i] = el;
                      }}
                      onClick={isPivot ? undefined : () => goTo(i)}
                    >
                      {showBig ? (
                        <WahrldCard entry={entry} index={i} slug={slug} />
                      ) : (
                        <NeighborCard>
                          <NeighborAvatar
                            src={getEntryAvatar(entry.icon, i)}
                            alt={entry.user}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = getTakoAvatar(null, i);
                            }}
                          />
                          <span>{entry.user}</span>
                        </NeighborCard>
                      )}
                    </EntrySlot>
                  );
                })}
              </GalleryScroller>
            </GalleryWrapper>
          )}
        </SiteBoard>
      )}
    </div>
  );
};

export default WahrldPage;
