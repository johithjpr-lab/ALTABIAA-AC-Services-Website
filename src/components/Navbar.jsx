import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { NAV_LINKS, COMPANY } from "../data/site";
import CompanyLogo from "./CompanyLogo";
import OfferBanner from "./OfferBanner";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap rounded-lg px-2 py-2 text-[13px] font-medium transition-colors xl:px-2.5 xl:text-sm ${
      isActive ? "bg-sky/15 text-sky-light" : "text-white/75 hover:bg-white/5 hover:text-white"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-left text-base font-medium transition-colors ${
      isActive ? "bg-sky/15 text-sky-light" : "text-white/90 active:bg-white/5"
    }`;

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div
        className={`border-b border-white/10 bg-navy-deep/98 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-lg shadow-black/25" : ""
        }`}
      >
        <div className="container-page">
          <div className="nav-bar-inner">
            {/* Logo */}
            <Link
              to="/"
              className="flex min-w-0 shrink-0 items-center"
              onClick={() => setOpen(false)}
            >
              <CompanyLogo size="nav" />
            </Link>

            {/* Desktop nav — 1280px+ */}
            <nav
              className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 px-2 xl:flex"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.path} to={link.path} end={link.path === "/"} className={navLinkClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="btn-outline hidden !min-h-0 !px-3 !py-2 text-sm md:inline-flex xl:hidden"
                aria-label="Call now"
              >
                <Phone className="h-4 w-4 shrink-0" />
                <span className="hidden lg:inline">Call</span>
              </a>

              <Link
                to="/contact"
                className="btn-primary hidden !min-h-0 !px-3 !py-2 text-sm lg:inline-flex xl:hidden"
              >
                Book
              </Link>

              <div className="hidden items-center gap-2 xl:flex">
                <a href={`tel:${COMPANY.phoneTel}`} className="btn-outline !min-h-0 !px-4 !py-2 text-sm">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <Link to="/contact" className="btn-primary !min-h-0 !px-4 !py-2 text-sm">
                  Book a Service
                </Link>
              </div>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white xl:hidden"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <OfferBanner embedded />

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-x-0 bottom-0 z-40 bg-navy/85 backdrop-blur-sm xl:hidden"
              style={{ top: "var(--site-offset)" }}
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed right-0 z-50 flex w-[min(100%,20rem)] flex-col overflow-hidden border-l border-white/10 bg-navy-light shadow-2xl sm:w-80 xl:hidden"
              style={{
                top: "var(--site-offset)",
                height: "calc(100dvh - var(--site-offset))",
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/10 px-4">
                <span className="text-sm font-semibold text-white">Menu</span>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg active:bg-white/10"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === "/"}
                    className={mobileNavClass}
                    onClick={() => setOpen(false)}
                  >
                    <span className="min-w-0 flex-1">{link.label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 opacity-40" />
                  </NavLink>
                ))}

                <div className="mt-4 space-y-2.5 border-t border-white/10 pt-4">
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="btn-outline w-full justify-center !py-3 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    {COMPANY.phone}
                  </a>
                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center !py-3 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Book a Service
                  </Link>
                  <a
                    href={COMPANY.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent w-full justify-center !py-3 text-sm"
                    onClick={() => setOpen(false)}
                  >
                    WhatsApp Us
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
