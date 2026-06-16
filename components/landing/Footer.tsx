import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 lg:px-10 section-dark"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[1.05rem] font-black" style={{ color: "#ffffff" }}>
            The Website{" "}
            <span style={{ color: "#D4AF37" }}>Builders</span>
          </p>
          <p
            className="text-[0.68rem] mt-1 tracking-wide font-light"
            style={{ color: "#555" }}
          >
            thewebsitebuilders.au
          </p>
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/survey"
            className="text-[0.65rem] uppercase tracking-[0.2em] font-bold transition-colors duration-200"
            style={{ color: "#666" }}
          >
            Get Started
          </Link>
          <Link
            href="/admin"
            className="text-[0.65rem] uppercase tracking-[0.2em] font-bold transition-colors duration-200"
            style={{ color: "#444" }}
          >
            Admin
          </Link>
        </div>

        <p
          className="text-[0.68rem] font-light"
          style={{ color: "#444" }}
        >
          &copy; {new Date().getFullYear()} The Website Builders. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
