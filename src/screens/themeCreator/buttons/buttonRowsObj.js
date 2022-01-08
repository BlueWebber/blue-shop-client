const buttonRows = {
  buttons: [
    { text: "Normal", variant: "text" },
    { text: "Contained", variant: "contained" },
    { text: "Outlined", variant: "outlined" },
  ],
  columns: ["Normal", "Contained", "Outlined", "Text", "Background", "Hover"],
  rows: ["primary", "secondary", "success", "info", "warning", "error"],
};

const extensions = [".contrastText", ".main", ".dark"];

buttonRows.colorSelectors = {};
buttonRows.rows.map(
  (row) =>
    (buttonRows.colorSelectors[row] = extensions.map(
      (e) => "palette." + row + e
    ))
);

buttonRows.colorSelectors.disabled = [
  "palette.action.disabled",
  "palette.action.disabledBackground",
];

export default buttonRows;
