export type WahrldKind = "image" | "video";

export interface WahrldEntry {
  user: string;
  icon?: string;
  country?: string;
  message?: string;
  file: string;
  kind: WahrldKind;
  socials?: string;
}
