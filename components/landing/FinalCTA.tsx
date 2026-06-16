"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-28 px-6 lg:px-10 section-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none hero-glow"
        style={{ opacity: 0.7 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-label">Limited Time Offer</span>
          <h2
            className="font-black leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "#ffffff",
            }}
          >
            Ready to Get the Website Your Business Deserves?
          </h2>
          <p className="text-base mb-10 leading-relaxed max-w-xl mx-auto" style={{ color: "#999" }}>
            Take 2 minutes to tell us about your business. Our team reviews every
            submission personally and reaches out to book a free strategy call.
          </p>

          <Link href="/survey" className="btn-primary text-sm px-14 py-5">
            Book My Free Strategy Call
          </Link>

          <p className="mt-6 text-xs" style={{ color: "#555" }}>
            $500 this week only. Returns to $1,500. Full build, SEO, content and hosting included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
