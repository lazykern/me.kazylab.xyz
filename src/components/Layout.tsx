import { useTheme } from "next-themes";
import React, { Fragment } from "react";

import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import NavBar from "./NavBar";
import Footer from "./Footer";

import { lightTheme, darkTheme } from "../lib/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const muiTheme = currentTheme === "dark" ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <Fragment>
          <Box sx={{ maxWidth: "720px" }}>
            <NavBar />
          </Box>
          <Box
            sx={{
              marginTop: { xs: "0px", md: "64px" },
              marginBottom: { xs: "56px", md: "0px" },
              maxWidth: "1000px",
              marginX: "auto",
            }}
          >
            <main style={{ minHeight: "100vh" }}>{children}</main>
            <Footer />
          </Box>
        </Fragment>
      </ThemeProvider>
    </>
  );
};

export default Layout;
