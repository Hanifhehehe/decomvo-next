import { getBeitrage } from "@/app/actions/getManyPages";

export const metadata = {
  title: "Beitrage",
};

async function Page() {
  const getPosts = await getBeitrage()
  const articles = getPosts.results

  return (
    <div>
      <h1 className="font-bold text-center text-2xl mb-8">{metadata.title}</h1>
      <div className="grid grid-cols-1 gap-4">
        {articles.map((article: any) => (
          <div key={article.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold">{article.properties.Name.title[0].text.content}</h2>
            <p className="text-gray-500">{article.properties.Name.title[0].text.content}</p>
            <a href={`/beitrage/${article.properties.Name.title[0].text.content}_${article.id}`} className="text-primary hover:text-primary-dark">
              {article.properties.Name.title[0].text.content}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
