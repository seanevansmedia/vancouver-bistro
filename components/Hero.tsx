import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full pb-0">
      <header className="relative h-[100dvh] md:h-[85vh] w-full overflow-hidden shadow-2xl group">
        
        <Image 
          src="/hero.avif" 
          alt="Greenhouse dining interior" 
          fill
          priority
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
          /* 
            SPEED FIX: Specific breakpoints. 
            Mobile phones will now request a much smaller version of the image.
          */
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        
        {/* 
          SPEED FIX: Backdrop-blur and mix-blend are GPU heavy. 
          We use a simple high-contrast overlay for mobile. 
        */}
        <div className="absolute inset-0 bg-black/50 md:bg-[#1a2e05]/60 md:mix-blend-multiply" />
        
        {/* Gradients */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
          <Navbar />
          
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-24 md:pt-32 pb-12 md:pb-32 p-6 md:p-10 text-white w-full">
            
            {/* Tagline: Animation only on desktop */}
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-8 md:animate-in md:fade-in md:slide-in-from-bottom-2 md:duration-1000">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bef264] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#bef264]"></span>
              </span>
              <span className="text-[#bef264] font-bold text-xs uppercase tracking-widest">
                Kitchen Open Until 10PM
              </span>
            </div>

            {/* 
              LCP FIX: 
              Removed 'animate-in' and 'fade-in' from mobile (default classes).
              Added them back via 'md:' prefix.
              This ensures the Largest Contentful Paint is recorded the microsecond the page loads.
            */}
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight drop-shadow-2xl md:animate-in md:fade-in md:slide-in-from-bottom-4 md:duration-1000 md:delay-150">
              Fresh &<br />
              <span className="text-[#bef264]">Locally Grown.</span>
            </h1>
            
            <p className="text-lg md:text-xl font-medium max-w-lg mb-12 text-white/90 drop-shadow-lg leading-relaxed md:animate-in md:fade-in md:slide-in-from-bottom-4 md:duration-1000 md:delay-300">
              A Kitsilano bistro sourcing ingredients directly from the Fraser Valley. From soil to plate in under 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto md:animate-in md:fade-in md:duration-1000 md:delay-500">
              <Link href="/menu">
                <button className="w-full sm:w-auto bg-[#bef264] text-[#365314] px-8 py-4 rounded-full font-bold text-center hover:bg-white hover:scale-105 transition shadow-lg cursor-pointer">
                  View Seasonal Menu
                </button>
              </Link>
              
              <Link href="/farm">
                <button className="w-full sm:w-auto group flex items-center justify-center gap-3 bg-white/10 md:backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#365314] transition cursor-pointer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3l14 9-14 9V3z"/>
                  </svg>
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