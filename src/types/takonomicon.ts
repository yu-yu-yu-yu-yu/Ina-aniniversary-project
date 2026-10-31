export type LoreSection = "main" | "standalone";
export type LoreStatus = "confirmed" | "implied" | "theory" | "thought";
export type LoreSubjectKind = "song" | "cover" | "concert" | "mv" | "general";

export interface LoreDecoration {
  side?: "left" | "right";
  rotate?: number;
  variant?: number;
  hidden?: boolean;
}

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
  slot?: string;
  src?: string;
  alt?: string;
  artist?: string;
  artistLink?: string;
  float?: "left" | "right";
  width?: number;
}

export interface LorePageBreak {
  type: "pagebreak";
}

export interface LoreDivider {
  type: "divider";
  divider?: string;
}

export type LoreBlock =
  | LoreText
  | LoreHeading
  | LoreQuote
  | LoreIllustration
  | LorePageBreak
  | LoreDivider;

export interface LoreTakodachi {
  name: string;
  description?: string;
  image?: string;
}

export interface LoreEntry {
  id: string;
  title: string;
  section: LoreSection;
  subject: string;
  subjectKind: LoreSubjectKind;
  icon?: string;
  divider?: string;
  body: LoreBlock[];
  status?: LoreStatus;
  themes?: string[];
  author: string;
  authorLink?: string;
  takodachi?: LoreTakodachi;
  sticky?: LoreDecoration;
  doodle?: LoreDecoration;
}

export interface LoreTypography {
  bodyFont?: string;
  headingFont?: string;
  bodyScale?: number;
  headingScale?: number;
}

export interface LoreBookText {
  title: string;
  subtitle: string;
  forewordHeading: string;
  foreword: string;
  disclaimerHeading: string;
  disclaimer: string;
  legendHeading: string;
  statusLabels: Record<LoreStatus, string>;
  statusMeanings: Record<LoreStatus, string>;
  contentsHeading: string;
  standaloneHeading: string;
  creditsHeading: string;
  credits: string;
  tagline: string;
  taglines?: Record<string, string>;
  pageAspectRatio?: { width: number; height: number };
  typography?: LoreTypography;
}

export interface LoreData {
  book: LoreBookText;
  images?: Record<string, string>;
  entries: LoreEntry[];
}
