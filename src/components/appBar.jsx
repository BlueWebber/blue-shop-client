import {
  AppBar as AppBarComp,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { useTheme } from "../context/theme";
import logo from "../assets/images/logoHorizontal.png";

const AppBar = () => {
  const [theme, setTheme] = useTheme();
  return (
    <AppBarComp
      position="static"
      sx={{ backgroundColor: (theme) => theme.palette.background.appBar }}
    >
      <Toolbar
        disableGutters
        sx={{
          ml: 1,
          mr: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button component={Link} to="">
          <img src={logo} alt="blue shop's website logo" height="30px" />
        </Button>
        <IconButton
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          sx={{
            color: (theme) => theme.palette.text.navButton,
          }}
        >
          <Brightness6Icon />
        </IconButton>
      </Toolbar>
    </AppBarComp>
  );
};

export default AppBar;
