"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    num: "01",
    title: "You Don't Pay Until You Love It",
    body: "Zero financial risk. We design and build your complete website before you pay a single dollar. If you don't love it, you don't owe us anything.",
  },
  {
    num: "02",
    title: "Unlimited Changes and Revisions",
    body: "Your feedback drives the result. We refine and revise until your website is exactly how you want it. No caps, no extra charges, no compromise.",
  },
  {
    num: "03",
    title: "Ongoing Support and Updates",
    body: "Most agencies hand over the keys and disappear. We stay. New services, updated prices, fresh photos — any changes at all, just ask.",
  },
  {
    num: "04",
    title: "Fully SEO Optimised",
    body: "Every page is built from the ground up to rank on Google. More local searches, more calls, more jobs booked — that's the goal.",
  },
  {
    num: "05",
    title: "Professional Content Included",
    body: "No photos? No copy? No problem. Our creative team produces professional visuals and compelling content tailored to your trade.",
  },
  {
    num: "06",
    title: "No Lock-In Contracts",
    body: "The $50/month maintenance is completely month-to-month. We earn your business every single month by continuing to deliver real value.",
  },
];

const EASE = [0.25, 0.4, 0.25, 1] as const;

export default function Benefits() {
  return (
    <section className="py-20 sm:py-32 px-5 sm:px-6 lg:px-10 section-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="lg:flex lg:items-end lg:justify-between mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="section-label mb-4">What You Get</span>
            <h2
              className="font-black leading-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                color: "#0f0f0f",
              }}
            >
              Everything You Need.
              <br />
              Nothing You Don&apos;t.
            </h2>
          </motion.div>

          <motion.p
            className="mt-5 lg:mt-0 text-base max-w-sm lg:text-right font-light leading-relaxed"
            style={{ color: "#777" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            Built specifically for tradies. No jargon, no surprise costs, no
            being locked into something you don&apos;t understand.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.num}
              className="card-hover-light relative overflow-hidden bg-white p-7 sm:p-8"
              style={{
                boxShadow:
                  "0 1px 14px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)",
                borderRadius: 3,
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
            >
              {/* Watermark number */}
              <span
                className="absolute -top-3 right-3 font-black select-none pointer-events-none"
                aria-hidden
                style={{
                  fontSize: "7.5rem",
                  lineHeight: 1,
                  color: "rgba(212,175,55,0.055)",
                  letterSpacing: "-0.04em",
                }}
              >
                {b.num}
              </span>

              {/* Gold accent line */}
              <div
                className="w-7 h-[2px] mb-6"
                style={{
                  background:
                    "linear-gradient(to right, #D4AF37, #E8C84A)",
                }}
              />

              <h3
                className="text-[1.05rem] font-black mb-3 leading-snug relative z-10"
                style={{ color: "#0f0f0f" }}
              >
                {b.title}
              </h3>
              <p
                className="text-[0.85rem] leading-relaxed relative z-10 font-light"
                style={{ color: "#666" }}
              >
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
