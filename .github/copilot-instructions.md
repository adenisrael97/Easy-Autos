
# Copilot Instructions for Easy Autos (Next.js Car Inventory)

## Essential Guidance for AI Agents

- **Framework:** Next.js (App Router), Tailwind CSS only for styling.
- **Component Structure:** All UI is in `components/`, grouped by feature. Follow naming and folder conventions.
- **Data:** Static JSON files per brand in `data/cars/`. Each car must have a unique `slug` (see `generateSlugs.js`).
- **Images:** Served from `public/images/{brand}/`. Filenames must match references in JSON.
- **Routing:** File-based, dynamic for `/Inventory/[slug]`.
- **Imports:** Use `@/` alias for root-relative imports (see `jsconfig.json`).
- **Styling:** Tailwind only. Use responsive classes (`min-h-75`, `md:min-h-125`, etc.) for mobile support. No CSS-in-JS.
- **Global Styles:** Only in `app/globals.css`.
- **Map Component:** For mobile responsiveness, use Tailwind's min-h/h classes and flex layout. See `components/Contact/Map.js` for example.
- **Inventory Listing:** All cars are merged from all brand JSONs in `HeroInventory.js`. Filtering/search is client-side.
- **Car Details:** `/Inventory/[slug]/page.js` finds a car by `slug` from all JSONs. If not found, show a friendly error and link back.
- **No API routes:** All data is static and loaded from JSON. No server-side DB.
- **Dynamic Routing:** Car detail pages from slugs in data files.
- **ESLint:** Uses Next.js config, ignores build outputs.

## Developer Workflows
- **Start Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Generate Slugs:** `node generateSlugs.js` (after editing car data)

## Examples & Patterns
- To add a car: Edit the brand JSON in `data/cars/`, then run `node generateSlugs.js`.
- To add a brand: Add a JSON file, update imports in `HeroInventory.js` and `[slug]/page.js`.
- For responsive UI: Use Tailwind's mobile-first classes. See `components/Contact/Map.js` for responsive map.

---
For more, see `README.md` and config files. If in doubt, follow patterns in `components/Inventory/HeroInventory.js` and `app/Inventory/[slug]/page.js`.

## Project Overview
- **Framework:** Next.js (App Router)
- **UI:** Tailwind CSS, custom components in `components/`
- **Data:** Static JSON files per brand in `data/cars/`
- **Images:** Served from `public/images/{brand}/`
- **Routing:** File-based, dynamic for `/Inventory/[slug]`

## Key Patterns & Conventions
- **Car Data:**
  - Each car is an object in a brand JSON file (e.g., `toyota.json`).
  - Each car must have a unique `slug` (see `generateSlugs.js`).
  - Car images use `/images/{brand}/{filename}`.
- **Inventory Listing:**
  - All cars are merged from all brand JSONs in `HeroInventory.js`.
  - Filtering/search is client-side.
- **Car Details:**
  - `/Inventory/[slug]/page.js` finds a car by `slug` from all JSONs.
  - If not found, show a friendly error and link back.
- **Component Imports:** Use `@/` alias for root-relative imports (see `jsconfig.json`).
- **Styling:** Tailwind only. No CSS-in-JS. Global styles in `app/globals.css`.

## Developer Workflows
- **Start Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Generate Slugs:** `node generateSlugs.js` (after editing car data)

## Project Structure
- `app/` — Next.js app directory (pages, layouts, routes)
- `components/` — Reusable UI components, grouped by feature
- `data/cars/` — Static car data, one file per brand
- `public/images/` — Car images, organized by brand

## Notable Details
- **No API routes**: All data is static and loaded from JSON.
- **No server-side DB**: Inventory is versioned JSON files.
- **Dynamic Routing**: Car detail pages from slugs in data files.
- **ESLint**: Uses Next.js config, ignores build outputs.

## Examples
- To add a car: Edit the brand JSON in `data/cars/`, then run `node generateSlugs.js`.
- To add a brand: Add a JSON file, update imports in `HeroInventory.js` and `[slug]/page.js`.

---
For more, see `README.md` and config files. If in doubt, follow patterns in `components/Inventory/HeroInventory.js` and `app/Inventory/[slug]/page.js`.
