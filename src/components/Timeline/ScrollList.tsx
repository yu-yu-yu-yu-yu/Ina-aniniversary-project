// export {};
import { Milestone, Tags } from "./Milestone";
import React, { ChangeEvent, useState, } from "react";
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
  EventPreview,
  EventThumbMobile,
  Line,
  ListScrollable,
  MonthAnchorHeader,
  MonthDisplay,
  MonthListContainer,
  ScrollListContainer,
  SearchBarContainer,
  SearchInput,
  TagBarContainer,
  TagsContainer,
  TopControlsContainer,
  Triangle,
} from "./styles/List";
import { filterMilestones, IScrollListProps, mappedMonths, Month, months, } from "./ScrollListUtils";
import ReactDOM from "react-dom";

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
        label="Milestones"
        value={tags.milestone}
        onChange={(value) => setSelectedTags({ ...tags, milestone: value })}
        mobile={mobile}
      />
      <Switch
        label="Important streams"
        value={tags.important}
        onChange={(value) => setSelectedTags({ ...tags, important: value })}
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

const MonthAnchor = ({
  date,
  mobile,
}: {
  date: Milestone["date"];
  mobile?: boolean;
}) => (
  <MonthAnchorHeader className={mobile ? "mobile" : ""}>
    {mappedMonths[date.split("/")[1]]}
  </MonthAnchorHeader>
);

const Thumb = ({
  event: { media },
  mobile,
}: {
  event: Milestone;
  mobile?: boolean;
}) => (
  <EventPreview
    className={mobile ? "mobile" : ""}
    src={process.env.PUBLIC_URL + "/" + media}
  />
);

const EventMobile = ({
  event,
  monthStart,
}: {
  event: Milestone;
  monthStart: boolean;
}) => {
  const { major, label, date } = event;
  return (
    <EventContainer className={"mobile"} highlight={!!major}>
      {monthStart ? <MonthAnchor mobile date={date} /> : null}
      <Circle />
      <Line className={"mobile"} />
      <Triangle />
      <EventThumbMobile>
        <EventLabel className={"mobile"}>{label}</EventLabel>
        <Thumb mobile event={event} />
        <EventDate className={"mobile"}>{date.replace(/\W/g, "·")}</EventDate>
      </EventThumbMobile>
    </EventContainer>
  );
};

const Event = ({
  event,
  monthStart,
}: {
  event: Milestone;
  monthStart: boolean;
}) => {
  const { major, label, date } = event;
  return (
    <EventContainer highlight={!!major}>
      {monthStart ? <MonthAnchor date={date} /> : null}
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

const List = ({
  milestones,
  mobile,
}: {
  milestones: Milestone[];
  mobile?: boolean;
}) => {
  const isFirstEventOfTheMonth = (index: number, list: Milestone[]) => {
    const prevMonth = list[index - 1].date.split(/\W/)[1];
    const curMonth = list[index].date.split(/\W/)[1];
    return prevMonth < curMonth;
  };

  const className = mobile ? "mobile" : "";
  const Element = mobile ? EventMobile : Event;

  return (
    <ListScrollable className={className}>
      {milestones.map((milestone, index) => (
        <Element
          key={milestone.date}
          event={milestone}
          monthStart={index === 0 || isFirstEventOfTheMonth(index, milestones)}
        />
      ))}
    </ListScrollable>
  );
};

const BottomControls = ({
  selectedMonth,
  setMonth,
}: IScrollListProps["monthProps"]) => {
  const selectedIndex = months.findIndex((month) => month == selectedMonth);

  return (
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
}: { modalControls: boolean } & IScrollListProps) => {
  return (
    <ScrollListContainer>
      {modalControls ? null : <TopControls {...searchProps} />}

      <List milestones={milestones} />

      {modalControls ? null : <BottomControls {...monthProps} />}
    </ScrollListContainer>
  );
};

const ScrollListNonWide = ({
  milestones,
}: {
  milestones: IScrollListProps["milestones"];
}) => {
  return (
    <ScrollListContainer className={"mobile"}>
      <List milestones={milestones} mobile />
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
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags]: [
    selectedTags: Tags,
    setSelectedTags: (tags: Tags) => void
  ] = useState({} as Tags);

  const selected = filterMilestones(selectedTags, milestones, searchString);

  const searchProps = {
    searchString,
    setSearchString,
    selectedTags,
    setSelectedTags,
  };
  const monthProps = { selectedMonth: month, setMonth };

  return (
    <>
      <Drawer
        visible={drawerVisible}
        searchProps={searchProps}
        monthProps={monthProps}
        toggleDrawer={toggleDrawer}
      />
      {mobile ? (
        <ScrollListNonWide milestones={selected} />
      ) : (
        <ScrollListWide
          searchProps={searchProps}
          milestones={selected}
          monthProps={monthProps}
          modalControls={modalControls}
        />
      )}
    </>
  );
};
