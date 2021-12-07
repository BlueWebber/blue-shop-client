import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import AppWrapper from "./components/appWrapper";
import AppBar from "./components/appBar";

function App() {
  return (
    <AppWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <AppBar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AppWrapper>
  );
}

export default App;
