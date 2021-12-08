import { Drawer, List } from "@mui/material";
import { useAppDrawer } from "../../context/appDrawer";
import CollapsableList from "./collapsableList";
import DrawerButton from "./drawerButton";
import Category from "./category";

const AppDrawer = () => {
  const [drawerOn, setDrawerOn] = useAppDrawer();

  return (
    <Drawer anchor="left" open={drawerOn} onClose={() => setDrawerOn(false)}>
      <List>
        <Category>Shopping Departments</Category>
        <CollapsableList name="Electronics">
          <DrawerButton>Accessories & Supplies</DrawerButton>
          <DrawerButton>Camera & Photo</DrawerButton>
          <DrawerButton>Car & Vehicle Electronics</DrawerButton>
          <DrawerButton>Cell Phones & Accessories</DrawerButton>
          <DrawerButton>GPS & Navigation</DrawerButton>
          <DrawerButton>Headphones</DrawerButton>
          <DrawerButton>Home Audio</DrawerButton>
          <DrawerButton>Office Electronics</DrawerButton>
          <DrawerButton>Portable Audio & Video</DrawerButton>
          <DrawerButton>Security & Surveillance</DrawerButton>
        </CollapsableList>
        <CollapsableList name="Computers">
          <DrawerButton>Computer Accessories & Peripherals</DrawerButton>
          <DrawerButton>Computer Components</DrawerButton>
          <DrawerButton>Computers & Tablets</DrawerButton>
          <DrawerButton>Data Storage</DrawerButton>
          <DrawerButton>External Components</DrawerButton>
          <DrawerButton>Laptop Accessories</DrawerButton>
          <DrawerButton>Monitors</DrawerButton>
          <DrawerButton>Networking Products</DrawerButton>
          <DrawerButton>Power Strips & Surge Protectors</DrawerButton>
          <DrawerButton>Printers</DrawerButton>
        </CollapsableList>
        <CollapsableList name="Smart Home">
          <DrawerButton>Smart Home Lighting</DrawerButton>
          <DrawerButton>Smart Locks and Entry</DrawerButton>
          <DrawerButton>Security Cameras and Systems</DrawerButton>
          <DrawerButton>Plugs and Outlets</DrawerButton>
          <DrawerButton>New Smart Devices</DrawerButton>
          <DrawerButton>Heating and Cooling</DrawerButton>
          <DrawerButton>Detectors and Sensors</DrawerButton>
          <DrawerButton>Pet</DrawerButton>
          <DrawerButton>Voice Assistants and Hubs</DrawerButton>
          <DrawerButton>Kitchen</DrawerButton>
        </CollapsableList>
        <Category withDivider>Programs & Benefits</Category>
        <CollapsableList name="Gift Cards">
          <Category>Give A Gift Card</Category>
          <DrawerButton>All gift cards</DrawerButton>
          <DrawerButton>eGift cards</DrawerButton>
          <DrawerButton>Gift cards by mail</DrawerButton>
          <DrawerButton>Specialty gift cards</DrawerButton>
          <Category withDivider>Manage Your Gift Card</Category>
          <DrawerButton>Redeem a gift card</DrawerButton>
          <DrawerButton>View Your Balance</DrawerButton>
          <DrawerButton>Reload Your Balance</DrawerButton>
        </CollapsableList>
        <Category withDivider>Help & Settings</Category>
        <DrawerButton>Sign In</DrawerButton>
        <DrawerButton>Language</DrawerButton>
        <DrawerButton>Customer Service</DrawerButton>
      </List>
    </Drawer>
  );
};

export default AppDrawer;
