# Deployment Guide

## Recommended production stack
- Frontend and server routes: Vercel
- Database: Neon or Supabase Postgres
- Media hosting: Cloudinary
- DNS, caching, and WAF: Cloudflare
- Email marketing: Mailchimp, ConvertKit, or Beehiiv
- Analytics: Plausible, PostHog, or Google Analytics 4

## Local setup
1. Install Node.js 22+ and a package manager such as `npm` or `pnpm`.
2. Copy `.env.example` to `.env`.
3. Fill in database, OpenAI, Cloudinary, and admin secrets.
4. Run `npm install`.
5. Run `npm run db:generate`.
6. Run `npm run dev`.

## Database setup
1. Create a PostgreSQL database.
2. Set `DATABASE_URL`.
3. Run `npm run db:push`.
4. Optionally create a seed flow for categories, cuisines, and prompt templates.

## Vercel setup
1. Import the repository into Vercel.
2. Add the environment variables from `.env.example`.
3. Set build command to `npm run build`.
4. Set output to the default Next.js configuration.
5. Enable cron jobs or connect an external scheduler for recipe-generation scripts.

## Cloudinary setup
1. Create a Cloudinary account.
2. Add cloud name, API key, API secret, and upload preset.
3. Route generated images and short-form video renders through Cloudinary transformations.

## Cloudflare setup
1. Put the domain behind Cloudflare.
2. Enable WAF and bot protection.
3. Cache static assets aggressively.
4. Use image optimization and Brotli compression.

## Important note
AdSense approval and search performance can never be guaranteed by code alone. Approval depends on real content quality, editorial standards, traffic behavior, policy compliance, and Google review outcomes.
