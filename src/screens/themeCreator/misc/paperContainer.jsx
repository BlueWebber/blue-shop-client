import React from "react";
import { Paper } from "@mui/material";

const PaperContainer = ({ children, elevation }) => {
  return (
    <Paper
      elevation={elevation}
      sx={{
        width: 150,
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      {children}
    </Paper>
  );
};

export default PaperContainer;
