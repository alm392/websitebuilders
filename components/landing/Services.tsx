"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "Advanced Website Functionality",
    body: "Need online booking, quote calculators, service area maps, or a customer portal? We build advanced features that automate how customers interact with your business.",
  },
  {
    icon: "⚙️",
    title: "Business Tools and Systems",
    body: "From CRM integration and job management to quoting software and automated follow-ups, we connect your website to the backend systems that keep your business running smoothly.",
  },
  {
    icon: "📈",
    title: "Growth and Advertising",
    body: "Once your site is live, we help you scale with targeted Google Ads, Meta advertising, and local SEO campaigns built to generate more calls and quote requests.",
  },
];

const EASE = [0.25, 0.4, 0.25, 1] as const;

export default function Services() {
  return (
    <section className="py-20 sm:py-32 px-5 sm:px-6 lg:px-10 section-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="section-label mb-4">Want More?</span>
          <h2
            className="font-black leading-tight mb-3"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#0f0f0f",
            }}
          >
            Built for Today.
            <br />
            Ready for Where You&apos;re Going.
          </h2>
          <div className="divider-gold mt-5" />
          <p
            className="mt-5 text-base max-w-md font-light leading-relaxed"
            style={{ color: "#777" }}
          >
            Your core website comes fully loaded. When you&apos;re ready to go
            further, these optional features are available. Pricing discussed on
            your call.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card-hover-light relative overflow-hidden p-7 sm:p-8 bg-[#fafafa]"
              style={{
                borderRadius: 3,
                boxShadow:
                  "0 1px 14px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
            >
              {/* Top gold rule */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(to right, #D4AF37, #E8C84A, transparent)",
                  opacity: 0,
                  transition: "opacity 0.35s ease",
                }}
              />

              <span
                className="inline-block text-[0.58rem] uppercase tracking-[0.28em] font-bold mb-5"
                style={{ color: "rgba(212,175,55,0.8)" }}
              >
                Optional Add-On
              </span>

              <div className="text-2xl mb-4" role="img" aria-hidden>
                {s.icon}
              </div>

              <h3
                className="text-[1.1rem] font-black mb-3 leading-snug"
                style={{ color: "#0f0f0f" }}
              >
                {s.title}
              </h3>
              <p
                className="text-[0.85rem] leading-relaxed font-light"
                style={{ color: "#666" }}
              >
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-[0.72rem] font-medium"
          style={{ color: "#aaa" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Pricing for optional features is discussed during your free strategy
          call.
        </motion.p>
      </div>
    </section>
  );
}
