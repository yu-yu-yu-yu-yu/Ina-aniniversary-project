import { Milestone, Tags, IScrollListProps, Month, MonthWithYear, Year } from "../../../types/timeline";
import React, { ChangeEvent, createRef, RefObject, useEffect, useMemo, useRef, useState } from "react";
import { Switch } from "../../Common/Switch";
import { upperCase, throttle } from "lodash";
import {
  Backdrop,
  Circle,
  DrawerContainer,
  DrawerSeparator,
  DrawerToggleI,
  EventContainer,
  EventDate,
  EventInfo,
  EventLabel,
  EventModalContainer,
  EventModalDate,
  EventModalHeading,
  EventModalInfo,
  EventModalInfoLeft,
  EventPreview,
  EventThumbMobile,
  Line,
  ListScrollable,
  ModalMedia,
  ModalVideo,
  MonthAnchorHeader,
  MonthDisplay,
  MonthListContainer,
  PageArrowButton,
  ScrollListContainer,
  SearchBarContainer,
  SearchInput,
  TagBarContainer,
  TagsContainer,
  TopControlsContainer,
  Triangle, YearDisplay,
  YearContainer,
  TagDropdownSelect
} from "./styles/List";
import {
  getMediaLink,
  mappedMonths,
  months, monthsWithYears,
  years,
  getMilestoneOutline,
  tagColors,
  getTakoAvatar,
  getUniqueTitleTags,
  getMessagesForMilestone
} from "./ScrollListUtils";
import { TimelineDialogueBox } from "./styles/List";
import ReactDOM from "react-dom";
import { useMute } from "../../Common/MuteButton";
import { useAudio } from "../../../hooks/useAudio";

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
      <SearchBar searchString={searchString} setSearchString={setSearchString} />
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

interface IMonthAnchorPropsLocal {
  date: Milestone["date"];
  mobile?: boolean;
}

const MonthAnchor = React.forwardRef<HTMLSpanElement, IMonthAnchorPropsLocal>(
  function MonthAnchor({ date, mobile }: IMonthAnchorPropsLocal, ref): JSX.Element {
    return (
      <MonthAnchorHeader className={mobile ? "mobile" : ""} ref={ref}>
        {mappedMonths[date.split(/\W/)[1]]}
      </MonthAnchorHeader>
    );
  }
);

const Thumb = ({
  event,
  mobile,
}: {
  event: Milestone;
  mobile?: boolean;
}) => (
  <EventPreview
    src={event.media}
    outline={getMilestoneOutline(event.tags || {})}
    className={mobile ? "mobile" : ""}
  />
);

interface EventBasePropsLocal {
  event: Milestone;
  monthStart: boolean;
  onClick: () => void;
  refMap: IScrollListProps["refMap"];
}

interface EventMobilePropsLocal extends EventBasePropsLocal {
}

interface EventProps extends EventBasePropsLocal {
}

const EventMobile = ({
  event,
  monthStart,
  refMap,
  onClick,
}: EventMobilePropsLocal & { event: Milestone & { isLast?: boolean } }) => {
  const { highlight, label, date } = event;
  const [, month, year] = date.split(/\W/);
  const monthWithYear = `${year}_${mappedMonths[month]}`
  return (
    <EventContainer className={"mobile"} highlight={!!highlight} onClick={onClick}>
      {monthStart ? (
        <MonthAnchor
          ref={refMap.current[monthWithYear as MonthWithYear]}
          mobile
          date={date}
        />
      ) : null}
      <Circle />
      {!event.isLast && <Line className={"mobile"} />}
      <Triangle className={"mobile"} />
      <EventThumbMobile>
        <EventLabel className={"mobile"}>{label}</EventLabel>
        <Thumb mobile event={event} />
        <EventDate className={"mobile"}>{date.replace(/\W/g, "·")}</EventDate>
      </EventThumbMobile>
    </EventContainer>
  );
};

