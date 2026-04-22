import { MutableRefObject, RefObject } from "react";

export interface Milestone {
  label: string;
  media?: string;
  date: string;
  longText?: string;
  section?: string;
  anchor?: string;
  highlight?: boolean;
  tags?: Tags;
  video?: string;
}

export type Tags = {
  highlight?: boolean;
  important?: boolean;
  gaming?: boolean;
  drawing?: boolean;
  collab?: boolean;
  song?: boolean;
  hasComment?: boolean;
};

export type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type Year = string;

export type MonthWithYear = `${Year}_${Month}`;

export interface Outfit {
  title: string;
  artist: string;
  handle: string;
  username: string;
  filename: string;
  vodtitle?: string;
  video?: string;
  date?: string;
}

export interface OutfitImage extends Outfit {
  src: string;
  alt: string;
}

export type TimelineMessageEntry = {
  month?: string;
  day?: number;
  year?: number;
  message?: string;
  title?: string;
};

export interface IScrollListProps {
  searchProps: {
    searchString: string;
    setSearchString: (string: string) => void;
    selectedTags: Tags;
    setSelectedTags: (tags: Tags) => void;
    selectedTitleTag: string;
    setSelectedTitleTag: (tag: string) => void;
    milestones: Milestone[];
  };
  setYear: (year: Year) => void;
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

export interface INodeProps {
  x?: number;
  y?: number;
  label?: string;
  active: boolean;
  passed: boolean;
  setIndex?: () => void;
  onClick?: () => void;
}

export interface ISeekerBarProps {
  milestones: Milestone[];
  curIndex: number;
  setIndex: (index: number) => void;
  progress?: number;
}

export interface IMonthAnchorProps {
  month: Month;
  year: Year;
  isActive: boolean;
  onClick: () => void;
}

export interface EventBaseProps {
  year: Year;
  isActive: boolean;
}

export interface EventMobileProps extends EventBaseProps {
  onClick: () => void;
}
