import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | The Website Builders",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0a" }}>
      {children}
    </div>
  );
}
