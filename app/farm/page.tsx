import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMG } from "../../lib/constants";
import Image from "next/image"; // Added for secondary image optimization
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Farm & Suppliers | Greenhouse Bistro',
  description: 'Meet the local producers from the Fraser Valley and Okanagan who supply our organic ingredients.',
};

export default function FarmPage() {
  return (
    <div className="bg-[#f7fee7] min-h-screen font-sans text-[#365314] selection:bg-[#bef264] selection:text-[#1a2e05]">
      
      {/* --- HERO SECTION --- */}
      <div className="w-full pb-0">
        <header className="relative h-[50vh] w-full overflow-hidden shadow-2xl group bg-[#1a2e05]">
          {/* 
             LCP OPTIMIZATION: 
             Using direct <img> for the sub-page hero with fetchPriority.
          */}
          <img 
            src={IMG.field} 
            alt="Fraser Valley Farm Field" 
            fetchPriority="high"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[30s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1a2e05]/40 mix-blend-multiply" />
          
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
          
          <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
            <Navbar />
            
            <div className="flex-1 flex flex-col justify-center items-center text-center p-6 text-white">
              <span className="text-[#bef264] font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-md">Sourcing</span>
              <h1 className="text-5xl md:text-6xl font-black leading-none mb-6 drop-shadow-lg">
                Served Fresh
              </h1>
            </div>
          </div>
        </header>
      </div>

      <main className="space-y-12 py-12 md:py-24">

        {/* --- SECTION 1: THE KITCHEN --- */}
        <section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto bg-[#365314] text-[#ecfccb] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="relative h-[500px] md:h-auto">
                  {/* Optimized secondary image */}
                  <Image 
                    src={IMG.chef} 
                    alt="Chef Michael Chen" 
                    fill 
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
               </div>
               <div className="p-12 md:p-24 flex flex-col justify-center">
                  <span className="text-[#bef264] font-bold uppercase tracking-widest text-sm mb-4">The Kitchen</span>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Chef Michael Chen</h2>
                  <p className="text-lg font-medium opacity-80 leading-relaxed mb-8">
                    "I want to taste the rain in the mushrooms and the sun in the tomatoes. My job isn&apos;t to cook the food, it&apos;s to not mess up what nature has already perfected."
                  </p>
                  <div className="flex gap-4">
                     <span className="bg-[#bef264] text-[#365314] px-4 py-2 rounded-full font-bold text-sm">Michelin Alum</span>
                     <span className="bg-[#bef264] text-[#365314] px-4 py-2 rounded-full font-bold text-sm">Born in BC</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: SUPPLIER GRID --- */}
        <section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col items-center md:flex-row md:items-end gap-4 mb-8 px-2">
               <h2 className="text-3xl font-black text-[#365314] text-center md:text-left">Our Partners</h2>
               <div className="h-[2px] bg-[#365314]/10 w-24 md:flex-1 mb-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Vegetables */}
              <div className="group bg-white text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative bg-gray-100">
                   <Image 
                    src={IMG.hands} 
                    alt="Crate of Vegetables" 
                    fill 
                    loading="lazy"
                    className="object-cover opacity-90 group-hover:scale-110 transition duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full z-10">
                      {/* SVG LEAF */}
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z"/><path d="M11 20v-5a4 4 0 0 1 4-4h5"/>
                      </svg>
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-center md:text-left">Valley Greens</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
                  {/* SVG MAP PIN */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg> 
                  Abbotsford, BC
                </p>
                <p className="opacity-70 leading-relaxed text-center md:text-left">
                  Supplying our kale, heirloom tomatoes, and root vegetables. Certified organic since 1998.
                </p>
              </div>

              {/* Card 2: Wine */}
              <div className="group bg-white text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative bg-gray-100">
                   <Image 
                    src={IMG.vineyard} 
                    alt="Vineyard" 
                    fill 
                    loading="lazy"
                    className="object-cover opacity-90 group-hover:scale-110 transition duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full z-10">
                      {/* SVG SUN */}
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/>
                      </svg>
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-center md:text-left">Okanagan Crush</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg> 
                  Oliver, BC
                </p>
                <p className="opacity-70 leading-relaxed text-center md:text-left">
                  A curated selection of natural wines. Low intervention, high flavor, straight from the desert.
                </p>
              </div>

              {/* Card 3: Seafood */}
              <div className="group bg-white text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative bg-gray-100">
                   <Image 
                    src={IMG.seafood} 
                    alt="Seafood Dish" 
                    fill 
                    loading="lazy"
                    className="object-cover opacity-90 group-hover:scale-110 transition duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full z-10">
                      {/* SVG DROPLETS */}
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 16.3c2.2 0 4-1.8 4-4 0-3.3-4-6-4-6s-4 2.7-4 6c0 2.2 1.8 4 4 4z"/><path d="M17 21.3c2.2 0 4-1.8 4-4 0-3.3-4-6-4-6s-4 2.7-4 6c0 2.2 1.8 4 4 4z"/>
                      </svg>
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-center md:text-left">Pacific Wild</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg> 
                  Tofino, BC
                </p>
                <p className="opacity-70 leading-relaxed text-center md:text-left">
                  Line-caught halibut and spot prawns. We only serve what is in season and Ocean Wise recommended.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}