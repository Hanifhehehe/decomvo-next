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

  const response = await notion.databases.query({
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
  const data = response.results.map( pages => pages.properties.Name.title[0].text.content)

  console.log(data)

  return NextResponse.json(data);
}
