import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({
    auth: notionSecret
})

export async function getBeitrage() {
    if (!notionSecret || !notionDatabaseId) {
        throw new Error("Invalid token or database id")
    }

    const posts = await notion.databases.query({
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

    return posts
}

export async function getProjekte() {
    if (!notionSecret || !notionDatabaseId) {
        throw new Error("Invalid token or database id")
    }

    const posts = await notion.databases.query({
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
              equals: "Project",
            },
          },
        ],
      },
    });

    return posts
}