import {
  Milestone,
  Tags,
  IScrollListProps,
  Month,
  Year,
} from "../../../types/timeline";
import React, {
  ChangeEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Switch } from "../../Common/Switch";
import { entrySlug } from "../../../utils/shareLink";
import { upperCase } from "lodash";
import {
  Backdrop,
  DrawerContainer,
  DrawerSeparator,
  DrawerToggleI,
  MonthDisplay,
  MonthListContainer,
  PageArrowButton,
  ScrollListContainer,
  SearchBarContainer,
  SearchInput,
  TagBarContainer,
  TagsContainer,
  TopControlsContainer,
  YearDisplay,
  YearContainer,
  TagDropdownSelect,
} from "./styles/List";
import {
  mappedMonths,
  months,
  years,
  tagColors,
  getUniqueTitleTags,
  getMessagesForMilestone,
} from "./ScrollListUtils";
import ReactDOM from "react-dom";
import { TimelineStage } from "./TimelineStage";

const SearchBar = ({
  searchString,
  setSearchString,
}: {
  searchString: string;
  setSearchString: (_searchValue: string) => void;
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={searchString}
        onInput={handleChange}
        placeholder="Search..."
      />
    </SearchBarContainer>
  );
};

const TagBar = ({
  tags,
  setSelectedTags,
  mobile,
}: {
  tags: Tags;
  setSelectedTags: (_tags: Tags) => void;
  mobile?: boolean;
}) => (
  <TagBarContainer>
    <TagsContainer>
      <Switch
        label="Highlighted"
        value={tags.highlight}
        onChange={(value) => setSelectedTags({ ...tags, highlight: value })}
        color={tagColors.highlight}
        labelColor="var(--dark-highlight)"
        mobile={mobile}
      />
      <Switch
        label="Important streams"
        value={tags.important}
        onChange={(value) => setSelectedTags({ ...tags, important: value })}
        color={tagColors.important}
        labelColor="var(--dark-highlight)"
        mobile={mobile}
      />
      <Switch
        label="Gaming streams"
        value={tags.gaming}
        onChange={(value) => setSelectedTags({ ...tags, gaming: value })}
        color={tagColors.gaming}
        labelColor="var(--dark-highlight)"
        mobile={mobile}
      />
      <Switch
        label="Drawing streams"
        value={tags.drawing}
        onChange={(value) => setSelectedTags({ ...tags, drawing: value })}
        color={tagColors.drawing}
        labelColor="var(--dark-highlight)"
        mobile={mobile}
      />
      <Switch
        label="Collabs"
        value={tags.collab}
        onChange={(value) => setSelectedTags({ ...tags, collab: value })}
        color={tagColors.collab}
        labelColor="var(--dark-highlight)"
        mobile={mobile}
      />
      <Switch
        label="Songs"
        value={tags.song}
        onChange={(value) => setSelectedTags({ ...tags, song: value })}
        color={tagColors.song}
        labelColor="var(--dark-highlight)"
        mobile={mobile}
      />
      <Switch
        label="Has Comment"
        value={tags.hasComment}
        onChange={(value) => setSelectedTags({ ...tags, hasComment: value })}
        color="#00FF99"
        labelColor="var(--dark-highlight)"
        mobile={mobile}
      />
    </TagsContainer>
  </TagBarContainer>
);

const TopControls = ({
  searchString,
  setSearchString,
  selectedTags,
  setSelectedTags,
  selectedTitleTag,
  setSelectedTitleTag,
  milestones,
  mobile,
}: IScrollListProps["searchProps"] & {
  selectedTitleTag: string;
  setSelectedTitleTag: (tag: string) => void;
  milestones: Milestone[];
  mobile?: boolean;
}) => (
  <TopControlsContainer>
    <div style={{ marginBottom: 18 }}>
      <SearchBar
        searchString={searchString}
        setSearchString={setSearchString}
      />
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <TagBar
        mobile={mobile}
        tags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <TagDropdown
        milestones={milestones}
        selectedTag={selectedTitleTag}
        setSelectedTag={setSelectedTitleTag}
        mobile={mobile}
      />
    </div>
  </TopControlsContainer>
);

