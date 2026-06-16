import SurveyForm from "@/components/survey/SurveyForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Strategy Call | The Website Builders",
  description: "Tell us about your trade business and book a free strategy call. We build your website for $500 and you don't pay until you love it.",
};

export default function SurveyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <div
        className="py-4 px-6 lg:px-8"
        style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            The Website <span style={{ color: "#C9A84C" }}>Builders</span>
          </Link>
          <p className="text-xs hidden sm:block" style={{ color: "#555" }}>
            Free Strategy Call
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-8 py-16">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] mb-3 font-medium" style={{ color: "#C9A84C" }}>
            Book Your Free Call
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            Let&apos;s Build Something Great Together
          </h1>
          <p className="mt-3 text-sm" style={{ color: "#888" }}>
            Takes about 2 minutes. Our team reviews every submission personally.
          </p>
        </div>

        <div
          className="p-8 sm:p-10 rounded-sm"
          style={{ background: "#111", border: "1px solid rgba(201,168,76,0.15)" }}
        >
          <SurveyForm />
        </div>
      </div>
    </div>
  );
}
