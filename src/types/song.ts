export interface SongData {
  songName?: string;
  songLink?: string;
  coverName?: string;
  coverLink?: string;
  image?: string;
}

export interface VideoEntry extends SongData {
  vodtitle?: string;
  video?: string;
}
