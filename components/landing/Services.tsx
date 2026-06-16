"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Advanced Website Functionality",
    body: "Need online booking, quote calculators, service area maps, or a customer portal? We can build advanced features into your website to automate how customers interact with your business.",
    tag: "Optional Feature",
  },
  {
    title: "Business Tools and Systems",
    body: "From CRM integration and job management to quoting software and automated follow-ups, we can connect your website to the backend systems that keep your business running smoothly.",
    tag: "Optional Feature",
  },
  {
    title: "Growth and Advertising",
    body: "Once your website is live, we can help you scale with targeted Google Ads, Meta advertising, and local SEO campaigns built specifically to generate more calls and quote requests.",
    tag: "Optional Feature",
  },
];

export default function Services() {
  return (
    <section className="py-28 px-6 lg:px-8" style={{ background: "#0a0a0a" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-4 font-medium" style={{ color: "#C9A84C" }}>
            Want More?
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            Built for Where You Are Today.<br />Ready for Where You&apos;re Going.
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#888" }}>
            Your core website comes fully loaded. When you&apos;re ready to go further, these optional
            features are available. Pricing is discussed during your strategy call.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card-hover p-8 rounded-sm relative overflow-hidden"
              style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.5), transparent)" }}
              />
              <span
                className="inline-block text-xs uppercase tracking-widest font-bold mb-5 px-3 py-1 rounded-sm"
                style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
              >
                {s.tag}
              </span>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-8 text-xs" style={{ color: "#555" }}>
          Pricing for optional features is discussed during your free strategy call.
        </p>
      </div>
    </section>
  );
}
