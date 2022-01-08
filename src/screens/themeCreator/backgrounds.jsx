import { Box, Paper, Typography } from "@mui/material";
import ColorPicker from "./colorPicker";
import { ThemeProvider } from "@mui/material/styles";
import useLocalStateObj from "../../hooks/useLocalStateObj";
import useChangeOnUnmount from "../../hooks/useChangeOnUnmount";
import { navBackgroundImg } from "../theme";

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

const Backgrounds = ({ theme, setTheme }) => {
  const [bgTheme, setBgTheme] = useLocalStateObj(theme);
  useChangeOnUnmount(bgTheme, setTheme);

  return (
    <ThemeProvider theme={bgTheme}>
      {backgrounds.map(({ label, bg, bgImg, value }) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            mt: 1,
          }}
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
          <ColorPicker
            theme={bgTheme}
            setTheme={setBgTheme}
            themeValue={value}
          />
        </Box>
      ))}
    </ThemeProvider>
  );
};

export default Backgrounds;
