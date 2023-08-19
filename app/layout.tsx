import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// const inter = Inter({ subsets: ["latin"] });
const lexend = Lexend({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "House of Rossy",
  description: "Next Gen Beauty Shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='transition-all'>
      <body className={`${lexend.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// className=${inter.className}
