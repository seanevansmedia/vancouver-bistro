import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '700', '900'], 
});

export const metadata: Metadata = {
  title: "Greenhouse | Farm to Table Bistro",
  description: "Sustainable, organic dining in Kitsilano, Vancouver.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <head>
        {/* FIX: Using camelCase to satisfy React DOM warnings and fixing LCP Discovery */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fhero.avif&w=750&q=75"
          imageSrcSet="/_next/image?url=%2Fhero.avif&w=640&q=75 640w, /_next/image?url=%2Fhero.avif&w=750&q=75 750w, /_next/image?url=%2Fhero.avif&w=828&q=75 828w"
          imageSizes="100vw"
        />
      </head>
      <body className={`${inter.className} bg-white text-[#1a2e05]`}>
        {children}
      </body>
    </html>
  );
}