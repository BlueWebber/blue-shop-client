import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import theme from "./base";

let darkTheme = {
  palette: {
    mode: "dark",
    background: {
      appBar: "#0a0a0a",
      navBar: "#121212",
    },
  },
  id: "dark",
};

darkTheme = createTheme(deepmerge(theme, darkTheme));

export default darkTheme;
