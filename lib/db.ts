import { neon } from "@neondatabase/serverless";

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  return neon(process.env.DATABASE_URL);
}

export async function runMigrations() {
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS submissions (
      id          SERIAL PRIMARY KEY,
      created_at  TIMESTAMPTZ DEFAULT NOW(),
      name        VARCHAR(255) NOT NULL,
      email       VARCHAR(255) NOT NULL,
      phone       VARCHAR(50)  NOT NULL,
      business    VARCHAR(255) NOT NULL,
      location    VARCHAR(255) NOT NULL,
      socials     JSONB,
      goals       TEXT         NOT NULL
    )
  `;
}

export interface Submission {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  location: string;
  socials: { facebook?: string; instagram?: string; tiktok?: string } | null;
  goals: string;
}
