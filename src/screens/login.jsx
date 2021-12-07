import {
  Button,
  TextField,
  Container,
  Paper,
  Typography,
  Box,
} from "@mui/material";

/*
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
  id="confirmPassword"
  variant="outlined"
  label="Confirm password"
  margin="normal"
  required
  fullWidth
/>
*/

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 0.6,
        flexDirection: "column",
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ padding: 1 }}>
          <Typography align="center" variant="h6" component="h1">
            Login
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
              type="password"
              id="password"
              variant="outlined"
              label="Password"
              margin="normal"
              required
              fullWidth
            />
            <Button variant="contained" fullWidth sx={{ mt: 1 }} type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
