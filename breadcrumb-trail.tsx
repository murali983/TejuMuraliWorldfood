import Link from "next/link";

import type { BreadcrumbItem } from "@/lib/types";

export function BreadcrumbTrail({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="shell py-6 text-sm" style={{ color: "var(--muted)" }}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index === items.length - 1 ? (
              <span>{item.label}</span>
            ) : (
              <>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
                <span>/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
