export const metadata = {
  title: "Projekte",
};

 const fetchFromNotion = async () => {
  const res = await fetch('http://localhost:3000/api/notion/projekte')
  const data = await res.json()
  return data
}

async function Page() {
  const projects = await fetchFromNotion();

  return (
    <div>
      <h1 className="font-bold">Projekte</h1>
      {projects.map((i: any) => (
        <p>{i}</p>
      ))}
    </div>
  );
}

export default Page;
