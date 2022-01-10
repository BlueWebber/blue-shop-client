import { Menu as MuiMenu, MenuItem, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";

const callBoth = (func1, func2) => {
  func1();
  func2();
};

const MenuIcon = ({ icon }) => {
  const Component = icon;
  return <Component sx={{ mr: 2 }} />;
};

const Menu = ({ themeId, handleEdit, handleDelete, selected }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const editHandler = () => handleEdit(themeId);
  const deleteHandler = () => handleDelete(themeId);

  return (
    <>
      <IconButton
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <MoreVertIcon
          {...(selected && {
            sx: { color: (theme) => theme.palette.primary.contrastText },
          })}
        />
      </IconButton>
      <MuiMenu
        id={themeId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => callBoth(handleClose, editHandler)}>
          <MenuIcon icon={EditIcon} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => callBoth(handleClose, deleteHandler)}
          sx={{ color: (theme) => theme.palette.error.main }}
        >
          <MenuIcon icon={DeleteIcon} />
          Delete
        </MenuItem>
      </MuiMenu>
    </>
  );
};

export default Menu;
