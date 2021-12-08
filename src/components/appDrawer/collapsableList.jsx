import React from "react";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const CollapsableList = ({ name, children }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { isCollapsable: true })
          )}
        </List>
      </Collapse>
    </>
  );
};

export default CollapsableList;
