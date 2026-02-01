import React from "react";
import { IMG } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section id="farm" className="w-full bg-[#ecfccb]">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:min-h-[85vh]">
         
         <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-auto order-1">
            <Image 
              src={IMG.ethos} 
              alt="Fresh carrots with soil" 
              fill
              loading="lazy" 
              className="object-cover" 
              sizes="(max-width: 1024px) 100vw, 50vw" 
            />
            <div className="absolute inset-0 bg-[#365314]/10 mix-blend-multiply"></div>
         </div>

         <div className="relative w-full lg:w-1/2 order-2 flex flex-col justify-center p-8 md:p-20 lg:p-24">
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-[#365314] p-2 rounded-full text-white">
                  {/* SVG LEAF ICON */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z"/><path d="M11 20v-5a4 4 0 0 1 4-4h5"/>
                  </svg>
               </div>
               <span className="font-bold text-[#365314] uppercase tracking-widest text-sm">Our Promise</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-6xl font-black text-[#365314] leading-[0.9] mb-8 tracking-tighter">
              REAL FOOD.<br />
              <span className="text-[#65a30d]">NO SHORTCUTS.</span>
            </h2>

            <p className="text-lg md:text-xl font-medium text-[#365314]/80 leading-relaxed mb-12 max-w-lg">
               We skip the warehouses and work directly with local farmers. Our ingredients travel from the Fraser Valley to your plate in under 24 hours.
            </p>

            <Link href="/farm">
              <button className="flex items-center gap-4 bg-[#365314] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#2a4010] hover:scale-105 transition-all duration-300 group cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
                 Meet the Farmers 
                 {/* SVG ARROW ICON */}
                 <svg className="w-5 h-5 group-hover:translate-x-1 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
                 </svg>
              </button>
            </Link>
         </div>
      </div>
    </section>
  );
}