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
    body: "Sit back while our team designs and builds a custom site for your business. We handle everything — content, graphics, SEO, and mobile design.",
  },
  {
    number: "3",
    title: "Love It or You Don't Pay",
    body: "We present your finished website. Love it and you pay. Don't love it and we revise until you do. No payment until you're completely satisfied.",
  },
];

const EASE = [0.25, 0.4, 0.25, 1] as const;

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-32 px-5 sm:px-6 lg:px-10 section-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="section-label mb-4">The Process</span>
          <h2
            className="font-black leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#ffffff",
            }}
          >
            Simple. Transparent.
            <br />
            <span className="gold-text">Completely Risk-Free.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
          {/* Animated connector line (desktop) */}
          <div className="hidden lg:block absolute top-[22px] left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-px overflow-hidden">
            <motion.div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(212,175,55,0.35), rgba(212,175,55,0.35))",
                transformOrigin: "left center",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative p-6 sm:p-8 lg:p-10"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: EASE }}
            >
              {/* Step circle */}
              <motion.div
                className="w-11 h-11 flex items-center justify-center text-sm font-black mb-7 relative z-10 shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, #C8A32E 0%, #E8C84A 100%)",
                  color: "#0a0404",
                  borderRadius: 2,
                }}
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.14,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {step.number}
              </motion.div>

              <h3
                className="text-[1.15rem] font-black mb-4 leading-snug"
                style={{ color: "#ffffff" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[0.85rem] leading-relaxed font-light"
                style={{ color: "#8a8076" }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 sm:mt-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <Link
            href="/survey"
            className="btn-primary w-full sm:w-auto text-center"
          >
            Start Your Free Strategy Session
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
