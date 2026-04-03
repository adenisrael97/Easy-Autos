# Agape Autos

**Repository URL:** [https://github.com/adenisrael97/agape-autos](https://github.com/adenisrael97/agape-autos)

A car inventory web application built with [Next.js](https://nextjs.org) and Tailwind CSS.

## Features

- Browse car inventory with search and filter
- Detailed car listing pages with dynamic routing (`/Inventory/[slug]`)
- Pages for Financing, Service, Sell/Trade, Blog, About, and Contact
- Static JSON-based data per brand — no database required

## Project Structure

- `app/` — Next.js App Router pages and layouts
- `components/` — Reusable UI components, grouped by feature
- `data/cars/` — Static car data, one JSON file per brand
- `public/images/` — Car images, organized by brand

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Cars

1. Edit the brand JSON file in `data/cars/` (e.g., `toyota.json`).
2. Run `node generateSlugs.js` to generate unique slugs for any new entries.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `node generateSlugs.js` | Generate slugs for car data |

## Deploy on Vercel

The easiest way to deploy this app is via the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
