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
    body: "Your feedback drives the result. We refine and revise until your website is exactly how you want it. No caps, no extra charges.",
  },
  {
    num: "03",
    title: "Ongoing Support and Updates",
    body: "Most agencies hand over the keys and disappear. We stay. New services, updated prices, fresh photos, any changes at all, just ask.",
  },
  {
    num: "04",
    title: "Fully SEO Optimised",
    body: "Every page is built from the ground up to rank on Google. More local searches, more calls, more jobs booked.",
  },
  {
    num: "05",
    title: "Professional Content Included",
    body: "No photos? No copy? No problem. Our creative team produces professional visuals and compelling content tailored to your trade.",
  },
  {
    num: "06",
    title: "No Lock-In Contracts",
    body: "The $50/month maintenance is completely month-to-month. We earn your business every single month by continuing to deliver value.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 lg:px-10 section-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What You Get</span>
          <h2
            className="font-black leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "#111111",
            }}
          >
            Everything You Need.<br />Nothing You Don&apos;t.
          </h2>
          <div className="divider-gold" />
          <p className="mt-5 text-base max-w-xl" style={{ color: "#666" }}>
            Built specifically for tradies. No jargon, no surprise costs, no being
            locked into something you don&apos;t understand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.num}
              className="card-hover-light p-8 rounded-sm"
              style={{
                background: "#fafafa",
                border: "1.5px solid #ebebeb",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <p
                className="text-4xl font-black mb-5"
                style={{ color: "#A8D507", opacity: 0.5 }}
              >
                {b.num}
              </p>
              <h3
                className="text-lg font-black mb-3"
                style={{ color: "#111111" }}
              >
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
