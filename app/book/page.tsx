"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { IMG } from "../../lib/constants";

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
            fetchPriority="high"
            decoding="sync"
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
      <section className="w-full bg-[#365314] py-0 md:py-24">
        <div className="max-w-7xl mx-auto px-0 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6 items-stretch">
            
            {/* LEFT: Booking Form */}
            <div className="lg:col-span-8 bg-white text-[#365314] rounded-none md:rounded-[4rem] p-8 md:p-16 shadow-none md:shadow-2xl flex flex-col justify-center min-h-[50vh]">
              
              {!isSubmitted ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-black text-[#365314] mb-8">Book a Table</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-bold text-sm uppercase tracking-wider flex items-center gap-2 text-[#365314]/70">
                          {/* SVG USERS */}
                          <svg className="w-4 h-4 text-[#bef264]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><path d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M19 14c-1.4-1.4-3.2-2.2-5-2.2s-3.6.8-5 2.2"></path>
                          </svg> Party Size
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
                          {/* SVG CALENDAR */}
                          <svg className="w-4 h-4 text-[#bef264]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="4"></line><line x1="8" y1="2" x2="8" y2="4"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg> Date
                        </label>
                        <input type="date" className="w-full bg-[#f7fee7] border border-[#365314]/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#bef264] focus:ring-2 focus:ring-[#bef264]/50 transition text-[#365314] font-bold" />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-bold text-sm uppercase tracking-wider flex items-center gap-2 text-[#365314]/70">
                          {/* SVG CLOCK */}
                          <svg className="w-4 h-4 text-[#bef264]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
                          </svg> Time
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
                    {/* SVG CHECK CIRCLE */}
                    <svg className="w-12 h-12 text-[#365314]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14 9 11"></polyline>
                    </svg>
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
            <div className="lg:col-span-4 flex flex-col gap-0 lg:gap-6 h-full">
              
              {/* Hours Card */}
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
              <div className="bg-[#bef264] rounded-none md:rounded-[2.5rem] p-8 md:p-10 shadow-none md:shadow-lg flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6 text-[#365314]">
                  {/* SVG INFO */}
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>
                  </svg>
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

      {/* FOOTER WRAPPER */}
      <div className="bg-[#f7fee7] text-[#365314]">
        <Footer />
      </div>
    </div>
  );
}