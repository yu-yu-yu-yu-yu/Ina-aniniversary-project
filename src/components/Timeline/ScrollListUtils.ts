import { upperCase, zipObject } from "lodash";
import { Milestone, Tags } from "./Milestone";
import { MutableRefObject, RefObject } from "react";
import milestoneJson from "../../static/Ina Anniversary Milestones.json";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
export const mappedMonths = zipObject(
  [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",],
  months
);
//Timeline is kinda starting to be dynamic
export type Month = typeof months[number];

export const getDynamicYears = () => {
  const yearsSet = new Set<string>();
  milestoneJson.forEach((milestone: { date: string }) => {
    const parts = milestone.date.split(/\W/);
    const year = parts[2];
    if (year) yearsSet.add(year);
  });
  return Array.from(yearsSet).sort();
};

export const years = getDynamicYears() as unknown as readonly string[];
export type Year = typeof years[number]

export interface IScrollListProps {
  searchProps: {
    searchString: string;
    setSearchString: (string: string) => void;
    selectedTags: Tags;
    setSelectedTags: (tags: Tags) => void;
  };
  setYear: (year:Year) => void;
  monthProps: {
    selectedMonth: Month;
    setMonth: (month: Month) => void;
    year: Year;
    setYear: (year: Year) => void;
  };
  setMonth: (month: Month) => void;
  milestones: Milestone[];
  refMap: MutableRefObject<Record<MonthWithYear, RefObject<HTMLSpanElement> | null>>;
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

export const monthsWithYears = years.flatMap(year => months.map(month => `${year}_${month}`))
export type MonthWithYear = `${Year}_${Month}`

const tagColors = {
  important: "#FFD700",
  gaming: "#3B7BFF",
  drawing: "#A259E6",
  collab: "#00E6E6",
};

export function getMilestoneOutline(tags: {
  important?: boolean;
  gaming?: boolean;
  drawing?: boolean;
  collab?: boolean;
}): string {
  const activeColors = Object.entries(tags)
    .filter(([, v]) => v === true)
    .map(([k]) => tagColors[k as keyof typeof tagColors]);
  if (activeColors.length === 0) return "transparent";
  if (activeColors.length === 1) return activeColors[0];
  return `linear-gradient(135deg, ${activeColors.join(", ")})`;
}
