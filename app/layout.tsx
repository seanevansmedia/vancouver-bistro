import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Next.js Font optimization
import "./globals.css";

// This optimizes the font and prevents it from blocking the render
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // This is crucial for performance
});

export const metadata: Metadata = {
  title: {
    template: '%s | Greenhouse',
    default: 'Greenhouse | Farm to Table Bistro',
  },
  description: "Sustainable, organic dining in Kitsilano, Vancouver. Experience fresh local ingredients from the Fraser Valley.",
  keywords: ["Vancouver Restaurant", "Farm to Table", "Kitsilano", "Organic Dining", "Greenhouse Bistro"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* These tell the browser to start connecting to Unsplash immediately */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      {/* Added inter.className to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}