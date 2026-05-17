import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
