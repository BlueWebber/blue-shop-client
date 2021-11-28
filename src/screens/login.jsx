import { Button, TextField, Container, Paper, FormLabel } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const Login = () => {
  return (
    <Container>
      <Paper sx={{ padding: 1 }}>
        <FormLabel>Login</FormLabel>
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
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosRoundedIcon />}
            sx={{ mt: 1 }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
