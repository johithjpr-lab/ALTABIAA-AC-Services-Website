import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
import PromoShowcase from "../components/home/PromoShowcase";
import FleetShowcase from "../components/home/FleetShowcase";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import StatsSection from "../components/home/StatsSection";
import BrandsSlider from "../components/home/BrandsSlider";
import Testimonials from "../components/home/Testimonials";
import ContactStrip from "../components/ContactStrip";

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <PromoShowcase />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <BrandsSlider />
      <FleetShowcase />
      <Testimonials />
      <ContactStrip />
    </>
  );
}
