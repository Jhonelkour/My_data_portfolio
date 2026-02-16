# My Data Portfolio

A personal portfolio site showcasing Data Science and Machine Learning work, built with Next.js, TypeScript and Tailwind CSS. The site includes pages for About, Certifications, Projects, Resume and Contact (with a Formspree contact form).

**Live demo:** Deploy to Vercel or your preferred host (recommended).

**Tech stack:**

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (recommended) or any Node-compatible host

**Key pages & features**

- **About** — short bio and overview
- **Certifications** — list of certificates and achievements
- **Projects** — project showcase with links and descriptions
- **Resume** — downloadable or in-page resume
- **Contact** — contact card + form that posts to Formspree

Form handling: the contact form posts to Formspree at `https://formspree.io/f/xojneleg`. To change the destination, edit `app/contact/page.tsx` and update the `action` attribute on the form.

Getting started (local)

Prerequisites:

- Node.js 16+ (Node 18+ recommended)
- `npm` (or `pnpm`/`yarn`)

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Project structure (important files)

- `app/` — Next.js app routes and pages
- `app/contact/page.tsx` — contact form and submission logic
- `app/components/` — UI components (e.g., `Nav.tsx`)
- `public/assets/` — images and static assets
- `tailwind.config.cjs` — Tailwind configuration

Deployment

1. Push the repository to GitHub.
2. Connect the repo to Vercel and deploy (automatic for Next.js projects).

Contributing

If you'd like to suggest improvements or corrections, open an issue or submit a pull request. For content edits (bio, projects, certifications), update files under `app/`.

Contact

The site includes a direct mail link in the contact section; see `app/contact/page.tsx` for the address currently used.

License

This repository does not include a license by default. Add a `LICENSE` file if you want to specify terms (MIT is common for personal portfolios).
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
