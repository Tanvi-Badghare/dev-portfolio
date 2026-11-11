This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Arctic Signal

A dark, high-contrast, racing-inspired developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind and Framer Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Make it yours

| What | Where |
| --- | --- |
| Name, role, email, socials, stats, skills, timeline | `src/data/site.ts` |
| Projects | `src/data/projects.ts` |
| Colors, spacing, fonts | `:root` in `src/app/globals.css` |
| Page title and share preview | `src/app/layout.tsx` |
| Portrait | replace `public/images/portrait.svg` (or add `portrait.jpg` and update `Hero.tsx` / `About.tsx`) |
| Project visuals | add files to `public/images/` and set `image` in `projects.ts` |
| CV / reports | drop `cv.pdf` into `public/documents/` |
| Share image | replace `public/images/og.png` (1200x630) |
| Favicon | replace `public/favicon.ico` |
| Custom display font | put font files in `public/fonts/` and load with `next/font/local` in `layout.tsx` |

## Structure

```
src/app/          page.tsx, layout.tsx, globals.css
src/components/   Navbar, Hero, Marquee, Telemetry, Projects, About, Contact, Footer, Cursor, Reveal
src/data/         site.ts, projects.ts
public/           images/, documents/, fonts/, favicon.ico
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com). No configuration needed.

Before you deploy, set `metadataBase` in `src/app/layout.tsx` to your real domain so the share image resolves.