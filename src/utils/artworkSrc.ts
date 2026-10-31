const BACKUP_PREFIX = "backupArtworks/";

export const artworkSrc = (image: string): string =>
  `${process.env.PUBLIC_URL}/${image.startsWith(BACKUP_PREFIX) ? "" : "artworks/"}${image}`;
