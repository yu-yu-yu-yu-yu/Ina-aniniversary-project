export interface Milestone {
  label: string;
  media?: string;
  date: string;
  longText?: string;
  section?: string;
  anchor?: string;
  major?: boolean;
  tags?: Tags;
  video?: string;
}

export type Tags = {
  important: boolean;
  gaming: boolean;
  drawing: boolean;
  collab: boolean;
};
