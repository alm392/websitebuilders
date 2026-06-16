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
        background: scrolled ? "rgba(10,4,4,0.98)" : "#0a0404",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[70px]">
        <Link href="/" className="flex items-center">
          <span
            className="text-xl font-black tracking-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#ffffff" }}
          >
            The Website <span style={{ color: "#C9A84C" }}>Builders</span>
          </span>
        </Link>

        <Link href="/survey" className="btn-primary">
          Get Your Free Strategy Call
        </Link>
      </div>
    </nav>
  );
}
