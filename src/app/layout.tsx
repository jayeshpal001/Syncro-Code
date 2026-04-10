import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Syncrocode | Premium IT & Web3 Solutions",
  description: "Next-generation Web Development, AI Automation, and Cloud Solutions designed to scale your enterprise with 0% lag.",
  keywords: ["Web Development Indore", "Next.js Agency", "AI Automation", "Cloud Solutions", "MERN Stack Developers", "Jayesh Pal"],
  openGraph: {
    title: "Syncrocode | Engineering Digital Masterpieces",
    description: "Elevating brands with scalable, blazing-fast web applications and intelligent AI solutions.",
    url: "https://syncrocode.in",
    siteName: "Syncrocode",
    images: [
      {
        url: "https://syncrocode.in/og-image.png", // Aapko public folder mein ek premium banner image (1200x630px) banakar og-image.png naam se rakhni hogi
        width: 1200,
        height: 630,
        alt: "Syncrocode Premium Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syncrocode | Enterprise Web Solutions",
    description: "Next-generation Web Development and AI Automation.",
    images: ["https://syncrocode.in/og-image.png"],
  },
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