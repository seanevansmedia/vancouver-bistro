import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
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
        {/* 
           THE SPEED SECRET: 
           This must be the VERY FIRST THING in your head. 
           It tells the browser to download the image while it's still 
           busy reading the CSS file.
        */}
        <link 
          rel="preload" 
          as="image" 
          href="/hero.avif" 
          fetchPriority="high" 
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}