import { AdminShell } from "@/components/admin/admin-shell";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Admin Media",
  description: "Manage image prompts, video prompts, Cloudinary media assets, and safe AI content generation.",
  path: "/admin/media",
});

export default function AdminMediaPage() {
  return (
    <AdminShell
      title="Media pipeline"
      description="Use copyright-safe AI image prompts, vertical video prompts, voiceover scripts, and Cloudinary-ready asset handling."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {[
          "Food photography prompts should specify plating, lighting, texture realism, and zero text or watermarks.",
          "Short-form video prompts should define a 3-second hook, quick scene order, and voiceover pacing.",
          "Store alt text, prompt provenance, and usage rights for every generated asset.",
          "Publish optimized WebP or AVIF variants through CDN-backed transformation URLs.",
        ].map((item) => (
          <div
            key={item}
            className="panel rounded-[2rem] p-6 text-sm leading-7"
            style={{ color: "var(--muted)" }}
          >
            {item}
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
