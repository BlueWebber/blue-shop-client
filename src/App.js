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
const Theme = React.lazy(() => import("./screens/theme"));
const ThemeCreator = React.lazy(() => import("./screens/themeCreator"));
const ThemeSelectorWrapper = React.lazy(() =>
  import("./components/themeSelectorWrapper")
);

function App() {
  return (
    <AppWrapper>
      <Main>
        <AppBar />
        <NavBar />
        <AppDrawer />
        <React.Suspense fallback={<ComponentLoading center />}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/theme" element={<ThemeSelectorWrapper />}>
              <Route path="" element={<Theme />} />
              <Route path="create" element={<ThemeCreator />} />
            </Route>
          </Routes>
        </React.Suspense>
      </Main>
    </AppWrapper>
  );
}

export default App;
