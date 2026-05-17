import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function StatusChip({
  tone,
  children,
}: {
  tone: "positive" | "neutral" | "warning" | "live" | "gated" | "recommended";
  children: ReactNode;
}) {
  const palette =
    tone === "positive" || tone === "live"
      ? "bg-emerald-500/12 text-emerald-700 dark:text-emerald-300"
      : tone === "warning" || tone === "gated"
        ? "bg-amber-500/12 text-amber-700 dark:text-amber-300"
        : "bg-slate-500/12 text-slate-700 dark:text-slate-300";

  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]", palette)}>
      {children}
    </span>
  );
}
