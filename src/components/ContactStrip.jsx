import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { COMPANY } from "../data/site";
import { IMAGES } from "../data/images";

export default function ContactStrip() {
  return (
    <section className="section-pad relative overflow-hidden">
      <img
        src={IMAGES.fleetVan}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-navy-deep/92" />
      <div className="container-page relative text-center">
        <h2
          className="text-xl font-bold text-white sm:text-2xl md:text-3xl"
          data-aos="fade-up"
        >
          Ready for Premium Cooling Service?
        </h2>
        <p className="mt-3 text-sm text-white/65 sm:text-base" data-aos="fade-up" data-aos-delay="100">
          Contact Al Tabiaa Cooling Service today — fast response across Qatar.
        </p>
        <div
          className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href={`tel:${COMPANY.phoneTel}`} className="btn-primary w-full justify-center sm:w-auto">
            <Phone className="h-5 w-5" />
            {COMPANY.phone}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="btn-outline w-full justify-center sm:w-auto">
            <Mail className="h-5 w-5" />
            Email Us
          </a>
          <Link to="/contact" className="btn-accent w-full justify-center sm:w-auto">
            Book a Service
          </Link>
        </div>
      </div>
    </section>
  );
}
