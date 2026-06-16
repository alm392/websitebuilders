import SurveyForm from "@/components/survey/SurveyForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Strategy Call | The Website Builders",
  description: "Tell us about your trade business and book a free strategy call. We build your website for $500 and you don't pay until you love it.",
};

export default function SurveyPage() {
  return (
    <div className="min-h-screen section-light">
      <div
        className="py-4 px-6 lg:px-10 section-dark"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-black"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#ffffff" }}
          >
            The Website <span style={{ color: "#C9A84C" }}>Builders</span>
          </Link>
          <p className="text-xs hidden sm:block font-semibold uppercase tracking-widest" style={{ color: "#555" }}>
            Free Strategy Call
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 lg:px-10 py-16">
        <div className="mb-10 text-center">
          <span className="section-label">Book Your Free Call</span>
          <h1
            className="font-black"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#111111",
            }}
          >
            Let&apos;s Build Something Great Together
          </h1>
          <p className="mt-3 text-sm" style={{ color: "#888" }}>
            Takes about 2 minutes. Our team reviews every submission personally.
          </p>
        </div>

        <div
          className="p-8 sm:p-10 rounded-sm"
          style={{ background: "#ffffff", border: "1.5px solid #e8e8e8", boxShadow: "0 4px 40px rgba(0,0,0,0.06)" }}
        >
          <SurveyForm />
        </div>
      </div>
    </div>
  );
}