const Event = ({
  refMap,
  event,
  monthStart,
  onClick,
}: EventProps & { event: Milestone & { isLast?: boolean } }) => {
  const { highlight, label, date } = event;
  const [, month, year] = date.split(/\W/);
  const monthWithYear = `${year}_${mappedMonths[month]}`;
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [hoverMessage, setHoverMessage] = useState<{ text: string, author: string | null, type: string } | null>(null);

  const handleMouseEnter = () => {
    const messages = getMessagesForMilestone(event);
    if (messages.length > 0) {
      setHoverMessage(messages[Math.floor(Math.random() * messages.length)]);
    }
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
    setMousePos(null);
    setHoverMessage(null);
  };
  const handleMouseMove = useMemo(
    () => throttle((e: React.MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY }), 32),
    [],
  );

  return (
    <EventContainer
      highlight={!!highlight}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ position: "relative" }}
    >
      {monthStart ? (
        <MonthAnchor
          ref={refMap.current[monthWithYear as MonthWithYear]}
          date={date}
        />
      ) : null}
      <Thumb event={event} />
      <EventInfo>
        <Triangle />
        <Circle />
        {!event.isLast && <Line />}
        <EventLabel>{label}</EventLabel>
        <EventDate>{date.replace(/\W/g, "·")}</EventDate>
      </EventInfo>
      {hovered && hoverMessage && mousePos && (
        <TimelineDialogueBox
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translateY(-100%rem)",
            position: "fixed",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: "0"
          }}
        >
          {hoverMessage.author && (
            <img
              src={getTakoAvatar(hoverMessage.author)}
              alt={hoverMessage.author || "Takodachi"}
              className="takodachi-avatar"
              style={{
                width: 120,
                height: 120,
                position: "absolute",
                left: -75,
              }}
              onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = getTakoAvatar(null);
              }}
            />
          )}
          <div style={{ marginLeft: hoverMessage.author ? 32 : 0, minWidth: 220, maxWidth: 400, display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 14 }}>{hoverMessage.text}</span>
            {hoverMessage.author && (
              <span style={{ fontSize: 13, marginTop: 12, color: "#ffd580", alignSelf: "flex-end" }}>
                by: {hoverMessage.author}
              </span>
            )}
          </div>
        </TimelineDialogueBox>
      )}
    </EventContainer>
  );
};

const EventModal = ({
  event,
  setEvent,
  mobile,
}: {
  event: Milestone | null;
  setEvent: () => void;
  mobile: boolean;
}) => {
  if (!event) return null;
  const { media, video, label, date } = event;
  const className = mobile ? "mobile" : "";
  const isYt = video?.includes("youtube.com") || video?.includes("youtu.be");
  const hrefObj: { href?: Milestone["video"] } = {};
  if (video && !isYt) {
    hrefObj.href = video;
  }

  const messages = getMessagesForMilestone(event);

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={setEvent} />
      <EventModalContainer>
        {isYt ? (
          <ModalVideo
            src={video}
            height="415"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
        ) : (
          <ModalMedia src={getMediaLink(media)} />
        )}
        <EventModalInfo className={className}>
          <EventModalInfoLeft className={className}>
            <EventModalHeading {...hrefObj} className={className}>
              {label}
            </EventModalHeading>
            <EventModalDate className={className}>{date}</EventModalDate>
          </EventModalInfoLeft>
          <div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: 9,
                  marginTop: 9,
                  gap: 12,
                  background: "rgba(0,0,0,0.15)",
                  borderRadius: 8,
                  padding: "12px 16px"
                }}
              >
                {msg.author && (
                  <img
                    src={getTakoAvatar(msg.author, idx)}
                    alt={msg.author || "Takodachi"}
                    className="takodachi-avatar"
                    style={{
                      width: 100,
                      height: 100,
                      marginRight: 0,
                      flexShrink: 0,
                    }}
                    onError={e => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = getTakoAvatar(null, idx);
                    }}
                  />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: 15, wordBreak: "break-word", whiteSpace: "pre-line" }}>
                    {msg.text}
                  </span>
                  {msg.author && (
                    <div style={{ fontSize: 13, marginTop: 10, color: "#ffd580", textAlign: "right" }}>
                      by: {msg.author}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </EventModalInfo>
      </EventModalContainer>
    </>,
    document.getElementById("root") as HTMLElement
  );
};

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
        onChange={e => setSelectedTag(e.target.value)}
        mobile={mobile}
      >
        <option value="">All Tags</option>
        {tags.map(tag => (
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
  selectedTitleTag: string
) {
  const isAnyTag = Object.values(selectedTags).reduce(
    (acc, val) => acc || val,
    false
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
      const messages = getMessagesForMilestone({ label, longText } as Milestone);
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

const MonthNavItem = ({
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
    ? (isPrev ? "fa fa-chevron-up" : "fa fa-chevron-down")
    : (isPrev ? "fa fa-chevron-left" : "fa fa-chevron-right");

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
      <PageArrowButton onClick={() => onNavigate(entry.month, entry.year as Year)}>
        <i className={icon} aria-hidden="true" />
      </PageArrowButton>
      <span style={{ color: "var(--light-highlight)", fontSize: "0.85em", textAlign: "center", lineHeight: 1.3, whiteSpace: "nowrap" }}>
        {entry.month}<br />{entry.year}
      </span>
    </div>
  );
};

const List = ({
  milestones,
  refMap,
  scrollPos,
  mobile,
  prevMonthEntry,
  nextMonthEntry,
  onNavigate,
}: {
  milestones: Milestone[];
  refMap: IScrollListProps["refMap"];
  scrollPos: IScrollListProps["scrollPos"];
  mobile?: boolean;
  prevMonthEntry?: { year: Year; month: Month } | null;
  nextMonthEntry?: { year: Year; month: Month } | null;
  onNavigate?: (month: Month, year: Year) => void;
}) => {
  const isFirstEventOfTheMonth = (index: number, list: Milestone[]) => {
    const prevMonth = list[index - 1].date.split(/\W/)[1];
    const curMonth = list[index].date.split(/\W/)[1];
    return prevMonth != curMonth;
  };

  const listRef: RefObject<HTMLElement> = useRef(null);
  const [modalEvent, setModalEvent] = useState<Milestone | null>(null);
  const milestoneRefs = useRef<RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    milestoneRefs.current = milestones.map(
      (_, i) => milestoneRefs.current[i] || React.createRef<HTMLDivElement>()
    );
  }, [milestones.length]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ left: 0, top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [milestones]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo(...scrollPos);
    }
  }, [scrollPos]);

  const className = mobile ? "mobile" : "";
  const Element = mobile ? EventMobile : Event;

  return (
    <ListScrollable
      className={className}
      innerRef={listRef}
    >
      <EventModal
        event={modalEvent}
        mobile={!!mobile}
        setEvent={() => setModalEvent(null)}
      />
      {prevMonthEntry && onNavigate && (
        <MonthNavItem
          entry={prevMonthEntry}
          direction="prev"
          onNavigate={onNavigate}
          mobile={!!mobile}
        />
      )}
      {milestones.map((milestone, index) => (
        <div ref={milestoneRefs.current[index]} key={milestone.label}>
          <Element
            onClick={() => setModalEvent(milestone)}
            refMap={refMap}
            event={{
              ...milestone,
              isLast: index === milestones.length - 1,
            }}
            monthStart={index === 0 || isFirstEventOfTheMonth(index, milestones)}
          />
        </div>
      ))}
      {nextMonthEntry && onNavigate && (
        <MonthNavItem
          entry={nextMonthEntry}
          direction="next"
          onNavigate={onNavigate}
          mobile={!!mobile}
        />
      )}
    </ListScrollable>
  );
};


