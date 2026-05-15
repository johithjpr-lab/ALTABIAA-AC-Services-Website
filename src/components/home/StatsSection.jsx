import { STATS } from "../../data/site";
import { useCounter } from "../../hooks/useCounter";

function StatItem({ value, suffix, label }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="px-2 text-center" data-aos="fade-up">
      <p className="text-3xl font-bold text-gradient sm:text-4xl md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-white/60 sm:mt-2 sm:text-sm">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-10 sm:py-14 md:py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-sky/10 via-transparent to-accent/10" />
      <div className="container-page relative grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
