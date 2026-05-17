import { videoRecipes } from "@/data/recipes";
import { PageHero } from "@/components/page-hero";
import { VideoCard } from "@/components/video-card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Video Recipes",
  description:
    "Explore short-form video recipe blueprints for YouTube Shorts, Reels, and TikTok.",
  path: "/video-recipes",
});

export default function VideoRecipesPage() {
  return (
    <>
      <PageHero
        eyebrow="Video Recipes"
        title="Social-first cooking videos generated from recipe intelligence."
        description="Every recipe can branch into a short-form content system with voiceover prompts, visual scenes, and platform-specific hooks."
      />
      <section className="pb-16">
        <div className="shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videoRecipes.map((video) => (
            <VideoCard key={video.slug} slug={video.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
