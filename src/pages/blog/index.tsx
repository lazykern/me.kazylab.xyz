import { getPublishedBlogs, notionX } from "../../lib/notion";
import { Collection } from "react-notion-x/build/third-party/collection";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Head from "next/head";
import { IconButton, Input, Typography } from "@mui/material";
import Script from "next/script";
import { server } from "../../lib/config";
import { BlogObjectResponse } from "../../lib/notion/types";
import { Box, Container, Stack } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import BlogSearcher from "../../components/Notion/BlogSearcher";
import { NextSeo } from "next-seo";

export async function getStaticProps() {
  const recordMap = await notionX.getPage("d595daab1b044ed795bd66d41b445fc9");
  const blogObjects = await getPublishedBlogs();

  return {
    props: {
      recordMap,
      blogObjects,
    },
    revalidate: 60,
  };
}
export default function Blog({
  recordMap,
  blogObjects,
}: {
  recordMap: ExtendedRecordMap;
  blogObjects: BlogObjectResponse[];
}) {
  const [search, setSearch] = useState(false);

  return (
    <>
      <NextSeo
        title="phusitsom | Blogs"
        description="phusitsom's blogs. a collection of blogs that phusitsom have written."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://phusitsom.me/blog",
          siteName: "phusitsom - Blogs",
          images: [
            {
              url: "https://res.cloudinary.com/dmkf8hcda/image/upload/v1671302036/phusitsom.me/og-image-blogs_lfjqfv.png",
              width: 1200,
              height: 630,
              alt: "phusitsom.me - Blogs",
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
      <NotionRenderer
        recordMap={recordMap}
        pageTitle={
          <>
            <Box display="flex">
              <Typography
                variant="h1"
                fontWeight="400"
                color="primary"
                fontSize={{ xs: "2.5rem", md: "4.5rem" }}
                overflow="auto"
              >
                Blogs
              </Typography>

              <IconButton
                sx={{
                  ml: "auto",
                  color: "var(--text-color)",
                }}
                size="large"
                onClick={() => {
                  setSearch(!search);
                  const notionContent = document.getElementsByClassName(
                    "notion-page-content"
                  );
                  notionContent[0].classList.toggle("hidden");
                }}
                disableRipple
              >
                {search ? <Close /> : <SearchIcon />}
              </IconButton>
            </Box>
            {search && (
              <Box paddingTop="30px" maxWidth="720px" marginX="auto">
                <BlogSearcher blogObjects={blogObjects} />
              </Box>
            )}
          </>
        }
        fullPage={true}
        components={{
          Collection,
        }}
        mapPageUrl={(pageId) => {
          return `/blog/${pageId}`;
        }}
        disableHeader
        previewImages={true}
      />
    </>
  );
}
