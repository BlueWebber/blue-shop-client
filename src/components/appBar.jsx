import { AppBar as AppBarComp, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/logoHorizontal.png";

const AppBar = () => {
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
      </Toolbar>
    </AppBarComp>
  );
};

export default AppBar;