const TagDropdown = ({
  milestones,
  selectedTag,
  setSelectedTag,
  mobile,
}: {
  milestones: Milestone[];
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
  mobile?: boolean;
}) => {
  const tags = useMemo(() => getUniqueTitleTags(milestones), [milestones]);
  return (
    <div style={{ marginLeft: 24, display: "inline-block" }}>
      <TagDropdownSelect
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        mobile={mobile}
      >
        <option value="">All Tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            【{tag}】
          </option>
        ))}
      </TagDropdownSelect>
    </div>
  );
};

function filterMilestonesWithTitleTag(
  selectedTags: Tags,
  milestones: Milestone[],
  searchString: string,
  selectedTitleTag: string,
) {
  const isAnyTag = Object.values(selectedTags).reduce(
    (acc, val) => acc || val,
    false,
  );
  return milestones.filter(({ tags, label, longText }) => {
    const searchCondition = upperCase(label).includes(upperCase(searchString));
    let tagCondition = !isAnyTag;
    for (const tag in tags) {
      tagCondition =
        tagCondition ||
        (tags[tag as keyof Tags] && selectedTags[tag as keyof Tags]);
    }
    if (selectedTags.hasComment) {
      const messages = getMessagesForMilestone({
        label,
        longText,
      } as Milestone);
      if (!messages.length) return false;
      tagCondition = true;
    }
    let titleTagCondition = true;
    if (selectedTitleTag) {
      const match = label.match(/【([^】]+)】/);
      titleTagCondition = match ? match[1] === selectedTitleTag : false;
    }
    return searchCondition && tagCondition && titleTagCondition;
  });
}

export const MonthNavItem = ({
  entry,
  direction,
  onNavigate,
  mobile,
}: {
  entry: { year: Year; month: Month };
  direction: "prev" | "next";
  onNavigate: (month: Month, year: Year) => void;
  mobile: boolean;
}) => {
  const isPrev = direction === "prev";
  const icon = mobile
    ? isPrev
      ? "fa fa-chevron-up"
      : "fa fa-chevron-down"
    : isPrev
      ? "fa fa-chevron-left"
      : "fa fa-chevron-right";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        padding: mobile ? "16px 0" : "0 40px",
        gap: 8,
        ...(mobile ? { width: "100%" } : {}),
      }}
    >
      <PageArrowButton
        onClick={() => onNavigate(entry.month, entry.year as Year)}
      >
        <i className={icon} aria-hidden="true" />
      </PageArrowButton>
      <span
        style={{
          color: "var(--light-highlight)",
          fontSize: "0.85em",
          textAlign: "center",
          lineHeight: 1.3,
          whiteSpace: "nowrap",
        }}
      >
        {entry.month}
        <br />
        {entry.year}
      </span>
    </div>
  );
};

function YearPicker({
  setYear,
  selected,
}: {
  setYear: (year: Year) => void;
  selected: Year;
}) {
  const [open, setOpen] = useState(false);

  const handleYearClick = (year: Year) => {
    setYear(year);
  };
  return (
    <YearContainer onClick={() => setOpen(!open)}>
      {years.map((year) => (
        <YearDisplay
          key={year}
          onClick={() => handleYearClick(year)}
          selected={year == selected}
        >
          {year}
        </YearDisplay>
      ))}
    </YearContainer>
  );
}

