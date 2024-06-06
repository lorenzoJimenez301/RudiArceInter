import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar.jsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rudi Arce Internacional",
  description: "No esperes mas, adquiere tu seguro de vida ahora!",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
