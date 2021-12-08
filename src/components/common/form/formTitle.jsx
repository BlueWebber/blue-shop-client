import { Typography } from "@mui/material";

const FormTitle = ({ children }) => {
  return (
    <Typography align="center" variant="h6" component="h1">
      {children}
    </Typography>
  );
};

export default FormTitle;
