import { NextRequest, NextResponse } from "next/server";
import { getDb, runMigrations } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, business, location, socials, goals } = body;

    if (!name || !email || !phone || !business || !location || !goals) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await runMigrations();
    const sql = getDb();

    await sql`
      INSERT INTO submissions (name, email, phone, business, location, socials, goals)
      VALUES (${name}, ${email}, ${phone}, ${business}, ${location}, ${JSON.stringify(socials ?? null)}, ${goals})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Survey submission error:", error);
    return NextResponse.json(
      { error: "Failed to save submission" },
      { status: 500 }
    );
  }
}
