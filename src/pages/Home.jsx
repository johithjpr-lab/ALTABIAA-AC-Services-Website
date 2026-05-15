import SEO from "../components/SEO";
import Hero from "../components/home/Hero";
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
      <ServicesSection />
      <StatsSection />
      <WhyChooseUs />
      <BrandsSlider />
      <Testimonials />
      <ContactStrip />
    </>
  );
}
