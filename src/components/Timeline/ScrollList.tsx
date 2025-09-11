import { Milestone, Tags } from "./Milestone";
import React, { ChangeEvent, createRef, RefObject, useEffect, useRef, useState } from "react";
import { Switch } from "../Common/Switch";
import { upperCase } from "lodash";
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
  IScrollListProps,
  mappedMonths,
  Month,
  months, monthsWithYears, MonthWithYear,
  Year,
  years,
  getMilestoneOutline,
  tagColors,
  getTakoAvatar,
  getUniqueTitleTags,
  getMessagesForMilestone
} from "./ScrollListUtils";
import { TimelineDialogueBox } from "./styles/List";
import ReactDOM from "react-dom";
import { useMute } from "../MuteButton";


const SearchBar = ({
  searchString,
  setSearchString,
}: {
  searchString: string;
  setSearchString: (searchValue: string) => void;
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
  setSelectedTags: (tags: Tags) => void;
  mobile?: boolean;
}) => (
  <TagBarContainer>
    <TagsContainer>
      <Switch
        label="Highlighted"
        value={tags.highlight}
        onChange={(value) => setSelectedTags({ ...tags, highlight: value })}
        color={tagColors.highlight}
        mobile={mobile}
      />
      <Switch
        label="Important streams"
        value={tags.important}
        onChange={(value) => setSelectedTags({ ...tags, important: value })}
        color={tagColors.important}
        mobile={mobile}
      />
      <Switch
        label="Gaming streams"
        value={tags.gaming}
        onChange={(value) => setSelectedTags({ ...tags, gaming: value })}
        color={tagColors.gaming}
        mobile={mobile}
      />
      <Switch
        label="Drawing streams"
        value={tags.drawing}
        onChange={(value) => setSelectedTags({ ...tags, drawing: value })}
        color={tagColors.drawing}
        mobile={mobile}
      />
      <Switch
        label="Collabs"
        value={tags.collab}
        onChange={(value) => setSelectedTags({ ...tags, collab: value })}
        color={tagColors.collab}
        mobile={mobile}
      />
      <Switch
        label="Songs"
        value={tags.song}
        onChange={(value) => setSelectedTags({ ...tags, song: value })}
        color={tagColors.song}
        mobile={mobile}
      />
      <Switch
        label="Has Comment"
        value={tags.hasComment}
        onChange={(value) => setSelectedTags({ ...tags, hasComment: value })}
        color="#00FF99"
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

interface IMonthAnchorProps {
  date: Milestone["date"];
  mobile?: boolean;
}

const MonthAnchor = React.forwardRef<HTMLSpanElement, IMonthAnchorProps>(
  function MonthAnchor({ date, mobile }: IMonthAnchorProps, ref): JSX.Element {
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

interface EventBaseProps {
  event: Milestone;
  monthStart: boolean;
  onClick: () => void;
  refMap: IScrollListProps["refMap"];
}

interface EventMobileProps extends EventBaseProps {
}

interface EventProps extends EventBaseProps {
}

const EventMobile = ({
  event,
  monthStart,
  refMap,
  onClick,
}: EventMobileProps & { event: Milestone & { isLast?: boolean } }) => {
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
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

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
  const tags = getUniqueTitleTags(milestones);
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

const List = ({
  milestones,
  refMap,
  scrollPos,
  mobile,
  setMonth,
  setYear,
}: {
  milestones: Milestone[];
  refMap: IScrollListProps["refMap"];
  scrollPos: IScrollListProps["scrollPos"];
  mobile?: boolean;
  setMonth: IScrollListProps["setMonth"];
  setYear: (year: Year) => void;
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

  const className = mobile ? "mobile" : "";
  const Element = mobile ? EventMobile : Event;

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo(...scrollPos);
    }
  }, [scrollPos]);

  const checkMonthScroll = () => {
    let bestIndex = 0;
    let bestValue = Infinity;
    milestoneRefs.current.forEach((ref, i) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();

        const value = mobile ? Math.abs(rect.top) : Math.abs(rect.left);

        if (
          (mobile && rect.bottom > 0 && rect.top < window.innerHeight) ||
          (!mobile && rect.right > 0 && rect.left < window.innerWidth)
        ) {
          if (value < bestValue) {
            bestValue = value;
            bestIndex = i;
          }
        }
      }
    });
    const milestone = milestones[bestIndex];
    if (milestone) {
      const [, m, y] = milestone.date.split(/\W/);
      setYear(y);
      setMonth(mappedMonths[m]);
    }
  };

  return (
    <ListScrollable
      onScroll={checkMonthScroll}
      className={className}
      innerRef={listRef}
    >
      <EventModal
        event={modalEvent}
        mobile={!!mobile}
        setEvent={() => setModalEvent(null)}
      />
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
    </ListScrollable>
  );
};



