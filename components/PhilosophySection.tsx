import { IMG } from "../lib/constants";
import { Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PhilosophySection() {
  return (
    // CHANGED: z-30 -> z-10
    // This keeps it above the hero image, but below the Navbar overlay (z-20+)
    <section id="farm" className="px-4 md:px-6 -mt-12 md:-mt-24 relative z-10">
      
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-20 shadow-2xl">
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            
            {/* 1. TEXT CONTENT */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
               
               <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="bg-[#365314] p-2 md:p-3 rounded-full text-white shadow-lg">
                     <Leaf className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-bold text-[#365314] uppercase tracking-widest text-xs md:text-sm">Our Promise</span>
               </div>

               <h2 className="text-2xl md:text-5xl font-black text-[#365314] leading-[1.1] mb-4 md:mb-8">
                 REAL FOOD. <br />
                 <span className="text-[#65a30d] whitespace-nowrap">NO SHORTCUTS.</span>
               </h2>

               <p className="text-base md:text-xl font-medium text-[#365314]/80 leading-relaxed mb-6 md:mb-10 max-w-lg mx-auto md:mx-0">
                  We skip the warehouses and work directly with local farmers. Our ingredients travel from the Fraser Valley to your plate in under 24 hours, ensuring peak flavor and nutrition in every bite.
               </p>

               <Link href="/farm" className="w-full sm:w-auto">
                 <button className="flex items-center justify-center gap-3 bg-[#365314] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition group w-full sm:w-auto cursor-pointer">
                    Meet the Farmers <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                 </button>
               </Link>
            </div>

            {/* 2. IMAGE SIDE */}
            <div className="relative hidden md:block">
               <div className="absolute top-4 left-4 w-full h-full rounded-[2.5rem] border-2 border-[#365314]/10 z-0"></div>
               
               <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group transition-all duration-500 ease-out hover:rotate-2 hover:scale-[1.02] hover:shadow-[#bef264]/50">
                  <img 
                    src={IMG.ethos} 
                    alt="Fresh produce from the valley" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#365314]/60 to-transparent opacity-60"></div>
               </div>
            </div>

         </div>
      </div>
    </section>
  );
}