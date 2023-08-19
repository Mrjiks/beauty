"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato, Poppins, Lexend } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useScroll, motion } from "framer-motion";

// const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin-ext"] });
const lexend = Lexend({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "House of Rossy",
  description: "Next Gen Beauty Shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
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
