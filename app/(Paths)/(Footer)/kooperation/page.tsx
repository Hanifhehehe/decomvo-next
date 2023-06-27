import ClientOnly from "@/app/components/ClientOnly";
import Kooperation from '@/markdowns/kooperation.mdx'

export const metadata = {
  title: "Kooperation",
};

function Page() {
  return (
    <div className="max-width-screen-lg">
      <ClientOnly>
        <Kooperation />
      </ClientOnly>
    </div>
  );
}

export default Page;
