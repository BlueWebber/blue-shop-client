import React from "react";

const DrawerContext = React.createContext();
DrawerContext.displayName = "appDrawerContext";

const AppDrawerProvider = ({ children }) => {
  const [drawerOn, setDrawerOn] = React.useState(false);
  return (
    <DrawerContext.Provider value={[drawerOn, setDrawerOn]}>
      {children}
    </DrawerContext.Provider>
  );
};

const useAppDrawer = () => React.useContext(DrawerContext);

export { AppDrawerProvider, useAppDrawer };
