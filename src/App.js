import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import { ThemeProvider } from "./context/theme";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </GlobalStyle>
    </ThemeProvider>
  );
}

export default App;
