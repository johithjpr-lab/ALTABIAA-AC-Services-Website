import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import SEO from "../components/SEO";
import { COMPANY } from "../data/site";
import { submitToWhatsApp } from "../utils/whatsapp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitToWhatsApp(form);
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description={`Contact ${COMPANY.name} for AC and HVAC services in ${COMPANY.location}. Call ${COMPANY.phone}.`}
        path="/contact"
      />

      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div className="container-page relative">
          <h1 className="page-title" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="section-sub mt-4" data-aos="fade-up" data-aos-delay="100">
            Get a free quote or schedule your service today.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="grid-split">
            <div className="min-w-0" data-aos="fade-right">
              <h2 className="text-xl font-bold text-white sm:text-2xl">Get In Touch</h2>
              <p className="section-sub mt-3 !max-w-none">
                Reach out for AC repair, HVAC installation, or appliance service across Qatar.
              </p>

              <ul className="mt-6 space-y-3 sm:mt-8">
                <li>
                  <a
                    href={`tel:${COMPANY.phoneTel}`}
                    className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-sky/40"
                  >
                    <Phone className="h-5 w-5 shrink-0 text-sky" />
                    <div>
                      <p className="text-xs text-white/50">Phone</p>
                      <p className="font-semibold text-white">{COMPANY.phone}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="glass flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-sky/40"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-sky" />
                    <div className="min-w-0">
                      <p className="text-xs text-white/50">Email</p>
                      <p className="break-all font-semibold text-white">{COMPANY.email}</p>
                    </div>
                  </a>
                </li>
                <li className="glass flex items-start gap-3 rounded-xl p-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sky" />
                  <div>
                    <p className="text-xs text-white/50">Location</p>
                    <p className="font-semibold text-white">{COMPANY.location}</p>
                  </div>
                </li>
              </ul>

              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent btn-block-mobile mt-6 sm:mt-8"
              >
                Chat on WhatsApp
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-5 sm:p-6 md:p-8"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-bold text-white sm:text-xl">Send a Message</h3>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">
                Sent to WhatsApp: {COMPANY.phone}
              </p>
              {submitted ? (
                <div className="mt-6 rounded-xl border border-sky/30 bg-sky/10 p-4">
                  <p className="font-medium text-sky-light">Thank you!</p>
                  <p className="mt-1 text-sm text-white/70">
                    WhatsApp should open.{" "}
                    <a href={COMPANY.whatsapp} className="underline">
                      Tap here
                    </a>{" "}
                    if not.
                  </p>
                </div>
              ) : (
                <div className="mt-6 space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    className="input-field"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="input-field"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    required
                    className="input-field"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                  <select
                    required
                    className="input-field"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="" className="bg-navy">
                      Select Service *
                    </option>
                    <option value="AC Services" className="bg-navy">
                      AC Services
                    </option>
                    <option value="HVAC Services" className="bg-navy">
                      HVAC Services
                    </option>
                    <option value="VRF/VRV Systems" className="bg-navy">
                      VRF/VRV Systems
                    </option>
                    <option value="Appliance Services" className="bg-navy">
                      Appliance Services
                    </option>
                    <option value="AC Cleaning" className="bg-navy">
                      AC Cleaning & Maintenance
                    </option>
                  </select>
                  <textarea
                    placeholder="Your Message *"
                    required
                    rows={4}
                    className="input-field resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="h-5 w-5" />
                    Send via WhatsApp
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 sm:mt-12 sm:rounded-2xl" data-aos="fade-up">
            <iframe
              title="Al Tabiaa Cooling Service Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d51.45!3d25.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA5JzAwLjAiTiA1McKwMjcnMDAuMCJF!5e0!3m2!1sen!2sqa!4v1"
              className="aspect-[4/3] w-full min-h-[220px] sm:aspect-[16/9] sm:min-h-[320px] md:min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
