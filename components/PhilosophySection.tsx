import { IMG } from "../lib/constants";
import { Leaf, ArrowRight } from "lucide-react";
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
              loading="lazy" // Ensures this doesn't slow down the Hero
              className="object-cover" 
              sizes="(max-width: 1024px) 100vw, 50vw" 
            />
            <div className="absolute inset-0 bg-[#365314]/10 mix-blend-multiply"></div>
         </div>

         <div className="relative w-full lg:w-1/2 order-2 flex flex-col justify-center p-8 md:p-20 lg:p-24">
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-[#365314] p-2 rounded-full text-white">
                  <Leaf className="w-5 h-5" />
               </div>
               <span className="font-bold text-[#365314] uppercase tracking-widest text-sm">Our Promise</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-6xl font-black text-[#365314] leading-[0.9] mb-8 tracking-tighter">
              REAL FOOD.<br />
              <span className="text-[#65a30d]">NO SHORTCUTS.</span>
            </h2>

            <p className="text-lg md:text-xl font-medium text-[#365314]/80 leading-relaxed mb-12 max-w-lg">
               We skip the warehouses and work directly with local farmers.
            </p>

            <Link href="/farm">
              <button className="flex items-center gap-4 bg-[#365314] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#2a4010] hover:scale-105 transition-all duration-300 group cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
                 Meet the Farmers 
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
            </Link>
         </div>
      </div>
    </section>
  );
}