import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import AppWrapper from "./components/appWrapper";
import AppBar from "./components/appBar";

function App() {
  return (
    <AppWrapper>
      <AppBar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
