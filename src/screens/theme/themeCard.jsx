import {
  Container,
  Typography,
  Paper,
  Card,
  CardContent,
  CardActions,
  Box,
  Button,
  Divider,
  ListItemButton,
  IconButton,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import ColorDisplay from "./colorDisplay";
import Menu from "./menu";

const navBackgroundImg =
  "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))";
const flexRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
};

const ThemeCard = ({ theme, selected, setThemeId }) => {
  return (
    <Card
      raised
      {...(selected && {
        sx: {
          backgroundColor: (theme) => theme.palette.primary.dark,
          background: (theme) =>
            `linear-gradient(to top right, ${theme.palette.primary.main}, ${theme.palette.secondary.dark} 150%)`,
        },
      })}
    >
      <ThemeProvider theme={theme}>
        <CardContent>
          <Typography
            sx={{
              ...(selected && {
                color: (theme) => theme.palette.primary.contrastText,
              }),
              mb: 1,
              fontWeight: 500,
            }}
            align="center"
          >
            {theme.name}
          </Typography>
          <Paper variant="outlined" square sx={{ backgroundColor: "inherit" }}>
            <ColorDisplay
              withoutDivider
              sx={{
                backgroundColor: (theme) => theme.palette.background.appBar,
                backgroundImage: navBackgroundImg,
              }}
            >
              Top Nav Bar
            </ColorDisplay>
            <ColorDisplay
              sx={{
                color: (theme) => theme.palette.text.navButton,
                backgroundColor: (theme) => theme.palette.background.navBar,
                backgroundImage: navBackgroundImg,
              }}
            >
              Bottom Nav Bar
            </ColorDisplay>
            <Divider />
            <Box
              sx={{
                ...flexRow,
                padding: 1,
                overflowX: "scroll",
                "::-webkit-scrollbar-thumb": {
                  backgroundColor: (theme) => theme.palette.scroll.base,
                },
                "::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: (theme) => theme.palette.scroll.hover,
                },
                backgroundColor: (theme) => theme.palette.background.default,
              }}
            >
              <IconButton>
                <ImageIcon />
              </IconButton>
              <Button>Button</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="contained">Contained</Button>
              <ListItemButton sx={{ flexGrow: 0 }}>List</ListItemButton>
            </Box>
            <Divider />
            <Paper square>
              <Container>
                <Typography>Paper and Cards</Typography>
              </Container>
            </Paper>
            <ColorDisplay
              sx={{
                backgroundColor: (theme) => theme.palette.background.default,
              }}
            >
              App Background
            </ColorDisplay>
          </Paper>
        </CardContent>
      </ThemeProvider>
      <CardActions
        sx={{
          ...flexRow,
          alignContent: "flex-end",
          mr: 1,
          ml: 1,
          flexGrow: 1,
        }}
      >
        <Button
          variant="contained"
          disabled={selected}
          onClick={() => setThemeId(theme.id)}
          sx={{
            "&:disabled": {
              color: (theme) => theme.palette.grey[800],
            },
          }}
        >
          {selected ? "Selected" : "Select"}
        </Button>
        <Menu
          themeId={theme.id}
          handleEdit={() => console.log("edit")}
          handleDelete={() => console.log("delete")}
          selected={selected}
        />
      </CardActions>
    </Card>
  );
};

export default ThemeCard;
