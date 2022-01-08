import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import { Tab, Tabs, Box, Paper } from "@mui/material";
import React from "react";
import ThemeSelector from "../theme";
import lightTheme from "../../themes/light";
import darkTheme from "../../themes/dark";
import TypgographyExample from "./typography";
import ButtonsTable from "./buttons";
import Backgrounds from "./backgrounds";
import Misc from "./misc";
import BottomControls from "./bottomControls";
import { ThemeCreatorSavingProvider } from "../../context/themeCreatorSaving";

const themes = [lightTheme, darkTheme];

const TabPanel = ({ children, tab, value }) => {
  return <Box sx={{ m: 1 }}>{tab === value && children}</Box>;
};

const ThemeCreator = () => {
  const theme = useTheme();
  const [baseThemeId, setBaseThemeId] = React.useState(theme.id);
  const [tab, setTab] = React.useState("base");

  const getTheme = React.useCallback(() => {
    const searchedTheme = themes.find(
      (listTheme) => listTheme.id === baseThemeId
    );
    return searchedTheme.isDefault ? searchedTheme : createTheme(searchedTheme);
  }, [baseThemeId]);

  const [customTheme, setCustomTheme] = React.useState(getTheme);

  React.useEffect(() => {
    setCustomTheme(getTheme);
  }, [getTheme, baseThemeId]);

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs
          value={tab}
          onChange={(e, value) => setTab(value)}
          sx={{
            "@media (min-width: 768px)": {
              ".MuiTabs-flexContainer": {
                justifyContent: "center",
              },
            },
          }}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="Base" id="base" value="base" />
          <Tab label="Typography" id="typo" value="typo" />
          <Tab label="Buttons" id="btn" value="btn" />
          <Tab
            label="Surfaces and Backgrounds"
            id="surfaces"
            value="surfaces"
          />
          <Tab label="Misc" id="misc" value="misc" />
        </Tabs>
      </Box>
      <TabPanel tab={tab} value="base">
        <ThemeSelector
          themes={themes}
          setBaseTheme={setBaseThemeId}
          baseThemeId={baseThemeId}
        />
      </TabPanel>
      <ThemeCreatorSavingProvider>
        <ThemeProvider theme={customTheme}>
          <Paper elevation={0} sx={{ backgroundColor: "inherit", padding: 0 }}>
            <TabPanel tab={tab} value="typo">
              <TypgographyExample
                theme={customTheme}
                setTheme={setCustomTheme}
              />
            </TabPanel>
            <TabPanel tab={tab} value="btn">
              <ButtonsTable theme={customTheme} setTheme={setCustomTheme} />
            </TabPanel>
            <TabPanel tab={tab} value="surfaces">
              <Backgrounds theme={customTheme} setTheme={setCustomTheme} />
            </TabPanel>
            <TabPanel tab={tab} value="misc">
              <Misc theme={customTheme} setTheme={setCustomTheme} />
            </TabPanel>
          </Paper>
        </ThemeProvider>
        <BottomControls theme={customTheme} />
      </ThemeCreatorSavingProvider>
    </Box>
  );
};

export default ThemeCreator;
