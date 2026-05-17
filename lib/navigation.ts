import type { NavItem } from "@/lib/types";

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/india", label: "India" },
  { href: "/recipes", label: "Recipes" },
  { href: "/trending", label: "Trending" },
  { href: "/latest-posts", label: "Latest" },
  { href: "/video-recipes", label: "Video Recipes" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNavigation: NavItem[] = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/dmca-policy", label: "DMCA Policy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/copyright-notice", label: "Copyright Notice" },
];

export const adminNavigation: NavItem[] = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/recipes", label: "Recipes" },
  { href: "/admin/automation", label: "Automation" },
  { href: "/admin/analytics", label: "Analytics" },
  { href: "/admin/seo", label: "SEO" },
  { href: "/admin/ads", label: "Ads" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/media", label: "Media" },
  { href: "/admin/translations", label: "Translations" },
  { href: "/admin/scheduling", label: "Scheduling" },
];
