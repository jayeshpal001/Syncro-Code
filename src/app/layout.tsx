import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { Navbar } from "../components/ui/Navbar";

// Premium modern font load kar rahe hain
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
    <html lang="en" className="dark"> 
      {/* Default dark theme set kiya hai premium agency look ke liye */}
      <body className={cn(
        "min-h-screen bg-black font-sans text-white antialiased selection:bg-blue-600 selection:text-white",
        font.variable
      )}>
        {/* Yahan Navbar aayega */}
        <Navbar />
        <main>{children}</main>
        {/* Yahan Footer aayega */}
      </body>
    </html>
  );
}