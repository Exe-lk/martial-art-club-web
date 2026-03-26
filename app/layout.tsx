import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martial Art Club",
  description: "Martial Art Club website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Material Symbols (used as icon font in pages) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <NavigationBar />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
