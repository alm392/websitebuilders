import { SignJWT, jwtVerify } from "jose";

const getKey = () =>
  new TextEncoder().encode(
    process.env.SESSION_SECRET || "fallback-secret-change-this"
  );

export async function signSession(): Promise<string> {
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(getKey());
}

export async function verifySession(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getKey());
    return true;
  } catch {
    return false;
  }
}

export function checkPassword(submitted: string): boolean {
  const stored = process.env.ADMIN_PASSWORD;
  if (!stored) return false;
  return submitted === stored;
}
