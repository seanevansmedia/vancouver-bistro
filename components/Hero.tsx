import Navbar from "./Navbar";
import { IMG } from "../lib/constants";

export default function Hero() {
  return (
    <div className="p-4 md:p-6 pb-0">
      <header className="relative h-[85vh] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
        
        {/* 1. Background Image */}
        <img 
          src={IMG.hero} 
          alt="Greenhouse dining interior with natural light" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
        />
        
        {/* 2. Global Dark Green Overlay (Existing) */}
        <div className="absolute inset-0 bg-[#1a2e05]/40 mix-blend-multiply" />

        {/* 3. NEW: Top Black Gradient Fade (For Navbar Contrast) */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

        {/* 4. Content Container */}
        <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
          
          {/* Navbar sits on top of the gradient */}
          <Navbar />
          
          {/* Hero Text centered vertically */}
          <div className="flex-1 flex flex-col justify-center p-6 md:p-10 text-white w-full">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tight drop-shadow-lg">
              Fresh &<br />
              Locally Grown.
            </h1>
            <p className="text-lg md:text-2xl font-medium max-w-lg mb-8 text-[#ecfccb] drop-shadow-md">
              A Kitsilano bistro sourcing ingredients directly from the Fraser Valley. From soil to plate in under 24 hours.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="#menu" className="bg-white text-[#365314] px-8 py-4 rounded-full font-bold text-center hover:bg-[#ecfccb] transition shadow-lg">
                View Seasonal Menu
              </a>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}