import { USP_ITEMS } from "../../data/site";
import { IMAGES } from "../../data/images";
import { DynamicIcon } from "../IconMap";
import { useCounter } from "../../hooks/useCounter";
import BrandImage from "../BrandImage";
import SectionHeader from "../SectionHeader";

function StatCard({ stat, suffix, statLabel }) {
  const { count, ref } = useCounter(stat);
  return (
    <div ref={ref} className="mt-4 border-t border-white/10 pt-4">
      <p className="text-xl font-bold text-sky-light sm:text-2xl">
        {count}
        {suffix}
      </p>
      <p className="text-xs text-white/50">{statLabel}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-deep">
      <div className="container-page relative">
        <div className="grid-split items-start">
          <div className="mb-10 lg:mb-0" data-aos="fade-right">
            <SectionHeader
              label="Why Choose Us"
              title="Trusted HVAC Experts in Qatar"
              description="We deliver premium cooling solutions with transparency, speed, and guaranteed quality."
            />
            <BrandImage
              src={IMAGES.acTechnicianService}
              alt="Al Tabiaa expert technician"
              variant="wide"
              className="mt-8 shadow-xl"
            />
          </div>

        <div className="mt-10 grid-cards-2 sm:mt-0 lg:grid-cols-2">
          {USP_ITEMS.map((item, i) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group rounded-2xl border border-white/10 bg-navy p-5 sm:p-6 transition-all hover:border-sky/50 hover:shadow-[0_0_40px_rgb(30_136_229/0.2)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform group-hover:scale-110 sm:h-12 sm:w-12">
                <DynamicIcon name={item.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="text-base font-bold text-white sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              <StatCard stat={item.stat} suffix={item.suffix} statLabel={item.statLabel} />
            </article>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
