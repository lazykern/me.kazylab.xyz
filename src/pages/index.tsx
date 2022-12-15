import { ChevronRight } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>phusitsom</title>
        <meta name="description" content="Homepage" />
      </Head>
      <Container
        sx={{
          justifyContent: "center",
          marginTop: { xs: "100px", md: "80px" },
          padding: "0 30px",
        }}
      >
        <Stack textAlign="left" spacing={10}>
          <Stack>
            <Typography
              variant="h1"
              fontWeight="400"
              color="primary"
              fontSize={{ xs: "2.5rem", md: "3.5rem" }}
            >
              Phusit Somboonyingsuk
            </Typography>
            <Typography
              variant="h3"
              paddingBottom="20px"
              fontSize={{ xs: "2rem", md: "2.2rem" }}
            >
              Computer Engineering Student, Kasetsart University
            </Typography>
            <Typography variant="body1" paddingBottom="20px">
              Specialize in data analysis, cloud computing, and data engineering
              (in progress).
            </Typography>
            <Typography variant="body1" paddingBottom="20px">
              Interested in Data Engineering and Software Engineering.
            </Typography>
            <Typography variant="body1" paddingBottom="20px">
              Open to work as a data engineer intern.
            </Typography>
          </Stack>
          <Stack spacing={3}>
            <Typography variant="h2" color="primary">
              Skills
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box width={{ xs: "100%", md: "35%" }}>
                <Typography variant="h3" marginLeft={{ xs: "15px", md: "0px" }}>
                  Core
                </Typography>
              </Box>
              <Stack
                sx={{
                  textAlign: "left",
                  alignSelf: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight />
                  Data Analysis
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight />
                  Cloud Computing
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight />
                  Software Engineering
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight />
                  Data Engineering
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "35%" },
                  marginTop: { xs: "20px", md: "0" },
                }}
              >
                <Typography variant="h3" marginLeft={{ xs: "15px", md: "0px" }}>
                  Programming Languages
                </Typography>
              </Box>
              <Stack
                sx={{
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight fontSize="small" />
                  Python
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight fontSize="small" />
                  Rust
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight fontSize="small" />
                  JavaScript/TypeScript
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight fontSize="small" />
                  C/C++
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <ChevronRight fontSize="small" />
                  Java
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
