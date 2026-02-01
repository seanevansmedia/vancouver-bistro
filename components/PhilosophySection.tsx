"use client";

import React from "react";
import { IMG } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section id="farm" className="w-full bg-[#f7fee7] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* IMAGE SIDE - Now contained and optimized */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src={IMG.ethos} 
                alt="Fresh organic produce" 
                fill
                // Change to priority={true} if this section appears "above the fold"
                loading="lazy" 
                className="object-cover transition-transform duration-700 hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 40vw" 
              />
              {/* Subtle Overlay to match brand without heavy filters */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem]"></div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
               <span className="h-[1px] w-8 bg-[#65a30d]"></span>
               <span className="font-bold text-[#4d7c0f] uppercase tracking-[0.2em] text-sm">Our Philosophy</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-[#1a2e05] leading-[0.9] mb-8 tracking-tighter">
              REAL FOOD.<br />
              <span className="text-[#65a30d]">NO SHORTCUTS.</span>
            </h2>

            <div className="space-y-6 mb-12">
               <p className="text-xl md:text-2xl font-medium text-[#365314]/90 leading-snug max-w-xl mx-auto lg:mx-0">
                  We work directly with local growers to bring the Fraser Valley's best to your table.
               </p>
               <p className="text-lg text-[#365314]/70 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                  By cutting out the middleman and warehouses, we ensure our ingredients are harvested and served in under 24 hours. Freshness isn't a buzzword; it's our logistics.
               </p>
            </div>

            <Link href="/farm">
              <button className="bg-[#365314] text-white px-12 py-5 rounded-full font-black text-xl shadow-xl hover:bg-[#4d7c0f] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto cursor-pointer">
                 Meet the Farmers 
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}