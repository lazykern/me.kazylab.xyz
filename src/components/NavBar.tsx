import * as React from "react";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";

import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "next-themes";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { pageData } from "../lib/data";
import Link from "next/link";

function NavBar() {
  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const ThemeChanger = () => {
    if (currentTheme === "dark") {
      return (
        <IconButton
          size="large"
          disableRipple={true}
          onClick={() => setTheme("light")}
        >
          <LightMode
            role="button"
            sx={{
              color: "var(--foreground)",
            }}
          />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          size="large"
          disableRipple={true}
          onClick={() => setTheme("dark")}
        >
          <DarkMode
            role="button"
            sx={{
              color: "var(--foreground)",
            }}
          />
        </IconButton>
      );
    }
  };

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalToggle = () => setModalOpen(!modalOpen);
  const handleModalClose = () => setModalOpen(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: "none",
        top: { xs: "auto", md: 0 },
        bottom: { xs: 0, md: "auto" },
        color: "var(--foreground)",
        background: "var(--background)",
        zIndex: 1400,
        transition: "var(--theme-change-transition)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <IconButton
              disabled={router.pathname === "/"}
              disableRipple
              disableFocusRipple
              disableTouchRipple
            >
              <Avatar
                sx={{
                  mr: 2,
                  borderRadius: 0,
                }}
                alt="phusitsom"
                src="/images/icon.png"
              />
            </IconButton>
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pageData.map((page) => (
              <Link key={page.title} href={page.href}>
                <Button
                  sx={{
                    marginTop: "5px",
                    color:
                      router.pathname === page.href
                        ? "var(--text-disabled)"
                        : "var(--primary)",
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <ThemeChanger />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleModalToggle}
              disableRipple
              disableFocusRipple
              disableTouchRipple
              sx={{
                color: "var(--foreground)",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            slotProps={{
              backdrop: {
                style: {
                  background: currentTheme === "dark" ? "#000" : "#fff",
                  opacity: 0.85,
                  transition:
                    "var(--theme-change-transition), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                },
              },
            }}
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                p: 4,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Stack spacing={2}>
                {pageData.map((page) => (
                  <Link
                    key={page.title}
                    href={page.href}
                    onClick={handleModalClose}
                  >
                    <Button
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        color:
                          router.pathname === page.href
                            ? "var(--text-disabled)"
                            : "var(--primary)",
                      }}
                    >
                      <Typography>{page.title}</Typography>
                    </Button>
                  </Link>
                ))}
              </Stack>
            </Box>
          </Modal>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
