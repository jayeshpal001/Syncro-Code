import { ContactSection } from "../components/ui/ContactSection";
import { HeroSection } from "../components/ui/HeroSection";
import { PortfolioSection } from "../components/ui/PortfolioSection";
import { ServicesSection } from "../components/ui/ServicesSection";



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}