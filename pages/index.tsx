import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>phusitsom</title>
        <meta name="description" content="Homepage" />
      </Head>
      <Box
        sx={{
          justifyContent: "center",
          marginTop: { xs: "200px", md: "80px" },
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
              fontSize={{ xs: "2rem", md: "2.5rem" }}
            >
              Computer Engineering Student, Kasetsart University
            </Typography>
            <Typography variant="body1" paddingBottom="20px">
              A second year computer engineering student at Kasetsart
              University. Interested in Data Engineering and Software
              Engineering.
            </Typography>
            <Typography variant="body1" paddingBottom="20px">
              Open to work as a Data Engineer intern.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
