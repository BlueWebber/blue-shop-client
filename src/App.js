import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import { ThemeProvider } from "./context/theme";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
