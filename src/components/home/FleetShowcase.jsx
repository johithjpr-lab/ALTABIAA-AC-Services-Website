import { IMAGES } from "../../data/images";
import BrandImage from "../BrandImage";
import SectionHeader from "../SectionHeader";

export default function FleetShowcase() {
  return (
    <section className="section-pad bg-navy-deep">
      <div className="container-page">
        <SectionHeader
          label="Our Fleet"
          title="24/7 Service Across Qatar"
          description="Fully branded service vehicles ready to reach you in Doha, Qatar and surrounding areas."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2">
          <div data-aos="fade-right">
            <BrandImage src={IMAGES.fleetVan} alt="Al Tabiaa service van" variant="wide" className="shadow-xl" />
          </div>
          <div data-aos="fade-left">
            <BrandImage src={IMAGES.fleetPickup} alt="Al Tabiaa service pickup truck" variant="wide" className="shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
