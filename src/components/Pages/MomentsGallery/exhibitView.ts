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
  creditPrefix: string;
  creditText: string;
  creditHref?: string;
  tribute?: Tribute;
}
