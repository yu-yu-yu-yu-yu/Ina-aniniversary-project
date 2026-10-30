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
  monthProps: {
    selectedMonth: Month;
    setMonth: (month: Month) => void;
    year: Year;
    setYear: (year: Year) => void;
  };
  milestones: Milestone[];
  modalControls: boolean;
}
