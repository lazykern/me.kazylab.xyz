import notion from "../../lib/notion";
import Code from "../../components/Notion/Code";
import { Collection } from "react-notion-x/build/third-party/collection";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

export async function getStaticProps(context: any) {
  const recordMap = await notion.getPage(context.params.id);

  return {
    props: {
      recordMap,
    },
  };
}

export async function getStaticPaths() {
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
  return (
    <div>
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
