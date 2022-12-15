import { ChevronRight } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import { fetchApi } from "../utils/fetchApi";

import { Skills, SkillsData } from "./api/skills";
import { BioData } from "./api/bio";

export default function Home({
  bioData,
  skillsData,
}: {
  bioData: BioData;
  skillsData: SkillsData;
}) {
  return (
    <>
      <Head>
        <title>phusitsom</title>
        <meta name="description" content="Homepage" />
      </Head>
      <Container
        sx={{
          justifyContent: "center",
          marginTop: { xs: "90px", md: "80px" },
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
            <Typography variant="h2" color="primary">
              Skills
            </Typography>
            {skillsData.map((s: Skills) => (
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

export async function getStaticProps() {
  const bioRes = await fetchApi("bio");
  var bioData = [];
  try {
    bioData = await bioRes.json();
  } catch (e) {
    console.log(e);
  }

  const skillsRes = await fetchApi("skills");
  var skillsData = [];
  try {
    skillsData = await skillsRes.json();
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      bioData,
      skillsData,
    },
  };
}
