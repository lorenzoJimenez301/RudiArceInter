import "./globals.css";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer'
import Flatline from 'next/font/local'
import { Poppins } from 'next/font/google'


export const metadata = {
  title: "Rudi Arce Internacional",
  description: "No esperes mas, adquiere tu seguro de vida ahora!",

};

const fontFlatline = Flatline({
  src: '../../public/assets/fonts/flatline.woff2',
  variable: '--flatline'
})

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--poppins",
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href='/favicon.ico' />
      </head>
      <body className={`${fontPoppins.variable} ${fontFlatline.variable} font-poppins`}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
