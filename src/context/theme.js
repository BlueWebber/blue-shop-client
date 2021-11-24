import React from "react";
// import { ThemeProvider as StyledThemeProvider } from "styled-components";
// import darkTheme from "../styles/themes/dark";
// import lightTheme from "../styles/themes/light";
// import useMediaQuery from '@mui/material/useMediaQuery';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
// import CssBaseline from '@mui/material/CssBaseline';

const ThemeSwitcherContext = React.createContext();
ThemeSwitcherContext.displayName = "ThemeSwitcherContext";
/*
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
*/

const ThemeProvider = ({ children }) => {
  // useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = React.useState("dark");
  const createdTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
        },
      }),
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
