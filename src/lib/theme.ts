import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const typography: TypographyOptions = {
  fontFamily: ["Ubuntu", "sans-serif"].join(","),
  h1: {
    fontSize: "4rem",
    fontWeight: 400,
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

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3b57bb",
    },
    secondary: {
      main: "#de4c7e",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
      disabled: "#303030",
    },
    action: {
      disabledOpacity: 0.7,
    },
  },
  typography,
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
      paper: "#181818",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
      disabled: "#303030",
    },
    action: {
      disabled: "#303030",
      disabledOpacity: 0.7,
    },
  },
  typography,
});
