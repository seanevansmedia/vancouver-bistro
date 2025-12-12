import { IMG } from "@/lib/constants";

export default function PhilosophySection() {
  return (
    <section id="farm" className="px-4 md:px-6">
      <div className="w-full bg-[#ecfccb] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#4d7c0f] font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                Rooted in<br/>Vancouver Soil.
              </h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 mb-8">
                We believe that good food starts with good dirt. We partner exclusively with sustainable farms in Abbotsford and Langley to bring you produce that hasn't spent weeks on a truck.
              </p>
              <ul className="space-y-4 font-bold text-[#4d7c0f]">
                {["100% Organic Produce", "Ocean Wise Seafood", "BC VQA Wines"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4d7c0f]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-lg group">
              <img 
                src={IMG.farm} 
                alt="Crate of fresh vegetables" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
              />
            </div>
         </div>
      </div>
    </section>
  );
}