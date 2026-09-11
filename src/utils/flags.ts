export const VOID_FLAG = "🐙";

const REGIONAL_INDICATOR_OFFSET = 0x1f1e6 - "A".charCodeAt(0);

export const getFlagEmoji = (code?: string): string => {
  const normalized = (code || "").trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) return VOID_FLAG;
  return normalized
    .split("")
    .map((letter) =>
      String.fromCodePoint(letter.charCodeAt(0) + REGIONAL_INDICATOR_OFFSET),
    )
    .join("");
};
