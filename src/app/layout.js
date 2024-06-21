import "./globals.css";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer'
import Flatline from 'next/font/local'
import { Poppins } from 'next/font/google'


export const metadata = {
  title: "Rudi Arce Internacional",
  description: "No esperes más, adquiere tu seguro de vida ahora!",
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:image" content="/" />
        <meta name="google-site-verification" content="iIMbMVWYPpGLfhuR243wefX_6Pb3KrXrasS9ds2eEO4" />
        <link rel="icon" href="/favicon301.ico" type="image/x-icon" sizes="48x48" />
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
