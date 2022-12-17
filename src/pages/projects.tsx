import { Typography } from "@mui/material";
import Head from "next/head";

import { notionX } from "../lib/notion";
import Code from "../components/Notion/Code";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Script from "next/script";
import { server } from "../lib/config";
import { NextSeo } from "next-seo";

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
      <NextSeo
        title="phusitsom | Projects"
        description="phusitsom's projects. a collection of projects that phusitsom have worked on."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://phusitsom.me/projects",
          siteName: "phusitsom - Projects",
          images: [
            {
              url: "https://res.cloudinary.com/dmkf8hcda/image/upload/v1671302025/phusitsom.me/og-image-projects_zmnfxn.png",
              width: 1200,
              height: 630,
              alt: "phusitsom.me - Projects",
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
      <Script src={server + "/scripts/notion.js"}></Script>
      <Script src={server + "/scripts/veryhardbit.js"}></Script>
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
