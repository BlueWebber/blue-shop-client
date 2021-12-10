import { CircularProgress } from "@mui/material";
import React from "react";

const ComponentLoading = ({ center, size = 52, delay = 500 }) => {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [delay]);

  if (!visible) return <></>;

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
