import { ListItem, ListItemText, Divider, Typography } from "@mui/material";

const Category = ({ children, withDivider, isCollapsable }) => {
  return (
    <>
      {withDivider && <Divider />}
      <ListItem>
        <ListItemText
          disableTypography
          {...(isCollapsable ? { sx: { pl: 2 } } : null)}
        >
          <Typography variant="h6" component="label">
            {children}
          </Typography>
        </ListItemText>
      </ListItem>
    </>
  );
};

export default Category;
