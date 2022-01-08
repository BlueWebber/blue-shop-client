import {
  TextField,
  Paper,
  Box,
  Button,
  Typography,
  InputAdornment,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import lightTheme from "../../themes/light";
import darkTheme from "../../themes/dark";
import { useTheme } from "../../context/theme";
import useDebounce from "../../hooks/useDebouce";
import ThemeCard from "./themeCard";
import { styled, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledForm = styled("form")`
  display: flex;
  flex-grow: 1;
`;

// remember to remove the option to edit/delete default themes!
const defaultThemes = [lightTheme, darkTheme];

const Theme = ({ setBaseTheme, baseThemeId, themes: initialThemes }) => {
  const [currentThemeId, setThemeId] = useTheme();
  // add the logic to conditionally fetch themes from the server
  // based on whether "initialThemes" is passed by the parent or not
  const [themes, setThemes] = React.useState(() =>
    initialThemes
      ? initialThemes
      : [
          ...defaultThemes,
          ...(JSON.parse(localStorage.getItem("themes")) || []).map((theme) =>
            createTheme(theme)
          ),
        ]
  );
  const [input, setInput] = React.useState(null);
  const search = useDebounce(input, 300);

  React.useEffect(() => {
    if (search === null) {
      return;
    }

    search
      ? setThemes(
          (initialThemes || defaultThemes).filter((theme) =>
            theme.name.match(new RegExp(search, "i"))
          )
        )
      : setThemes(initialThemes || defaultThemes);
  }, [search, initialThemes]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
            document.activeElement.blur();
          }}
        >
          <TextField
            fullWidth
            type="search"
            placeholder="Search your themes..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            value={input || ""}
            onChange={({ target }) => setInput(target.value)}
          />
        </StyledForm>
        {!baseThemeId && (
          <Button
            variant="contained"
            component={Link}
            to="create"
            sx={{
              flexGrow: 0.05,
              fontWeight: 500,
              fontSize: "1rem",
              ml: 1,
            }}
          >
            Create
          </Button>
        )}
      </Box>
      <Paper
        variant="outlined"
        sx={{
          maxHeight: "65vh",
          minHeight: "31vh",
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
          {themes.length ? (
            themes.map((theme) => (
              <Grid item xs={12} sm={11.5} md={6} elevation={5} key={theme.id}>
                <ThemeCard
                  theme={theme}
                  selected={
                    baseThemeId
                      ? theme.id === baseThemeId
                      : theme.id === currentThemeId
                  }
                  setThemeId={setBaseTheme || setThemeId}
                />
              </Grid>
            ))
          ) : (
            <Grid item>
              <Typography disabled>No results were found</Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </>
  );
};

export default Theme;
