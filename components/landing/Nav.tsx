"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-40"
      style={{
        background: scrolled ? "rgba(8,8,8,0.92)" : "#080808",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212,175,55,0.18)"
          : "1px solid rgba(255,255,255,0.05)",
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between h-[58px] sm:h-[68px]">
        <Link href="/" className="flex items-center shrink-0 group">
          <span
            className="text-base sm:text-[1.15rem] font-black tracking-tight"
            style={{ color: "#ffffff" }}
          >
            The Website{" "}
            <span
              className="group-hover:opacity-80"
              style={{ color: "#D4AF37", transition: "opacity 0.2s ease" }}
            >
              Builders
            </span>
          </span>
        </Link>

        <Link
          href="/survey"
          className="btn-primary ml-3 shrink-0 px-4 sm:px-9 py-2.5 sm:py-[1.1rem]"
          style={{ fontSize: "0.62rem", minHeight: 38 }}
        >
          <span className="sm:hidden">Strategy Call</span>
          <span className="hidden sm:inline">Get Your Free Strategy Call</span>
        </Link>
      </div>
    </nav>
  );
}
