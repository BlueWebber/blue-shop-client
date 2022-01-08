import { TableBody } from "@mui/material";
import React from "react";
import useChangeOnUnmount from "../../../hooks/useChangeOnUnmount";
import useLocalStateObj from "../../../hooks/useLocalStateObj";
import { ButtonRow, DisabledButtonRow } from "./buttonRows";
import buttonRows from "./buttonRowsObj";

const ButtonsContainer = ({ theme, setTheme }) => {
  const [buttonTheme, setButtonTheme] = useLocalStateObj(theme);
  useChangeOnUnmount(buttonTheme, setTheme);

  return (
    <TableBody>
      {buttonRows.rows.map((row) => (
        <ButtonRow
          theme={buttonTheme}
          setTheme={setButtonTheme}
          color={row}
          key={row}
        />
      ))}
      <DisabledButtonRow theme={buttonTheme} setTheme={setButtonTheme} />
    </TableBody>
  );
};

export default ButtonsContainer;
