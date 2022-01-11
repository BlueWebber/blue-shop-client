import { Tab, Tabs, Box, Paper } from "@mui/material";
import React from "react";
import ThemeSelector from "../theme";
import TypgographyExample from "./typography";
import ButtonsTable from "./buttons";
import Backgrounds from "./backgrounds";
import Misc from "./misc";
import BottomControls from "./bottomControls";
import { ThemeCreatorProvider } from "../../context/themeCreator";
import { useLocation } from "react-router";
import { useTheme } from "../../context/theme";

const TabPanel = ({ children, tab, value }) => {
  return <Box sx={{ m: 1 }}>{tab === value && children}</Box>;
};

const ThemeCreator = () => {
  const location = useLocation();
  const editingThemeId = location?.state?.themeId;
  const [theme, setGlobalTheme] = useTheme();
  const [tab, setTab] = React.useState("base");
  const [baseTheme, setBaseTheme] = React.useState(theme);

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
      <ThemeCreatorProvider baseTheme={baseTheme}>
        <Paper elevation={0} sx={{ backgroundColor: "inherit", padding: 0 }}>
          <TabPanel tab={tab} value="base">
            <ThemeSelector
              setBaseTheme={setBaseTheme}
              baseTheme={baseTheme}
              baseThemeId={editingThemeId}
            />
          </TabPanel>
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
    </Box>
  );
};

export default ThemeCreator;
