import Image from "next/image";
import Container from "./components/Container";

export default async function Home() {
  return (
    <main>
      <div className="pb-20 pt-28 flex flex-col justify-center align-center">
        <div
          className="font-bold 
            bg-teal-600 
            text-white 
              text-center 
              h-60
              w-screen
              flex 
              justify-center
              align-center
              sm:flex-row 
              md:flex-col 
              "
        >
          <div className="text-2xl">Decolonized Community Voices</div>
          <div className="font-bold">Making decolonized voices heard!</div>
        </div>
      </div>
    </main>
  );
}
