import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 lg:px-8"
      style={{ background: "#080808", borderTop: "1px solid rgba(201,168,76,0.1)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p
            className="text-lg font-bold"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F5F0E8" }}
          >
            The Website <span style={{ color: "#C9A84C" }}>Builders</span>
          </p>
          <p className="text-xs mt-1" style={{ color: "#555" }}>
            thewebsitebuilders.au
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link href="/survey" className="text-xs uppercase tracking-widest font-medium" style={{ color: "#888" }}>
            Get Started
          </Link>
          <Link href="/admin" className="text-xs uppercase tracking-widest font-medium" style={{ color: "#555" }}>
            Admin
          </Link>
        </div>

        <p className="text-xs" style={{ color: "#444" }}>
          &copy; {new Date().getFullYear()} The Website Builders. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
