import {
  AppBar as AppBarComp,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { name: "Offers", link: "/offers" },
  { name: "Customer Support", link: "/support" },
  { name: "Gift Cards", link: "/gifts" },
  { name: "Sell", link: "/sell" },
];

const AppBar = () => {
  return (
    <AppBarComp position="static" sx={{ mb: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        {navItems.map((item) => (
          <Button variant="text" href={item.link}>
            {item.name}
          </Button>
        ))}
      </Toolbar>
    </AppBarComp>
  );
};

export default AppBar;