const BottomControls = ({
  selectedMonth,
  setMonth,
  year,
  setYear,
  allMilestones,
}: {
  selectedMonth: Month;
  setMonth: (m: Month) => void;
  year: Year;
  setYear: (y: Year) => void;
  allMilestones: Milestone[];
}) => {
  const monthsWithEntries = useMemo(() => {
    const monthSet = new Set<string>();
    allMilestones.forEach((m) => {
      const [, mMonth, mYear] = m.date.split(/\W/);
      if (mYear === year) monthSet.add(mappedMonths[mMonth]);
    });
    return months.filter((m) => monthSet.has(m));
  }, [allMilestones, year]);

  const selectedIndex = monthsWithEntries.findIndex((m) => m === selectedMonth);

  return (
    <>
      <YearPicker selected={year} setYear={setYear} />
      <MonthListContainer>
        {months.map((month) => {
          const monthIndex = monthsWithEntries.findIndex((m) => m === month);
          const hasEntries = monthIndex !== -1;
          return (
            <MonthDisplay
              highlight={month === selectedMonth}
              passed={hasEntries && monthIndex < selectedIndex}
              key={month}
              onClick={hasEntries ? () => setMonth(month as Month) : undefined}
              style={{
                opacity: hasEntries ? 1 : 0.18,
                cursor: hasEntries ? "pointer" : "default",
                pointerEvents: hasEntries ? "auto" : "none",
              }}
            >
              {month}
            </MonthDisplay>
          );
        })}
      </MonthListContainer>
    </>
  );
};

const Drawer = ({
  visible,
  searchProps,
  monthProps,
  toggleDrawer,
  milestones,
  filteredMilestones,
}: {
  visible: boolean;
  toggleDrawer: () => void;
  milestones: Milestone[];
  filteredMilestones: Milestone[];
} & Pick<IScrollListProps, "searchProps" | "monthProps">) => {
  if (!visible) return null;
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={toggleDrawer} />
      <DrawerContainer>
        <TopControls
          mobile
          {...searchProps}
          selectedTitleTag={searchProps.selectedTitleTag}
          setSelectedTitleTag={searchProps.setSelectedTitleTag}
          milestones={milestones}
        />
        <DrawerSeparator>Jump To</DrawerSeparator>
        <BottomControls {...monthProps} allMilestones={filteredMilestones} />
      </DrawerContainer>
    </>,
    document.getElementById("root") as HTMLElement,
  );
};

export const ScrollListWide = ({
  searchProps,
  milestones,
  monthProps,
  modalControls,
  allFilteredMilestones,
  prevMonthEntry,
  nextMonthEntry,
  onNavigate,
}: Pick<
  IScrollListProps,
  "searchProps" | "milestones" | "monthProps" | "modalControls"
> & {
  allFilteredMilestones: Milestone[];
  prevMonthEntry: { year: Year; month: Month } | null;
  nextMonthEntry: { year: Year; month: Month } | null;
  onNavigate: (month: Month, year: Year) => void;
}) => {
  return (
    <ScrollListContainer>
      {modalControls ? null : <TopControls {...searchProps} />}
      <TimelineStage
        milestones={milestones}
        prevMonthEntry={prevMonthEntry}
        nextMonthEntry={nextMonthEntry}
        onNavigate={onNavigate}
      />
      {modalControls ? null : (
        <BottomControls {...monthProps} allMilestones={allFilteredMilestones} />
      )}
    </ScrollListContainer>
  );
};

