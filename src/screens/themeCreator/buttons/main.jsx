import { Table, TableContainer } from "@mui/material";
import React from "react";
import ButtonsContainer from "./buttonsContainer";

const ButtonsTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <ButtonsContainer />
      </Table>
    </TableContainer>
  );
};

export default ButtonsTable;
