import React from "react";
// import { ThemeProvider as StyledThemeProvider } from "styled-components";
// import darkTheme from "../styles/themes/dark";
// import lightTheme from "../styles/themes/light";
// import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";

const ThemeSwitcherContext = React.createContext();
ThemeSwitcherContext.displayName = "ThemeSwitcherContext";

const ThemeProvider = ({ children }) => {
  // useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = React.useState("dark");
  const createdTheme = React.useMemo(
    () => (theme === "dark" ? darkTheme : lightTheme),
    [theme]
  );

  return (
    <ThemeSwitcherContext.Provider value={[theme, setTheme]}>
      <MuiThemeProvider theme={createdTheme}>{children}</MuiThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeSwitcherContext);

export { ThemeProvider, useTheme };
