import "./globals.css";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer'
import Flatline from 'next/font/local'


export const metadata = {
  title: "Rudi Arce Internacional",
  description: "No esperes mas, adquiere tu seguro de vida ahora!",

};

const fontFlatline = Flatline({
  src: '../../public/assets/fonts/flatline.woff2',
  variable: '--flatline'
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={fontFlatline.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
