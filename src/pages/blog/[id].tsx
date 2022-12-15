import notion from "../../lib/notion";
import Code from "../../components/Notion/Code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { dev } from "../../lib/config";
import Head from "next/head";

import { getBlockTitle } from "notion-utils";

export async function getStaticProps(context: any) {
  const recordMap = await notion.getPage(context.params.id);

  return {
    props: {
      recordMap,
    },
  };
}

export async function getStaticPaths() {
  if (dev) {
    return {
      paths: [],
      fallback: true,
    };
  }

  return {
    paths: [
      {
        params: {
          id: "38a4a273da374dc987d3e415f9bb5e83",
        },
      },
    ],
    fallback: true,
  };
}

export default function Blog({ recordMap }: { recordMap: ExtendedRecordMap }) {
  console.log(recordMap);

  const keys = Object.keys(recordMap?.block || {});
  const block = recordMap?.block?.[keys[0]]?.value;

  var title = "Loading Blog";

  if (keys.length && block) {
    title = getBlockTitle(block, recordMap) || "Blog";
  }

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
        }}
        disableHeader
      />
    </div>
  );
}
