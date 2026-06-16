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
            style={{ color: "#ffffff" }}
          >
            The Website <span style={{ color: "#A8D507" }}>Builders</span>
          </p>
          <p className="text-xs mt-1 font-medium" style={{ color: "#777" }}>
            thewebsitebuilders.au
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link href="/survey" className="text-xs uppercase tracking-widest font-bold" style={{ color: "#aaa" }}>
            Get Started
          </Link>
          <Link href="/admin" className="text-xs uppercase tracking-widest font-bold" style={{ color: "#666" }}>
            Admin
          </Link>
        </div>

        <p className="text-xs font-medium" style={{ color: "#777" }}>
          &copy; {new Date().getFullYear()} The Website Builders. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
