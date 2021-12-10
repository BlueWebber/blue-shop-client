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
  },
  id: "light",
};

lightTheme = createTheme(deepmerge(theme, lightTheme));

export default lightTheme;
