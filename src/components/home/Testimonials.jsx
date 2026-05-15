import { Star, Award } from "lucide-react";
import { TESTIMONIALS } from "../../data/site";

export default function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1 text-center lg:text-left" data-aos="fade-right">
            <span className="text-xs font-semibold tracking-widest text-sky uppercase sm:text-sm">
              Testimonials
            </span>
            <h2 className="section-heading mt-2">What Our Clients Say</h2>
          </div>
          <div
            className="glass mx-auto flex w-full max-w-sm items-center gap-3 rounded-2xl px-4 py-3 glow-accent sm:px-5 lg:mx-0 lg:max-w-xs lg:shrink-0"
            data-aos="fade-left"
          >
            <Award className="h-8 w-8 shrink-0 text-accent" />
            <div className="min-w-0 text-left">
              <p className="text-sm font-bold text-white sm:text-base">100% Customer Satisfaction</p>
              <p className="text-xs text-white/55">Trusted across Qatar</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid-cards-3 sm:mt-12">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="glass flex h-full flex-col rounded-2xl p-5 sm:p-6"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/70 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky to-sky-light text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-white">{t.name}</p>
                  <p className="truncate text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
