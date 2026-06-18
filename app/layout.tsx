import "./globals.css";

import { CartProvider }
from "@/context/CartContext";

import { Inter, Cormorant_Garamond } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600"]
});

export const metadata = {
  title: "JG Signature",
  description:
    "Luxury Fashion Rooted In African Excellence"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable}`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}
