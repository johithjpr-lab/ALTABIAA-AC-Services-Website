import { Link } from "react-router-dom";
import { Shield, Target, Heart } from "lucide-react";
import SEO from "../components/SEO";
import ContactStrip from "../components/ContactStrip";
import SectionHeader from "../components/SectionHeader";
import { COMPANY } from "../data/site";

const VALUES = [
  {
    icon: Shield,
    title: "Integrity",
    text: "Honest pricing, genuine parts, and transparent communication on every project.",
  },
  {
    icon: Target,
    title: "Excellence",
    text: "We pursue the highest standards in HVAC installation, repair, and maintenance.",
  },
  {
    icon: Heart,
    title: "Customer First",
    text: "Your comfort and satisfaction drive every decision we make.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={`Learn about ${COMPANY.name} — trusted HVAC and AC experts serving ${COMPANY.location} and all of Qatar.`}
        path="/about"
      />

      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgb(30_136_229/0.2),transparent_60%)]" />
        <div className="container-page relative">
          <p className="text-xs font-medium tracking-widest text-sky-light uppercase sm:text-sm" data-aos="fade-up">
            About Us
          </p>
          <h1 className="page-title mt-2" data-aos="fade-up">
            Your Trusted Cooling Partner in Qatar
          </h1>
          <p className="section-sub mt-4 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
            {COMPANY.name} ({COMPANY.nameAr}) delivers premium HVAC, AC, and appliance services from{" "}
            {COMPANY.location}.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="grid-split">
            <div data-aos="fade-right">
              <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">Who We Are</h2>
              <p className="section-sub mt-4 !max-w-none">
                Al Tabiaa Cooling Service is a professional HVAC and appliance repair company dedicated to
                keeping homes and businesses comfortable across Qatar. With expert technicians, modern tools,
                and a commitment to quality, we handle everything from routine AC cleaning to complex VRF system
                installations.
              </p>
              <p className="section-sub mt-4 !max-w-none">
                Our name reflects our connection to nature — delivering fresh, efficient cooling solutions that
                respect both your comfort and the environment.
              </p>
              <Link to="/contact" className="btn-primary btn-block-mobile mt-6 sm:mt-8">
                Get in Touch
              </Link>
            </div>
            <div className="glass rounded-2xl p-6 sm:p-8" data-aos="fade-left">
              <img src="/logo.png" alt={COMPANY.name} className="mx-auto h-32 w-auto sm:h-40" />
              <p className="mt-4 text-center text-sm text-white/60 sm:mt-6">{COMPANY.nameAr}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10">
        <div className="container-page">
          <SectionHeader title="Our Core Values" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-5 text-center sm:p-6"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <v.icon className="mx-auto h-9 w-9 text-sky sm:h-10 sm:w-10" />
                <h3 className="mt-3 text-base font-bold text-white sm:mt-4 sm:text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-white/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
