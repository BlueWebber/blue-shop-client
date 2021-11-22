import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import darkTheme from "../styles/themes/dark";
import lightTheme from "../styles/themes/light";

const ThemeSwitcherContext = React.createContext();
ThemeSwitcherContext.displayName = "ThemeSwitcherContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");

  return (
    <ThemeSwitcherContext.Provider value={[theme, setTheme]}>
      <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeSwitcherContext);

export { ThemeProvider, useTheme };
