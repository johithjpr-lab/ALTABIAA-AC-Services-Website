import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import BrandsSlider from "../components/home/BrandsSlider";
import ContactStrip from "../components/ContactStrip";
import BrandLogo from "../components/BrandLogo";
import { BRANDS } from "../data/site";

export default function Brands() {
  return (
    <>
      <SEO
        title="Brands We Service"
        description="Al Tabiaa Cooling Service repairs Samsung, LG, GREE, O-General, Hisense, Whirlpool, Bosch, Panasonic and more in Qatar."
        path="/brands"
      />

      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="container-page relative">
          <h1 className="page-title" data-aos="fade-up">
            Brands We Service
          </h1>
          <p className="section-sub mt-4 max-w-xl" data-aos="fade-up" data-aos-delay="100">
            Certified technicians for all major AC, HVAC, and appliance brands in Qatar.
          </p>
        </div>
      </section>

      <BrandsSlider />

      <section className="section-pad">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
            {BRANDS.map((brand, i) => (
              <Link
                key={brand.name}
                to="/contact"
                className="glass flex h-24 flex-col items-center justify-center gap-2 rounded-xl p-3 transition-all hover:border-sky/40 sm:h-28 sm:rounded-2xl sm:p-4"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <BrandLogo brand={brand} />
                <span className="text-center text-[10px] text-white/50 sm:text-xs">{brand.name}</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-white/60 sm:mt-10" data-aos="fade-up">
            Don&apos;t see your brand?{" "}
            <Link to="/contact" className="text-sky-light hover:underline">
              Contact us
            </Link>{" "}
            to confirm.
          </p>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
