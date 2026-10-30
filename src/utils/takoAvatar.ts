import { GENERIC_TAKO_ICONS } from "../constants/takos";

export function getTakoAvatar(
  author: string | null,
  index: number = 0,
): string {
  if (author && author.trim() !== "") {
    const fileName = `${author.replace(/ /g, "")}.png`;
    return `${process.env.PUBLIC_URL}/takoswentries/${fileName}`;
  }
  const icon = GENERIC_TAKO_ICONS[index % GENERIC_TAKO_ICONS.length];
  return `${process.env.PUBLIC_URL}/icon/${icon}`;
}
