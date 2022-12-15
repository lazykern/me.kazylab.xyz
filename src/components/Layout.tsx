import { Container, ThemeProvider } from "@mui/material";

import { useTheme } from "next-themes";
import React, { Fragment } from "react";
import NavBar from "./NavBar";

import { lightTheme, darkTheme } from "../utils/themes";
import { Box } from "@mui/system";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const muiTheme = currentTheme === "dark" ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Fragment>
          <Box sx={{ maxWidth: "1200px" }}>
            <NavBar />
          </Box>
          <Box
            sx={{
              marginTop: { xs: "0px", md: "64px" },
              marginBottom: { xs: "56px", md: "0px" },
              maxWidth: "1200px",
              display: "flex",
              marginX: "auto",
            }}
          >
            <main>{children}</main>
          </Box>
        </Fragment>
      </ThemeProvider>
    </>
  );
};

export default Layout;
