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
        <div className="p-20 bg-gradient-to-b from-white via-gray-300 to-white bg-fixed flex justify-center">
          <div className="bg-white w-1/2 h-full flex flex-col items-center p-8 rounded-3xl">
            <h2 className="text-primary text-3xl">
              Unser aktuelles Projekt findet ihr hier:
            </h2>
            <h4 className="mt-4 text-lg">"Let's Decolonize Young Voices"</h4>
            <p className="mt-4">
              Ein Mitmachprojekt in Kooperation mit Pen Paper Peace!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
