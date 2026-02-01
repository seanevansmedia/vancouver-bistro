import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Shows Arial instantly while Inter downloads
  variable: '--font-inter', // Matches the CSS variable in globals.css
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
        {/* Bypass Next.js optimizer for the Hero to save ~1.5 seconds */}
        <link 
          rel="preload" 
          as="image" 
          href="/hero.avif" 
          fetchPriority="high" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}