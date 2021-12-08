import { TextField } from "@mui/material";
import {
  FormBox,
  FormTitle,
  FormLink,
  FormSubmitButton,
} from "../components/common/form";

const Signup = () => {
  return (
    <FormBox>
      <FormTitle>Sign Up</FormTitle>
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
        <FormSubmitButton>Submit</FormSubmitButton>
      </form>
      <FormLink to="/login">Already have an account? Sign in</FormLink>
    </FormBox>
  );
};

export default Signup;
