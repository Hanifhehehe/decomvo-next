import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});

export async function GET(request: Request) {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Invalid notion secret or notion database id specified!");

  const getData = await notion.databases.query({
    database_id: notionDatabaseId,
    filter: {
      property: "Status",
      status: {
        equals: "Published!",
      },
      and: [
        {
          property: "Type",
          select: {
            equals: "Article",
          },
        },
      ],
    },
  });

  // @ts-ignore
  const data = getData.results.map((pages) => pages.properties.Name.title[0].text.content);

  const pageId = getData.results[2].id
  // const getPage = await notion.pages.retrieve({page_id: pageId})

  const getBlocks = await notion.blocks.retrieve({block_id: pageId})

  // console.log(getPage)
  console.log("Start")
  console.log(getBlocks)
  console.log("Done")

  return NextResponse.json(data);
}
