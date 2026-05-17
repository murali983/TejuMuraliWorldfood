import type { LegalPage } from "@/lib/types";

export function LegalTemplate({ page }: { page: LegalPage }) {
  return (
    <section className="page-fade py-10 md:py-14">
      <div className="shell panel-strong rounded-[2rem] p-6 md:p-10">
        <p className="eyebrow mb-3">Legal</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl">
          {page.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 md:text-lg" style={{ color: "var(--muted)" }}>
          {page.summary}
        </p>
      </div>
      <div className="shell mt-8 grid gap-6">
        {page.sections.map((section) => (
          <section
            key={section.title}
            className="panel rounded-[2rem] p-6 md:p-8"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              {section.title}
            </h2>
            <div className="rich-copy mt-4">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
