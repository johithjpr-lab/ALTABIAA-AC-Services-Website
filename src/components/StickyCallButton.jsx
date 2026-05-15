import { Phone } from "lucide-react";
import { COMPANY } from "../data/site";

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${COMPANY.phoneTel}`}
      className="fab-call flex items-center gap-2 rounded-full bg-gradient-to-r from-sky to-sky-light px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-sky/40 transition-transform hover:scale-105 sm:px-5 sm:py-3 sm:text-sm"
    >
      <Phone className="h-4 w-4 shrink-0 animate-pulse" />
      <span>Call Now</span>
    </a>
  );
}
