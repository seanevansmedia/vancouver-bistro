import React from "react";
import { IMG } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function MenuSection() {
  const items = [
    {
      title: "Green Goddess Bowl",
      desc: "Quinoa, avocado, roasted chickpeas, kale, and our signature tahini dressing.",
      price: "$18",
      img: IMG.bowl,
    },
    {
      title: "Ricotta & Fig Toast",
      desc: "Nelson the Seagull sourdough, whipped ricotta, local honey, and fresh figs.",
      price: "$16",
      img: IMG.toast,
    },
    {
      title: "The Wine List",
      desc: "Featuring exclusively BC VQA wines from the Okanagan Valley.",
      price: "3pm - 6pm",
      img: IMG.wine,
      isHappyHour: true,
    },
  ];

  return (
    <section id="menu" className="px-4 md:px-6 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto pt-0">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end mb-12 md:mb-16">
           <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Lunch Favorites</h2>
              <p className="text-lg opacity-70 font-medium">Served daily from 11am - 3pm.</p>
           </div>
           <Link href="/menu" className="hidden md:flex items-center gap-2 font-bold hover:gap-4 transition-all text-[#4d7c0f] text-xl">
             View Full Menu 
             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
             </svg>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {items.map((item, i) => (
             <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 relative">
                   <Image 
                     src={item.img} 
                     alt={item.title} 
                     fill
                     loading="lazy"
                     // Standardized quality to match config
                     quality={75}
                     className="object-cover group-hover:scale-105 transition duration-500" 
                     sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   <div className={`absolute top-4 right-4 px-4 py-1 rounded-full font-bold text-sm shadow-sm z-10 ${item.isHappyHour ? "bg-[#bef264] text-[#365314]" : "bg-white text-[#365314]"}`}>
                     {item.price}
                   </div>
                   {item.isHappyHour && (
                     <>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e05]/80 to-transparent z-0" />
                      <div className="absolute bottom-6 left-6 text-white text-left z-10">
                         <h3 className="text-2xl font-bold">Happy Hour</h3>
                         <p className="font-medium opacity-90">$8 Wines & Bites</p>
                      </div>
                     </>
                   )}
                </div>
                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4d7c0f] transition">{item.title}</h3>
                  <p className="opacity-70 leading-relaxed font-medium">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
        
        <div className="mt-12 text-center md:hidden relative z-10">
           <Link href="/menu">
             <button className="bg-[#bef264] text-[#365314] w-full py-6 rounded-full font-black text-2xl flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 transition-all duration-300 cursor-pointer">
               View Full Menu 
               <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
               </svg>
             </button>
           </Link>
        </div>
      </div>
    </section>
  );
}