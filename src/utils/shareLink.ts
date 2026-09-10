const shortHash = (input: string): string => {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(36);
};

export const entrySlug = (...parts: (string | undefined)[]): string => {
  const joined = parts.filter(Boolean).join(" ");
  const base = joined
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
  return `${base}-${shortHash(joined)}`;
};

export const copyEntryLink = async (slug: string): Promise<boolean> => {
  const url = `${window.location.origin}${window.location.pathname}#${slug}`;
  try {
    await navigator.clipboard?.writeText(url);
    return true;
  } catch {
    return false;
  }
};
