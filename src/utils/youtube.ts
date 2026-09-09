export interface YouTubeRef {
  id: string;
  start?: number;
}

const parseSeconds = (raw: string | null): number | undefined => {
  if (!raw) return undefined;
  const duration = raw.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);
  if (duration && (duration[1] || duration[2] || duration[3])) {
    const hours = Number(duration[1] || 0);
    const minutes = Number(duration[2] || 0);
    const seconds = Number(duration[3] || 0);
    return hours * 3600 + minutes * 60 + seconds;
  }
  const asNumber = Number(raw);
  return Number.isFinite(asNumber) && asNumber >= 0 ? asNumber : undefined;
};

export const parseYouTube = (url: string): YouTubeRef | null => {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  let id: string | null = null;
  if (parsed.hostname.includes("youtu.be")) {
    id = parsed.pathname.slice(1).split("/")[0] || null;
  } else if (parsed.hostname.includes("youtube.com")) {
    const embedMatch = parsed.pathname.match(/\/embed\/([\w-]{6,})/);
    id = embedMatch ? embedMatch[1] : parsed.searchParams.get("v");
  }
  if (!id) return null;

  const start = parseSeconds(
    parsed.searchParams.get("t") ?? parsed.searchParams.get("start"),
  );
  return start !== undefined ? { id, start } : { id };
};

export const toEmbed = (url: string): string => {
  const ref = parseYouTube(url);
  if (!ref) return url;
  const params = new URLSearchParams();
  if (ref.start !== undefined) params.set("start", String(ref.start));
  params.set("enablejsapi", "1");
  params.set("origin", window.location.origin);
  return `https://www.youtube.com/embed/${ref.id}?${params.toString()}`;
};

export const notifyPlayerReady = (
  iframe: HTMLIFrameElement | null | undefined,
): void => {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: "listening" }),
    "https://www.youtube.com",
  );
};

export const toWatch = (url: string): string => {
  const ref = parseYouTube(url);
  if (!ref) return url;
  const base = `https://www.youtube.com/watch?v=${ref.id}`;
  return ref.start !== undefined ? `${base}&t=${ref.start}` : base;
};
