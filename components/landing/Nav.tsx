"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(10,10,10,0.98)" : "#0a0a0a",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.2)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-[60px] sm:h-[70px]">
        <Link href="/" className="flex items-center min-w-0">
          <span
            className="text-base sm:text-xl font-black tracking-tight truncate"
            style={{ color: "#ffffff" }}
          >
            The Website <span style={{ color: "#D4AF37" }}>Builders</span>
          </span>
        </Link>

        <Link href="/survey" className="btn-primary ml-3 px-4 sm:px-10 py-3 sm:py-[1.1rem] text-[0.65rem] sm:text-xs shrink-0">
          <span className="sm:hidden">Free Strategy Call</span>
          <span className="hidden sm:inline">Get Your Free Strategy Call</span>
        </Link>
      </div>
    </nav>
  );
}
