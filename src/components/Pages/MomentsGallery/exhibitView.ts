import { Tribute } from "../../../types";

export type ExhibitViewKind =
  | "original-video"
  | "original-image"
  | "original-link"
  | "tribute-image"
  | "tribute-video";

export interface ExhibitView {
  kind: ExhibitViewKind;
  src: string;
  label: string;
  credit: string;
  tribute?: Tribute;
}
