import Script from "next/script";

import { dev } from "../../lib/config";

import { notionX, getPublishedBlogs, notion } from "../../lib/notion";
import { ExtendedRecordMap } from "notion-types";

import { NotionRenderer } from "react-notion-x";
import Code from "../../components/Notion/Code";
import Tweet from "../../components/Notion/Tweet";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";
import { server } from "../../lib/config";
import { NextSeo } from "next-seo";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { Cover, Description, Name } from "../../lib/notion/types";

export async function getStaticProps(context: any) {
  const recordMap = await notionX.getPage(context.params.id);
  const pageObject = await notion.pages.retrieve({
    page_id: context.params.id,
  });

  return {
    props: {
      recordMap,
      pageObject,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  if (dev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const blogData = await getPublishedBlogs();
  const paths = blogData.map((blog) => {
    return {
      params: {
        id: blog.id,
      },
    };
  });

  console.log("blog static paths", paths);

  return {
    paths,
    fallback: false,
  };
}

export default function Blog({
  recordMap,
  pageObject,
}: {
  recordMap: ExtendedRecordMap;
  pageObject: PageObjectResponse;
}) {
  const pageId = pageObject.id;
  const title = (pageObject.properties.Name as Name).title[0].plain_text;
  const description = (pageObject.properties.Description as Description)
    .rich_text[0]?.plain_text;
  const coverImage = (pageObject.cover as Cover)?.external?.url;

  return (
    <>
      <NextSeo
        title={"phusitsom | Blog - " + title}
        description={description ?? "A blog written by phusitsom"}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: `https://phusitsom.me/blogs/${pageId}`,
          siteName: `phusitsom - ${title}`,
          images: [
            {
              url: coverImage,
              width: 1200,
              height: 630,
              alt: `phusitsom.me - ${title}`,
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
        fullPage={true}
        components={{
          Code,
          Collection,
          Equation,
          Tweet,
        }}
        mapPageUrl={(pageId) => {
          return `/blogs/${pageId}`;
        }}
        disableHeader
        previewImages={true}
      />
    </>
  );
}
