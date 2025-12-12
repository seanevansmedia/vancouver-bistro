import MenuSection from "../components/MenuSection";
import Hero from "../components/Hero";
import PhilosophySection from "../components/PhilosophySection";
import LocationSection from "../components/LocationSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f7fee7] min-h-screen font-sans text-[#365314] selection:bg-[#bef264] selection:text-[#1a2e05]">
      <Hero />
      <main className="space-y-6 md:space-y-12 py-6 md:py-12">
        <PhilosophySection />
        <MenuSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}