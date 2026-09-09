import React, { useMemo, useState } from "react";
import { WahrldEntry, WahrldKind } from "../../../types";
import { useFetch } from "../../../hooks/useFetch";
import { useCenterCarousel } from "../../../hooks/useCenterCarousel";
import { Navbar, NavHome } from "../../Common/Navbar";
import {
  CarouselCenterMark,
  NavTitle,
  SiteBoard,
} from "../../../styles/globalStyles";
import { Switch } from "../../Common/Switch";
import { TakoLoading } from "../../Common/TakoLoading";
import { getTakoAvatar } from "../Timeline/ScrollListUtils";
import { PageArrowButton } from "../Outfits/styles/BannerStyle";
import WahrldCard, { getEntryAvatar } from "./WahrldCard";
import {
  CarouselCounter,
  CarouselNav,
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

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--background)",
      }}
    >
      <Navbar>
        <NavHome />
        <NavTitle>Ina around the WAHrld</NavTitle>
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
              <CarouselNav>
                <PageArrowButton
                  onClick={() => goTo(pivotIndex - 1)}
                  disabled={pivotIndex === 0}
                  aria-label="Previous submission"
                >
                  <i className="fa fa-chevron-left" aria-hidden="true" />
                </PageArrowButton>
                <CarouselCounter>
                  {pivotIndex + 1} / {total}
                </CarouselCounter>
                <PageArrowButton
                  onClick={() => goTo(pivotIndex + 1)}
                  disabled={pivotIndex >= total - 1}
                  aria-label="Next submission"
                >
                  <i className="fa fa-chevron-right" aria-hidden="true" />
                </PageArrowButton>
              </CarouselNav>
              {dragging && <CarouselCenterMark />}
              <GalleryScroller ref={containerRef} {...containerHandlers}>
                {filtered.map((entry, i) => {
                  const isPivot = i === pivotIndex;
                  const showBig = isPivot && !dragging;
                  return (
                    <EntrySlot
                      key={`${entry.user}-${i}`}
                      $isPivot={isPivot}
                      $dragging={dragging}
                      ref={(el: HTMLDivElement | null) => {
                        itemRefs.current[i] = el;
                      }}
                      onClick={isPivot ? undefined : () => goTo(i)}
                    >
                      {showBig ? (
                        <WahrldCard entry={entry} index={i} />
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
