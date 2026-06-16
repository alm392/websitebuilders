"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Book Your Free Strategy Call",
    body: "Fill out our 2-minute survey and tell us about your trade business. Our team reviews every submission personally and reaches out to book a call.",
  },
  {
    number: "2",
    title: "We Build Your Website",
    body: "Sit back while our team designs and builds a custom site for your business. We handle everything, from content and graphics to SEO and mobile design.",
  },
  {
    number: "3",
    title: "Love It or You Don't Pay",
    body: "We present your finished website. Love it and you pay. Don't love it and we revise until you do. No payment until you're completely satisfied.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-10 section-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">The Process</span>
          <h2
            className="font-black leading-tight"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              color: "#ffffff",
            }}
          >
            Simple. Transparent.<br />Completely Risk-Free.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
          <div
            className="hidden lg:block absolute top-10 left-[16.66%] right-[16.66%] h-px"
            style={{ background: "linear-gradient(to right, rgba(201,168,76,0.4), rgba(201,168,76,0.4))" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative p-8 lg:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center text-lg font-black mb-6 relative z-10"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8CB6A 100%)",
                  color: "#0a0404",
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  borderRadius: "3px",
                }}
              >
                {step.number}
              </div>
              <h3
                className="text-xl font-black mb-4"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#ffffff" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/survey" className="btn-primary">
            Start Your Free Strategy Session
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
