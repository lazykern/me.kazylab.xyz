import { Components, createTheme, Theme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: "var(--fonts)",
  h1: {
    fontSize: "4.5rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h2: {
    fontSize: "3rem",
    fontWeight: 400,
  },
  h3: {
    fontSize: "2rem",
    fontWeight: 400,
  },
  body1: {
    fontSize: "1.2rem",
  },
};

const components: Components<Omit<Theme, "components">> = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        transition: "var(--theme-change-transition)",
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        transition: "var(--theme-change-transition)",
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0020e0",
    },
    secondary: {
      main: "#de4c7e",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
      disabled: "#303030",
    },
  },
  typography,
  components,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3b57bb",
    },
    secondary: {
      main: "#de4c7e",
    },
    background: {
      default: "#000000",
      paper: "#050505",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
      disabled: "#303030",
    },
  },
  typography,
  components,
});
