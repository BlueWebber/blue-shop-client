import { TableCell, TableRow, Button } from "@mui/material";
import React from "react";
import _ from "lodash";
import { ThemeProvider } from "@mui/material/styles";
import ColorPicker from "../colorPicker";
import buttonRows from "./buttonRowsObj";

let ButtonRow = ({ color, theme, setTheme }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableRow key={color}>
        <TableCell component="th" scope="row">
          {color}
        </TableCell>
        {buttonRows.buttons.map(({ variant, text }) => (
          <TableCell align="center" key={variant}>
            <Button variant={variant} color={color} sx={{ m: 0 }}>
              {text}
            </Button>
          </TableCell>
        ))}
        {buttonRows.colorSelectors[color].map((themeColor) => (
          <TableCell align="center" key={themeColor}>
            <ColorPicker
              theme={theme}
              setTheme={setTheme}
              themeValue={themeColor}
            />
          </TableCell>
        ))}
      </TableRow>
    </ThemeProvider>
  );
};

ButtonRow = React.memo(ButtonRow, (prevProps, nextProps) => {
  prevProps.theme.palette.text.primary ===
    nextProps.theme.palette.text.primary &&
    _.isEqual(
      prevProps.theme.palette[nextProps.color],
      nextProps.theme.palette[nextProps.color]
    );
});

let DisabledButtonRow = ({ theme, setTheme }) => {
  return (
    <ThemeProvider theme={theme}>
      <TableRow key="disabled" sx={{ "& td, & th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          disabled
        </TableCell>
        {buttonRows.buttons.map(({ variant, text }) => (
          <TableCell align="center" key={variant}>
            <Button variant={variant} disabled sx={{ m: 0 }}>
              {text}
            </Button>
          </TableCell>
        ))}
        {buttonRows.colorSelectors.disabled.map((themeColor) => (
          <TableCell align="center" key={themeColor}>
            <ColorPicker
              theme={theme}
              setTheme={setTheme}
              themeValue={themeColor}
            />
          </TableCell>
        ))}
      </TableRow>
    </ThemeProvider>
  );
};

DisabledButtonRow = React.memo(
  DisabledButtonRow,
  (prevProps, nextProps) =>
    prevProps.theme.palette.text.primary ===
      nextProps.theme.palette.text.primary &&
    _.isEqual(prevProps.theme.palette.action, nextProps.theme.palette.action)
);

export { ButtonRow, DisabledButtonRow };
