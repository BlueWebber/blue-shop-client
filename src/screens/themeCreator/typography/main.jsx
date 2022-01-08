import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import ColorPicker from "../colorPicker";
import useChangeOnUnmount from "../../../hooks/useChangeOnUnmount";
import useLocalStateObj from "../../../hooks/useLocalStateObj";
import { ThemeProvider } from "@mui/material/styles";
import Icons from "./icons";

const typoExamples = [
  {
    text: "H1 Heading",
    variant: "h1",
    color: "palette.text.primary",
  },
  { text: "H2 Heading", variant: "h2" },
  { text: "H3 Heading", variant: "h3" },
  { text: "H4 Heading", variant: "h4" },
  { text: "H5 Heading", variant: "h5" },
  { text: "H6 Heading", variant: "h6" },
  {
    text: "body1 (main text)",
    variant: "body1",
  },
  {
    text: "body2",
    variant: "body2",
    withDivider: true,
  },
  {
    text: "body1 secondary",
    variant: "body1",
    color: "palette.text.secondary",
    textColor: "text.secondary",
  },
  {
    text: "body1 disabled",
    variant: "body1",
    color: "palette.text.disabled",
    textColor: "text.disabled",
  },
];

const TypographyExample = ({ theme, setTheme }) => {
  const [typoTheme, setTypoTheme] = useLocalStateObj(theme);
  useChangeOnUnmount(typoTheme, setTheme);

  return (
    <ThemeProvider theme={typoTheme}>
      <Paper elevation={0} sx={{ backgroundColor: "inherit", padding: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {typoExamples.map(
            ({ text, variant, color, textColor, withDivider }) => (
              <React.Fragment key={text}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.7,
                    mt: 0.5,
                  }}
                >
                  <Typography
                    variant={variant}
                    {...(textColor && {
                      color: textColor,
                    })}
                    component="label"
                  >
                    {text}
                  </Typography>
                  {color && (
                    <ColorPicker
                      themeValue={color}
                      theme={typoTheme}
                      setTheme={setTypoTheme}
                    />
                  )}
                </Box>
                {withDivider && (
                  <>
                    <Icons />
                    <Divider />
                  </>
                )}
              </React.Fragment>
            )
          )}
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export default TypographyExample;
