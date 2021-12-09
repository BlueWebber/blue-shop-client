import { CircularProgress } from "@mui/material";

const ComponentLoading = ({ center }) => {
  return (
    <CircularProgress
      color="inherit"
      size={52}
      {...(center
        ? {
            sx: {
              position: "absolute",
              top: "50%",
              left: "50%",
            },
          }
        : null)}
    />
  );
};

export default ComponentLoading;
