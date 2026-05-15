import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Snowflake, Wind, Thermometer, Fan } from "lucide-react";
import { COMPANY } from "../../data/site";
import Particles from "../Particles";

const FLOATING_ICONS = [
  { Icon: Snowflake, className: "top-[20%] left-[8%] text-sky-light", delay: 0 },
  { Icon: Wind, className: "top-[35%] right-[10%] text-sky", delay: 0.5 },
  { Icon: Thermometer, className: "bottom-[30%] left-[12%] text-accent", delay: 1 },
  { Icon: Fan, className: "bottom-[25%] right-[15%] text-sky-light", delay: 1.5 },
];

const SNOWFLAKES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${5 + Math.random() * 90}%`,
  delay: Math.random() * 8,
  duration: 8 + Math.random() * 8,
  size: 12 + Math.random() * 16,
}));

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.to(".hero-bg", {
        scale: 1.08,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100dvh] w-full items-center overflow-hidden pb-14 sm:pb-20"
      style={{ paddingTop: "calc(var(--site-offset) + 0.75rem)" }}
    >
      <div className="hero-bg absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1631545806609-8b0e6b6f4b8a?w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(30_136_229/0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgb(245_124_0/0.12),transparent_50%)]" />
      </div>

      <Particles count={25} />

      {SNOWFLAKES.map((s) => (
        <Snowflake
          key={s.id}
          className="snowflake text-sky-light/40"
          style={{
            left: s.left,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            width: s.size,
            height: s.size,
          }}
        />
      ))}

      {FLOATING_ICONS.map(({ Icon, className, delay }, i) => (
        <div
          key={i}
          className={`animate-float absolute hidden opacity-40 md:block ${className}`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon className="h-10 w-10 lg:h-12 lg:w-12" />
        </div>
      ))}

      <div ref={contentRef} className="container-page relative z-10 w-full">
        <p className="text-xs font-medium tracking-widest text-sky-light uppercase sm:text-sm">
          {COMPANY.nameAr}
        </p>
        <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-white sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="text-gradient">{COMPANY.tagline}</span>
        </h1>
        <p className="mt-3 text-base text-white/70 sm:mt-4 sm:text-lg md:text-xl">{COMPANY.subtitle}</p>
        <p className="mt-2 text-sm text-white/50">{COMPANY.location}</p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          <Link to="/contact" className="btn-primary btn-block-mobile">
            Book a Service
          </Link>
          <Link to="/about" className="btn-outline btn-block-mobile">
            Learn More
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
          {[
            { label: "24/7 Support", value: "Always Available" },
            { label: "Expert Team", value: "15+ Years" },
            { label: "Satisfaction", value: "100% Guaranteed" },
          ].map((card) => (
            <div key={card.label} className="glass rounded-xl p-4 sm:rounded-2xl">
              <p className="text-xs tracking-wide text-white/50 uppercase">{card.label}</p>
              <p className="mt-1 text-sm font-semibold text-white sm:text-base">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
