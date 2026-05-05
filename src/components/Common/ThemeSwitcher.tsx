import React from "react";
import styled from "styled-components";
import { useTheme } from "./ThemeProvider";
import { ThemeName, themes } from "./themes";

const themeNames: ThemeName[] = ["Standard", "Violet", "Meconopsis", "Temari", "TakoTakover"];

const ThemeButton = styled.button<{ bg: string; color: string; border: string }>`
  position: fixed;
  left: 84px;
  bottom: 24px;
  z-index: 1001;
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border: 2px solid ${({ border }) => border};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #0002;
  cursor: pointer;
  font-size: 1.7rem;
  transition: background 0.2s, color 0.2s, border 0.2s;
`;

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const idx = themeNames.indexOf(theme);
  const nextTheme = themeNames[(idx + 1) % themeNames.length];
  const themeVars = themes[theme];

  return (
    <ThemeButton
      bg={themeVars["--light-background"] || "#A198B3"}
      color={themeVars["--light-highlight"] || "#F8BF04"}
      border={themeVars["--dark-highlight"] || "#564F68"}
      title={`Switch theme (${theme})`}
      onClick={() => setTheme(nextTheme)}
    >
      🖌️
    </ThemeButton>
  );
};