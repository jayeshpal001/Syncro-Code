import { TextReveal } from "../components/animations/TextReveal";
import { ContactSection } from "../components/ui/ContactSection";
import { HeroSection } from "../components/ui/HeroSection";
import { InfiniteSlider } from "../components/ui/InfiniteSlider";
import { PortfolioSection } from "../components/ui/PortfolioSection";
import { PricingSection } from "../components/ui/PricingSection";
import { ServicesSection } from "../components/ui/ServicesSection";
import { StatsSection } from "../components/ui/StatsSection";
import { TestimonialSection } from "../components/ui/TestimonialSection";
import { TrustSection } from "../components/ui/TrustSection";



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <InfiniteSlider />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection/>
      <TrustSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}