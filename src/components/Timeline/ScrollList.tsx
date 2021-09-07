// export {};
import {Milestone, Tags} from "./Milestone";
import React, {ChangeEvent, useState} from "react";
import {findIndex, upperCase, zipObject} from "lodash";
import {Switch} from "../Common/Switch";
import {
  Circle,
  EventContainer,
  EventInfo,
  EventPreview,
  ListScrollable,
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

const months = [
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
] as const;

const mappedMonths = zipObject(
  ["09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08"],
  months
);

type Month = typeof months[number];

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
}: {
  searchString: string;
  setSearchString: (string: string) => void;
  selectedTags: Tags;
  setSelectedTags: (tags: Tags) => void;
}) => (
  <TopControlsContainer>
    <SearchBar searchString={searchString} setSearchString={setSearchString} />
    <TagBar tags={selectedTags} setSelectedTags={setSelectedTags} />
  </TopControlsContainer>
);

const MonthAnchor = ({ date }: { date: Milestone["date"] }) => (
  <h1>{mappedMonths[date.split("/")[1]]}</h1>
);

const Thumb = ({ event: { media } }: { event: Milestone }) => (
  <EventPreview media={media} />
);

const Event = ({
  event,
  monthStart,
}: {
  event: Milestone;
  monthStart: boolean;
}) => {
  const { major, label, date } = event;
  return (
    <EventContainer>
      {/*{monthStart ? <MonthAnchor date={date} /> : null}*/}
      <Thumb event={event} />
      <EventInfo highlight={!!major}>
        <Triangle />
        <Circle />
        <div>{label}</div>
        <div>{date}</div>
      </EventInfo>
    </EventContainer>
  );
};

const List = ({ milestones }: { milestones: Milestone[] }) => {
  return (
    <ListScrollable>
      {milestones.map((milestone, index) => (
        <Event key={milestone.date} event={milestone} monthStart={index == 0} />
      ))}
    </ListScrollable>
  );
};

const BottomControls = ({
  selectedMonth,
  setMonth,
}: {
  selectedMonth: Month;
  setMonth: (month: Month) => void;
}) => {
  const selectedIndex = findIndex(months, selectedMonth);
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

export const ScrollList = ({ milestones }: { milestones: Milestone[] }) => {
  const [month, setMonth]: [month: Month, setMonth: (month: Month) => void] =
    useState("September" as Month);
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags]: [
    selectedTags: Tags,
    setSelectedTags: (tags: Tags) => void
  ] = useState({} as Tags);

  const isAnyTag = Object.values(selectedTags).reduce(
    (acc, val) => acc || val,
    false
  );
  const selected: Milestone[] = milestones.filter(({ tags, label }) => {
    const searchCondition = upperCase(label).includes(upperCase(searchString));
    let tagCondition = !isAnyTag;
    for (const tag in tags) {
      tagCondition =
        tagCondition ||
        (tags[tag as keyof Tags] && selectedTags[tag as keyof Tags]);
    }
    return searchCondition && tagCondition;
  });

  return (
    <ScrollListContainer>
      <TopControls
        searchString={searchString}
        setSearchString={setSearchString}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />

      <List milestones={selected} />

      <BottomControls selectedMonth={month} setMonth={setMonth} />
    </ScrollListContainer>
  );
};
