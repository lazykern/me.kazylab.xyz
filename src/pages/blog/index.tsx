import { notionX } from "../../lib/notion";
import { Collection } from "react-notion-x/build/third-party/collection";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Head from "next/head";
import { Typography } from "@mui/material";

export async function getStaticProps() {
  const recordMap = await notionX.getPage("d595daab1b044ed795bd66d41b445fc9");

  return {
    props: {
      recordMap,
    },
    revalidate: 60,
  };
}
export default function Blog({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
      </Head>
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
            Blog
          </Typography>
        }
        fullPage={true}
        components={{
          Collection,
        }}
        mapPageUrl={(pageId) => {
          return `/blog/${pageId}`;
        }}
        pageFooter
        disableHeader
        previewImages={true}
      />
    </div>
  );
}
