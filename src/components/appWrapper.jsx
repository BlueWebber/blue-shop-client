import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "../context/theme";
import GlobalStyle from "../styles/global";

const AppWrapper = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default AppWrapper;
