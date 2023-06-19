import { useRouter } from "next/router";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "DeComVo",
    template: "%s | DeComVo",
  },
  description: "Making decolonized voices heard!",
};

const font = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "900"],
});

export default function HomeLayout({children,}: {children: React.ReactNode}) {
  // const router = useRouter()

  // const { pathname} = router
  const testPath = "a"

  console.log(window.location.pathname)

  if (testPath == "/") {
    
    return (
      <html lang="de">
        <body>
          <Navbar />
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
            <div className="px-20 min-w-screen-sm max-w-screen-lg">
              {children}
            </div>
          </div>
          <Footer />
        </body>
      </html>
    );
  }

    return (
      <html lang="de">
        <body>
          <Navbar />
          <div className="pb-20 px-20 pt-28 flex justify-center align-center">
            <div className="min-w-screen-sm max-w-screen-lg">{children}</div>
          </div>
          <Footer />
        </body>
      </html>
    );
}
