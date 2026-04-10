import { TextReveal } from "../components/animations/TextReveal";
import { ContactSection } from "../components/ui/ContactSection";
import { HeroSection } from "../components/ui/HeroSection";
import { InfiniteSlider } from "../components/ui/InfiniteSlider";
import { PortfolioSection } from "../components/ui/PortfolioSection";
import { ServicesSection } from "../components/ui/ServicesSection";
import { StatsSection } from "../components/ui/StatsSection";
import { TestimonialSection } from "../components/ui/TestimonialSection";



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <InfiniteSlider />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}