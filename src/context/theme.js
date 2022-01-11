import React from "react";
// import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import darkTheme from "../themes/dark";
import values from "../localStorageKeys";
import { createTheme } from "@mui/material/styles";

const currentThemeLocal = values.currentTheme;

const ThemeSwitcherContext = React.createContext();
ThemeSwitcherContext.displayName = "ThemeSwitcherContext";

const ThemeProvider = ({ children }) => {
  // useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, setTheme] = React.useState(() => {
    const localTheme = localStorage.getItem(currentThemeLocal);
    return localTheme ? createTheme(JSON.parse(localTheme)) : darkTheme;
  });

  React.useEffect(
    () => [localStorage.setItem(currentThemeLocal, JSON.stringify(theme))],
    [theme]
  );

  return (
    <ThemeSwitcherContext.Provider value={[theme, setTheme]}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeSwitcherContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeSwitcherContext);

export { ThemeProvider, useTheme };
