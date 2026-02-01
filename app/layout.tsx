import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  // SPEED FIX: Explicitly loading these weights prevents "Layout Shift" 
  // and browser CPU strain on mobile devices.
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* 1. SPEED FIX: Preconnect tells the phone to start connecting 
            to Google's font servers immediately, saving ~150ms. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 
          NOTE: Manual preload for /hero.avif has been removed. 
          The <Image priority /> in your Hero component now handles this 
          by preloading a responsive, mobile-optimized version. 
        */}
      </head>
      {/* 2. STYLE FIX: Added a default text color to prevent 
          "Flash of Unstyled Content" on slow mobile connections. */}
      <body className={`${inter.className} antialiased bg-white text-[#1a2e05]`}>
        {children}
      </body>
    </html>
  );
}