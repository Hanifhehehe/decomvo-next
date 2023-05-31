import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter, Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DeComVo - Home',
  description: 'Making decolonized voices heard.',
}

const font = Nunito({
  subsets: ['latin'],
  weight: ['200', '400', '900']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
