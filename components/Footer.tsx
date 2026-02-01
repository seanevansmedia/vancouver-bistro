import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 py-12 md:pt-16 md:pb-8">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#365314]/10 pb-12 md:pb-6 mb-12 md:mb-6">
         <div className="flex items-center gap-2">
            {/* SVG LEAF ICON */}
            <svg 
               className="w-6 h-6 text-[#4d7c0f]" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="2" 
               strokeLinecap="round" 
               strokeLinejoin="round"
            >
               <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z"/>
               <path d="M11 20v-5a4 4 0 0 1 4-4h5"/>
            </svg>
            <span className="font-bold text-2xl tracking-tight">Greenhouse.</span>
         </div>
         <div className="flex gap-6">
            <a href="#" aria-label="Instagram" className="bg-[#d9f99d] p-3 rounded-full text-[#365314] hover:bg-[#365314] hover:text-white transition">
               {/* SVG INSTAGRAM ICON */}
               <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
               >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
               </svg>
            </a>
            <a href="#" aria-label="Facebook" className="bg-[#d9f99d] p-3 rounded-full text-[#365314] hover:bg-[#365314] hover:text-white transition">
               {/* SVG FACEBOOK ICON */}
               <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
               >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
               </svg>
            </a>
         </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center text-sm font-bold text-[#365314]/60 gap-4">
         <p>&copy; 2025 Greenhouse Bistro Ltd.</p>
         <div className="flex gap-8">
            <Link href="/menu" className="hover:text-[#365314]">
               Menu
            </Link>
            <Link href="/farm" className="hover:text-[#365314]">
               Our Farm
            </Link>
            <Link href="/#visit" className="hover:text-[#365314]">
               Visit Us
            </Link>
         </div>
      </div>
    </footer>
  );
}