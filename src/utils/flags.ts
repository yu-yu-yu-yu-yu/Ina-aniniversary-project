export const VOID_BADGE = `${process.env.PUBLIC_URL}/icon/${encodeURIComponent("Hollow Tako.png")}`;

export const getFlagSrc = (code?: string): string => {
  const normalized = (code || "").trim().toUpperCase();
  if (!/^[A-Z]{2}$/.test(normalized)) return VOID_BADGE;
  return `${process.env.PUBLIC_URL}/flags/${normalized}.svg`;
};
