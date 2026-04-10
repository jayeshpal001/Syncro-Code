import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Syncrocode | Premium IT & Web3 Solutions",
  description: "Next-generation Web Development, AI Automation, and Cloud Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth"> 
      <body className={cn(
        "min-h-screen bg-black font-sans text-white antialiased selection:bg-blue-600 selection:text-white",
        font.variable
      )}>
        <Navbar />
        <main className="relative flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}