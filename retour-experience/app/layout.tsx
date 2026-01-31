import type { Metadata } from "next";
import { Allura, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";

import { Playfair_Display } from "next/font/google";

export const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loïne Pommier",
  description: "Compte rendu d'expérience d'un semestre à l'UQO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Menu />
        {children}
      </body>
    </html>
  );
}
