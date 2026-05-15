import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import SEO from "./SEO";
import FAQ from "./FAQ";
import ContactStrip from "./ContactStrip";
import BrandImage from "./BrandImage";
import SectionHeader from "./SectionHeader";
import { IMAGES } from "../data/images";

export default function ServicePageTemplate({ data }) {
  return (
    <>
      <SEO title={data.title} description={data.metaDescription} path={`/${data.slug}`} />

      <section className="page-hero relative overflow-hidden">
        <img
          src={data.slug === "ac-services" ? IMAGES.heroAcOnly : data.gallery[0]}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/96 via-navy/90 to-navy-deep/75" />
        <div className="container-page relative">
          <p className="text-xs font-medium tracking-widest text-sky-light uppercase sm:text-sm" data-aos="fade-up">
            Al Tabiaa Cooling Service
          </p>
          <h1 className="page-title mt-2" data-aos="fade-up" data-aos-delay="100">
            {data.title}
          </h1>
          <p className="section-sub mt-3 max-w-xl" data-aos="fade-up" data-aos-delay="200">
            {data.heroSubtitle}
          </p>
          <Link
            to="/contact"
            className="btn-primary btn-block-mobile mt-6 sm:mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Book a Service
          </Link>
        </div>
      </section>

      <section className="section-pad bg-navy">
        <div className="container-page">
          <div className="grid-split">
            <div data-aos="fade-right">
              <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">Service Overview</h2>
              <p className="section-sub mt-4 !max-w-none">{data.intro}</p>
              <ul className="mt-6 space-y-3 sm:mt-8">
                {data.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/80 sm:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" data-aos="fade-left">
              {data.gallery.map((img, i) => (
                <BrandImage
                  key={img}
                  src={img}
                  alt={`${data.title} ${i + 1}`}
                  variant={i === 0 ? "wide" : "square"}
                  className={`shadow-xl ${i === 0 ? "sm:col-span-2" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10 bg-navy-deep">
        <div className="container-page max-w-3xl">
          <SectionHeader
            title="Frequently Asked Questions"
            description={`Common questions about our ${data.title.toLowerCase()}.`}
          />
          <div className="mt-8 sm:mt-10" data-aos="fade-up">
            <FAQ items={data.faqs} />
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
