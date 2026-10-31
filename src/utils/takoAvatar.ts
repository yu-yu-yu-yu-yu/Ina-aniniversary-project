import { GENERIC_TAKO_ICONS } from "../constants/takos";
import { TAKO_ALIASES } from "../constants/takoAliases";

export type TakoFolder = "takos" | "takoswentries";

export function takoSrc(folder: TakoFolder, file: string): string {
  const [dir, ...rest] = (
    TAKO_ALIASES[`${folder}/${file}`] ?? `${folder}/${file}`
  ).split("/");
  return `${process.env.PUBLIC_URL}/${dir}/${encodeURIComponent(rest.join("/"))}`;
}

export function getTakoAvatar(
  author: string | null,
  index: number = 0,
): string {
  if (author && author.trim() !== "") {
    return takoSrc("takoswentries", `${author.replace(/ /g, "")}.png`);
  }
  const icon = GENERIC_TAKO_ICONS[index % GENERIC_TAKO_ICONS.length];
  return `${process.env.PUBLIC_URL}/icon/${icon}`;
}
