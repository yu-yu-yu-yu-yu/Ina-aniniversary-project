const CACHE = "takonomicon-cache";
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const STAMP = "x-takonomicon-cached-at";
const versionRequest = () =>
  new Request(`${self.registration.scope}__takonomicon-version`);

const isBookData = (url) =>
  url.origin === self.location.origin &&
  /^\/data\/takonomicon(Data|ImageSizes)\.json$/.test(url.pathname);

const isBookAsset = (url) =>
  url.origin === self.location.origin && url.pathname.startsWith("/lorebook/");

const isFresh = (response) =>
  Date.now() - Number(response.headers.get(STAMP) || 0) < MAX_AGE_MS;

const stamped = async (response) => {
  const headers = new Headers(response.headers);
  headers.set(STAMP, String(Date.now()));
  return new Response(await response.blob(), {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

const digest = async (buffer) =>
  Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1", buffer)))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

const sweepExpired = async () => {
  const cache = await caches.open(CACHE);
  const marker = versionRequest().url;
  for (const request of await cache.keys()) {
    if (request.url === marker) continue;
    const response = await cache.match(request);
    if (response && !isFresh(response)) await cache.delete(request);
  }
};

const renewIfChanged = async (response) => {
  const version = await digest(await response.clone().arrayBuffer());
  const cache = await caches.open(CACHE);
  const stored = await cache.match(versionRequest());
  if (stored && (await stored.text()) === version) return;
  await caches.delete(CACHE);
  const renewed = await caches.open(CACHE);
  await renewed.put(versionRequest(), new Response(version));
};

const handleData = async (event) => {
  const { request } = event;
  try {
    const response = await fetch(request, { cache: "no-cache" });
    if (!response.ok) throw new Error(String(response.status));
    if (/takonomiconData\.json$/.test(request.url)) {
      await renewIfChanged(response);
    }
    const cache = await caches.open(CACHE);
    event.waitUntil(
      stamped(response.clone())
        .then((copy) => cache.put(request, copy))
        .then(sweepExpired),
    );
    return response;
  } catch (error) {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(request);
    if (cached && isFresh(cached)) return cached;
    throw error;
  }
};

const handleAsset = async (event) => {
  const { request } = event;
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached && isFresh(cached)) return cached;
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      event.waitUntil(
        stamped(response.clone()).then((copy) => cache.put(request, copy)),
      );
    }
    return response;
  } catch (error) {
    if (cached) return cached;
    throw error;
  }
};

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim().then(sweepExpired));
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET" || request.headers.has("range")) return;
  const url = new URL(request.url);
  if (isBookData(url)) event.respondWith(handleData(event));
  else if (isBookAsset(url)) event.respondWith(handleAsset(event));
});
