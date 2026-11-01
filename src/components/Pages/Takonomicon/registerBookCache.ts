export const registerBookCache = (): void => {
  if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator))
    return;
  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/takonomicon-sw.js`)
    .catch(() => undefined);
};
