import { createTheme } from "@mui/material/styles";

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
  },
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
  },
});
