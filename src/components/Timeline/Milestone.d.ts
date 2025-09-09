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
};
