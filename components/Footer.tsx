import { Instagram, Facebook, Leaf } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    // STYLE RESTORED: 
    // Mobile: py-12 
    // Desktop: md:pt-16 (Added top padding), md:pb-8 (Kept your slim bottom padding)
    <footer className="max-w-7xl mx-auto px-6 py-12 md:pt-16 md:pb-8">
      
      {/* 
         STYLE RESTORED: 
         Inner spacing uses the md:pb-6 md:mb-6 you provided 
         to keep the gap between logo and links tight on desktop.
      */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-[#365314]/10 pb-12 md:pb-6 mb-12 md:mb-6">
         <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-[#4d7c0f]" />
            <span className="font-bold text-2xl tracking-tight">Greenhouse.</span>
         </div>
         <div className="flex gap-6">
            <a href="#" aria-label="Instagram" className="bg-[#d9f99d] p-3 rounded-full text-[#365314] hover:bg-[#365314] hover:text-white transition">
               <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="bg-[#d9f99d] p-3 rounded-full text-[#365314] hover:bg-[#365314] hover:text-white transition">
               <Facebook className="w-5 h-5" />
            </a>
         </div>
      </div>
      
      {/* Bottom Row: Links Updated */}
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