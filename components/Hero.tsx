import Navbar from "./Navbar";
import { IMG } from "../lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full pb-0">
      
      <header className="relative h-[85vh] w-full overflow-hidden shadow-2xl group">
        
        <img 
          src={IMG.hero} 
          alt="Greenhouse dining interior with natural light" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-[#1a2e05]/60 mix-blend-multiply" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
          
          <Navbar />
          
          {/* 
             CHANGES:
             1. items-center md:items-start -> Centers on mobile, Left on Desktop
             2. text-center md:text-left -> Centers text on mobile, Left on Desktop
          */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left pb-12 md:pb-32 p-6 md:p-10 text-white w-full">
            
            {/* 
               CHANGES:
               1. text-5xl (Mobile) -> Big
               2. md:text-8xl (Desktop) -> Bigger
            */}
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight drop-shadow-2xl">
              Fresh &<br />
              Locally Grown.
            </h1>
            
            <p className="text-lg md:text-2xl font-medium max-w-lg mb-16 text-white/90 drop-shadow-lg text-shadow">
              A Kitsilano bistro sourcing ingredients directly from the Fraser Valley. From soil to plate in under 24 hours.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/menu">
                <button className="bg-[#bef264] text-[#365314] px-8 py-4 rounded-full font-bold text-center hover:bg-white hover:scale-105 transition shadow-lg cursor-pointer">
                  View Seasonal Menu
                </button>
              </Link>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}