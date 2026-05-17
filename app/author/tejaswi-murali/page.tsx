import Image from "next/image";

import { authorProfile } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Author Profile",
  description:
    "Meet Tejaswi Murali, founder and culinary storyteller behind Tejaswi Murali World Foods.",
  path: "/author/tejaswi-murali",
});

export default function AuthorProfilePage() {
  return (
    <section className="page-fade py-10 md:py-14">
      <div className="shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="panel-strong overflow-hidden rounded-[2rem]">
          <div className="relative h-[34rem]">
            <Image
              src={authorProfile.photo}
              alt={authorProfile.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow mb-3">Author Profile</p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl">
              {authorProfile.name}
            </h1>
            <p className="mt-3 text-lg" style={{ color: "var(--accent)" }}>
              {authorProfile.title}
            </p>
            <p className="mt-5 text-sm leading-7 md:text-base" style={{ color: "var(--muted)" }}>
              {authorProfile.bio}
            </p>
          </div>
          <div className="panel rounded-[2rem] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              Experience and expertise
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7" style={{ color: "var(--muted)" }}>
              {authorProfile.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="panel rounded-[2rem] p-6">
            <h2 className="font-[family-name:var(--font-display)] text-3xl">
              Specialties
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {authorProfile.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full border px-4 py-2 text-sm"
                  style={{ borderColor: "var(--border)" }}
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
