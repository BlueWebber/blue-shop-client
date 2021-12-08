import FormBox from "../components/common/form/formBox";
import { Typography, TextField, Button, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Signup = () => {
  return (
    <FormBox>
      <Typography align="center" variant="h6" component="h1">
        Sign Up
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          id="phoneOrEmail"
          variant="outlined"
          label="Phone number or email"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          type="text"
          id="firstName"
          variant="outlined"
          label="First Name"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          type="text"
          id="lastName"
          variant="outlined"
          label="Last Name"
          margin="normal"
          required
          fullWidth
        />

        <TextField
          type="password"
          id="password"
          variant="outlined"
          label="Password"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          type="password"
          id="confirmPassword"
          variant="outlined"
          label="Confirm password"
          margin="normal"
          required
          fullWidth
        />
        <Button variant="contained" fullWidth sx={{ mt: 1 }} type="submit">
          Submit
        </Button>
      </form>
      <Box sx={{ mt: 1, textAlign: "center" }}>
        <Link component={RouterLink} underline="none" to="/login">
          Already have an account? Sign in
        </Link>
      </Box>
    </FormBox>
  );
};

export default Signup;
