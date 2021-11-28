import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import { ThemeProvider } from "./context/theme";
import GlobalStyle from "./styles/global";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
