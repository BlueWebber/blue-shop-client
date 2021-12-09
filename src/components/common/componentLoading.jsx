import { CircularProgress } from "@mui/material";

const ComponentLoading = ({ center, size = 52 }) => {
  return (
    <CircularProgress
      color="inherit"
      size={size}
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
