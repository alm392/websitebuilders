"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden section-dark"
    >
      <div className="hero-glow grid-overlay absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center py-28">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          For Plumbers, Electricians, Handymen &amp; All Trades
        </motion.p>

        <motion.h1
          className="font-black leading-[1.05] mb-8"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            color: "#ffffff",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Your Trade Business Deserves a Website That Works{" "}
          <span className="gold-text">As Hard As You Do</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-5 leading-relaxed"
          style={{ color: "#c8c0b8" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We build stunning, SEO-optimised websites for tradespeople across Australia.
          You{" "}
          <span style={{ color: "#ffffff", fontWeight: 700 }}>don&apos;t pay a cent until you love it.</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
        >
          <span
            className="text-sm font-bold px-4 py-2 rounded-sm"
            style={{ background: "rgba(212,175,55,0.12)", border: "1.5px solid rgba(212,175,55,0.35)", color: "#D4AF37" }}
          >
            $500 one-time build
          </span>
          <span style={{ color: "#888" }} className="text-sm font-bold">+</span>
          <span
            className="text-sm font-bold px-4 py-2 rounded-sm"
            style={{ background: "rgba(212,175,55,0.12)", border: "1.5px solid rgba(212,175,55,0.35)", color: "#D4AF37" }}
          >
            $50/month maintenance
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/survey" className="btn-primary text-sm px-12 py-5">
            Claim Your $500 Website Now
          </Link>
        </motion.div>

        <motion.p
          className="mt-5 text-xs"
          style={{ color: "#999" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          Free strategy call. No obligations. Results guaranteed or you pay nothing.
        </motion.p>

        <motion.div
          className="mt-20 flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          {["Plumbers", "Electricians", "Handymen", "Painters", "Carpenters", "Landscapers"].map((trade) => (
            <span
              key={trade}
              className="text-xs uppercase tracking-widest font-semibold"
              style={{ color: "#777" }}
            >
              {trade}
            </span>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
      />
    </section>
  );
}
