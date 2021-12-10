import {
  Container,
  Typography,
  TextField,
  Paper,
  Card,
  CardContent,
  CardActions,
  Box,
  Button,
  InputAdornment,
  Grid,
  Divider,
  ListItemButton,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import lightTheme from "../themes/light";
import darkTheme from "../themes/dark";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "../context/theme";
import useDebounce from "../hooks/useDebouce";

const defaultThemes = [lightTheme, darkTheme];

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

const ThemeCard = ({ theme, selected, setThemeId }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      raised
      {...(selected && {
        sx: { backgroundColor: (theme) => theme.palette.primary.dark },
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
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
              }}
            >
              Top Nav Bar
            </ColorDisplay>
            <ColorDisplay
              sx={{
                backgroundColor: (theme) => theme.palette.background.navBar,
                backgroundImage:
                  "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
              }}
            >
              Bottom Nav Bar
            </ColorDisplay>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
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
            <Divider />
            <Box>
              <Paper
                square
                sx={{
                  backgroundColor: (theme) => theme.palette.background.default,
                }}
              >
                <Container>
                  <Typography>App Background</Typography>
                </Container>
              </Paper>
            </Box>
          </Paper>
        </CardContent>
      </ThemeProvider>
      <CardActions>
        <Box
          sx={{
            mr: 1,
            ml: 1,
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            disabled={selected}
            onClick={() => setThemeId(theme.id)}
            sx={{
              "&:disabled": {
                color: (theme) => theme.palette.grey[700],
              },
            }}
          >
            {selected ? "Selected" : "Select"}
          </Button>
          <IconButton onClick={handleClick}>
            <MoreVertIcon
              {...(selected && {
                sx: { color: (theme) => theme.palette.primary.contrastText },
              })}
            />
          </IconButton>
          <Menu
            id={theme.id}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <EditIcon sx={{ mr: 2 }} />
              Edit
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{ color: (theme) => theme.palette.error.main }}
            >
              <DeleteIcon sx={{ mr: 2 }} />
              Delete
            </MenuItem>
          </Menu>
        </Box>
      </CardActions>
    </Card>
  );
};

const Theme = () => {
  const [currentThemeId, setThemeId] = useTheme();
  const [themes, setThemes] = React.useState(defaultThemes);
  const [input, setInput] = React.useState("");
  const search = useDebounce(input, 300);

  React.useEffect(() => {
    search
      ? setThemes(
          defaultThemes.filter((theme) =>
            theme.name.match(new RegExp(search, "i"))
          )
        )
      : setThemes(defaultThemes);
  }, [search]);

  return (
    <Container>
      <Typography align="center">
        Here you change your app's theme, you can choose one of the available
        options below or create your own!
      </Typography>
      <Paper sx={{ p: 1, mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextField
            type="search"
            placeholder="Search your themes..."
            sx={{
              flexGrow: 1,
              mr: 1,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <Button
            variant="contained"
            sx={{ flexGrow: 0.05, fontWeight: 500, fontSize: "1rem" }}
          >
            Create
          </Button>
        </Box>
        <Paper
          variant="outlined"
          sx={{
            height: 410,
            maxHeight: 410,
            overflowY: "scroll",
            mt: 2,
            p: 1,
            backgroundColor: "unset",
          }}
        >
          <Grid
            container
            rowSpacing={5}
            columnSpacing={5}
            justifyContent="center"
          >
            {themes.map((theme) => (
              <Grid item xs={12} sm={11.5} md={6} elevation={5} key={theme.id}>
                <ThemeCard
                  theme={theme}
                  selected={theme.id === currentThemeId}
                  setThemeId={setThemeId}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Paper>
    </Container>
  );
};

export default Theme;
