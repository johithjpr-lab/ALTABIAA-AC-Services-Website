import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HOME_SERVICES } from "../../data/site";
import { DynamicIcon } from "../IconMap";
import SectionHeader from "../SectionHeader";

export default function ServicesSection() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          label="Our Services"
          title="Complete Cooling Solutions"
          description="From residential AC to commercial VRF systems — premium service across Qatar."
        />

        <div className="mt-10 grid-cards-3 sm:mt-14">
          {HOME_SERVICES.map((service, i) => (
            <article
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group glass flex h-full flex-col rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky/40 hover:glow-sky"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky/15 text-sky-light sm:h-14 sm:w-14">
                <DynamicIcon name={service.icon} className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-lg font-bold text-white sm:text-xl">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{service.description}</p>
              <Link
                to={service.path}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-light hover:text-white"
              >
                Read More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
