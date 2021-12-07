import { Drawer } from "@mui/material";
import { useAppDrawer } from "../context/appDrawer";

const AppDrawer = () => {
  const [drawerOn, setDrawerOn] = useAppDrawer();
  return (
    <Drawer anchor="left" open={drawerOn} onClose={() => setDrawerOn(false)}>
      hi this is an app drawer
    </Drawer>
  );
};

export default AppDrawer;
