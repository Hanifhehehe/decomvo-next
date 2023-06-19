import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "../globals.css";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const font = Nunito({
  subsets: ["latin"],
  weight: ["200", "400", "900"],
});

export const metadata = {
  title: {
    default: "DeComVo",
    template: "%s | DeComVo",
  },
  description: "Making decolonized voices heard!",
};


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="de">
      <body>
        <Navbar />
        <div className="pb-20 px-20 pt-28 flex justify-center align-center">
          <div className="min-w-screen-sm max-w-screen-lg">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
