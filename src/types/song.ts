export type PerformanceContext = "release" | "cover" | "karaoke" | "concert" | "featured" | "banana";
export type PerformanceStatus = "archived" | "unofficially archived";
export type SongOrigin = "Ina's original" | "Hololive's original" | "3rd Party" | "banana";
export type CollabType = "solo" | "duo" | "group";

export interface Performance {
  context: PerformanceContext;
  link?: string;
  status?: PerformanceStatus;
  name?: string;
  label?: string;
}

export interface SongData {
  songName: string;
  origin: SongOrigin;
  collab: CollabType;
  performances: Performance[];
  originalSongLink?: string;
  songInfo?: string;
  coverInfo?: string;
}

export interface VideoEntry extends SongData {
  vodtitle?: string;
  video?: string;
}

export const deriveArchiveStatus = (song: SongData): "archived" | "unofficially archived" | "unarchived" => {
  if (song.performances.some((p) => p.status === "archived")) return "archived";
  if (song.performances.some((p) => p.status === "unofficially archived")) return "unofficially archived";
  return "unarchived";
};
