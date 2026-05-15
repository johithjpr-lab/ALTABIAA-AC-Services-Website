import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../../data/images";
import BrandImage from "../BrandImage";
import SectionHeader from "../SectionHeader";

const PROMOS = [
  {
    image: IMAGES.acCleaningBanner,
    title: "AC Cleaning & Repair",
    text: "Deep cleaning for better cooling and fresh air across Qatar.",
    path: "/ac-services",
  },
  {
    image: IMAGES.refrigeratorBanner,
    title: "Refrigerator Repair",
    text: "Fast repair with perfect cooling and freshness preserved.",
    path: "/appliance-services",
  },
  {
    image: IMAGES.washingMachineBanner,
    title: "Washing Machine Service",
    text: "Expert repair for smooth performance and clean clothes.",
    path: "/appliance-services",
  },
];

export default function PromoShowcase() {
  return (
    <section className="section-pad border-y border-white/10 bg-navy">
      <div className="container-page">
        <SectionHeader
          label="Our Work"
          title="Professional Service You Can Trust"
          description="Real projects and promotions from Al Tabiaa Cooling Service — AC, HVAC, and home appliances."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 lg:grid-cols-3 lg:gap-8">
          {PROMOS.map((promo, i) => (
            <article
              key={promo.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-navy-light shadow-xl"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <BrandImage src={promo.image} alt={promo.title} flush />
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-white sm:text-xl">{promo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{promo.text}</p>
                <Link
                  to={promo.path}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-light hover:text-white"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
