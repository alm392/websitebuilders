"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="py-32 px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] mb-6 font-medium" style={{ color: "#C9A84C" }}>
            Limited Time Offer
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            Ready to Get the Website Your Business Deserves?
          </h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: "#888" }}>
            Take 2 minutes to tell us about your business. Our team will review your details
            and reach out to book a free strategy call. No commitment, no pressure.
          </p>

          <Link href="/survey" className="btn-primary px-14 py-5 text-sm">
            Book My Free Strategy Call
          </Link>

          <p className="mt-6 text-xs" style={{ color: "#555" }}>
            $500 this week only. Returns to $1,500. Includes full build, SEO, content, and hosting setup.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
