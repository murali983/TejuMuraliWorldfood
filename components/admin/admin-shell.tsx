import type { ReactNode } from "react";
import Link from "next/link";

import { adminNavigation } from "@/lib/navigation";

type AdminShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AdminShell({ title, description, children }: AdminShellProps) {
  return (
    <section className="page-fade py-10 md:py-14">
      <div className="shell grid gap-6 lg:grid-cols-[18rem_1fr]">
        <aside className="panel rounded-[2rem] p-5">
          <p className="eyebrow mb-4">Admin Navigation</p>
          <div className="grid gap-3">
            {adminNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border px-4 py-3 text-sm transition hover:-translate-y-0.5"
                style={{ borderColor: "var(--border)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </aside>
        <div className="space-y-6">
          <div className="panel-strong rounded-[2rem] p-8">
            <p className="eyebrow mb-3">Admin Dashboard</p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              {description}
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
