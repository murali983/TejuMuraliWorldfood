type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-fade py-10 md:py-14">
      <div className="shell panel-strong rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-4xl leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 md:text-lg" style={{ color: "var(--muted)" }}>
          {description}
        </p>
      </div>
    </section>
  );
}
