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
  
  return (
    <html lang="de">
      <body>
        <Navbar />
       
          {/* <div className="px-20 min-w-screen-sm max-w-screen-lg"> */}
            {children}
          {/* </div> */}
        <Footer />
      </body>
    </html>
  );
}
