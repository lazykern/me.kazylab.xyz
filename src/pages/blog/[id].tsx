import Head from "next/head";

import { notionX, getPublishedBlogData } from "../../lib/notion";
import { getBlockTitle } from "notion-utils";
import { ExtendedRecordMap } from "notion-types";

import { NotionRenderer } from "react-notion-x";
import Code from "../../components/Notion/Code";
import TweetEmbed from "react-tweet-embed";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Equation } from "react-notion-x/build/third-party/equation";

export async function getStaticProps(context: any) {
  const recordMap = await notionX.getPage(context.params.id);
  return {
    props: {
      recordMap,
    },
  };
}

export async function getStaticPaths() {
  const blogData = await getPublishedBlogData();
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
    fallback: true,
  };
}

export default function Blog({ recordMap }: { recordMap: ExtendedRecordMap }) {
  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;

  var title = "Loading Blog";

  if (keys.length && block) {
    title = getBlockTitle(block, recordMap) || "Blog";
  }

  const Tweet = ({ id }: { id: string }) => {
    return <TweetEmbed tweetId={id} options={{ theme: "dark" }} />;
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Blog" />
      </Head>
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
          return `/blog/${pageId}`;
        }}
        disableHeader
        previewImages={true}
      />
    </div>
  );
}
