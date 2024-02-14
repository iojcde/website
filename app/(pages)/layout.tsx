import type { Metadata } from "next";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import Nav from "./nav";
import Footer from "../footer";

import { GeistSans, GeistMono } from "geist/font";

const inter = localFont({
  src: "../../fonts/InterVariable.woff2",
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jeeho Ahn - Aspiring developer / designer ",
  description: "Jeeho Ahn - Aspiring developer / designer based in Seoul",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" dark ">
      <body
        className={cn(
          inter.variable,
          "flex flex-col min-h-screen font-sans  dark:bg-black text-gray-12"
        )}
      >
        <Nav />
        <div className="w-full grow overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
