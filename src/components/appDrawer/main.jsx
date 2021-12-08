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
        <CollapsableList name="Electronics" link="electronics">
          <DrawerButton link="accessories-and-supplies">
            Accessories & Supplies
          </DrawerButton>
          <DrawerButton link="camera-and-photo">Camera & Photo</DrawerButton>
          <DrawerButton link="car">Car & Vehicle Electronics</DrawerButton>
          <DrawerButton link="phones-and-accessories">
            Cell Phones & Accessories
          </DrawerButton>
          <DrawerButton link="gps">GPS & Navigation</DrawerButton>
          <DrawerButton link="headphones">Headphones</DrawerButton>
          <DrawerButton link="home-audio">Home Audio</DrawerButton>
          <DrawerButton link="office">Office Electronics</DrawerButton>
          <DrawerButton link="portable-audio-and-video">
            Portable Audio & Video
          </DrawerButton>
          <DrawerButton link="security">Security & Surveillance</DrawerButton>
        </CollapsableList>
        <CollapsableList name="Computers" link="computers">
          <DrawerButton link="peripherals">
            Computer Accessories & Peripherals
          </DrawerButton>
          <DrawerButton link="components">Computer Components</DrawerButton>
          <DrawerButton link="computers-and-tablets">
            Computers & Tablets
          </DrawerButton>
          <DrawerButton link="storage">Data Storage</DrawerButton>
          <DrawerButton link="external-components">
            External Components
          </DrawerButton>
          <DrawerButton link="laptop-accessories">
            Laptop Accessories
          </DrawerButton>
          <DrawerButton link="monitors">Monitors</DrawerButton>
          <DrawerButton link="networking">Networking Products</DrawerButton>
          <DrawerButton link="power-strips-and-surge-protectors">
            Power Strips & Surge Protectors
          </DrawerButton>
          <DrawerButton link="printers">Printers</DrawerButton>
        </CollapsableList>
        <CollapsableList name="Smart Home" link="smart-home">
          <DrawerButton link="lighting">Smart Home Lighting</DrawerButton>
          <DrawerButton link="smart locks">Smart Locks and Entry</DrawerButton>
          <DrawerButton link="security">
            Security Cameras and Systems
          </DrawerButton>
          <DrawerButton link="plugs-and-outlets">
            Plugs and Outlets
          </DrawerButton>
          <DrawerButton link="smart-devices">New Smart Devices</DrawerButton>
          <DrawerButton link="heating-and-cooling">
            Heating and Cooling
          </DrawerButton>
          <DrawerButton link="detectors-and-sensors">
            Detectors and Sensors
          </DrawerButton>
          <DrawerButton link="pet">Pet</DrawerButton>
          <DrawerButton link="voice-assistants">
            Voice Assistants and Hubs
          </DrawerButton>
          <DrawerButton link="kitchen">Kitchen</DrawerButton>
        </CollapsableList>
        <Category withDivider>Programs & Benefits</Category>
        <CollapsableList name="Gift Cards" link="gifts">
          <Category link="give">Give A Gift Card</Category>
          <DrawerButton link="all">All gift cards</DrawerButton>
          <DrawerButton link="egift-cards">eGift cards</DrawerButton>
          <DrawerButton link="mail">Gift cards by mail</DrawerButton>
          <DrawerButton link="specialty">Specialty gift cards</DrawerButton>
          <Category withDivider>Manage Your Gift Card</Category>
          <DrawerButton link="redeem">Redeem a gift card</DrawerButton>
          <DrawerButton link="view-balance">View Your Balance</DrawerButton>
          <DrawerButton link="reload-balance">Reload Your Balance</DrawerButton>
        </CollapsableList>
        <Category withDivider>Help & Settings</Category>
        <DrawerButton link="login">Sign In</DrawerButton>
        <DrawerButton link="signup">Sign Up</DrawerButton>
        <DrawerButton link="language">Language</DrawerButton>
        <DrawerButton link="support">Customer Service</DrawerButton>
      </List>
    </Drawer>
  );
};

export default AppDrawer;
