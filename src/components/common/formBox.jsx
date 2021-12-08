import { Box, Container, Paper } from "react";

const FormBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 0.6,
        flexDirection: "column",
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ padding: 1 }}>{children}</Paper>
      </Container>
    </Box>
  );
};

export default FormBox;
