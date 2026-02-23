import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import VerbenaQuote from "@/components/VerbenaQuote";
import DrinksSection from "@/components/DrinksSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import ReservationCTA from "@/components/ReservationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <VerbenaQuote />
      <DrinksSection />
      <AboutSection />
      <LocationSection />
      <ReservationCTA />
      <Footer />
    </main>
  );
}
