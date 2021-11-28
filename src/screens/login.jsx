import { Button, TextField, Container, CardContent } from "@mui/material";

const Login = () => {
  return (
    <Container>
      <CardContent>
        <form>
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
          <TextField
            type="password"
            id="confirmPassword"
            variant="outlined"
            label="Confirm password"
            margin="normal"
            required
            fullWidth
          />
          <Button variant="contained">Submit</Button>
        </form>
      </CardContent>
    </Container>
  );
};

export default Login;
