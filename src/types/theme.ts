export type ThemeName = "Standard" | "Violet" | "Meconopsis" | "Temari";

export interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export interface ThemeVariables {
  "--lightdark": string;
  "--inai-purple": string;
  "--ina-orange": string;
  "--ika-purple": string;
  "--ink-black": string;
  "--background-image": string;
  "--text-color": string;
  "--background": string;
  "--shadow": string;
  "--logo-filter": string;
}

export type Themes = Record<ThemeName, ThemeVariables>;
