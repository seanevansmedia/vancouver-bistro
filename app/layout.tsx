import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Greenhouse',
    default: 'Greenhouse | Farm to Table Bistro',
  },
  description: "Sustainable, organic dining in Kitsilano, Vancouver.",
  keywords: ["Vancouver Restaurant", "Farm to Table", "Kitsilano"],
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
          LCP FIX: Preload the image so it starts at 0.0 seconds.
          TypeScript Fix: fetchPriority must be camelCase.
        */}
        <link 
          rel="preload" 
          as="image" 
          href="/hero.avif" 
          type="image/avif"
          fetchPriority="high" 
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}