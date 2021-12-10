import theme from "./base";
import { deepmerge } from "@mui/utils";
import { createTheme } from "@mui/material/styles";

let lightTheme = {
  palette: {
    mode: "light",
    background: {
      appBar: "#1565c0",
      navBar: "#1976d2",
    },
    scroll: {
      base: "#c1c1c1",
      hover: "#a8a8a8",
    },
  },
  id: "light",
};

lightTheme = createTheme(deepmerge(theme, lightTheme));

export default lightTheme;
