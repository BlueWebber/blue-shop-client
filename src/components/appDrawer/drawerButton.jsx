import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const DrawerButton = ({ children, isCollapsable, parentLink, link }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={parentLink ? `${parentLink}/${link}` : link}
      >
        <ListItemText
          primary={children}
          {...(isCollapsable ? { sx: { pl: 2 } } : null)}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerButton;
