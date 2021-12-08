import { TextField } from "@mui/material";
import {
  FormBox,
  FormTitle,
  FormLink,
  FormSubmitButton,
} from "../components/common/form";

const Login = () => {
  return (
    <FormBox>
      <FormTitle>Login</FormTitle>
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
          type="password"
          id="password"
          variant="outlined"
          label="Password"
          margin="normal"
          required
          fullWidth
        />
        <FormSubmitButton>Submit</FormSubmitButton>
      </form>
      <FormLink to="/signup">Don't have an account? Sign up today</FormLink>
    </FormBox>
  );
};

export default Login;
