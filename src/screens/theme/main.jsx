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
import { useNavigate } from "react-router";

const StyledForm = styled("form")`
  display: flex;
  flex-grow: 1;
`;

// remember to remove the option to edit/delete default themes!
const defaultThemes = [lightTheme, darkTheme];

const getThemes = () => JSON.parse(localStorage.getItem("themes"));
const setStorageThemes = (themes) =>
  localStorage.setItem("themes", JSON.stringify(themes));

const Theme = ({ setBaseTheme, baseTheme }) => {
  const [theme, setTheme] = useTheme();
  const [initialThemes, setInitialThemes] = React.useState(() => [
    ...defaultThemes,
    ...(getThemes() || []).map((theme) => createTheme(theme)),
  ]);
  const [themes, setThemes] = React.useState(initialThemes);
  const [input, setInput] = React.useState(null);
  const search = useDebounce(input, 300);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (search === null) {
      return;
    }

    search
      ? setThemes(
          initialThemes.filter((filterTheme) =>
            filterTheme.name.match(new RegExp(search, "i"))
          )
        )
      : setThemes(initialThemes);
  }, [initialThemes, search]);

  const handleEdit = (themeId) => {
    navigate("create", { state: { themeId } });
  };
  const handleDelete = (themeId) => {
    const newThemes = initialThemes.filter((theme) => theme.id !== themeId);
    const customThemes = newThemes.filter(
      (theme) =>
        theme.id !== defaultThemes[0].id && theme.id !== defaultThemes[1].id
    );
    setThemes(newThemes);
    setInitialThemes(newThemes);
    setStorageThemes(customThemes);
  };

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
        {!baseTheme && (
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
            themes.map((mapTheme) => (
              <Grid
                item
                xs={12}
                sm={11.5}
                md={6}
                elevation={5}
                key={mapTheme.id}
              >
                <ThemeCard
                  theme={mapTheme}
                  selected={
                    baseTheme
                      ? mapTheme.id === baseTheme.id
                      : mapTheme.id === theme.id
                  }
                  setTheme={setBaseTheme || setTheme}
                  selectorMode={baseTheme}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
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
