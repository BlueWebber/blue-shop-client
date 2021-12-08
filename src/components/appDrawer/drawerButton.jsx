import { ListItem, ListItemButton, ListItemText } from "@mui/material";

const DrawerButton = ({ children, isCollapsable }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText
          primary={children}
          {...(isCollapsable ? { sx: { pl: 2 } } : null)}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerButton;
