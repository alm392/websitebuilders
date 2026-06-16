"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const TRADES = ["Plumbers", "Electricians", "Handymen", "Painters", "Carpenters", "Landscapers"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Floating orbs — Framer handles these, not above-fold text */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 680,
          height: 680,
          top: "-15%",
          left: "-8%",
          background: "radial-gradient(circle at center, rgba(212,175,55,0.14) 0%, transparent 66%)",
          filter: "blur(50px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [0, 38, -12, 0], y: [0, -28, 14, 0] }}
        transition={{
          opacity: { duration: 1.8 },
          x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 560,
          height: 560,
          bottom: "-10%",
          right: "-5%",
          background: "radial-gradient(circle at center, rgba(212,175,55,0.09) 0%, transparent 65%)",
          filter: "blur(64px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: [0, -28, 8, 0], y: [0, 22, -14, 0] }}
        transition={{
          opacity: { duration: 2, delay: 0.6 },
          x: { duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 },
          y: { duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 },
        }}
      />

      {/* Grid */}
      <div className="grid-overlay absolute inset-0 pointer-events-none" style={{ opacity: 0.38 }} />

      {/* Content — CSS-animated so it's correct on SSR & before hydration */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-5 lg:px-10 text-center py-20 sm:py-32"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Label */}
        <p className="section-label mb-10 hero-fade-1">
          For Plumbers · Electricians · Handymen · All Trades
        </p>

        {/* Headline — masked line reveal via CSS */}
        <h1
          className="font-black leading-[1.03] mb-8 tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)", color: "#fff" }}
        >
          {[
            { text: "Your Trade Business", gold: false, cls: "hero-line-1" },
            { text: "Deserves a Website That", gold: false, cls: "hero-line-2" },
            { text: "Works As Hard As You Do", gold: true, cls: "hero-line-3" },
          ].map(({ text, gold, cls }) => (
            <div key={text} style={{ overflow: "hidden", lineHeight: 1.12 }}>
              <span className={`block ${cls} ${gold ? "gold-text" : ""}`}>
                {text}
              </span>
            </div>
          ))}
        </h1>

        {/* Sub-headline */}
        <p
          className="hero-fade-1 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          style={{ color: "#8a8279" }}
        >
          We build stunning, SEO-optimised websites for tradespeople across Australia.{" "}
          <span style={{ color: "#e0dcd8", fontWeight: 700 }}>
            You don&apos;t pay a cent until you love it.
          </span>
        </p>

        {/* Price badges */}
        <div className="hero-fade-2 flex flex-wrap items-center justify-center gap-2.5 mb-11">
          <span className="price-badge">$500 one-time build</span>
          <span style={{ color: "#3a3a3a" }} className="text-sm font-light select-none">+</span>
          <span className="price-badge">$50/month maintenance</span>
        </div>

        {/* CTA */}
        <div className="hero-fade-3">
          <Link href="/survey" className="btn-primary text-sm px-10 sm:px-16 py-4 sm:py-5">
            Claim Your $500 Website Now
          </Link>
        </div>

        <p className="hero-fade-3 mt-5 text-[0.68rem] tracking-wide" style={{ color: "#555" }}>
          Free strategy call &middot; No obligations &middot; Results guaranteed or you pay nothing
        </p>

        {/* Trade list */}
        <div className="hero-fade-4 mt-16 sm:mt-24 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {TRADES.map((trade) => (
            <span
              key={trade}
              className="text-[0.58rem] uppercase tracking-[0.32em] font-semibold"
              style={{ color: "#444" }}
            >
              {trade}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hero-fade-5 mt-14 flex justify-center opacity-55">
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="w-px h-10"
              style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.7), transparent)" }}
            />
            <div className="w-[3px] h-[3px] rounded-full mt-0.5" style={{ background: "#D4AF37" }} />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #080808)" }}
      />
    </section>
  );
}
