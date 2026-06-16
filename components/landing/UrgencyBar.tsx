"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function UrgencyBar() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
      style={{ background: "linear-gradient(135deg, #1a0f00 0%, #2a1800 50%, #1a0f00 100%)", borderBottom: "1px solid rgba(201,168,76,0.3)" }}
      className="relative z-50 py-2.5 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        <p className="text-xs sm:text-sm font-medium tracking-wide" style={{ color: "#F5F0E8" }}>
          <span style={{ color: "#C9A84C" }} className="font-bold">THIS WEEK ONLY:</span>{" "}
          Full website build for{" "}
          <span style={{ color: "#C9A84C" }} className="font-bold">$500</span>
          {" "}(normally $1,500). Offer expires in:
        </p>
        {mounted && (
          <div className="flex items-center gap-1 font-mono text-sm font-bold" style={{ color: "#C9A84C" }}>
            <span className="bg-black bg-opacity-40 px-1.5 py-0.5 rounded">{pad(timeLeft.days)}d</span>
            <span>:</span>
            <span className="bg-black bg-opacity-40 px-1.5 py-0.5 rounded">{pad(timeLeft.hours)}h</span>
            <span>:</span>
            <span className="bg-black bg-opacity-40 px-1.5 py-0.5 rounded">{pad(timeLeft.minutes)}m</span>
            <span>:</span>
            <span className="bg-black bg-opacity-40 px-1.5 py-0.5 rounded">{pad(timeLeft.seconds)}s</span>
          </div>
        )}
        <Link href="/survey" className="hidden sm:block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm" style={{ background: "#C9A84C", color: "#0a0a0a" }}>
          Claim Offer
        </Link>
      </div>
    </div>
  );
}
