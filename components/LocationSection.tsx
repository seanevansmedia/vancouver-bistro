"use client";

import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    // CHANGED: 
    // Top: pt-16 md:pt-24 (Keeps it tight to the section above)
    // Bottom: pb-24 md:pb-32 (Adds extra space at the bottom to balance the visual weight)
    <section id="visit" className="w-full bg-[#365314] pt-16 pb-24 md:pt-24 md:pb-32">
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-[#ecfccb]">
         
         <h2 className="text-4xl md:text-5xl font-black mb-12 md:mb-16 text-white text-center md:text-left">
            Visit Us.
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* MAP CONTENT */}
            <div className="md:order-1 h-80 md:h-[500px] bg-[#eef5e6] rounded-[2rem] overflow-hidden relative border-4 border-[#4d7c0f]/30 shadow-2xl group w-full">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.686086772793!2d-123.15982602339396!3d49.26352797152064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673c004f90a9b%3A0x62a3f742200508a6!2s2284%20W%204th%20Ave%2C%20Vancouver%2C%20BC%20V6K%201N8!5e0!3m2!1sen!2sca!4v1709230000000!5m2!1sen!2sca" 
                 width="100%" 
                 height="100%" 
                 style={{ 
                    border: 0, 
                    filter: 'grayscale(100%) sepia(30%) hue-rotate(85deg) saturate(160%) contrast(95%)' 
                 }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Greenhouse Bistro Location"
               ></iframe>

                <div className="absolute bottom-6 right-6 pointer-events-none">
                  <span className="bg-white text-[#365314] px-6 py-2 rounded-full font-bold shadow-lg text-sm border border-[#365314]/10">
                    Interactive Map
                  </span>
               </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="md:order-2 flex flex-col justify-center h-full py-4">
               
               <div className="space-y-12">
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full bg-[#4d7c0f] flex items-center justify-center flex-shrink-0 text-white">
                        <MapPin className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Kitsilano</h3>
                        <p className="text-lg opacity-80 leading-relaxed">
                           2284 West 4th Avenue<br/>
                           Vancouver, BC V6K 1N8
                        </p>
                        <a 
                          href="https://maps.google.com/?q=2284+West+4th+Avenue,+Vancouver,+BC" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block mt-4 underline decoration-[#bef264] underline-offset-4 hover:text-white text-[#bef264] font-bold"
                        >
                          Get Directions
                        </a>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full bg-[#4d7c0f] flex items-center justify-center flex-shrink-0 text-white">
                        <Clock className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg opacity-80">
                           <span>Mon - Thu</span> <span>11am - 10pm</span>
                           <span>Fri - Sat</span> <span>11am - 11pm</span>
                           <span>Sunday</span> <span>10am - 9pm</span>
                        </div>
                     </div>
                  </div>

                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-full bg-[#4d7c0f] flex items-center justify-center flex-shrink-0 text-white">
                        <Phone className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                        <p className="text-lg opacity-80 mb-2">
                           (604) 555-0199
                        </p>
                        <p className="text-lg opacity-80">
                           hello@greenhousebistro.ca
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </section>
  );
}