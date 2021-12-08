import { Button } from "@mui/material";

const FormSubmitButton = ({ children }) => {
  return (
    <Button variant="contained" fullWidth sx={{ mt: 1 }} type="submit">
      Submit
    </Button>
  );
};

export default FormSubmitButton;
