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
  description: "Sustainable, organic dining in Kitsilano, Vancouver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Preload the Hero image as early as possible */}
        <link 
          rel="preload" 
          as="image" 
          href="/hero.avif" 
          type="image/avif"
          fetchPriority="high" 
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}