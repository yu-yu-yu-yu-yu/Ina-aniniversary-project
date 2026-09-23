export type LoreSection = "main" | "standalone";
export type LoreStatus = "confirmed" | "implied" | "theory" | "thought";
export type LoreSubjectKind = "song" | "mv" | "general";

export interface LoreText {
  type: "text";
  text: string;
}

export interface LoreHeading {
  type: "heading";
  text: string;
}

export interface LoreQuote {
  type: "quote";
  text: string;
  cite?: string;
}

export interface LoreIllustration {
  type: "illustration";
  slot: string;
  src?: string;
  alt?: string;
  aspect?: number;
  artist?: string;
  artistLink?: string;
}

export type LoreBlock = LoreText | LoreHeading | LoreQuote | LoreIllustration;

export interface LoreEntry {
  id: string;
  title: string;
  section: LoreSection;
  subject: string;
  subjectKind: LoreSubjectKind;
  body: LoreBlock[];
  status?: LoreStatus;
  author: string;
  authorLink?: string;
}
