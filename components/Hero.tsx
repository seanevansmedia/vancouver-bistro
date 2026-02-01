import React from "react";
import Navbar from "./Navbar";
import { IMG } from "../lib/constants";
import Link from "next/link";
import { Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full pb-0">
      <header className="relative h-[100dvh] md:h-[85vh] w-full overflow-hidden shadow-2xl group">
        
        {/* Background Image - LCP OPTIMIZED */}
        <Image 
          src={IMG.hero} 
          alt="Greenhouse dining interior with natural light" 
          fill
          priority // Preloads the image immediately
          fetchPriority="high" // Highest priority for the browser
          quality={80} // Dropping quality to 80 reduces file size with zero visible loss
          className="object-cover transition-transform duration-[20s] group-hover:scale-105"
          sizes="100vw"
        />
        
        {/* Overlays - Simplified for faster rendering */}
        <div className="absolute inset-0 bg-black/40" /> 
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
          
          <Navbar />
          
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-24 md:pt-32 pb-12 md:pb-32 p-6 md:p-10 text-white w-full">
            
            {/* Live Status Badge - REMOVED ANIMATION */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bef264] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#bef264]"></span>
              </span>
              <span className="text-[#bef264] font-bold text-xs uppercase tracking-widest">
                Kitchen Open Until 10PM
              </span>
            </div>

            {/* Headline - REMOVED TEXT SHADOW & ANIMATION */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight">
              Fresh &<br />
              <span className="text-[#bef264]">Locally Grown.</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-lg md:text-xl font-medium max-w-lg mb-12 text-white/90 leading-relaxed">
              A Kitsilano bistro sourcing ingredients directly from the Fraser Valley. From soil to plate in under 24 hours.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/menu">
                <button className="w-full sm:w-auto bg-[#bef264] text-[#365314] px-8 py-4 rounded-full font-bold text-center hover:bg-white transition shadow-lg cursor-pointer">
                  View Seasonal Menu
                </button>
              </Link>
              
              <Link href="/farm">
                <button className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#365314] transition cursor-pointer">
                  <Play className="w-5 h-5 fill-current" />
                  Our Story
                </button>
              </Link>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}