import { notionX } from "../../lib/notion";
import { Collection } from "react-notion-x/build/third-party/collection";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Head from "next/head";

export async function getStaticProps() {
  const recordMap = await notionX.getPage("d595daab1b044ed795bd66d41b445fc9");

  return {
    props: {
      recordMap,
    },
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
