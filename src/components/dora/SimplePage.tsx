import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SimplePage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto min-h-dvh max-w-2xl px-4 py-16">
      <Link to="/" className="text-sm text-muted-foreground hover:underline">← Back to Dora DAO</Link>
      <h1 className="mt-4 font-display text-4xl font-semibold">{title}</h1>
      <div className="mt-6 space-y-4 text-muted-foreground">{children}</div>
    </main>
  );
}
