import ClientOnly from "@/app/components/ClientOnly";
import DatenSchutz from "@/markdowns/datenschutz.mdx"

export const metadata = {
  title: "Datenschultz",
};

function Page() {
  return <div>
    <ClientOnly>
      <DatenSchutz />
    </ClientOnly>
  </div>;
}

export default Page;
