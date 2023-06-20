import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
    auth: notionSecret
})

export async function GET(request: Request) {
    if (!notionSecret || !notionDatabaseId) throw new Error('Invalid notion secret or notion database id specified!')
    const query = await notion.databases.query({
      database_id: notionDatabaseId,
    });

    const notionPages = query.results
    //@ts-ignore
    const notionPagesTitle = notionPages.map(pages => {return pages.properties.Name.title[0].text.content})
    
    // console.log(query.results[0])
    //@ts-ignore
    return NextResponse.json(notionPages[1])
}