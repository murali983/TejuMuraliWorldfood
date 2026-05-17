import { LegalTemplate } from "@/components/legal-template";
import { getLegalPage } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

const page = getLegalPage("privacy-policy")!;

export const metadata = buildMetadata({
  title: page.title,
  description: page.summary,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalTemplate page={page} />;
}
