import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
  auth: notionSecret,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

interface IParams {
    id?: string;
}

export async function getPage({id}: IParams) {

    if (!notionSecret || !notionDatabaseId) throw new Error("Invalid token or database id");
    
    const pageId = id || ""

    if (!pageId) throw new Error("Invalid page id");

    const mdBlocks = await n2m.pageToMarkdown(pageId)
    const mdString = n2m.toMarkdownString(mdBlocks)

    return mdString
}
