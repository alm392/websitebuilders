const items = [
  "You Don't Pay Until You Love It",
  "Fully SEO Optimised",
  "Unlimited Revisions",
  "No Lock-In Contracts",
  "Australian Owned",
  "Professional Content Included",
  "Ongoing Support",
  "Fast Turnaround",
  "Mobile Responsive",
  "Google Ready",
];

export default function TrustStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 section-light-alt"
      style={{ borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8" }}
    >
      <div className="scrolling-track flex items-center gap-10 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <span
              className="text-xs uppercase tracking-[0.2em] font-bold"
              style={{ color: "#555" }}
            >
              {item}
            </span>
            <span style={{ color: "#D4AF37", fontSize: "8px" }}>&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