function YearPicker({ setYear, selected }: { setYear: (year: Year) => void; selected: Year }) {
  const [open, setOpen] = useState(false)

  const handleYearClick = (year: Year) => {
    setYear(year);
  }
  return (
    <YearContainer onClick={() => setOpen(!open)}>
      {years.map(year =>
        <YearDisplay key={year} onClick={() => handleYearClick(year)} selected={year == selected}>
          {year}
        </YearDisplay>
      )}
    </YearContainer>)
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
    allMilestones.forEach(m => {
      const [, mMonth, mYear] = m.date.split(/\W/);
      if (mYear === year) monthSet.add(mappedMonths[mMonth]);
    });
    return months.filter(m => monthSet.has(m));
  }, [allMilestones, year]);

  const selectedIndex = monthsWithEntries.findIndex(m => m === selectedMonth);

  return (
    <>
      <YearPicker selected={year} setYear={setYear} />
      <MonthListContainer>
        {months.map((month) => {
          const monthIndex = monthsWithEntries.findIndex(m => m === month);
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
    document.getElementById("root") as HTMLElement
  );
};

export const ScrollListWide = ({
  searchProps,
  milestones,
  monthProps,
  modalControls,
  refMap,
  scrollPos,
  allFilteredMilestones,
  prevMonthEntry,
  nextMonthEntry,
  onNavigate,
}: IScrollListProps & {
  allFilteredMilestones: Milestone[];
  prevMonthEntry: { year: Year; month: Month } | null;
  nextMonthEntry: { year: Year; month: Month } | null;
  onNavigate: (month: Month, year: Year) => void;
}) => {
  return (
    <ScrollListContainer>
      {modalControls ? null : <TopControls {...searchProps} />}
      <List
        milestones={milestones}
        refMap={refMap}
        scrollPos={scrollPos}
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

const ScrollListNonWide = ({
  milestones,
  refMap,
  scrollPos,
  prevMonthEntry,
  nextMonthEntry,
  onNavigate,
}: Pick<IScrollListProps, "milestones" | "refMap" | "scrollPos"> & {
  prevMonthEntry: { year: Year; month: Month } | null;
  nextMonthEntry: { year: Year; month: Month } | null;
  onNavigate: (month: Month, year: Year) => void;
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef<[number, number]>([0, 0]);

  const handleScroll = () => {
    if (listRef.current) {
      scrollPosRef.current = [
        listRef.current.scrollLeft,
        listRef.current.scrollTop,
      ];
    }
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo(...scrollPosRef.current);
    }
  }, [milestones]);

  return (
    <ScrollListContainer className={"mobile"} ref={listRef} onScroll={handleScroll}>
      <List
        milestones={milestones}
        mobile
        refMap={refMap}
        scrollPos={scrollPos}
        prevMonthEntry={prevMonthEntry}
        nextMonthEntry={nextMonthEntry}
        onNavigate={onNavigate}
      />
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
  mobile,
  modalControls,
  drawerVisible,
  toggleDrawer,
}: {
  milestones: Milestone[];
  mobile?: boolean;
  modalControls: boolean;
  drawerVisible: boolean;
  toggleDrawer: () => void;
}): JSX.Element => {
  const { muted } = useMute();
  const audioRef = useAudio({ muted, autoPlay: true });

  const [month, setMonthState] = useState<Month>(() => {
    const first = milestones[0];
    return first ? mappedMonths[first.date.split(/\W/)[1]] as Month : "September";
  });
  const [year, setYearState] = useState<Year>(() => {
    const first = milestones[0];
    return first ? first.date.split(/\W/)[2] as Year : years[0] as Year;
  });
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tags>({} as Tags);
  const [scroll] = useState<[number, number]>([0, 0]);
  const [selectedTitleTag, setSelectedTitleTag] = useState<string>("");

  const selected = useMemo(
    () => filterMilestonesWithTitleTag(selectedTags, milestones, searchString, selectedTitleTag),
    [selectedTags, milestones, searchString, selectedTitleTag]
  );

  const allMonthsWithEntries = useMemo(() => {
    const seen = new Set<string>();
    const result: Array<{ year: Year; month: Month }> = [];
    selected.forEach(m => {
      const [, mMonth, mYear] = m.date.split(/\W/);
      const key = `${mYear}_${mMonth}`;
      if (!seen.has(key)) {
        seen.add(key);
        result.push({ year: mYear as Year, month: mappedMonths[mMonth] as Month });
      }
    });
    return result;
  }, [selected]);

  const monthFiltered = useMemo(
    () => selected.filter(m => {
      const [, mMonth, mYear] = m.date.split(/\W/);
      return mappedMonths[mMonth] === month && mYear === year;
    }),
    [selected, month, year]
  );

  const currentIdx = allMonthsWithEntries.findIndex(x => x.year === year && x.month === month);
  const prevMonthEntry = currentIdx > 0 ? allMonthsWithEntries[currentIdx - 1] : null;
  const nextMonthEntry = currentIdx < allMonthsWithEntries.length - 1
    ? allMonthsWithEntries[currentIdx + 1]
    : null;

  useEffect(() => {
    if (allMonthsWithEntries.length > 0 && currentIdx === -1) {
      const first = allMonthsWithEntries[0];
      setMonthState(first.month);
      setYearState(first.year as Year);
    }
  }, [allMonthsWithEntries, currentIdx]);

  const monthRefMap = useRef(
    monthsWithYears.reduce(
      (acc: Record<MonthWithYear, RefObject<HTMLSpanElement> | null>, m) => {
        acc[m as MonthWithYear] = createRef();
        return acc;
      },
      {} as Record<MonthWithYear, RefObject<HTMLSpanElement> | null>
    )
  );

  const scrollToMonth = (targetMonth: Month, targetYear: Year = year) => {
    setMonthState(targetMonth);
    setYearState(targetYear);
  };

  const handleYear = (targetYear: Year) => {
    const first = allMonthsWithEntries.find(x => x.year === targetYear);
    if (first) {
      setMonthState(first.month);
      setYearState(first.year as Year);
    }
  };

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
      <audio
        ref={audioRef}
        src={process.env.PUBLIC_URL + "/ensolarado.mp3"}
        autoPlay
        loop
        preload="auto"
        style={{ display: "none" }}
        muted={muted}
      />
      <Drawer
        visible={drawerVisible}
        searchProps={searchProps}
        monthProps={monthProps}
        toggleDrawer={toggleDrawer}
        milestones={milestones}
        filteredMilestones={selected}
      />
      {mobile ? (
        <ScrollListNonWide
          scrollPos={scroll}
          milestones={monthFiltered}
          refMap={monthRefMap}
          prevMonthEntry={prevMonthEntry}
          nextMonthEntry={nextMonthEntry}
          onNavigate={scrollToMonth}
        />
      ) : (
        <ScrollListWide
          setMonth={setMonthState}
          setYear={setYearState}
          refMap={monthRefMap}
          scrollPos={scroll}
          searchProps={searchProps}
          milestones={monthFiltered}
          monthProps={monthProps}
          modalControls={modalControls}
          allFilteredMilestones={selected}
          prevMonthEntry={prevMonthEntry}
          nextMonthEntry={nextMonthEntry}
          onNavigate={scrollToMonth}
        />
      )}
    </>
  );
};
