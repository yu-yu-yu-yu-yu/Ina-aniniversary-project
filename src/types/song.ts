export interface SongData {
  songName?: string;
  songLink?: string;
  songInfo?: string;
  originalSongLink?: string;
  coverInfo?: string;
  type?: "Artist's original" | "Ina's original" | "cover" | "karaoke" | "concert";
  archived?: "archived" | "unarchived" | "unofficial archive";
  collab?: "duo" | "group";
}

export interface VideoEntry extends SongData {
  vodtitle?: string;
  video?: string;
}