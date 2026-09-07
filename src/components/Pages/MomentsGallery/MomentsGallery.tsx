import React, { useMemo, useState } from "react";
import { Moment, MomentCategory } from "../../../types";
import { useFetch } from "../../../hooks/useFetch";
import { Navbar, NavHome } from "../../Common/Navbar";
import { NavTitle, SiteBoard } from "../../../styles/globalStyles";
import { Switch } from "../../Common/Switch";
import { TakoLoading } from "../../Common/TakoLoading";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";
import MomentCarousel from "./MomentCarousel";
import { CategorySwitchRow } from "./styles";

const CATEGORY_LABEL: Record<MomentCategory, string> = {
  milestone: "Ina's Milestones",
  myth: "Myth Moments",
  funny: "Funny Moments",
};

const CATEGORIES = Object.keys(CATEGORY_LABEL) as MomentCategory[];

const MomentsGallery = (): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });
  const { data, loading, error } = useFetch<Moment[]>(
    `${process.env.PUBLIC_URL}/data/momentsData.json`,
  );
  const [categoryFilter, setCategoryFilter] = useState<MomentCategory | null>(
    null,
  );

  const moments = useMemo(() => data ?? [], [data]);
  const filtered = useMemo(
    () =>
      categoryFilter
        ? moments.filter((m) => m.category === categoryFilter)
        : moments,
    [moments, categoryFilter],
  );

  const setCategory = (value: MomentCategory) => (active: boolean) =>
    setCategoryFilter(active ? value : null);

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
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/Vanilla.mp3"}
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <Navbar>
        <NavHome />
        <NavTitle>Moments Gallery</NavTitle>
      </Navbar>
      {loading ? (
        <TakoLoading />
      ) : error ? (
        <div>Error loading moments: {error.message}</div>
      ) : (
        <SiteBoard
          style={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CategorySwitchRow>
            {CATEGORIES.map((cat) => (
              <Switch
                key={cat}
                label={CATEGORY_LABEL[cat]}
                value={categoryFilter === cat}
                onChange={setCategory(cat)}
                labelColor="var(--dark-highlight)"
              />
            ))}
          </CategorySwitchRow>
          <MomentCarousel moments={filtered} />
        </SiteBoard>
      )}
    </div>
  );
};

export default MomentsGallery;
