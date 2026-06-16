import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth";
import { getDb, runMigrations } from "@/lib/db";
import { cookies } from "next/headers";

export async function GET(_request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_session")?.value;

  if (!token || !(await verifySession(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await runMigrations();
    const sql = getDb();
    const rows = await sql`
      SELECT id, created_at, name, email, phone, business, location
      FROM submissions
      ORDER BY created_at DESC
    `;
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Fetch submissions error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
