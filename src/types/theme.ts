export type ThemeName = "Standard" | "Violet" | "Meconopsis" | "Temari" | "TakoTakover";

export interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export interface ThemeVariables {
  "--lightdark": string;
  "--light-background": string;
  "--dark-background": string;
  "--light-highlight": string;
  "--dark-highlight": string;
  "--ink-black": string;
  "--background-image": string;
  "--text-color": string;
  "--background": string;
  "--shadow": string;
  "--logo-filter": string;
}

export type Themes = Record<ThemeName, ThemeVariables>;
