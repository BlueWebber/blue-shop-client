import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import ColorPicker from "../colorPicker";
import { ThemeProvider } from "@mui/material/styles";
import Icons from "./icons";
import { useThemeCreator } from "../../../context/themeCreator";

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
    text: "Top Navigation Bar",
    variant: "body1",
  },
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
    text: "body1 Secondary",
    variant: "body1",
    color: "palette.text.secondary",
    textColor: "text.secondary",
  },
  {
    text: "body1 Disabled",
    variant: "body1",
    color: "palette.text.disabled",
    textColor: "text.disabled",
  },
  {
    text: "Bottom Navigation Bar",
    variant: "body1",
    color: "palette.text.navButton",
    textColor: "text.navButton",
  },
];

const TypographyExample = () => {
  const [theme, setTheme] = useThemeCreator();

  return (
    <ThemeProvider theme={theme}>
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
                      theme={theme}
                      setTheme={setTheme}
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
