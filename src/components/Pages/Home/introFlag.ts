export const INTRO_SEEN_KEY = "takonomicon-intro-seen";

export const markIntroSeen = (): void => {
  try {
    localStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    return;
  }
};

export const shouldShowIntro = (search: string): boolean => {
  try {
    return (
      localStorage.getItem(INTRO_SEEN_KEY) !== "1" ||
      new URLSearchParams(search).has("intro")
    );
  } catch {
    return false;
  }
};
