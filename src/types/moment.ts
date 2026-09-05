export type MomentCategory = "milestone" | "myth" | "funny";
export type TributeKind = "image" | "video" | "gif" | "link";

export interface Tribute {
  author: string;
  handle?: string;
  url?: string;
  file?: string;
  kind: TributeKind;
  submittedBy?: string;
}

export interface Moment {
  slug: string;
  title: string;
  category: MomentCategory;
  date: string;
  sourceUrl: string;
  sourceLabel?: string;
  context: string;
  cap: 2 | 3;
  tributes: Tribute[];
}
