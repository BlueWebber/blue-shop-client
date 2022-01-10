import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useThemeCreator } from "../../../context/themeCreator";
import ControlledColorPicker from "../controlledColorPicker";
import ColorPicker from "../colorPicker";
import _ from "lodash";
import PaperContainer from "./paperContainer";
import GridItem from "./gridItem";

const createShadows = (
  color0 = "rgba(0,0,0,0.2)",
  color1 = "rgba(0,0,0,0.14)",
  color2 = "rgba(0,0,0,0.12)"
) => [
  `none`,
  `0px 2px 1px -1px ${color0},0px 1px 1px 0px ${color1},0px 1px 3px 0px ${color2}`,
  `0px 3px 1px -2px ${color0},0px 2px 2px 0px ${color1},0px 1px 5px 0px ${color2}`,
  `0px 3px 3px -2px ${color0},0px 3px 4px 0px ${color1},0px 1px 8px 0px ${color2}`,
  `0px 2px 4px -1px ${color0},0px 4px 5px 0px ${color1},0px 1px 10px 0px ${color2}`,
  `0px 3px 5px -1px ${color0},0px 5px 8px 0px ${color1},0px 1px 14px 0px ${color2}`,
  `0px 3px 5px -1px ${color0},0px 6px 10px 0px ${color1},0px 1px 18px 0px ${color2}`,
  `0px 4px 5px -2px ${color0},0px 7px 10px 1px ${color1},0px 2px 16px 1px ${color2}`,
  `0px 5px 5px -3px ${color0},0px 8px 10px 1px ${color1},0px 3px 14px 2px ${color2}`,
  `0px 5px 6px -3px ${color0},0px 9px 12px 1px ${color1},0px 3px 16px 2px ${color2}`,
  `0px 6px 6px -3px ${color0},0px 10px 14px 1px ${color1},0px 4px 18px 3px ${color2}`,
  `0px 6px 7px -4px ${color0},0px 11px 15px 1px ${color1},0px 4px 20px 3px ${color2}`,
  `0px 7px 8px -4px ${color0},0px 12px 17px 2px ${color1},0px 5px 22px 4px ${color2}`,
  `0px 7px 8px -4px ${color0},0px 13px 19px 2px ${color1},0px 5px 24px 4px ${color2}`,
  `0px 7px 9px -4px ${color0},0px 14px 21px 2px ${color1},0px 5px 26px 4px ${color2}`,
  `0px 8px 9px -5px ${color0},0px 15px 22px 2px ${color1},0px 6px 28px 5px ${color2}`,
  `0px 8px 10px -5px ${color0},0px 16px 24px 2px ${color1},0px 6px 30px 5px ${color2}`,
  `0px 8px 11px -5px ${color0},0px 17px 26px 2px ${color1},0px 6px 32px 5px ${color2}`,
  `0px 9px 11px -5px ${color0},0px 18px 28px 2px ${color1},0px 7px 34px 6px ${color2}`,
  `0px 9px 12px -6px ${color0},0px 19px 29px 2px ${color1},0px 7px 36px 6px ${color2}`,
  `0px 10px 13px -6px ${color0},0px 20px 31px 3px ${color1},0px 8px 38px 7px ${color2}`,
  `0px 10px 13px -6px ${color0},0px 21px 33px 3px ${color1},0px 8px 40px 7px ${color2}`,
  `0px 10px 14px -6px ${color0},0px 22px 35px 3px ${color1},0px 8px 42px 7px ${color2}`,
  `0px 11px 14px -7px ${color0},0px 23px 36px 3px ${color1},0px 9px 44px 8px ${color2}`,
  `0px 11px 15px -7px ${color0},0px 24px 38px 3px ${color1},0px 9px 46px 8px ${color2}`,
];

const Misc = () => {
  const [theme, setTheme] = useThemeCreator();

  // fix the regex
  const [shadowColor, setShadowColor] = React.useState(() =>
    theme.shadows[1].match(
      /rgba?\(((25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,\s*?){2}(25[0-5]|2[0-4]\d|1\d{1,2}|\d\d?)\s*,?\s*([01]\.?\d*?)?\)/g
    )
  );

  const changeShadows = (index, color) => {
    const newColor = `rgba(${color.r},${color.g},${color.b},${color.a})`;
    const newShadows = _.cloneDeep(shadowColor);
    newShadows[index] = newColor;
    const newTheme = _.cloneDeep(theme);
    newTheme.shadows = createShadows(...shadowColor);
    setShadowColor(newShadows);
    setTheme(newTheme);
  };

  const handleColorChange = (index) => (color) => changeShadows(index, color);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          textAlign: "center",
        }}
      >
        <GridItem>
          <PaperContainer elevation={10}>
            <Typography variant="h6" component="label">
              Shadows
            </Typography>
          </PaperContainer>
        </GridItem>
        <GridItem direction="column">
          <ControlledColorPicker
            color={shadowColor[0]}
            setColor={handleColorChange(0)}
            colorType="rgb"
          />
          <ControlledColorPicker
            color={shadowColor[1]}
            setColor={handleColorChange(1)}
            colorType="rgb"
          />
          <ControlledColorPicker
            color={shadowColor[2]}
            setColor={handleColorChange(2)}
            colorType="rgb"
          />
        </GridItem>
        <GridItem>
          <PaperContainer>
            <Typography>Divider</Typography>
            <Divider />
            <Typography>Light Divider</Typography>
            <Divider light />
          </PaperContainer>
        </GridItem>
        <GridItem>
          <ColorPicker
            theme={theme}
            setTheme={setTheme}
            themeValue="palette.divider"
            withoutAlpha={false}
            colorType="rgb"
          />
        </GridItem>
      </Grid>
    </ThemeProvider>
  );
};

export default Misc;
