import HeroSection from "@/components/HeroSection";
import GameCarousel from "@/components/GameCarousel";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <GameCarousel />
      <AboutSection />
      <ContactSection />
    </main>
  );
};

export default Index;
