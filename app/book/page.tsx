"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMG } from "../../lib/constants";
import { Calendar, Users, Clock, CheckCircle, Info } from "lucide-react";

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setIsSubmitted(true), 500);
  };

  return (
    <div className="bg-[#f7fee7] min-h-screen font-sans text-[#ecfccb] selection:bg-[#bef264] selection:text-[#1a2e05]">
      
      {/* --- HERO SECTION --- */}
      <div className="w-full pb-0">
        <header className="relative h-[60vh] w-full overflow-hidden shadow-2xl group">
          <img 
            src={IMG.table} 
            alt="Dining table setting" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[30s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1a2e05]/50 mix-blend-multiply" />
          
          {/* Top Black Fade */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
          
          {/* Bottom Green Fade */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#365314] to-transparent z-10 pointer-events-none" />
          
          <div className="relative z-20 h-full max-w-7xl mx-auto flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col justify-center items-center text-center p-6 text-white pb-20">
              <span className="text-[#bef264] font-bold uppercase tracking-widest text-sm mb-4 drop-shadow-md">Reservations</span>
              <h1 className="text-5xl md:text-7xl font-black leading-none mb-6 drop-shadow-lg">
                Save Your Seat.
              </h1>
            </div>
          </div>
        </header>
      </div>

      {/* --- BOOKING CONTENT --- */}
      {/* CHANGED: py-0 on mobile to remove vertical gaps between hero and content */}
      <section className="w-full bg-[#365314] py-0 md:py-24">
        
        {/* CHANGED: px-0 on mobile for full width */}
        <div className="max-w-7xl mx-auto px-0 md:px-6">
          
          {/* CHANGED: gap-0 on mobile to stack sections seamlessly */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6 items-stretch">
            
            {/* LEFT: Booking Form */}
            {/* CHANGED: rounded-none on mobile, rounded-[4rem] on desktop */}
            <div className="lg:col-span-8 bg-white text-[#365314] rounded-none md:rounded-[4rem] p-8 md:p-16 shadow-none md:shadow-2xl flex flex-col justify-center min-h-[50vh]">
              
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-black text-[#365314] mb-8">Book a Table</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-bold text-sm uppercase tracking-wider flex items-center gap-2 text-[#365314]/70">
                          <Users className="w-4 h-4 text-[#bef264]" /> Party Size
                        </label>
                        <select className="w-full bg-[#f7fee7] border border-[#365314]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#bef264] focus:ring-2 focus:ring-[#bef264]/50 transition text-[#365314] font-bold appearance-none">
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                          <option>5 Guests</option>
                          <option>6+ (Call us)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-bold text-sm uppercase tracking-wider flex items-center gap-2 text-[#365314]/70">
                          <Calendar className="w-4 h-4 text-[#bef264]" /> Date
                        </label>
                        <input type="date" className="w-full bg-[#f7fee7] border border-[#365314]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#bef264] focus:ring-2 focus:ring-[#bef264]/50 transition text-[#365314] font-bold" />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-bold text-sm uppercase tracking-wider flex items-center gap-2 text-[#365314]/70">
                          <Clock className="w-4 h-4 text-[#bef264]" /> Time
                        </label>
                        <select className="w-full bg-[#f7fee7] border border-[#365314]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#bef264] focus:ring-2 focus:ring-[#bef264]/50 transition text-[#365314] font-bold appearance-none">
                          <option>5:00 PM</option>
                          <option>5:30 PM</option>
                          <option>6:00 PM</option>
                          <option>6:30 PM</option>
                          <option>7:00 PM</option>
                          <option>7:30 PM</option>
                          <option>8:00 PM</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-bold text-sm uppercase tracking-wider text-[#365314]/70">Occasion</label>
                        <select className="w-full bg-[#f7fee7] border border-[#365314]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#bef264] focus:ring-2 focus:ring-[#bef264]/50 transition text-[#365314] font-bold appearance-none">
                          <option>Just Dining</option>
                          <option>Birthday</option>
                          <option>Anniversary</option>
                          <option>Date Night</option>
                        </select>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 pt-4">
                      <label className="font-bold text-sm uppercase tracking-wider text-[#365314]/70">Contact Details</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="First Name" required className="w-full bg-[#f7fee7] border border-[#365314]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#bef264] focus:ring-2 focus:ring-[#bef264]/50 transition text-[#365314] font-bold placeholder:text-[#365314]/30" />
                        <input type="text" placeholder="Last Name" required className="w-full bg-[#f7fee7] border border-[#365314]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#bef264] focus:ring-2 focus:ring-[#bef264]/50 transition text-[#365314] font-bold placeholder:text-[#365314]/30" />
                      </div>
                      <input type="email" placeholder="Email Address" required className="w-full bg-[#f7fee7] border border-[#365314]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#bef264] focus:ring-2 focus:ring-[#bef264]/50 transition text-[#365314] font-bold placeholder:text-[#365314]/30 mt-4" />
                    </div>

                    <button type="submit" className="w-full bg-[#365314] text-white py-4 rounded-xl font-black text-lg hover:bg-[#4d7c0f] hover:scale-[1.02] transition shadow-xl mt-8 cursor-pointer">
                      Confirm Request
                    </button>
                  </form>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="bg-[#bef264] p-4 rounded-full mb-6 shadow-lg">
                    <CheckCircle className="w-12 h-12 text-[#365314]" />
                  </div>
                  <h2 className="text-4xl font-black text-[#365314] mb-4">Request Received!</h2>
                  <p className="text-lg text-[#365314]/70 max-w-md font-medium">
                    Thank you for choosing Greenhouse. We have received your request and will send a confirmation email shortly.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-8 text-[#365314] font-bold underline underline-offset-4 hover:text-[#4d7c0f] cursor-pointer">
                    Make another booking
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT: Info Sidebar */}
            {/* CHANGED: gap-0 on mobile for seamless stack */}
            <div className="lg:col-span-4 flex flex-col gap-0 lg:gap-6 h-full">
              
              {/* Hours Card */}
              {/* CHANGED: rounded-none on mobile */}
              <div className="bg-[#ecfccb] rounded-none md:rounded-[2.5rem] p-8 md:p-10 shadow-none md:shadow-lg flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-black text-[#365314] mb-8">Dining Hours</h3>
                <ul className="space-y-6 font-bold text-xl text-[#365314]/80">
                  <li className="flex justify-between border-b border-[#365314]/10 pb-2">
                    <span>Mon - Thu</span>
                    <span>11am - 10pm</span>
                  </li>
                  <li className="flex justify-between border-b border-[#365314]/10 pb-2">
                    <span>Fri - Sat</span>
                    <span>11am - 11pm</span>
                  </li>
                  <li className="flex justify-between border-b border-[#365314]/10 pb-2">
                    <span>Sunday</span>
                    <span>10am - 9pm</span>
                  </li>
                </ul>
              </div>

              {/* Policy Card */}
              {/* CHANGED: rounded-none on mobile */}
              <div className="bg-[#bef264] rounded-none md:rounded-[2.5rem] p-8 md:p-10 shadow-none md:shadow-lg flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 text-[#365314]">
                  <Info className="w-8 h-8" />
                  <h3 className="text-3xl font-black">Need to Know</h3>
                </div>
                <ul className="space-y-6 text-lg font-bold text-[#365314]/80 leading-relaxed list-disc pl-5">
                  <li>We hold tables for 15 mins.</li>
                  <li>For parties larger than 6, please call us.</li>
                  <li>Patio seating is first come, first served.</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER WRAPPER: Matches Homepage Style */}
      <div className="bg-[#f7fee7] text-[#365314]">
        <Footer />
      </div>
    </div>
  );
}