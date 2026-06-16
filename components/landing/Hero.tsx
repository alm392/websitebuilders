"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-6 font-medium"
            style={{ color: "#C9A84C" }}
          >
            For Plumbers, Electricians, Handymen & All Trades
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your Trade Business Deserves a Website That Works{" "}
          <span className="gold-text">As Hard As You Do</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
          style={{ color: "#888" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We build stunning, SEO-optimised websites for tradespeople across Australia.
          Professionally designed, fully maintained, and{" "}
          <span style={{ color: "#F5F0E8" }}>you don&apos;t pay a cent until you love it.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div
            className="px-5 py-2.5 rounded-sm text-sm font-semibold"
            style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
          >
            $500 one-time build
          </div>
          <span style={{ color: "#555" }} className="hidden sm:block">+</span>
          <div
            className="px-5 py-2.5 rounded-sm text-sm font-semibold"
            style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}
          >
            $50/month maintenance
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/survey" className="btn-primary text-sm px-10 py-4">
            Claim Your $500 Website Now
          </Link>
          <p className="text-xs" style={{ color: "#555" }}>
            Free strategy call. No obligations.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {["Plumbers", "Electricians", "Handymen", "Painters", "Carpenters", "Landscapers"].map((trade) => (
            <span
              key={trade}
              className="text-xs uppercase tracking-widest font-medium"
              style={{ color: "#444" }}
            >
              {trade}
            </span>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />
    </section>
  );
}