function YearPicker({ setYear, selected }: { setYear: (year: Year) => void; selected: Year }) {
  const [open, setOpen] = useState(false)

  const handleYearClick = (year: Year) => {
    setYear(year);
    // setOpen(false)
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
  setYear
}: {
  selectedMonth: IScrollListProps["monthProps"]["selectedMonth"];
  setMonth: IScrollListProps["setMonth"];
  year: Year;
  setYear: (year: Year) => void;
}) => {
  const selectedIndex = months.findIndex(
    (month) =>
      month == selectedMonth);

  return (<>
    <YearPicker selected={year} setYear={setYear} />
    <MonthListContainer>
      {months.map((month, index) => (
        <MonthDisplay
          highlight={index === selectedIndex}
          passed={index < selectedIndex}
          key={month}
          onClick={() => setMonth(month)}
        >
          {month}
        </MonthDisplay>
      ))}
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
}: { visible: boolean; toggleDrawer: () => void; milestones: Milestone[] } & Pick<
  IScrollListProps,
  "searchProps" | "monthProps"
>) => {
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
        <BottomControls {...monthProps} />
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
  setMonth,
  setYear,
  scrollPos,
}: IScrollListProps) => {
  return (
    <ScrollListContainer>
      {modalControls ? null : <TopControls {...searchProps} />}
      <List
        setMonth={setMonth}
        milestones={milestones}
        refMap={refMap}
        setYear={setYear}
        scrollPos={scrollPos}
      />

      {modalControls ? null : <BottomControls {...monthProps} />}
    </ScrollListContainer>
  );
};

const ScrollListNonWide = ({
  milestones,
  refMap,
  scrollPos,
  setMonth,
  setYear
}: Pick<IScrollListProps, "milestones" | "refMap" | "scrollPos"> & {
  setMonth: IScrollListProps["setMonth"]
  setYear: IScrollListProps["setYear"]
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
        setMonth={setMonth}
        milestones={milestones}
        mobile
        refMap={refMap}
        setYear={setYear}
        scrollPos={scrollPos}
      />
    </ScrollListContainer>
  );
};

export const DrawerToggle = ({
  onClick,
}: {
  onClick: () => void;
}): JSX.Element => <DrawerToggleI onClick={onClick} className="fa fa-search" />;

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
  const audioRef = useRef<HTMLAudioElement>(null);
  const { muted } = useMute();
  const [month, setMonth] = useState<Month>("September");
  const [year, setYear] = useState<Year>(years[0] as Year);
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tags>({} as Tags);
  const [scroll] = useState<[number, number]>([0, 0]);
  const [selectedTitleTag, setSelectedTitleTag] = useState<string>("");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);


  const selected = filterMilestonesWithTitleTag(
    selectedTags,
    milestones,
    searchString,
    selectedTitleTag
  );

  const monthRefMap = useRef(
    monthsWithYears.reduce(
      (acc: Record<MonthWithYear, RefObject<HTMLSpanElement> | null>, month) => {
        acc[month as MonthWithYear] = createRef();
        return acc;
      },
      {} as Record<MonthWithYear, RefObject<HTMLSpanElement> | null>
    )
  );

  const getFirstMonthInYear = (milestones: Milestone[], targetYear: Year): Month | null => {
    const found = milestones.find(m => m.date.split(/\W/)[2] === targetYear);
    if (found) {
      const [, month] = found.date.split(/\W/);
      return mappedMonths[month] as Month;
    }
    return null;
  };

  const getFirstMonthWithYear = (milestones: Milestone[], targetMonth: Month, targetYear: Year): MonthWithYear | null => {
    const found = milestones.find(m => {
      const [, mMonth, mYear] = m.date.split(/\W/);
      return mappedMonths[mMonth] === targetMonth && mYear === targetYear;
    });
    if (found) {
      return `${targetYear}_${targetMonth}` as MonthWithYear;
    }
    return null;
  };

  const scrollToMonth = (targetMonth: Month, targetYear: Year = year) => {
    const monthWithYear = getFirstMonthWithYear(selected, targetMonth, targetYear);
    if (!monthWithYear) return;
    const anchor = monthRefMap.current?.[monthWithYear]?.current;
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: mobile ? "start" : "nearest", inline: "start" });
    }
    setYear(targetYear);
    setMonth(targetMonth);
  };

  const handleYear = (targetYear: Year) => {
    const firstMonth = getFirstMonthInYear(selected, targetYear);
    if (firstMonth) {
      scrollToMonth(firstMonth, targetYear);
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
  const monthProps = { selectedMonth: month, setMonth: scrollToMonth, year, setYear: handleYear };

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
      />
      {mobile ? (
        <ScrollListNonWide
          setMonth={setMonth}
          setYear={setYear}
          scrollPos={scroll}
          milestones={selected}
          refMap={monthRefMap}
        />
      ) : (
        <ScrollListWide
          setMonth={setMonth}
          setYear={setYear}
          refMap={monthRefMap}
          scrollPos={scroll}
          searchProps={searchProps}
          milestones={selected}
          monthProps={monthProps}
          modalControls={modalControls}
        />
      )}
    </>
  );
};
