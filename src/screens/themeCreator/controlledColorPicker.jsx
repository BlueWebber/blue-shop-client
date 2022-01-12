import React from "react";
import { Box, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SketchPicker } from "react-color";

const StyledSketchPicker = styled(SketchPicker)(
  ({ theme }) => `
      background-color: ${theme.palette.background.paper} !important;
      background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)) !important;
  `
);

const ControlledColorPicker = ({ color, setColor }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box>
      <Box
        sx={{
          border: "1px solid white",
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <Box
          sx={{
            width: "2rem",
            height: "1rem",
            background: color,
          }}
        />
      </Box>
      {open && (
        <ClickAwayListener onClickAway={handleClose}>
          <Box
            sx={{
              position: "absolute",
              zIndex: "2",
            }}
          >
            <StyledSketchPicker
              color={color}
              onChange={(colorChange) => {
                setColor(colorChange["rgb"]);
              }}
            />
          </Box>
        </ClickAwayListener>
      )}
    </Box>
  );
};

export default ControlledColorPicker;
