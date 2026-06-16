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
      className="overflow-hidden py-5 border-y"
      style={{ background: "#0d0d0d", borderColor: "rgba(201,168,76,0.15)" }}
    >
      <div className="scrolling-track flex items-center gap-12 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3">
            <span
              className="text-xs uppercase tracking-[0.2em] font-medium"
              style={{ color: "#888" }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(201,168,76,0.4)", fontSize: "6px" }}>&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
