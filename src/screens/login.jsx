import Button from "@mui/material/Button";

const Login = () => {
  return (
    <div>
      <label>Login</label>
      <form>
        <label for="firstName">First name</label>
        <input type="text" id="firstName" />
        <label for="lastName">Last name</label>
        <input type="text" id="lastName" />
        <label for="phoneOrEmail">Mobile number or email</label>
        <input type="text" id="phoneOrEmail" />
        <label for="password">Password</label>
        <input type="text" id="password" />
        <label for="confirmPassword">Re-enter password</label>
        <input type="text" id="confirmPassword" />
        <Button variant="contained">Hello World</Button>
      </form>
    </div>
  );
};

export default Login;
