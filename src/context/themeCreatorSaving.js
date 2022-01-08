import React from "react";

// temporary solution
// actually, this gives me an idea
// maybe I can use a ThemeCreatorThemeProvider context
// and use this optimzation technique

const ThemeCreatorSavingContext = React.createContext();
ThemeCreatorSavingContext.displayName = "themeCreatorBottomContext";

const ThemeCreatorSavingProvider = ({ children }) => {
  const [isSaving, setIsSaving] = React.useState(false);

  return (
    <ThemeCreatorSavingContext.Provider value={[isSaving, setIsSaving]}>
      {children}
    </ThemeCreatorSavingContext.Provider>
  );
};

const useThemeCreatorSaving = () => React.useContext(ThemeCreatorSavingContext);

export { ThemeCreatorSavingProvider, useThemeCreatorSaving };
