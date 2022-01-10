import React from "react";

const ThemeCreatorContext = React.createContext();
ThemeCreatorContext.displayName = "themeCreatorBottomContext";

const ThemeCreatorProvider = ({ children, baseTheme }) => {
  const [theme, setTheme] = React.useState(baseTheme);

  React.useEffect(() => {
    setTheme(baseTheme);
  }, [baseTheme]);

  return (
    <ThemeCreatorContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeCreatorContext.Provider>
  );
};

const useThemeCreator = () => React.useContext(ThemeCreatorContext);

export { ThemeCreatorProvider, useThemeCreator };
