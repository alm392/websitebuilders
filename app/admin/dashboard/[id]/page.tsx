import { cookies } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { verifySession } from "@/lib/auth";
import { getDb } from "@/lib/db";
import type { Submission } from "@/lib/db";
import Link from "next/link";

export default async function SubmissionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;

  if (!token || !(await verifySession(token))) {
    redirect("/admin");
  }

  const { id } = await params;
  const numId = parseInt(id, 10);
  if (isNaN(numId)) notFound();

  const sql = getDb();
  const rows = await sql`SELECT * FROM submissions WHERE id = ${numId}`;
  if (rows.length === 0) notFound();

  const s = rows[0] as Submission;

  function formatDate(iso: string) {
    return new Date(iso).toLocaleString("en-AU", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  const socials = s.socials as Record<string, string> | null;

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
          The Website <span style={{ color: "#A8D507" }}>Builders</span>
        </p>
        <Link href="/admin/dashboard" className="btn-outline text-xs py-2 px-4">
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#888" }}>
            Submission #{s.id} &middot; {formatDate(s.created_at)}
          </p>
          <h1
            className="text-3xl font-bold"
            style={{ color: "#f0f0f0" }}
          >
            {s.name}
          </h1>
          <p className="mt-1 text-sm" style={{ color: "#888" }}>
            {s.business} &middot; {s.location}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Section title="Contact Details">
            <Row label="Name" value={s.name} />
            <Row label="Email" value={s.email} />
            <Row label="Phone" value={s.phone} />
          </Section>

          <Section title="Business">
            <Row label="Business Name" value={s.business} />
            <Row label="Location" value={s.location} />
          </Section>

          {socials && Object.values(socials).some(Boolean) && (
            <Section title="Social Media">
              {socials.facebook && <Row label="Facebook" value={socials.facebook} />}
              {socials.instagram && <Row label="Instagram" value={socials.instagram} />}
              {socials.tiktok && <Row label="TikTok" value={socials.tiktok} />}
            </Section>
          )}

          <Section title="What They Are Looking For">
            <div
              className="p-5 rounded-sm text-sm leading-relaxed whitespace-pre-wrap"
              style={{ background: "#0d0d0d", color: "#888", border: "1px solid rgba(168,213,7,0.08)" }}
            >
              {s.goals}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ border: "1px solid rgba(168,213,7,0.12)" }}
    >
      <div
        className="px-6 py-3"
        style={{ background: "#111", borderBottom: "1px solid rgba(168,213,7,0.1)" }}
      >
        <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#A8D507" }}>
          {title}
        </p>
      </div>
      <div className="px-6 py-4 flex flex-col gap-3" style={{ background: "#0a0a0a" }}>
        {children}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
      <span className="text-xs uppercase tracking-widest font-medium w-32 flex-shrink-0" style={{ color: "#888" }}>
        {label}
      </span>
      <span className="text-sm" style={{ color: "#f0f0f0" }}>
        {value}
      </span>
    </div>
  );
}
