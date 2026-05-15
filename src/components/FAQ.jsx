import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={item.q}
          className="glass overflow-hidden rounded-2xl transition-colors hover:border-sky/30"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-white"
            onClick={() => setOpen(open === i ? -1 : i)}
            aria-expanded={open === i}
          >
            {item.q}
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-sky transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div className={`faq-content ${open === i ? "open" : ""}`}>
            <div className="faq-inner">
              <p className="px-6 pb-4 text-sm leading-relaxed text-white/65">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
