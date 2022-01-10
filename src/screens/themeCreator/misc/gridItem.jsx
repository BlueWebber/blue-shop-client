import React from "react";
import { Grid } from "@mui/material";

const GridItem = ({ children, direction }) => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: direction,
        justifyContent: "space-around",
        alignItems: "center",
        mb: 5,
      }}
      xs={6}
    >
      {children}
    </Grid>
  );
};

export default GridItem;
