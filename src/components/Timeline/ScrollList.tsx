// export {};
import { Milestone } from "./Milestone";
import React, { useState } from "react";
import styled from "styled-components";
import { zipObject } from "lodash";

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

const mappedMonths = zipObject(months, [
  "09",
  "10",
  "11",
  "12",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
]);

type Month = typeof months[number];

type Tags = {
  milestones: boolean;
  important: boolean;
  drawing: boolean;
  collab: boolean;
};

const ScrollListContainer = styled.div``;

const TopControlsContainer = styled.div``;
const SearchBar = ({
  searchString,
  setSearchString,
}: {
  searchString: string;
  setSearchString: (string: string) => void;
}) => <div />;

const TagBar = ({
  selectedTags,
  setSelectedTags,
}: {
  selectedTags: Tags;
  setSelectedTags: (tags: Tags) => void;
}) => <div />;

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
    <TagBar selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
  </TopControlsContainer>
);

const List = ({ milestones }: { milestones: Milestone[] }) => <div />;

const BottomControls = ({
  month,
  setMonth,
}: {
  month: Month;
  setMonth: (month: Month) => void;
}) => {
  return <div />;
};

export const ScrollList = ({ milestones }: { milestones: Milestone[] }) => {
  const [month, setMonth]: [month: Month, setMonth: (month: Month) => void] =
    useState("September" as Month);
  const [searchString, setSearchString] = useState("");
  const [selectedTags, setSelectedTags]: [
    selectedTags: Tags,
    setSelectedTags: (tags: Tags) => void
  ] = useState({} as Tags);

  const selected = milestones;

  return (
    <ScrollListContainer>
      <TopControls
        searchString={searchString}
        setSearchString={setSearchString}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />

      <List milestones={selected} />

      <BottomControls month={month} setMonth={setMonth} />
    </ScrollListContainer>
  );
};
