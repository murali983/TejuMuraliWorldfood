# Tejaswi Murali World Foods

Luxury global food magazine and AI-powered recipe publishing platform built with Next.js, React, Tailwind CSS, and PostgreSQL-ready Prisma models.

## What is included
- Premium responsive frontend with dark and light mode
- Sticky navigation, hero section, trending, latest, categories, and video hubs
- Detailed recipe pages with schema markup, FAQs, nutrition, tips, and related recipes
- Contact, About, and legal policy pages
- AI-assisted search with voice input support
- Admin dashboard for recipes, SEO, automation, media, translations, ads, users, and scheduling
- PostgreSQL Prisma schema for recipes, media, reviews, favorites, jobs, and monetization systems
- API routes for search, assistant, newsletter, contact, generation, and translation
- PWA shell, service worker, security headers, and sitemap/robots support
- Automation and deployment docs

## Folder structure
```text
app/                 Next.js App Router pages and API routes
components/          Shared UI, recipe modules, admin shell
data/                Sample recipes, legal content, dashboard data
docs/                Deployment, SEO, automation, prompt library
lib/                 Search, AI helpers, SEO utilities, site config
prisma/              PostgreSQL schema
public/              SVG placeholders, icons, service worker
scripts/             Automation helpers for drafting, translation, and sitemap checks
```

## Core stack
- Next.js `16.2.6`
- React `19.2.6`
- Tailwind CSS `4.3.0`
- TypeScript `6.0.3`
- Prisma `7.8.0`
- PostgreSQL-ready schema

## Local setup
1. Install Node.js 22+ and a working package manager.
2. Copy `.env.example` to `.env`.
3. Fill in your database, OpenAI, Cloudinary, and admin credentials.
4. Run `npm install`.
5. Run `npm run db:generate`.
6. Run `npm run dev`.

## Automation commands
- `npm run content:generate`
- `npm run content:translate`
- `npm run social:publish`
- `npm run sitemap:submit`

## SEO and monetization
- SEO setup: [docs/seo-setup.md](./docs/seo-setup.md)
- Deployment guide: [docs/deployment-guide.md](./docs/deployment-guide.md)
- Automation workflow: [docs/automation-workflow.md](./docs/automation-workflow.md)
- Prompt library: [docs/prompt-library.md](./docs/prompt-library.md)
- API architecture: [docs/api-architecture.md](./docs/api-architecture.md)

## Hosting recommendations
- Vercel + Neon + Cloudinary + Cloudflare is the simplest high-scale stack.
- For more control, use Docker on a VPS or container platform with managed Postgres and object storage.

## Important compliance note
This codebase is designed to align with AdSense, helpful-content, and EEAT-minded best practices, but no codebase can guarantee AdSense approval or immunity from search penalties. Real-world outcomes depend on the originality, usefulness, review process, monetization balance, and operational quality of the published content.
