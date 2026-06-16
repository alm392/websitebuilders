const items = [
  "You Don't Pay Until You Love It",
  "Fully SEO Optimised",
  "Unlimited Revisions",
  "No Lock-In Contracts",
  "Australian Owned",
  "Professional Content Included",
  "Ongoing Support",
  "7–14 Day Delivery",
  "Mobile Responsive",
  "Google Ready",
];

export default function TrustStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4"
      style={{
        background: "#0f0f0f",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        borderBottom: "1px solid rgba(212,175,55,0.1)",
      }}
    >
      <div className="scrolling-track flex items-center gap-10 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <span
              className="text-[0.58rem] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#6a6057" }}
            >
              {item}
            </span>
            <span style={{ color: "rgba(212,175,55,0.45)", fontSize: 6 }}>
              &#9670;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
