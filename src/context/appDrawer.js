import React from "react";
import { useLocation } from "react-router";

const DrawerContext = React.createContext();
DrawerContext.displayName = "appDrawerContext";

const AppDrawerProvider = ({ children }) => {
  const [drawerOn, setDrawerOn] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => setDrawerOn(false), [location]);

  return (
    <DrawerContext.Provider value={[drawerOn, setDrawerOn]}>
      {children}
    </DrawerContext.Provider>
  );
};

const useAppDrawer = () => React.useContext(DrawerContext);

export { AppDrawerProvider, useAppDrawer };
