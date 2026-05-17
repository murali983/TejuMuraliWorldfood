import { LegalTemplate } from "@/components/legal-template";
import { getLegalPage } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("cookie-policy")!;

export const metadata = buildMetadata({
  title: page.title,
  description: page.summary,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return <LegalTemplate page={page} />;
}
