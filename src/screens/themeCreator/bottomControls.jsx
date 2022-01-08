import React from "react";
import {
  Divider,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import { Navigate } from "react-router";
import _ from "lodash";
import { useThemeCreatorSaving } from "../../context/themeCreatorSaving";

const DialogText = ({ children }) => {
  return (
    <DialogContentText sx={{ fontWeight: 450 }}>{children}</DialogContentText>
  );
};

const BottomControls = ({ theme }) => {
  const [cancelled, setCancelled] = React.useState(false);
  const [saveOpen, setSaveOpen] = React.useState(false);
  const [cancelOpen, setCancelOpen] = React.useState(false);
  const [themeName, setThemeName] = React.useState(theme.name);
  const [, setIsSaving] = useThemeCreatorSaving();

  const handleCancelClose = () => setCancelOpen(false);
  const handleSaveClose = () => {
    setSaveOpen(false);
    setIsSaving(false);
  };

  const createTheme = () => {
    // replace this with an API call later.
    const newTheme = _.cloneDeep(theme);
    newTheme.name = themeName;
    newTheme.id = themeName;
    const themes = JSON.parse(localStorage.getItem("themes")) || [];
    themes.push(newTheme);
    localStorage.setItem("themes", JSON.stringify(themes));
  };

  return (
    <>
      <Divider sx={{ mb: 1 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="error"
          onClick={() => setCancelOpen(true)}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setSaveOpen(true);
            setIsSaving(true);
          }}
        >
          Create
        </Button>
      </Box>
      <Dialog open={cancelOpen} onClose={handleCancelClose}>
        <DialogTitle>Are you sure you want to cancel?</DialogTitle>
        <DialogContent>
          <DialogText>
            Any changes you have made will be permanently discarded.
          </DialogText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClose} autoFocus>
            No
          </Button>
          <Button
            onClick={() => {
              handleCancelClose();
              setCancelled(true);
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={saveOpen} onClose={handleSaveClose}>
        <DialogTitle>Create theme</DialogTitle>
        <DialogContent>
          <DialogText>Enter your new theme's name</DialogText>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            variant="standard"
            value={themeName}
            onChange={(e) => setThemeName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleSaveClose();
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              createTheme();
              handleSaveClose();
              setCancelled(true);
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      {cancelled && <Navigate to="/theme" />}
    </>
  );
};

export default BottomControls;
