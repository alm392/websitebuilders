"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EXPO = [0.16, 1, 0.3, 1] as const;

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-40 px-5 sm:px-6 lg:px-10 section-dark overflow-hidden">
      {/* Multi-layer ambient glows */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.2) 0%, transparent 65%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 20% 80%, rgba(212,175,55,0.07) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 80%, rgba(212,175,55,0.07) 0%, transparent 60%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="grid-overlay absolute inset-0 pointer-events-none"
        style={{ opacity: 0.25 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: EXPO }}
        >
          <span className="section-label mb-6">Limited Time Offer</span>

          <h2
            className="font-black leading-[1.04] mb-6 tracking-tight"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              color: "#ffffff",
            }}
          >
            Ready to Get the Website
            <br />
            <span className="gold-text">Your Business Deserves?</span>
          </h2>

          <motion.p
            className="text-base sm:text-lg mb-12 leading-relaxed max-w-lg mx-auto font-light"
            style={{ color: "#8a8076" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: EXPO }}
          >
            Take 2 minutes to tell us about your business. Our team reviews
            every submission personally and reaches out to book a free strategy
            call.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.25, ease: EXPO }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/survey"
              className="btn-primary text-sm px-10 sm:px-16 py-4 sm:py-5 w-full sm:w-auto text-center"
            >
              Book My Free Strategy Call
            </Link>
          </motion.div>

          <motion.p
            className="mt-7 text-[0.68rem] tracking-wide"
            style={{ color: "#555" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            $500 this week only &middot; Returns to $1,500 &middot; Full build,
            SEO, content and hosting included
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
