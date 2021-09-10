// export {};
import { Milestone, Tags } from "./Milestone";
import React, { ChangeEvent, useState } from "react";
import { Switch } from "../Common/Switch";
import {
  Circle,
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
}: {
  tags: Tags;
  setSelectedTags: (tags: Tags) => void;
}) => (
  <TagBarContainer>
    <TagsContainer>
      <Switch
        label="Milestones"
        value={tags.milestone}
        onChange={(value) => setSelectedTags({ ...tags, milestone: value })}
      />
      <Switch
        label="Important streams"
        value={tags.important}
        onChange={(value) => setSelectedTags({ ...tags, important: value })}
      />
      <Switch
        label="Drawing streams"
        value={tags.drawing}
        onChange={(value) => setSelectedTags({ ...tags, drawing: value })}
      />
      <Switch
        label="Collabs"
        value={tags.collab}
        onChange={(value) => setSelectedTags({ ...tags, collab: value })}
      />
    </TagsContainer>
  </TagBarContainer>
);

const TopControls = ({
  searchString,
  setSearchString,
  selectedTags,
  setSelectedTags,
}: IScrollListProps["searchProps"]) => (
  <TopControlsContainer>
    <SearchBar searchString={searchString} setSearchString={setSearchString} />
    <TagBar tags={selectedTags} setSelectedTags={setSelectedTags} />
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

export const ScrollListWide = ({
  searchProps,
  milestones,
  monthProps,
}: IScrollListProps) => {
  return (
    <ScrollListContainer>
      <TopControls {...searchProps} />

      <List milestones={milestones} />

      <BottomControls {...monthProps} />
    </ScrollListContainer>
  );
};

const ScrollListNonWide = ({
  milestones,
}: // searchProps,
// monthProps,
{
  milestones: IScrollListProps["milestones"];
}) => {
  return (
    <ScrollListContainer className={"mobile"}>
      <List milestones={milestones} mobile />
    </ScrollListContainer>
  );
};

export const ScrollList = ({
  milestones,
  mobile,
}: {
  milestones: Milestone[];
  mobile?: boolean;
}) => {
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
  const months = { selectedMonth: month, setMonth };
  // mobile = true;
  return mobile ? (
    <ScrollListNonWide milestones={milestones} />
  ) : (
    <ScrollListWide
      searchProps={searchProps}
      milestones={selected}
      monthProps={months}
    />
  );
};
