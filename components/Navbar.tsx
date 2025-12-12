"use client";

import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Increased stroke width on the hover line to match bigger text
  const linkStyle = "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full cursor-pointer";

  return (
    <>
      <nav className="relative z-20 flex justify-between items-center p-6 md:p-10 text-white" aria-label="Main Navigation">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <Leaf className="w-10 h-10 text-[#bef264]" />
          <span className="font-bold text-4xl tracking-tight">Greenhouse.</span>
        </div>

        {/* DESKTOP LINKS 
            Changes: 
            1. gap-8 -> gap-12 (More space)
            2. text-sm -> text-base (Bigger text)
        */}
        <div className="hidden md:flex gap-12 font-bold text-base uppercase tracking-widest items-center">
          <a href="#menu" className={linkStyle}>Menu</a>
          <a href="#farm" className={linkStyle}>Our Farm</a>
          <a href="#visit" className={linkStyle}>Visit</a>
          
          {/* BUTTON
              Changes: Added cursor-pointer
          */}
          <button className="cursor-pointer bg-[#bef264] text-[#365314] px-8 py-3 rounded-full font-bold hover:bg-white hover:scale-105 transition-all focus:ring-2 focus:ring-white focus:outline-none shadow-md">
            Book Table
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden text-white hover:text-[#bef264] transition p-2"
          aria-label="Open Menu"
        >
          <Menu className="w-10 h-10" />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#365314] text-[#ecfccb] p-6 flex flex-col animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <Leaf className="w-10 h-10 text-[#bef264]" />
              <span className="font-bold text-4xl">Greenhouse.</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu">
              <X className="w-10 h-10" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-3xl font-bold">
            <a href="#menu" className="hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
            <a href="#farm" className="hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Our Farm</a>
            <a href="#visit" className="hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Locations</a>
            <a href="#contact" className="hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          </nav>
          <div className="mt-auto">
             <button className="w-full bg-[#bef264] text-[#365314] py-4 rounded-full font-bold text-lg cursor-pointer">
               Book a Table
             </button>
          </div>
        </div>
      )}
    </>
  );
}