export const DrawerToggle = ({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element => (
  <DrawerToggleI onClick={onClick} aria-label="Open search and filters">
    <i className="fa fa-search" aria-hidden="true" /> Search
  </DrawerToggleI>
);

export const ScrollList = ({
  milestones,
  modalControls,
  drawerVisible,
  toggleDrawer,
}: {
  milestones: Milestone[];
  modalControls: boolean;
  drawerVisible: boolean;
  toggleDrawer: () => void;
}): JSX.Element => {
  const [month, setMonthState] = useState<Month>(() => {
    const first = milestones[0];
    return first
      ? (mappedMonths[first.date.split(/\W/)[1]] as Month)
      : "September";
  });
  const [year, setYearState] = useState<Year>(() => {
    const first = milestones[0];
    return first ? (first.date.split(/\W/)[2] as Year) : (years[0] as Year);
  });
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tags>({} as Tags);
  const [selectedTitleTag, setSelectedTitleTag] = useState<string>("");

  const selected = useMemo(
    () =>
      filterMilestonesWithTitleTag(
        selectedTags,
        milestones,
        searchString,
        selectedTitleTag,
      ),
    [selectedTags, milestones, searchString, selectedTitleTag],
  );

  const allMonthsWithEntries = useMemo(() => {
    const seen = new Set<string>();
    const result: Array<{ year: Year; month: Month }> = [];
    selected.forEach((m) => {
      const [, mMonth, mYear] = m.date.split(/\W/);
      const key = `${mYear}_${mMonth}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push({
          year: mYear as Year,
          month: mappedMonths[mMonth] as Month,
        });
      }
    });
    return result;
  }, [selected]);

  const monthFiltered = useMemo(
    () =>
      selected.filter((m) => {
        const [, mMonth, mYear] = m.date.split(/\W/);
        return mappedMonths[mMonth] === month && mYear === year;
      }),
    [selected, month, year],
  );

  const currentIdx = allMonthsWithEntries.findIndex(
    (x) => x.year === year && x.month === month,
  );
  const prevMonthEntry =
    currentIdx > 0 ? allMonthsWithEntries[currentIdx - 1] : null;
  const nextMonthEntry =
    currentIdx < allMonthsWithEntries.length - 1
      ? allMonthsWithEntries[currentIdx + 1]
      : null;

  useEffect(() => {
    if (allMonthsWithEntries.length > 0 && currentIdx === -1) {
      const first = allMonthsWithEntries[0];
      setMonthState(first.month);
      setYearState(first.year as Year);
    }
  }, [allMonthsWithEntries, currentIdx]);

  const { hash, pathname } = useLocation();
  const history = useHistory();

  const scrollToMonth = (
    targetMonth: Month,
    targetYear: Year = year,
    fromHash = false,
  ) => {
    if (!fromHash && hash) history.replace(pathname);
    setMonthState(targetMonth);
    setYearState(targetYear);
  };

  const handleYear = (targetYear: Year) => {
    const first = allMonthsWithEntries.find((x) => x.year === targetYear);
    if (first) {
      if (hash) history.replace(pathname);
      setMonthState(first.month);
      setYearState(first.year as Year);
    }
  };

  const hasHandledHash = useRef(false);

  useEffect(() => {
    if (hasHandledHash.current || !hash) return;
    const slug = hash.replace("#", "");
    const target = milestones.find((m) =>
      slug.startsWith(`${entrySlug(m.label)}-`),
    );
    if (!target) return;
    const hasActiveFilter =
      searchString !== "" ||
      selectedTitleTag !== "" ||
      Object.values(selectedTags).some(Boolean);
    if (hasActiveFilter) {
      setSearchString("");
      setSelectedTags({} as Tags);
      setSelectedTitleTag("");
      return;
    }
    const [, mMonth, mYear] = target.date.split(/\W/);
    const targetMonth = mappedMonths[mMonth] as Month;
    const targetYear = mYear as Year;
    if (month !== targetMonth || year !== targetYear) {
      scrollToMonth(targetMonth, targetYear, true);
      return;
    }
    hasHandledHash.current = true;
  }, [
    hash,
    milestones,
    searchString,
    selectedTags,
    selectedTitleTag,
    month,
    year,
  ]);

  const searchProps = {
    searchString,
    setSearchString,
    selectedTags,
    setSelectedTags,
    selectedTitleTag,
    setSelectedTitleTag,
    milestones,
  };
  const monthProps = {
    selectedMonth: month,
    setMonth: (m: Month) => scrollToMonth(m),
    year,
    setYear: handleYear,
  };

  return (
    <>
      <Drawer
        visible={drawerVisible}
        searchProps={searchProps}
        monthProps={monthProps}
        toggleDrawer={toggleDrawer}
        milestones={milestones}
        filteredMilestones={selected}
      />
      <ScrollListWide
        searchProps={searchProps}
        milestones={monthFiltered}
        monthProps={monthProps}
        modalControls={modalControls}
        allFilteredMilestones={selected}
        prevMonthEntry={prevMonthEntry}
        nextMonthEntry={nextMonthEntry}
        onNavigate={scrollToMonth}
      />
    </>
  );
};
