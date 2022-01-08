import {
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";
import React from "react";
import buttonRows from "./buttonRowsObj";
import ButtonsContainer from "./buttonsContainer";

const ButtonsTable = ({ theme, setTheme }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              Button
            </TableCell>
            {buttonRows.columns.map((text) => (
              <TableCell align="center" key={text}>
                {text}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <ButtonsContainer theme={theme} setTheme={setTheme} />
      </Table>
    </TableContainer>
  );
};

export default ButtonsTable;
