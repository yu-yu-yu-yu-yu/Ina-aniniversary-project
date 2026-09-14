export const VOID_FLAG = "🏴";

export const isValidCountryCode = (code?: string): boolean =>
  /^[A-Z]{2}$/.test((code || "").trim().toUpperCase());

export const getFlagImgSrc = (code?: string): string | null => {
  const normalized = (code || "").trim().toUpperCase();
  if (!isValidCountryCode(normalized)) return null;
  return `https://flagcdn.com/w40/${normalized.toLowerCase()}.png`;
};
