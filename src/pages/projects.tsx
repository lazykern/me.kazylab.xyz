import { Typography } from "@mui/material";
import Head from "next/head";

import { notionX } from "../lib/notion";
import Code from "../components/Notion/Code";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Script from "next/script";
import { server } from "../lib/config";

export async function getStaticProps() {
  const recordMap = await notionX.getPage("e0f8fad8b58541f3a20af3f7f703f0f5");

  return {
    props: {
      recordMap,
    },
    revalidate: 60,
  };
}

export default function Projects({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
      </Head>
      <Script src={server + "/scripts/notion.js"}></Script>
      <NotionRenderer
        recordMap={recordMap}
        pageTitle={
          <Typography
            variant="h1"
            fontWeight="400"
            color="primary"
            fontSize={{ xs: "2.5rem", md: "4.5rem" }}
            overflow="auto"
          >
            Projects
          </Typography>
        }
        components={{ Code }}
        fullPage={true}
        pageFooter
        disableHeader
        previewImages={true}
      />
    </>
  );
}
