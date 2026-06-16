"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  location: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  goals: string;
}

const TOTAL_STEPS = 4;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-widest font-bold" style={{ color: "#A8D507" }}>
          Step {step} of {TOTAL_STEPS}
        </span>
        <span className="text-xs font-medium" style={{ color: "#aaa" }}>
          {Math.round((step / TOTAL_STEPS) * 100)}% complete
        </span>
      </div>
      <div className="h-1 w-full rounded-full" style={{ background: "#f0f0f0" }}>
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${(step / TOTAL_STEPS) * 100}%`,
            background: "linear-gradient(to right, #A8D507, #cff128)",
          }}
        />
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="block text-xs uppercase tracking-widest font-bold mb-2"
      style={{ color: "#555" }}
    >
      {children}
    </label>
  );
}

function RequiredMark() {
  return <span style={{ color: "#A8D507" }}> *</span>;
}

export default function SurveyForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    business: "",
    location: "",
    facebook: "",
    instagram: "",
    tiktok: "",
    goals: "",
  });

  function set(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    setDirection(1);
    setStep((s) => s + 1);
  }

  function back() {
    setDirection(-1);
    setStep((s) => s - 1);
  }

  function validateStep(): string {
    if (step === 1) {
      if (!form.name.trim()) return "Please enter your name.";
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        return "Please enter a valid email address.";
      if (!form.phone.trim()) return "Please enter your phone number.";
    }
    if (step === 2) {
      if (!form.business.trim()) return "Please enter your business name.";
      if (!form.location.trim()) return "Please enter your location.";
    }
    if (step === 4) {
      if (!form.goals.trim() || form.goals.trim().length < 20)
        return "Please tell us a little more about what you're looking for.";
    }
    return "";
  }

  async function handleNext() {
    const err = validateStep();
    if (err) { setError(err); return; }
    setError("");

    if (step < TOTAL_STEPS) {
      next();
    } else {
      await submit();
    }
  }

  async function submit() {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          business: form.business,
          location: form.location,
          socials: {
            facebook: form.facebook || undefined,
            instagram: form.instagram || undefined,
            tiktok: form.tiktok || undefined,
          },
          goals: form.goals,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl"
          style={{ background: "rgba(168,213,7,0.15)", border: "1px solid rgba(168,213,7,0.4)" }}
        >
          &#10003;
        </div>
        <h2
          className="font-black mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#111111" }}
        >
          You&apos;re on the list.
        </h2>
        <p className="text-base mb-6 max-w-md mx-auto" style={{ color: "#666" }}>
          Thank you, {form.name.split(" ")[0]}. Our team has received your details and
          will be in touch within 1 business day to book your free strategy call.
        </p>
        <p className="text-sm" style={{ color: "#888" }}>
          Keep an eye on your inbox at{" "}
          <span style={{ color: "#A8D507", fontWeight: 700 }}>{form.email}</span>.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <ProgressBar step={step} />

      <div className="relative overflow-hidden" style={{ minHeight: "360px" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {step === 1 && (
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{ color: "#111111" }}
                >
                  Let&apos;s start with your details
                </h2>
                <p className="text-sm mb-8" style={{ color: "#777" }}>
                  We&apos;ll use these to reach out and book your free strategy call.
                </p>
                <div className="flex flex-col gap-5">
                  <div>
                    <Label>Full Name <RequiredMark /></Label>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="e.g. John Smith"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div>
                    <Label>Email Address <RequiredMark /></Label>
                    <input
                      className="input-field"
                      type="email"
                      placeholder="e.g. john@smithplumbing.com.au"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Phone Number <RequiredMark /></Label>
                    <input
                      className="input-field"
                      type="tel"
                      placeholder="e.g. 0400 123 456"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2
                  className="font-black mb-2"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#111111" }}
                >
                  Tell us about your business
                </h2>
                <p className="text-sm mb-8" style={{ color: "#777" }}>
                  This helps us research your local market before the call.
                </p>
                <div className="flex flex-col gap-5">
                  <div>
                    <Label>Business Name <RequiredMark /></Label>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="e.g. Smith Plumbing Services"
                      value={form.business}
                      onChange={(e) => set("business", e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div>
                    <Label>Where Are You Based? <RequiredMark /></Label>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="e.g. Parramatta, NSW"
                      value={form.location}
                      onChange={(e) => set("location", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2
                  className="font-black mb-2"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#111111" }}
                >
                  Do you have any social media?
                </h2>
                <p className="text-sm mb-8" style={{ color: "#777" }}>
                  All optional. We&apos;ll use these to understand your existing brand presence.
                </p>
                <div className="flex flex-col gap-5">
                  <div>
                    <Label>Facebook Page URL</Label>
                    <input
                      className="input-field"
                      type="url"
                      placeholder="facebook.com/yourpage"
                      value={form.facebook}
                      onChange={(e) => set("facebook", e.target.value)}
                      autoFocus
                    />
                  </div>
                  <div>
                    <Label>Instagram Handle</Label>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="@yourbusiness"
                      value={form.instagram}
                      onChange={(e) => set("instagram", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>TikTok Handle</Label>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="@yourbusiness"
                      value={form.tiktok}
                      onChange={(e) => set("tiktok", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2
                  className="font-black mb-2"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)", color: "#111111" }}
                >
                  What are you looking for in a website?
                </h2>
                <p className="text-sm mb-8" style={{ color: "#777" }}>
                  The more detail you give us, the better prepared we&apos;ll be for your call. Share
                  your goals, what you like or dislike about other sites, any features you want,
                  anything at all.
                </p>
                <textarea
                  className="input-field"
                  rows={7}
                  placeholder="e.g. I want something professional that shows off my work. I'd like a contact form, a gallery of past jobs, and ideally an online quote request. I've seen a competitor's site I like the look of but want mine to feel more modern..."
                  value={form.goals}
                  onChange={(e) => set("goals", e.target.value)}
                  autoFocus
                  style={{ resize: "vertical" }}
                />
                <p className="mt-2 text-xs" style={{ color: "#555" }}>
                  Minimum 20 characters. The more you share, the better the outcome.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {error && (
        <p className="text-sm mt-4 mb-2" style={{ color: "#e87c7c" }}>
          {error}
        </p>
      )}

      <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid #ebebeb" }}>
        <button
          onClick={back}
          disabled={step === 1}
          className="btn-outline-light text-xs"
          style={{ opacity: step === 1 ? 0 : 1, pointerEvents: step === 1 ? "none" : "auto" }}
        >
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={submitting}
          className="btn-primary text-xs"
        >
          {submitting
            ? "Submitting..."
            : step === TOTAL_STEPS
            ? "Submit and Book My Call"
            : "Continue"}
        </button>
      </div>
    </div>
  );
}
