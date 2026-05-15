import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function OfferBanner({ embedded = false }) {
  const base =
    "offer-strip flex min-h-[2.5rem] w-full items-center border-accent/30 bg-gradient-to-r from-accent/90 to-accent-light/90 py-2 text-white sm:min-h-[2.75rem]";

  return (
    <div className={embedded ? `${base} animate-pulse-glow border-b` : `${base} animate-pulse-glow fixed left-0 right-0 z-40 border-b shadow-lg`}>
      <div className="container-page flex w-full items-center justify-center gap-2 sm:gap-3">
        <Sparkles className="hidden h-4 w-4 shrink-0 sm:block" />
        <p className="min-w-0 flex-1 text-center text-[11px] leading-snug font-medium sm:flex-none sm:text-sm">
          AC Cleaning & Maintenance Packages Available
        </p>
        <Link
          to="/contact"
          className="shrink-0 rounded-md bg-white/20 px-2.5 py-1 text-[10px] font-bold whitespace-nowrap uppercase hover:bg-white/30 sm:rounded-lg sm:px-3 sm:text-xs"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
