import { Box, Paper, Typography } from "@mui/material";
import ColorPicker from "./colorPicker";
import { ThemeProvider } from "@mui/material/styles";
import { navBackgroundImg } from "../theme";
import { useThemeCreator } from "../../context/themeCreator";

const backgrounds = [
  {
    label: "Surfaces",
    bg: "paper",
  },
  {
    label: "App Background",
    bg: "default",
    bgImg: "none",
  },
  {
    label: "Top Nav",
    bg: "appBar",
    bgImg: navBackgroundImg,
  },
  {
    label: "Bottom Nav",
    bg: "navBar",
    bgImg: navBackgroundImg,
  },
];

backgrounds.map(
  (background) => (background.value = "palette.background." + background.bg)
);

const Backgrounds = () => {
  const [theme, setTheme] = useThemeCreator();

  return (
    <ThemeProvider theme={theme}>
      {backgrounds.map(({ label, bg, bgImg, value }) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 1,
          }}
          key={label}
        >
          <Paper
            sx={{
              height: 140,
              width: 140,
              backgroundColor: (theme) => theme.palette.background[bg],
              backgroundImage: bgImg,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography align="center" variant="h6" component="label">
              {label}
            </Typography>
          </Paper>
          <ColorPicker theme={theme} setTheme={setTheme} themeValue={value} />
        </Box>
      ))}
    </ThemeProvider>
  );
};

export default Backgrounds;
