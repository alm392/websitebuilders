import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 lg:px-10 section-dark"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p
            className="text-lg font-black"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#ffffff" }}
          >
            The Website <span style={{ color: "#C9A84C" }}>Builders</span>
          </p>
          <p className="text-xs mt-1 font-medium" style={{ color: "#444" }}>
            thewebsitebuilders.au
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link href="/survey" className="text-xs uppercase tracking-widest font-bold" style={{ color: "#666" }}>
            Get Started
          </Link>
          <Link href="/admin" className="text-xs uppercase tracking-widest font-bold" style={{ color: "#444" }}>
            Admin
          </Link>
        </div>

        <p className="text-xs font-medium" style={{ color: "#3a3a3a" }}>
          &copy; {new Date().getFullYear()} The Website Builders. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
