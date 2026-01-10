import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMG } from "../../lib/constants";
import { Leaf, MapPin, Sun, Droplets } from "lucide-react";
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
        <header className="relative h-[50vh] w-full overflow-hidden shadow-2xl group">
          <img 
            src={IMG.field} 
            alt="Fraser Valley Farm Field" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[30s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1a2e05]/40 mix-blend-multiply" />
          
          {/* Top Black Fade */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
          
          <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
            <Navbar />
            
            {/* 
               CHANGED: Removed 'pb-20' 
               Now using simple flex centering to ensure it is dead center vertically 
            */}
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

        {/* --- SECTION 1: THE KITCHEN (Dark Green) --- */}
        <section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto bg-[#365314] text-[#ecfccb] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
               <div className="relative h-[500px] md:h-auto">
                  <img src={IMG.chef} alt="Chef Headshot" className="absolute inset-0 w-full h-full object-cover" />
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

        {/* --- SECTION 2: SUPPLIER GRID (White Cards) --- */}
        <section className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col items-center md:flex-row md:items-end gap-4 mb-8 px-2">
               <h2 className="text-3xl font-black text-[#365314] text-center md:text-left">Our Partners</h2>
               <div className="h-[2px] bg-[#365314]/10 w-24 md:flex-1 mb-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Vegetables */}
              <div className="group bg-white text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative">
                   <img src={IMG.hands} alt="Crate of Vegetables" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full">
                      <Leaf className="w-6 h-6" />
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-center md:text-left">Valley Greens</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" /> Abbotsford, BC
                </p>
                <p className="opacity-70 leading-relaxed text-center md:text-left">
                  Supplying our kale, heirloom tomatoes, and root vegetables. Certified organic since 1998.
                </p>
              </div>

              {/* Card 2: Wine */}
              <div className="group bg-white text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative">
                   <img src={IMG.vineyard} alt="Vineyard" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full">
                      <Sun className="w-6 h-6" />
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-center md:text-left">Okanagan Crush</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" /> Oliver, BC
                </p>
                <p className="opacity-70 leading-relaxed text-center md:text-left">
                  A curated selection of natural wines. Low intervention, high flavor, straight from the desert.
                </p>
              </div>

              {/* Card 3: Seafood */}
              <div className="group bg-white text-[#365314] rounded-[2.5rem] p-8 hover:-translate-y-2 transition duration-500 shadow-lg">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative">
                   <img src={IMG.seafood} alt="Seafood Dish" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" />
                   <div className="absolute top-4 right-4 bg-[#365314] text-white p-3 rounded-full">
                      <Droplets className="w-6 h-6" />
                   </div>
                </div>
                <h3 className="text-2xl font-black mb-2 text-center md:text-left">Pacific Wild</h3>
                <p className="font-bold text-[#4d7c0f] text-sm mb-4 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" /> Tofino, BC
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