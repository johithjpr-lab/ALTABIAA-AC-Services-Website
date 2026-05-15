import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from "../data/site";
import CompanyLogo from "./CompanyLogo";
import { DynamicIcon } from "./IconMap";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/10 bg-navy pt-12 pb-8 sm:mt-16 sm:pt-16 lg:mt-20">
      <div className="footer-wave pointer-events-none opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-12 w-full sm:h-16">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="rgb(30 136 229 / 0.15)"
          />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <CompanyLogo size="footer" className="mb-4" />
            <p className="text-sm text-white/55">{COMPANY.nameAr}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Premium HVAC, AC, and appliance services in Qatar. Your comfort is our priority.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white sm:mb-4">Quick Links</h4>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 transition-colors hover:text-sky-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white sm:mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-sky-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sky" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-2 break-all text-sm text-white/60 hover:text-sky-light"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                {COMPANY.location}
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-3 text-sm font-semibold text-white sm:mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-lg text-white/70 transition-all hover:bg-sky/20 hover:text-sky-light"
                >
                  <DynamicIcon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/45 sm:mt-12 sm:flex-row sm:pt-8 sm:text-left sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p>Premium HVAC Services in Qatar</p>
        </div>
      </Container>
    </footer>
  );
}
