import React from "react";
import { Grid } from "@mui/material";

const GridItem = ({ children, direction }) => {
  return (
    <Grid
      direction={direction}
      item
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      xs={6}
    >
      {children}
    </Grid>
  );
};

export default GridItem;
