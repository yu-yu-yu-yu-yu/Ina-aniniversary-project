export interface Submission {
  user?: string;
  icon?: string;
  message?: string;
  image?: string;
  pun?: string;
  sub?: string;
  wah?: string;
  wah_sub?: string;
}

export interface VideoEntry extends Submission {
  vodtitle?: string;
  video?: string;
}

export interface LetterEntry {
  user?: string;
  icon?: string;
  image?: string;
}
