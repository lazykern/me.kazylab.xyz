import { NotionAPI } from "notion-client";
import { Client } from "@notionhq/client";

export const notionX = new NotionAPI();

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const databaseId =
  process.env.NOTION_DATABASE_ID || "f7fafacb181940139b520d089a5e4fe4";

export async function getBlogs() {
  const res = await notion.databases.query({
    database_id: databaseId,
  });
  return res.results;
}

export async function getPublishedBlogs() {
  const res = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
  });
  return res.results;
}
