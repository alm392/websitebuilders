"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What does 'you don't pay until you love it' actually mean?",
    a: "It means exactly that. We build your complete website — including all design, content, and functionality — before you pay a single cent. Once you see the finished product and love it, then you pay. If you have any changes, we make them until it's perfect.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Most websites are completed within 7 to 14 business days from your strategy call. We'll give you a specific timeline based on your project during the call.",
  },
  {
    q: "What if I don't have any photos or content?",
    a: "Not a problem at all. Our creative team handles everything. We write the copy, create professional graphics, and ensure your site looks credible and compelling for your trade.",
  },
  {
    q: "What's included in the $50 per month?",
    a: "Ongoing hosting, website maintenance, security updates, and unlimited content changes. New service added? Prices changed? Need to upload new photos? Just send us a message and we handle it.",
  },
  {
    q: "Are there any lock-in contracts?",
    a: "No. The $50 per month is completely month-to-month. You can cancel at any time. We believe you'll stay because we continue to deliver real value, not because you're contractually obligated.",
  },
  {
    q: "Is this really $500 or are there hidden costs?",
    a: "This week only, the full website build is $500. That's the total one-time cost. The only ongoing cost is the $50 per month maintenance and hosting fee. No hidden setup fees, no domain markup, nothing extra.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We specialise in trade businesses including plumbers, electricians, carpenters, painters, landscapers, handymen, tilers, concreters, and more. If you work with your hands and run a service-based business, we build for you.",
  },
  {
    q: "Will my website work on mobile?",
    a: "Yes. Every website we build is fully responsive and mobile-optimised. More than 70% of local searches happen on mobile, so this is non-negotiable for us.",
  },
];

const EASE = [0.25, 0.4, 0.25, 1] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-32 px-5 sm:px-6 lg:px-10 section-light-alt">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="section-label mb-4">Common Questions</span>
          <h2
            className="font-black leading-tight"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              color: "#0f0f0f",
            }}
          >
            Everything You Want to Know
          </h2>
        </motion.div>

        {/* Items */}
        <div>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              style={{ borderBottom: "1px solid #e2e2e2" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: EASE }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-5 py-5 sm:py-6 text-left group"
                aria-expanded={open === i}
              >
                <span
                  className="text-[0.9rem] sm:text-base font-bold leading-snug transition-colors duration-200"
                  style={{ color: open === i ? "#D4AF37" : "#0f0f0f" }}
                >
                  {faq.q}
                </span>

                {/* Animated chevron */}
                <motion.span
                  className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center"
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  style={{ color: "#D4AF37" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 6l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="pb-6 text-[0.85rem] leading-relaxed font-light"
                      style={{ color: "#666" }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
