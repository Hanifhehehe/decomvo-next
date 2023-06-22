import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";
import { NotionToMarkdown } from "notion-to-md";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function GET(request: Request) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Invalid notion secret or notion database id specified!");

  const query = await notion.databases.query({ database_id: notionDatabaseId });
  const pagesId = query.results.map((pages) => {
    return pages.id;
  });

  const postBlocks = await Promise.all(
    pagesId.map(async (pageId) => {
      const mdBlocks = await n2m.pageToMarkdown(pageId);
      const mdString = n2m.toMarkdownString(mdBlocks);
      return mdString;
    })
  );

  const post = postBlocks[0];
  const excerpt = post.parent.slice(0,200)

  return NextResponse.json(excerpt);
}

export async function DELETE(request: Request) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Invalid notion secret or notion database id specified!");
  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  const notionPages = query.results;
  //@ts-ignore
  const notionPagesTitle = notionPages.map((pages) => {return pages.properties.Name.title[0].text.content;});

  // console.log(query.results[0])
  //@ts-ignore
  return NextResponse.json(notionPages[1]);
}
