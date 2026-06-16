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
        borderBottom: scrolled ? "1px solid rgba(168,213,7,0.2)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[70px]">
        <Link href="/" className="flex items-center">
          <span
            className="text-xl font-black tracking-tight"
            style={{ color: "#ffffff" }}
          >
            The Website <span style={{ color: "#A8D507" }}>Builders</span>
          </span>
        </Link>

        <Link href="/survey" className="btn-primary">
          Get Your Free Strategy Call
        </Link>
      </div>
    </nav>
  );
}
