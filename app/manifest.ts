import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tejaswi Murali World Foods",
    short_name: "World Foods",
    description:
      "Luxury food magazine website with AI-assisted recipe publishing, search, and media workflows.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f0e7",
    theme_color: "#c97833",
    icons: [
      {
        src: "/icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
