import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import { getDb, runMigrations } from "@/lib/db";
import AdminDashboardClient from "./DashboardClient";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;

  if (!token || !(await verifySession(token))) {
    redirect("/admin");
  }

  await runMigrations();
  const sql = getDb();
  const rows = await sql`
    SELECT id, created_at, name, email, phone, business, location
    FROM submissions
    ORDER BY created_at DESC
  `;

  return <AdminDashboardClient submissions={rows as Parameters<typeof AdminDashboardClient>[0]["submissions"]} />;
}
