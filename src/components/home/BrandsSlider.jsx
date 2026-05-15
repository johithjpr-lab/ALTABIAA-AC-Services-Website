import { Link } from "react-router-dom";
import { BRANDS } from "../../data/site";
import BrandLogo from "../BrandLogo";
import SectionHeader from "../SectionHeader";

export default function BrandsSlider() {
  const doubled = [...BRANDS, ...BRANDS];

  return (
    <section className="overflow-hidden py-10 sm:py-14 md:py-16">
      <div className="container-page">
        <SectionHeader
          label="Brands We Service"
          title="Authorized Brand Specialists"
          description="Certified repair and installation for leading AC & appliance brands in Qatar."
        />
      </div>

      <div className="relative mt-8 overflow-hidden sm:mt-10">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-10 bg-gradient-to-r from-navy to-transparent sm:w-20" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-10 bg-gradient-to-l from-navy to-transparent sm:w-20" />

        <div className="brand-track gap-5 px-4 sm:gap-8 sm:px-6">
          {doubled.map((brand, i) => (
            <Link
              key={`${brand.name}-${i}`}
              to="/brands"
              className="group glass flex h-14 min-w-[120px] shrink-0 items-center justify-center rounded-xl px-4 sm:h-18 sm:min-w-[150px] sm:px-6"
              title={brand.name}
            >
              <BrandLogo brand={brand} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
