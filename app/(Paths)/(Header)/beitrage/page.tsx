export const metadata = {
  title: "Beitrage",
};

const fetchFromNotion = async () => {
  const res = await fetch("http://localhost:3000/api/notion/beitrage");
  const data = await res.json();
  return data;
};

async function Page() {
  const projects = await fetchFromNotion();

  return (
    <div>
      <h1 className="font-bold">Beitrage</h1>
      {projects.map((i) => (
        <p>{i}</p>
      ))}
    </div>
  );
}

export default Page;
