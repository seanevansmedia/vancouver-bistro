import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMG } from "../../lib/constants";
import type { Metadata } from 'next';

// --- MENU DATA ---
const MENU_ITEMS = [
  {
    category: "Small Plates",
    items: [
      { name: "Whipped Ricotta", price: "$16", desc: "Local honey, fresh figs, thyme, grilled sourdough.", tags: ["V"] },
      { name: "Blistered Shishitos", price: "$12", desc: "Maldon salt, lime zest, garlic aioli.", tags: ["GF", "V"] },
      { name: "Beef Carpaccio", price: "$21", desc: "Truffle oil, parmesan, capers, arugula.", tags: ["GF"] },
      { name: "Heirloom Tomato Tart", price: "$18", desc: "Puff pastry, basil pesto, burrata.", tags: ["V"] },
    ]
  },
  {
    category: "Bowls & Greens",
    items: [
      { name: "Green Goddess", price: "$19", desc: "Kale, quinoa, avocado, chickpeas, tahini dressing.", tags: ["VG", "GF"] },
      { name: "Pacific Salmon", price: "$24", desc: "Wild sockeye, wild rice, edamame, miso glaze.", tags: ["GF"] },
      { name: "Harvest Cobb", price: "$22", desc: "Roasted chicken, squash, egg, blue cheese, apple cider vinaigrette.", tags: ["GF"] },
    ]
  },
  {
    category: "Mains",
    items: [
      { name: "Fraser Valley Duck", price: "$34", desc: "Pan seared breast, parsnip puree, blackberry reduction.", tags: ["GF"] },
      { name: "Mushroom Risotto", price: "$28", desc: "Foraged wild mushrooms, truffle butter, parmesan crisp.", tags: ["V", "GF"] },
      { name: "Steak Frites", price: "$38", desc: "6oz Flat iron, peppercorn sauce, kennebec fries.", tags: ["GF"] },
      { name: "Halibut Burger", price: "$26", desc: "Brioche bun, tartar sauce, slaw, served with fries.", tags: [] },
    ]
  },
  {
    category: "Dessert",
    items: [
      { name: "Lemon Basil Tart", price: "$12", desc: "Shortbread crust, torched meringue.", tags: ["V"] },
      { name: "Dark Chocolate Mousse", price: "$14", desc: "Sea salt, olive oil, hazelnut crumble.", tags: ["GF", "V"] },
    ]
  },
];

export const metadata: Metadata = {
  title: 'Seasonal Menu | Greenhouse Bistro',
  description: 'Explore our farm-to-table menu featuring local ingredients from Vancouver and the Fraser Valley.',
};

export default function MenuPage() {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Greenhouse Bistro Seasonal Menu",
    "description": "Farm-to-table dining featuring local Vancouver ingredients.",
    "hasMenuSection": MENU_ITEMS.map(section => ({
      "@type": "MenuSection",
      "name": section.category,
      "hasMenuItem": section.items.map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.desc,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace('$', ''),
          "priceCurrency": "CAD"
        }
      }))
    }))
  };

  return (
    <div className="bg-[#f7fee7] min-h-screen font-sans text-[#365314] selection:bg-[#bef264] selection:text-[#1a2e05]">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- HERO SECTION --- */}
      <div className="w-full pb-0">
        <header className="relative h-[50vh] w-full overflow-hidden shadow-2xl group bg-[#1a2e05]">
          {/* 
             LCP OPTIMIZATION:
             Using direct <img> with fetchPriority for the fastest paint possible.
          */}
          <img 
            src={IMG.menuHeader} 
            alt="Chef plating fresh farm food" 
            fetchPriority="high"
            decoding="sync"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] motion-reduce:transition-none group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1a2e05]/60 mix-blend-multiply" />
          
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#365314] to-transparent z-10 pointer-events-none" />

          <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
            <Navbar />
            
            <div className="flex-1 flex flex-col justify-center items-center text-center p-6 text-white">
              <span className="text-[#bef264] font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-md">Farm to Table</span>
              <h1 className="text-4xl md:text-6xl font-black leading-none mb-6 drop-shadow-lg">
                Seasonal Menu
              </h1>
            </div>
          </div>
        </header>
      </div>

      {/* --- MENU CONTENT --- */}
      <section className="w-full bg-[#365314] py-12 md:py-24">
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-[#ecfccb]">
          <div className="max-w-4xl mx-auto">
            
            {/* Legend */}
            <div className="flex justify-center gap-6 mb-16 text-sm font-bold text-[#ecfccb]/60 uppercase tracking-widest" aria-hidden="true">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#bef264]"></span> GF = Gluten Free</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white"></span> V = Vegetarian</span>
            </div>

            {/* Menu Categories */}
            <div className="space-y-24">
              {MENU_ITEMS.map((section, idx) => (
                <section key={idx} aria-labelledby={`category-${idx}`}>
                  <div className="flex items-center gap-4 mb-10 border-b border-[#ecfccb]/20 pb-4">
                    {/* SVG LEAF REPLACE LUCIDE */}
                    <svg 
                      className="w-6 h-6 text-[#bef264]" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.8a7 7 0 0 1-9 8.2z"/>
                      <path d="M11 20v-5a4 4 0 0 1 4-4h5"/>
                    </svg>
                    <h2 id={`category-${idx}`} className="text-3xl md:text-5xl font-black text-white">
                      {section.category}
                    </h2>
                  </div>
                  
                  <div className="grid gap-10">
                    {section.items.map((item, itemIdx) => (
                      <article key={itemIdx} className="group flex flex-col md:flex-row justify-between md:items-start p-4 -mx-4 rounded-2xl hover:bg-[#ecfccb]/5 transition">
                        <div className="md:w-3/4">
                          <div className="flex items-baseline gap-4 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold text-white">{item.name}</h3>
                            <div className="flex gap-2" aria-label="Dietary tags">
                              {item.tags.map(tag => (
                                <span key={tag} className="text-[10px] font-black bg-[#bef264] text-[#365314] px-2 py-0.5 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-[#ecfccb]/80 leading-relaxed font-medium text-lg">
                            {item.desc}
                          </p>
                        </div>
                        <div className="mt-4 md:mt-0 font-black text-2xl text-[#bef264]">
                          {item.price}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Dietary Note */}
            <div className="mt-24 text-center p-10 bg-[#1a2e05] rounded-[2rem] border border-[#ecfccb]/10 shadow-inner">
              <p className="font-bold opacity-80 text-[#ecfccb] text-lg">
                Please inform your server of any allergies. <br/>
                An 18% gratuity will be added to parties of 6 or more.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-[#f7fee7] text-[#365314]">
        <Footer />
      </div>
    </div>
  );
}