import { Container, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

const ThemeSelectorWrapper = ({ children }) => {
  return (
    <Container>
      <Paper sx={{ p: 1, mt: 1 }}>
        <Outlet />
      </Paper>
    </Container>
  );
};

export default ThemeSelectorWrapper;
