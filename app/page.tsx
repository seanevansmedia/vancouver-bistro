import Hero from "../components/Hero";
import PhilosophySection from "../components/PhilosophySection";
import MenuSection from "../components/MenuSection";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f7fee7] min-h-screen font-sans text-[#365314] selection:bg-[#bef264] selection:text-[#1a2e05]">
      
      <Hero />
      
      <PhilosophySection />

      {/* 
         CHANGED: 
         1. py-12 md:py-24 -> pt-12 md:pt-24 pb-0
         I removed the bottom padding (pb-0) so the MenuSection sits flush 
         against the LocationSection below it.
      */}
      <main className="pt-12 md:pt-24 pb-0">
        <MenuSection />
      </main>

      <LocationSection />
      
      <Footer />
    </div>
  );
}