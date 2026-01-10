"use client";

import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import Link from "next/link"; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 1. SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. LOCK BODY SCROLL WHEN MENU IS OPEN
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // UPDATED STYLE:
  // Changed 'after:h-[2px]' to 'after:h-[3px]' for a thicker line
  const linkStyle = "relative transition-colors duration-300 hover:text-[#bef264] after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[3px] after:w-0 after:-translate-x-1/2 after:bg-[#bef264] after:transition-all after:duration-300 after:ease-out hover:after:w-full cursor-pointer";

  return (
    <>
      {/* 
          OUTER WRAPPER: Handles Positioning, Background, and Vertical Padding (Shrinking)
      */}
      <div 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${isScrolled 
          ? "bg-[#365314]/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
        }`}
      >
        
        {/* 
            INNER CONTAINER: Handles Width Constraint
        */}
        <nav 
          className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center text-white" 
          aria-label="Main Navigation"
        >
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <Leaf 
              className={`text-[#bef264] transition-all duration-500 ${isScrolled ? "w-6 h-6" : "w-10 h-10"}`} 
            />
            <span className={`font-bold tracking-tight transition-all duration-500 group-hover:text-[#bef264] ${isScrolled ? "text-2xl" : "text-4xl"}`}>
              Greenhouse.
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-12 font-bold text-base uppercase tracking-widest items-center">
            <Link href="/menu" className={linkStyle}>Menu</Link>
            <Link href="/farm" className={linkStyle}>Our Farm</Link>
            <Link href="/#visit" className={linkStyle}>Visit Us</Link>
            
            <Link href="/book">
              <button className={`cursor-pointer bg-[#bef264] text-[#365314] rounded-full font-bold hover:bg-white hover:scale-105 transition-all focus:ring-2 focus:ring-white focus:outline-none shadow-md ${isScrolled ? "px-6 py-2 text-sm" : "px-8 py-3 text-base"}`}>
                Book Table
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white hover:text-[#bef264] transition p-2"
            aria-label="Open Menu"
          >
            <Menu className={`transition-all duration-500 ${isScrolled ? "w-8 h-8" : "w-10 h-10"}`} />
          </button>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#365314] text-[#ecfccb] p-6 flex flex-col animate-in slide-in-from-right duration-300 h-screen w-screen overflow-hidden">
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
            <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#bef264] transition-colors">
              Menu
            </Link>
            <Link href="/farm" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#bef264] transition-colors">
              Our Farm
            </Link>
            <Link href="/#visit" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#bef264] transition-colors">
              Visit Us
            </Link>
          </nav>
          <div className="mt-auto">
             <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
               <button className="w-full bg-[#bef264] text-[#365314] py-4 rounded-full font-bold text-lg cursor-pointer">
                 Book a Table
               </button>
             </Link>
          </div>
        </div>
      )}
    </>
  );
}