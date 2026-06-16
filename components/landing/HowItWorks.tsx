"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Book Your Free Strategy Call",
    body: "Fill out our quick 2-minute survey and tell us about your trade business. Our team will review your details and reach out to book a call.",
  },
  {
    number: "2",
    title: "We Build Your Website",
    body: "Sit back while our team designs and builds a custom website for your business. We handle everything, from content and graphics to SEO and mobile design.",
  },
  {
    number: "3",
    title: "Love It or You Don't Pay",
    body: "We present your finished website. If you love it, you pay and we launch it. If you don't, we revise until you do. No payment until you're completely satisfied.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-6 lg:px-8" style={{ background: "#0d0d0d" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-4 font-medium" style={{ color: "#C9A84C" }}>
            The Process
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            Simple. Transparent. Stress-Free.
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)", transform: "translateX(-50%)" }}
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col lg:flex-row items-start lg:items-center gap-8"
                style={{ flexDirection: i % 2 === 1 ? "row-reverse" : "row" } as React.CSSProperties}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex-1 flex flex-col items-start gap-4">
                  <div
                    className="w-14 h-14 flex items-center justify-center text-xl font-bold rounded-sm"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C 0%, #E0C070 100%)",
                      color: "#0a0a0a",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed max-w-md" style={{ color: "#888" }}>
                    {step.body}
                  </p>
                </div>

                <div className="hidden lg:flex items-center justify-center w-8">
                  <div
                    className="w-3 h-3 rounded-full border-2"
                    style={{ borderColor: "#C9A84C", background: "#0d0d0d" }}
                  />
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
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
