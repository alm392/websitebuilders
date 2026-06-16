"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

interface SubmissionRow {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  location: string;
}

export default function AdminDashboardClient({
  submissions,
}: {
  submissions: SubmissionRow[];
}) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-AU", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <div
        className="py-4 px-6 lg:px-8 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(168,213,7,0.1)", background: "#080808" }}
      >
        <p
          className="text-lg font-bold"
          style={{ color: "#f0f0f0" }}
        >
          The Website <span style={{ color: "#A8D507" }}>Builders</span>{" "}
          <span className="text-sm font-normal" style={{ color: "#888" }}>
            / Admin
          </span>
        </p>
        <button onClick={handleLogout} className="btn-outline text-xs py-2 px-4">
          Sign Out
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1
              className="text-3xl font-bold"
              style={{ color: "#f0f0f0" }}
            >
              Submissions
            </h1>
            <p className="mt-1 text-sm" style={{ color: "#888" }}>
              {submissions.length} total{" "}
              {submissions.length === 1 ? "submission" : "submissions"}
            </p>
          </div>
        </div>

        {submissions.length === 0 ? (
          <div
            className="py-20 text-center rounded-sm"
            style={{ background: "#111", border: "1px solid rgba(168,213,7,0.1)" }}
          >
            <p className="text-2xl mb-2" style={{ color: "#333" }}>
              No submissions yet
            </p>
            <p className="text-sm" style={{ color: "#888" }}>
              Submissions will appear here once someone completes the survey.
            </p>
          </div>
        ) : (
          <div
            className="rounded-sm overflow-hidden"
            style={{ border: "1px solid rgba(168,213,7,0.12)" }}
          >
            <div
              className="grid text-xs uppercase tracking-widest font-semibold px-6 py-3"
              style={{
                background: "#111",
                color: "#888",
                borderBottom: "1px solid rgba(168,213,7,0.1)",
                gridTemplateColumns: "120px 1fr 1fr 1fr 1fr 60px",
              }}
            >
              <span>Date</span>
              <span>Name</span>
              <span>Business</span>
              <span>Email</span>
              <span>Location</span>
              <span></span>
            </div>

            {submissions.map((s, i) => (
              <Link
                key={s.id}
                href={`/admin/dashboard/${s.id}`}
                className="grid px-6 py-4 items-center transition-colors duration-150"
                style={{
                  gridTemplateColumns: "120px 1fr 1fr 1fr 1fr 60px",
                  background: i % 2 === 0 ? "#0a0a0a" : "#0d0d0d",
                  borderBottom: i < submissions.length - 1 ? "1px solid rgba(168,213,7,0.06)" : "none",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#141414";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    i % 2 === 0 ? "#0a0a0a" : "#0d0d0d";
                }}
              >
                <span className="text-xs" style={{ color: "#888" }}>
                  {formatDate(s.created_at)}
                </span>
                <span className="text-sm font-medium" style={{ color: "#f0f0f0" }}>
                  {s.name}
                </span>
                <span className="text-sm" style={{ color: "#888" }}>
                  {s.business}
                </span>
                <span className="text-xs" style={{ color: "#666" }}>
                  {s.email}
                </span>
                <span className="text-xs" style={{ color: "#666" }}>
                  {s.location}
                </span>
                <span className="text-xs text-right" style={{ color: "#A8D507" }}>
                  View &rarr;
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
