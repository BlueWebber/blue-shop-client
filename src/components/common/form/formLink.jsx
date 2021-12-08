import { Link, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const FormLink = ({ children, to }) => {
  return (
    <Box sx={{ mt: 1, textAlign: "center" }}>
      <Link component={RouterLink} underline="none" to={to}>
        {children}
      </Link>
    </Box>
  );
};

export default FormLink;
