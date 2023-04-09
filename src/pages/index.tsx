import { ChevronRight } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextSeo } from "next-seo";
import { skillsData, bioData } from "../lib/data";

export default function Home() {
  return (
    <>
      <NextSeo
        title="phusitsom"
        description="phusitsom's personal website. showcase of phusitsom's projects, blogs, and more."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://phusitsom.me",
          siteName: "phusitsom",
          images: [
            {
              url: "https://res.cloudinary.com/dmkf8hcda/image/upload/v1681018884/banner_cg0reu.png",
              width: 1200,
              height: 630,
              alt: "phusitsom.me",
              type: "image/png",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Container
        sx={{
          justifyContent: "center",
          marginTop: "90px",
          padding: "0 30px",
        }}
      >
        <Stack textAlign="left" spacing={10}>
          <Stack>
            <Typography
              variant="h1"
              fontWeight="400"
              color="primary"
              fontSize={{ xs: "2.5rem", md: "4.5rem" }}
              overflow="auto"
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
            {bioData.map((p) => (
              <Typography key={p.key} variant="body1" paddingBottom="20px">
                {p.text}
              </Typography>
            ))}
          </Stack>
          <Stack spacing={3}>
            <Typography
              variant="h2"
              color="primary"
              fontSize={{ xs: "2.5rem", md: "4rem" }}
            >
              Skills
            </Typography>
            {skillsData.map((s) => (
              <Box
                key={s.type}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Box width={{ xs: "100%", md: "35%" }}>
                  <Typography variant="h3">{s.type}</Typography>
                </Box>
                <Stack
                  spacing={0.7}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  {s.skills.map((skill) => (
                    <Typography
                      key={`${s.type}-${skill}`}
                      variant="body1"
                      sx={{ display: "inline-flex", alignItems: "center" }}
                    >
                      <ChevronRight fontSize="small" />
                      {skill}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
