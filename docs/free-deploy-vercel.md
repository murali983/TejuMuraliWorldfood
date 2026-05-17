# Free Deploy Guide

This project can go live for free on Vercel Hobby.

Official references:
- Vercel Hobby plan is free: https://vercel.com/docs/plans/hobby
- Vercel supports Next.js with zero-config deployment: https://vercel.com/docs/frameworks/nextjs

## Fastest path
1. Create a new GitHub repository.
2. Upload the contents of this project folder to that repo.
3. Sign in to Vercel with GitHub.
4. Import the GitHub repo into Vercel.
5. Deploy.

## Important note for this project
The current scaffold uses local sample content, so you can do an initial free deployment without connecting the database, OpenAI, or Cloudinary yet.

That means:
- first deployment can be done with no paid services
- the site can go live on a free `*.vercel.app` domain
- AI generation, admin automation, and external integrations can be connected later

## GitHub upload options

### Option 1: GitHub website
1. Go to GitHub and create a new repository.
2. Choose public or private.
3. Click `uploading an existing file`.
4. Drag the full contents of this folder into the repo.
5. Commit the upload.

### Option 2: GitHub Desktop
1. Install GitHub Desktop.
2. Add this folder as a local repository.
3. Publish it to GitHub.

## Vercel steps
1. Go to Vercel.
2. Click `Add New` then `Project`.
3. Import the GitHub repository.
4. Framework should detect as `Next.js`.
5. Leave build settings at defaults.
6. Click `Deploy`.

## Recommended environment variables later
For the first free launch, these are optional.

Set these after the first deploy if you want cleaner production metadata:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SUPPORT_EMAIL`

Set these only when you are ready for advanced features:
- `ADMIN_API_KEY`
- `OPENAI_API_KEY`
- `DATABASE_URL`
- `CLOUDINARY_*`

## Custom domain
You can stay on the free `vercel.app` domain.
If you later buy a custom domain, add it in Vercel project settings.

## After deployment
1. Open the live Vercel URL.
2. Check homepage, recipes, categories, search, and admin pages.
3. Add environment variables only for the features you want to enable next.
