"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: "01",
    title: "You Don't Pay Until You Love It",
    body: "Zero financial risk. We design and build your complete website before you pay a single dollar. If you don't love it, you don't owe us anything.",
  },
  {
    icon: "02",
    title: "Unlimited Changes and Revisions",
    body: "Your feedback drives the result. We refine and revise until your website is exactly how you want it. No caps, no extra charges.",
  },
  {
    icon: "03",
    title: "Ongoing Support and Updates",
    body: "Most agencies hand over the keys and disappear. We stay. New services, updated prices, fresh photos, any changes at all, just ask us.",
  },
  {
    icon: "04",
    title: "Fully SEO Optimised",
    body: "Every page is built from the ground up to rank on Google. More local searches, more calls, more jobs booked.",
  },
  {
    icon: "05",
    title: "Professional Content Included",
    body: "No photos? No copy? No problem. Our creative team produces professional visuals and compelling content tailored to your trade.",
  },
  {
    icon: "06",
    title: "No Lock-In Contracts",
    body: "The $50/month maintenance is completely month-to-month. We earn your business every single month by continuing to deliver value.",
  },
];

export default function Benefits() {
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
            What You Get
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            Everything You Need. Nothing You Don&apos;t.
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#888" }}>
            We built this offer specifically for tradies. No jargon, no surprise costs, no
            being locked into something you don&apos;t understand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(201,168,76,0.1)" }}>
          {benefits.map((b, i) => (
            <motion.div
              key={b.icon}
              className="card-hover p-8 lg:p-10 relative"
              style={{ background: "#0a0a0a" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p
                className="text-5xl font-bold mb-5 font-mono"
                style={{ color: "rgba(201,168,76,0.15)" }}
              >
                {b.icon}
              </p>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
              >
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                {b.body}
              </p>
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
