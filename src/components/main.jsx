import Box from "@mui/material/Box";

const Main = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      {children}
    </Box>
  );
};

export default Main;
