import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import AppWrapper from "./components/appWrapper";

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
