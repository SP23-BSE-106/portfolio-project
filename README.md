# Portfolio Project

A personal portfolio website built with Next.js and React. It showcases featured projects, services, and contact information using a modern, responsive layout.

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS (v4)

## Features

- Hero, About, Services, Projects, and Contact sections
- Reusable components: Navbar and Footer
- Project cards with skills and links
- Service cards for Web Development, App Development, Digital Marketing, and Email Marketing

## Repo structure (key files)

- [src/app](src/app) — Next.js app directory
- [src/app/page.tsx](src/app/page.tsx) — Main page
- [src/app/globals.css](src/app/globals.css) — Global styles
- [src/app/components/sections/Services.tsx](src/app/components/sections/Services.tsx) — Services cards (updated text)
- [src/app/components/sections/Projects.tsx](src/app/components/sections/Projects.tsx) — Project cards
- [public/images](public/images) — Image assets

## Getting started

Prerequisites: Node.js (recommended v18+)

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Build for production and run:

```bash
npm run build
npm start
```

If you change component text and still see old content, clear the Next.js cache by rebuilding:

```bash
npm run build
npm start
```

## Editing content

- Update service descriptions in [src/app/components/sections/Services.tsx](src/app/components/sections/Services.tsx).
- Update the featured projects in [src/app/components/sections/Projects.tsx](src/app/components/sections/Projects.tsx).

## Notes

- This project was scaffolded for a portfolio demo. Adjust styles or add components as needed.

## Backend & database (contact form)

This project includes a simple backend API route to accept contact form submissions and store them in MongoDB.

- API endpoint: `POST /api/contact` — accepts JSON { name, email, message } and stores it in the `contacts` collection.
- API endpoint: `GET /api/contact` — returns recent contact messages (admin use).

Setup:

1. Create an environment file at `.env.local` (do not commit it) using `.env.example` as a template.
2. Set `MONGODB_URI` to your MongoDB connection string and `MONGODB_DB` to the database name.
3. Install dependencies and run the app locally:

```bash
npm install
npm run dev
```

Deployment:

- On Vercel, set the `MONGODB_URI` and `MONGODB_DB` environment variables in the project settings. The API routes will run server-side and connect to your MongoDB instance.

Security note: for production, secure your endpoints (rate-limit, captcha, or require an API key) before exposing GET results publicly.

## License

MIT — feel free to adapt for personal use.
