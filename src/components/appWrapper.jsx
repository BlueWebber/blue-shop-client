import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "../context/theme";
import { AppDrawerProvider } from "../context/appDrawer";
import GlobalStyle from "../styles/global";

const AppWrapper = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <CssBaseline />
        <AppDrawerProvider>{children}</AppDrawerProvider>
      </ThemeProvider>
    </>
  );
};

export default AppWrapper;
