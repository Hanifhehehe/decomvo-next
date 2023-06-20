import Image from "next/image";
import Container from "./components/Container";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default async function Home() {
  return (
    <main>
      <div className="pt-10 sm:pt-28 flex flex-col justify-center items-center">
        <div className="font-bold bg-primary text-white text-center h-[50vh] p-8 sm:p-40 w-screen flex flex-col justify-around items-center">
          <div className="text-2xl">Decolonized Community Voices</div>
          <div className="font-bold text-gray-300">
            Making decolonized voices heard!
          </div>
          <div className="self-center w-80">
            <div className="flex justify-around">
              <FaInstagram size={24} />
              <FiMail size={24} />
            </div>
          </div>
        </div>
        <div className="h-[50vh] w-screen p-8 sm:p-20 bg-gradient-to-b from-white via-gray-300 to-black bg-fixed flex justify-center">
          <div className="bg-white w-full sm:w-1/2 flex flex-col justify-around items-center p-8 lg:py-[6vh] rounded-3xl">
            <h2 className="text-primary text-3xl">
              Unser aktuelles Projekt findet ihr hier:
            </h2>
            <h4 className="mt-4 text-lg">
              &ldquo;Let&rsquo;s Decolonize Young Voices&rdquo;
            </h4>
            <p className="mt-4">
              Ein Mitmachprojekt in Kooperation mit Pen Paper Peace!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
