import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Moment, MomentCategory } from "../../../types";
import { useFetch } from "../../../hooks/useFetch";
import { useCenterCarousel } from "../../../hooks/useCenterCarousel";
import { Navbar, NavHome, NavHelp } from "../../Common/Navbar";
import {
  CarouselCenterMark,
  CompactNavTitle,
  SiteBoard,
  EdgeArrow,
  ExhibitCounter,
} from "../../../styles/globalStyles";
import { Switch } from "../../Common/Switch";
import { TakoLoading } from "../../Common/TakoLoading";
import GalleryFans from "./GalleryFans";
import MomentCarousel from "./MomentCarousel";
import {
  CategorySwitchRow,
  GalleryWall,
  SearchInput,
  SubNavBar,
  WoodFloor,
  YearButton,
  YearNavRow,
} from "./styles";
import { PageBgm } from "../../Common/PageBgm";
import { LoadError } from "../../Common/LoadError";

const CATEGORY_LABEL: Record<MomentCategory, string> = {
  milestone: "Ina's Milestones",
  myth: "Myth Moments",
  funny: "Funny Moments",
};

const CATEGORIES = Object.keys(CATEGORY_LABEL) as MomentCategory[];

const MomentsGallery = (): JSX.Element => {
  const { data, loading, error } = useFetch<Moment[]>(
    `${process.env.PUBLIC_URL}/data/momentsData.json`,
  );
  const [categoryFilter, setCategoryFilter] = useState<MomentCategory | null>(
    null,
  );
  const [tributesOnly, setTributesOnly] = useState(false);
  const [search, setSearch] = useState("");

  const moments = useMemo(
    () =>
      [...(data ?? [])].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      ),
    [data],
  );
  const preSearch = useMemo(
    () =>
      moments.filter(
        (m) =>
          (!categoryFilter || m.category === categoryFilter) &&
          (!tributesOnly || m.tributes.length > 0),
      ),
    [moments, categoryFilter, tributesOnly],
  );
  const filtered = useMemo(() => {
    const query = search.trim();
    if (!query) return preSearch;
    const quoted =
      query.length >= 2 && query.startsWith('"') && query.endsWith('"');
    if (quoted) {
      const keyword = query.slice(1, -1).toLowerCase();
      return preSearch.filter((m) => m.context.toLowerCase().includes(keyword));
    }
    const needle = query.toLowerCase();
    return preSearch.filter(
      (m) =>
        m.title.toLowerCase().includes(needle) ||
        m.tributes.some((t) => t.author.toLowerCase().includes(needle)),
    );
  }, [preSearch, search]);
  const years = useMemo(
    () =>
      Array.from(new Set(filtered.map((m) => new Date(m.date).getFullYear())))
        .filter((y) => !Number.isNaN(y))
        .sort((a, b) => a - b),
    [filtered],
  );

  const carousel = useCenterCarousel(
    filtered.length,
    2,
    `${categoryFilter ?? "all"}-${tributesOnly ? "tributes" : "any"}-${search}`,
  );
  const pivotMoment = filtered[carousel.pivotIndex];
  const pivotYear = pivotMoment
    ? new Date(pivotMoment.date).getFullYear()
    : null;

  const setCategory = (value: MomentCategory) => (active: boolean) =>
    setCategoryFilter(active ? value : null);

  const { hash } = useLocation();
  const hasHandledHash = useRef(false);
  const { goTo } = carousel;

  useEffect(() => {
    if (hasHandledHash.current || !hash || moments.length === 0) return;
    const slug = hash.replace("#", "");
    const target = moments.find(
      (m) =>
        m.slug === slug ||
        slug.startsWith(`${m.slug}-t-`) ||
        slug.startsWith(`${m.slug}-r-`),
    );
    if (!target) return;
    if (categoryFilter && target.category !== categoryFilter) {
      setCategoryFilter(null);
      return;
    }
    if (tributesOnly && target.tributes.length === 0) {
      setTributesOnly(false);
      return;
    }
    const index = filtered.indexOf(target);
    if (index >= 0) {
      hasHandledHash.current = true;
      goTo(index);
    }
  }, [hash, moments, filtered, categoryFilter, tributesOnly, goTo]);

  const goToYear = (year: number) => {
    const index = filtered.findIndex(
      (m) => new Date(m.date).getFullYear() === year,
    );
    if (index >= 0) carousel.goTo(index);
  };

  return (
    <GalleryWall>
      <WoodFloor />
      <GalleryFans
        momentKey={pivotMoment?.slug ?? ""}
        reactions={pivotMoment?.reactions}
      />
      <PageBgm src="/Vanilla.mp3" />
      <Navbar>
        <NavHome />
        <CompactNavTitle>Moments Gallery</CompactNavTitle>
        <SubNavBar>
          <CategorySwitchRow>
            {CATEGORIES.map((cat) => (
              <Switch
                key={cat}
                label={CATEGORY_LABEL[cat]}
                value={categoryFilter === cat}
                onChange={setCategory(cat)}
                labelColor="var(--text-color)"
              />
            ))}
            <Switch
              label="With Tributes"
              value={tributesOnly}
              onChange={setTributesOnly}
              labelColor="var(--text-color)"
            />
            <SearchInput
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Title, tributer, or "keyword"'
              aria-label="Search moments"
            />
          </CategorySwitchRow>
          {years.length > 1 && (
            <YearNavRow>
              {years.map((year) => (
                <YearButton
                  key={year}
                  type="button"
                  $active={year === pivotYear}
                  onClick={() => goToYear(year)}
                >
                  {year}
                </YearButton>
              ))}
            </YearNavRow>
          )}
        </SubNavBar>
        <NavHelp label="Show gallery usage hint">
          <p>
            Walk the wall with the arrows at either edge of the screen, or drag
            the exhibits directly. A piece with fan tributes shows a swap button
            underneath its frame: cycle it to compare the original against every
            tribute, or tap a tribute&apos;s avatar to jump straight to it.
          </p>
          <p>
            Mascot art by <b>takomonty</b>.
          </p>
        </NavHelp>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <LoadError what="moments" error={error} />
      ) : (
        <SiteBoard
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
            background: "transparent",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <MomentCarousel moments={filtered} carousel={carousel} />
        </SiteBoard>
      )}
      {filtered.length > 0 && (
        <ExhibitCounter>
          {carousel.pivotIndex + 1} / {filtered.length}
        </ExhibitCounter>
      )}
      {carousel.dragging && <CarouselCenterMark />}
      <EdgeArrow
        $side="left"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => carousel.goTo(carousel.pivotIndex - 1)}
        disabled={carousel.pivotIndex === 0}
        aria-label="Previous moment"
      >
        <i className="fa fa-chevron-left" aria-hidden="true" />
      </EdgeArrow>
      <EdgeArrow
        $side="right"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => carousel.goTo(carousel.pivotIndex + 1)}
        disabled={carousel.pivotIndex >= filtered.length - 1}
        aria-label="Next moment"
      >
        <i className="fa fa-chevron-right" aria-hidden="true" />
      </EdgeArrow>
    </GalleryWall>
  );
};

export default MomentsGallery;
