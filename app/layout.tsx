import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // This allows the "swap" to happen
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "Greenhouse | Farm to Table Bistro",
  description: "Sustainable dining in Kitsilano, Vancouver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Bypass Next.js optimizer for the Hero for the fastest possible LCP */}
        <link 
          rel="preload" 
          as="image" 
          href="/hero.avif" 
          fetchPriority="high" 
        />
      </head>
      {/* 
         CRITICAL: We apply inter.className and antialiased here 
         to ensure the font transition is smooth.
      */}
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}