"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const deadline = new Date(
      process.env.NEXT_PUBLIC_OFFER_DEADLINE || "2026-06-23T23:59:59+10:00"
    );

    function calc() {
      const diff = deadline.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="relative z-50 py-2.5 px-4 overflow-hidden"
      style={{ background: "#D4AF37" }}
    >
      {/* Subtle shimmer sweep */}
      <motion.div
        className="absolute inset-y-0 w-48 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
          transform: "skewX(-20deg)",
        }}
        animate={{ x: ["-200%", "600%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
      />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center relative">
        <p
          className="text-[0.75rem] sm:text-sm font-bold tracking-wide"
          style={{ color: "#0a0404" }}
        >
          <span className="font-black">THIS WEEK ONLY:</span>{" "}
          Full website build for{" "}
          <span className="font-black underline">$500</span>{" "}
          (normally $1,500). Offer expires in:
        </p>

        {mounted && (
          <div
            className="flex items-center gap-1 font-mono text-sm font-black"
            style={{ color: "#fff" }}
          >
            {[
              { val: timeLeft.days, label: "d" },
              { val: timeLeft.hours, label: "h" },
              { val: timeLeft.minutes, label: "m" },
              { val: timeLeft.seconds, label: "s" },
            ].map(({ val, label }, i) => (
              <span key={label} className="flex items-center gap-1">
                {i > 0 && <span style={{ opacity: 0.6 }}>:</span>}
                <span
                  className="px-1.5 py-0.5 rounded-sm tabular-nums"
                  style={{ background: "rgba(0,0,0,0.18)" }}
                >
                  {pad(val)}{label}
                </span>
              </span>
            ))}
          </div>
        )}

        <Link
          href="/survey"
          className="text-[0.62rem] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-sm shrink-0"
          style={{ background: "#0a0404", color: "#D4AF37" }}
        >
          Claim Now
        </Link>
      </div>
    </div>
  );
}
