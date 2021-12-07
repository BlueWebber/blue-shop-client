import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import AppWrapper from "./components/appWrapper";
import AppBar from "./components/appBar";
import Main from "./components/main";

function App() {
  return (
    <AppWrapper>
      <Main>
        <AppBar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Main>
    </AppWrapper>
  );
}

export default App;
