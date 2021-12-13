import { Container, Typography, Box, Divider } from "@mui/material";

const ColorDisplay = ({ children, withoutDivider, sx }) => {
  return (
    <>
      {!withoutDivider && <Divider />}
      <Box>
        <Container sx={sx}>
          <Typography>{children}</Typography>
        </Container>
      </Box>
    </>
  );
};

export default ColorDisplay;
