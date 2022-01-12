import { Tab, Tabs, Box, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React from "react";
import ThemeSelector from "../theme";
import TypgographyExample from "./typography";
import ButtonsTable from "./buttons";
import Backgrounds from "./backgrounds";
import Misc from "./misc";
import BottomControls from "./bottomControls";
import { ThemeCreatorProvider } from "../../context/themeCreator";
import { useSearchParams, Navigate } from "react-router-dom";
import { useTheme } from "../../context/theme";
import values from "../../localStorageKeys";

const themesLocal = values.themes;

const TabPanel = ({ children, tab, value }) => {
  return <Box sx={{ m: 1 }}>{tab === value && children}</Box>;
};

const ThemeCreator = () => {
  const editingThemeId = useSearchParams()[0].get("edit");
  const [theme, setGlobalTheme] = useTheme();
  const [tab, setTab] = React.useState(() =>
    editingThemeId ? "typo" : "base"
  );

  const [baseTheme, setBaseTheme] = React.useState(() => {
    if (editingThemeId) {
      const localTheme = JSON.parse(localStorage.getItem(themesLocal))?.find(
        (t) => t.id === editingThemeId
      );
      if (!localTheme) {
        return theme;
      }
      return createTheme(localTheme);
    }
    return theme;
  });

  return (
    <Box>
      {editingThemeId && editingThemeId !== baseTheme.id ? (
        <Navigate to="/404" />
      ) : (
        <>
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
              {!editingThemeId && <Tab label="Base" id="base" value="base" />}
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
          <ThemeCreatorProvider baseTheme={baseTheme}>
            <Paper
              elevation={0}
              sx={{ backgroundColor: "inherit", padding: 0 }}
            >
              {!editingThemeId && (
                <TabPanel tab={tab} value="base">
                  <ThemeSelector
                    setBaseTheme={setBaseTheme}
                    baseTheme={baseTheme}
                  />
                </TabPanel>
              )}
              <TabPanel tab={tab} value="typo">
                <TypgographyExample />
              </TabPanel>
              <TabPanel tab={tab} value="btn">
                <ButtonsTable />
              </TabPanel>
              <TabPanel tab={tab} value="surfaces">
                <Backgrounds />
              </TabPanel>
              <TabPanel tab={tab} value="misc">
                <Misc />
              </TabPanel>
            </Paper>
            <BottomControls
              tab={tab}
              isEditing={editingThemeId}
              baseThemeId={baseTheme.id}
              setGlobalTheme={setGlobalTheme}
            />
          </ThemeCreatorProvider>
        </>
      )}
    </Box>
  );
};

export default ThemeCreator;
