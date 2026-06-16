"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Advanced Website Functionality",
    body: "Need online booking, quote calculators, service area maps, or a customer portal? We build advanced features that automate how customers interact with your business.",
  },
  {
    title: "Business Tools and Systems",
    body: "From CRM integration and job management to quoting software and automated follow-ups, we connect your website to the backend systems that keep your business running smoothly.",
  },
  {
    title: "Growth and Advertising",
    body: "Once your site is live, we help you scale with targeted Google Ads, Meta advertising, and local SEO campaigns built to generate more calls and quote requests.",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-10 section-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Want More?</span>
          <h2
            className="font-black leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "#111111",
            }}
          >
            Built for Today.<br />Ready for Where You&apos;re Going.
          </h2>
          <div className="divider-gold" />
          <p className="mt-5 text-base max-w-xl" style={{ color: "#666" }}>
            Your core website comes fully loaded. When you&apos;re ready to go further,
            these optional features are available. Pricing discussed on your call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card-hover-light p-6 sm:p-8 rounded-sm relative"
              style={{
                background: "#fafafa",
                border: "1.5px solid #ebebeb",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="absolute top-0 left-8 w-10 h-[3px]"
                style={{ background: "linear-gradient(to right, #D4AF37, #E8C84A)" }}
              />
              <span
                className="inline-block text-xs uppercase tracking-widest font-black mb-5 mt-3"
                style={{ color: "#D4AF37" }}
              >
                Optional Feature
              </span>
              <h3
                className="text-xl font-black mb-4"
                style={{ color: "#111111" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-xs font-medium" style={{ color: "#999" }}>
          Pricing for optional features is discussed during your free strategy call.
        </p>
      </div>
    </section>
  );
}
