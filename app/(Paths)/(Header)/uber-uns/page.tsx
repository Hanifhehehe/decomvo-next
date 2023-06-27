import ClientOnly from "@/app/components/ClientOnly";
import Uber from "@/markdowns/uberUns.mdx"

export const metadata = {
  title: "Über Uns",
};

function Page() {
  return (
    <div>
      <ClientOnly>
        <Uber />
      </ClientOnly>
    </div>
  );
}

export default Page;
