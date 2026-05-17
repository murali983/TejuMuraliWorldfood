import { siteConfig } from "@/lib/site";

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function formatMinutes(minutes: number) {
  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;

  if (!remainder) {
    return `${hours} hr`;
  }

  return `${hours} hr ${remainder} min`;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : `${siteConfig.url}${path}`;
}

export function pluralize(count: number, singular: string, plural?: string) {
  if (count === 1) {
    return singular;
  }

  return plural || `${singular}s`;
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
