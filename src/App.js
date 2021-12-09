import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login";
import AppWrapper from "./components/appWrapper";
import NavBar from "./components/navBar";
import AppBar from "./components/appBar";
import AppDrawer from "./components/appDrawer";
import Main from "./components/main";
import ComponentLoading from "./components/common/componentLoading";

const Signup = React.lazy(() => import("./screens/signup"));

function App() {
  return (
    <AppWrapper>
      <Main>
        <AppBar />
        <NavBar />
        <AppDrawer />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/signup"
            element={
              <React.Suspense fallback={<ComponentLoading center />}>
                <Signup />
              </React.Suspense>
            }
          />
        </Routes>
      </Main>
    </AppWrapper>
  );
}

export default App;
