import { upperCase, zipObject } from "lodash";
import { Milestone, Tags } from "./Milestone";
import { MutableRefObject, RefObject } from "react";

export const months = [
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
export const mappedMonths = zipObject(
  ["09", "10", "11", "12", "01", "02", "03", "04", "05", "06", "07", "08"],
  months
);

export type Month = typeof months[number];

export interface IScrollListProps {
  searchProps: {
    searchString: string;
    setSearchString: (string: string) => void;
    selectedTags: Tags;
    setSelectedTags: (tags: Tags) => void;
  };
  monthProps: {
    selectedMonth: Month;
    setMonth: (month: Month) => void;
  };
  milestones: Milestone[];
  refMap: MutableRefObject<Record<Month, RefObject<HTMLSpanElement> | null>>;
  modalControls: boolean;
  scrollPos: [number, number];
}

export const filterMilestones = (
  selectedTags: Tags,
  milestones: Milestone[],
  searchString: string
) => {
  const isAnyTag = Object.values(selectedTags).reduce(
    (acc, val) => acc || val,
    false
  );

  return milestones.filter(({ tags, label }) => {
    const searchCondition = upperCase(label).includes(upperCase(searchString));
    let tagCondition = !isAnyTag;
    for (const tag in tags) {
      tagCondition =
        tagCondition ||
        (tags[tag as keyof Tags] && selectedTags[tag as keyof Tags]);
    }
    return searchCondition && tagCondition;
  });
};

export const getMediaLink = (src: Milestone["media"]) => {
  const isUrl = src?.startsWith("http");
  return isUrl ? src : `process.env.PUBLIC_URL/${src}`;
};
