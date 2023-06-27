import ClientOnly from "@/app/components/ClientOnly";
import Impressum from "@/markdowns/impressum.mdx";

export const metadata = {
  title: "Impressum",
};

function Page() {
  return (
    <div>
      <ClientOnly>
        <Impressum />
      </ClientOnly>
    </div>
  );
}

export default Page;
