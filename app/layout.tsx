import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Shows system font instantly until Inter is ready
  variable: '--font-inter',
  weight: ['400', '500', '700', '900'], 
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
    // Added 'antialiased' here to keep font rendering smooth from the start
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className={`${inter.className} bg-white text-[#1a2e05]`}>
        {children}
      </body>
    </html>
  );
}