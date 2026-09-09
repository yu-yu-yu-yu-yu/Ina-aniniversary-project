import React, { createContext, useContext, useEffect, useState } from "react";
import { themes, ThemeName } from "./themes";
import { ThemeContextType } from "../../types/theme";

const ThemeContext = createContext<ThemeContextType>({
  theme: "Standard",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeName>(
    (localStorage.getItem("theme") as ThemeName) || "Standard",
  );

  useEffect(() => {
    const themeVars = themes[theme];
    Object.entries(themeVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value as string);
    });
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
