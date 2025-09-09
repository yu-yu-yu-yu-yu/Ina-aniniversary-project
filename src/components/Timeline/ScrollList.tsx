// export {};
import { Milestone, Tags } from "./Milestone";
import React, { ChangeEvent, createRef, RefObject, useEffect, useRef, useState, } from "react";
import { Switch } from "../Common/Switch";
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
  EventModalDescription,
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
  YearContainer
} from "./styles/List";
import {
  filterMilestones,
  getMediaLink,
  IScrollListProps,
  mappedMonths,
  Month,
  months, monthsWithYears, MonthWithYear,
  Year,
  years,
} from "./ScrollListUtils";
import ReactDOM from "react-dom";
import { ScrollEvent } from "react-indiana-drag-scroll";
import {last, toPairs} from "lodash";

const SearchBar = ({
  searchString,
  setSearchString,
}: {
  searchString: string;
  setSearchString: (string: string) => void;
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
        label="Important streams"
        value={tags.important}
        onChange={(value) => setSelectedTags({ ...tags, important: value })}
        mobile={mobile}
      />
      <Switch
        label="Gaming streams"
        value={tags.gaming}
        onChange={(value) => setSelectedTags({ ...tags, gaming: value })}
        mobile={mobile}
      />
      <Switch
        label="Drawing streams"
        value={tags.drawing}
        onChange={(value) => setSelectedTags({ ...tags, drawing: value })}
        mobile={mobile}
      />
      <Switch
        label="Collabs"
        value={tags.collab}
        onChange={(value) => setSelectedTags({ ...tags, collab: value })}
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
  mobile,
}: IScrollListProps["searchProps"] & { mobile?: boolean }) => (
  <TopControlsContainer>
    <SearchBar searchString={searchString} setSearchString={setSearchString} />
    <TagBar
      mobile={mobile}
      tags={selectedTags}
      setSelectedTags={setSelectedTags}
    />
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
  event: { media },
  mobile,
}: {
  event: Milestone;
  mobile?: boolean;
}) => (
  <EventPreview className={mobile ? "mobile" : ""} src={getMediaLink(media)} />
);

const EventMobile = ({
  event,
  monthStart,
  refMap,
  onClick,
}: {
  onClick: () => void;
  refMap: IScrollListProps["refMap"];
  event: Milestone;
  monthStart: boolean;
}) => {
  const { major, label, date } = event;
  const [, month, year] = date.split(/\W/);
  const monthWithYear = `${year}_${mappedMonths[month]}`
  return (
    <EventContainer className={"mobile"} highlight={!!major} onClick={onClick}>
      {monthStart ? (
        <MonthAnchor
          ref={refMap.current[monthWithYear as MonthWithYear]}
          mobile
          date={date}
        />
      ) : null}
      <Circle />
      <Line className={"mobile"} />
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
}: {
  onClick: () => void;
  refMap: IScrollListProps["refMap"];
  event: Milestone;
  monthStart: boolean;
}) => {
  const { major, label, date } = event;
  const [, month, year] = date.split(/\W/);
  const monthWithYear = `${year}_${mappedMonths[month]}`
  return (
    <EventContainer highlight={!!major} onClick={onClick}>
      {monthStart ? (
        <MonthAnchor
          ref={ refMap.current[monthWithYear as MonthWithYear]}
          date={date}
        />
      ) : null}
      <Thumb event={event} />
      <EventInfo>
        <Triangle />
        <Circle />
        <Line />
        <EventLabel>{label}</EventLabel>
        <EventDate>{date.replace(/\W/g, "·")}</EventDate>
      </EventInfo>
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
  const { media, video, label, longText, date } = event;
  const className = mobile ? "mobile" : "";
  const isYt = video?.includes("youtube.com") || video?.includes("youtu.be");
  const hrefObj: { href?: Milestone["video"] } = {};
  if (video && !isYt) {
    hrefObj.href = video;
  }
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={setEvent} />
      <EventModalContainer>
        {isYt ? (
          <ModalVideo
            src={video}
            // width="100%"
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
          <EventModalDescription className={className}>
            {longText}
          </EventModalDescription>
        </EventModalInfo>
      </EventModalContainer>
    </>,
    document.getElementById("root") as HTMLElement
  );
};

const List = ({
  milestones,
  refMap,
  scrollPos,
  mobile,
  setMonth,
  setYear
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

  const className = mobile ? "mobile" : "";
  const Element = mobile ? EventMobile : Event;

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo(...scrollPos);
    }
  }, [scrollPos]);

  //TODO unfuck prop and typing spaghetti
  const checkMonthScroll = (e: ScrollEvent) => {
    if (e?.external) return;
    const scrollDistance = mobile
      ? listRef.current?.scrollTop ?? 0
      : listRef.current?.scrollLeft ?? 0;
    const months = refMap.current
    const filtered = toPairs(months).filter(([, monthRef]) => {

      const monthScroll = mobile
          ? monthRef?.current?.offsetTop ?? 0
          : monthRef?.current?.offsetLeft ?? 0;
      return monthScroll && scrollDistance > monthScroll;
    })

    const date = (last(filtered)?.[0] as MonthWithYear) ?? "2020_September";

    const [year,month] = date.split('_') as [Year, Month]
    setYear(year);
    setMonth(month);
  };

  return (
    <ListScrollable
      onEndScroll={checkMonthScroll}
      className={className}
      innerRef={listRef}
    >
      <EventModal
        event={modalEvent}
        mobile={!!mobile}
        setEvent={() => setModalEvent(null)}
      />
      {milestones.map((milestone, index) => (
        <Element
          onClick={() => setModalEvent(milestone)}
          refMap={refMap}
          key={milestone.label}
          event={milestone}
          monthStart={index === 0 || isFirstEventOfTheMonth(index, milestones)}
        />
      ))}
    </ListScrollable>
  );
};



