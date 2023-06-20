import { getProjekte } from "@/app/libs/notion";

export const metadata = {
  title: "Projekte",
};

async function Page() {
  const getPosts = await getProjekte();
  const articles = getPosts.results;

  console.log(articles[0]);
  return (
    <div>
      <h1 className="font-bold text-center mb-8">{metadata.title}</h1>
      <div className="grid grid-cols-1 gap-4">
        {articles.map((article: any) => (
          <div key={article.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold">
              {article.properties.Name.title[0].text.content}
            </h2>
            <p className="text-gray-500">
              {article.properties.Name.title[0].text.content}
            </p>
            <a
              href={article.properties.Name.title[0].text.content}
              className="text-primary hover:text-primary-dark"
            >
              {article.properties.Name.title[0].text.content}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
