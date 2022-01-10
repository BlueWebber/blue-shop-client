import { TableBody } from "@mui/material";
import React from "react";
import { useThemeCreator } from "../../../context/themeCreator";
import { ButtonRow, DisabledButtonRow } from "./buttonRows";
import buttonRows from "./buttonRowsObj";

const ButtonsContainer = () => {
  const [theme, setTheme] = useThemeCreator();

  return (
    <TableBody>
      {buttonRows.rows.map((row) => (
        <ButtonRow theme={theme} setTheme={setTheme} color={row} key={row} />
      ))}
      <DisabledButtonRow theme={theme} setTheme={setTheme} />
    </TableBody>
  );
};

export default ButtonsContainer;