function YearPicker({setYear, selected}:  {setYear: (year: Year) => void; selected: Year}) {
  const [open,setOpen] = useState(false)

  const handleYearClick = (year:Year) => {
    setYear(year);
    // setOpen(false)
  }
  return (
       <YearContainer onClick={() => setOpen(!open)}>
               {years.map(year =>
                   <YearDisplay key={year} onClick={() => handleYearClick(year)} selected={year==selected}>
                     {year}
                   </YearDisplay>
               )}

</YearContainer> )
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
    <YearPicker selected={year} setYear={setYear}/>
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
}: { visible: boolean; toggleDrawer: () => void } & Pick<
  IScrollListProps,
  "searchProps" | "monthProps"
>) => {
  if (!visible) return null;
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={toggleDrawer} />
      <DrawerContainer>
        <TopControls mobile {...searchProps} />
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
  return (
    <ScrollListContainer className={"mobile"}>
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
  const [month, setMonth]: [month: Month, setMonth: (month: Month) => void] =
    useState("September" as Month);
  const [year, setYear]: [year: Year, setYear: (year: Year)=> void] = useState(years[0] as Year)
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags]: [
    selectedTags: Tags,
    setSelectedTags: (tags: Tags) => void
  ] = useState({} as Tags);
  const [scroll, setScroll] = useState([0, 0]);

  const selected = filterMilestones(selectedTags, milestones, searchString);

  const monthRefMap = useRef(
    monthsWithYears.reduce(
      (acc: Record<MonthWithYear, RefObject<HTMLSpanElement> | null>, month) => {
        acc[month as MonthWithYear] = createRef();
        return acc;
      },
      {} as Record<MonthWithYear, RefObject<HTMLSpanElement> | null>
    )
  );
  // const listRef: RefObject<HTMLElement> = ();

  const scrollToMonth = (month: Month, yearToSet = year) => {
    const isNextYear = yearToSet == years[0] && months.indexOf(month ) < months.indexOf('September')
    const nextYear = years[years.indexOf(yearToSet) + 1]
    const selectedMonth = monthRefMap.current?.[`${isNextYear ? nextYear : yearToSet}_${month}` as MonthWithYear]?.current;

    if (selectedMonth) {
      if (mobile) {

        setScroll([0, +(selectedMonth?.offsetTop ?? 0)]);
      } else {
        setScroll([+(selectedMonth?.offsetLeft ?? 0), 0]);
      }
    }


    setYear(isNextYear ? nextYear : yearToSet)
    setMonth(month);
  };

  const handleYear = (year: Year) => {
    scrollToMonth(year == years[0] ? 'September': 'January', year)
  }

  const searchProps = {
    searchString,
    setSearchString,
    selectedTags,
    setSelectedTags,
  };
  const monthProps = { selectedMonth: month, setMonth: scrollToMonth, year, setYear: handleYear };

  return (
    <>
      <Drawer
        visible={drawerVisible}
        searchProps={searchProps}
        monthProps={monthProps}
        toggleDrawer={toggleDrawer}
      />
      {mobile ? (
        <ScrollListNonWide
          setMonth={setMonth}
          setYear={setYear}
          scrollPos={scroll as [number, number]}
          milestones={selected}
          refMap={monthRefMap}
        />
      ) : (
        <ScrollListWide
          setMonth={setMonth}
          setYear={setYear}
          refMap={monthRefMap}
          scrollPos={scroll as [number, number]}
          searchProps={searchProps}
          milestones={selected}
          monthProps={monthProps}
          modalControls={modalControls}
        />
      )}
    </>
  );
};
