import { ThemeProvider } from "@mui/material";

import { useTheme } from "next-themes";
import React, { Fragment } from "react";
import NavBar from "./NavBar";

import { lightTheme, darkTheme } from "../utils/themes";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const muiTheme = currentTheme === "dark" ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Fragment>
          <NavBar />
          <main>{children}</main>
        </Fragment>
      </ThemeProvider>
    </>
  );
};

export default Layout;
