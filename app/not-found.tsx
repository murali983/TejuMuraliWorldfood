import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-fade py-20">
      <div className="shell panel-strong rounded-[2rem] p-10 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl">
          Recipe page not found
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
          The page you requested is not available yet. Try the recipe archive, categories page, or AI search to find something delicious.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/recipes"
            className="rounded-full px-5 py-3 text-sm font-semibold text-white"
            style={{ background: "var(--accent)" }}
          >
            Browse recipes
          </Link>
          <Link
            href="/search"
            className="rounded-full border px-5 py-3 text-sm"
            style={{ borderColor: "var(--border)" }}
          >
            Open AI search
          </Link>
        </div>
      </div>
    </section>
  );
}
