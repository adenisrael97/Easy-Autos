# Easy Autos — Premium Automotive Marketplace

A production-ready automotive marketplace built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Designed with a modern dark-theme UI, mobile-first responsiveness, and a clean senior-level architecture with full separation of concerns.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router, JavaScript) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`) |
| Animations | Framer Motion |
| Icons | React Icons + Heroicons |
| State | React hooks (useState, useReducer, useCallback) |
| Data | Static JSON mock data + service layer |

---

## Project Structure

```
easy-autos/
├── app/
│   ├── api/
│   │   ├── cars/route.js         # GET — filter/paginate cars
│   │   ├── cars/[slug]/route.js  # GET — single car + related + gallery
│   │   ├── contact/route.js      # POST — contact form submission
│   │   └── blog/route.js         # GET — blog posts with filters
│   ├── Inventory/
│   │   ├── page.js
│   │   └── [slug]/page.js        # Car detail page
│   ├── about/, blog/, contact/
│   ├── financing/, sell-trade/
│   ├── service/
│   ├── layout.js
│   └── globals.css
│
├── components/
│   ├── cards/        CarCard, FeatureCard
│   ├── layout/       Navbar, Footer
│   ├── sections/     Hero, StatsBar, FeaturedCars, Services, AboutUs, Testimonials, ContactSection
│   ├── ui/           Button, Badge, Input
│   ├── feedback/     Toaster
│   ├── theme/        ThemeToggle
│   ├── Inventory/    InventoryClient
│   ├── About/        HeroAbout, ValueAbout
│   ├── Blog/         Blog
│   ├── SellTrade/    HeroSellTrade, WhyUs, SellTradeForm, ...
│   ├── Service/      IntroService, SummaryService
│   └── Financing/    FinanceSummary, FinancingForm
│
├── data/             ← Static mock data (no UI, no logic)
│   ├── cars/         toyota.json, honda.json, lexus.json, bmw.json, mercedes.json, index.js
│   ├── about.js, blog.js, financing.js, hero.js
│   ├── homeServices.js, navigation.js, sellTrade.js
│   ├── serviceItems.js, stats.js, testimonials.js
│
├── services/         ← Business logic / data access
│   ├── carService.js       getCars, getCarBySlug, getFeaturedCars, getRelatedCars, getGalleryImages
│   ├── contactService.js   submitContactForm, submitFinancingForm, submitSellTradeForm
│   └── blogService.js      getPosts, getPostBySlug
│
├── hooks/            ← Reusable React hooks
│   ├── useCarFilters.js    fetches /api/cars, manages filter + pagination state
│   ├── useSavedCars.js     localStorage saved cars with cross-tab sync
│   └── useContactForm.js   form state + API submission
│
└── lib/              ← Backward-compat shims (re-exports from services/hooks)
    ├── cars.js
    └── useSavedCars.js
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Apply the SWC patch (required for Node 24 + Next.js 16.1.6)
# Edit node_modules/next/dist/build/swc/options.js:
# cacheComponentsEnabled: !!isCacheComponents,
# useCacheEnabled: !!useCacheEnabled

# Start dev server
NODE_ENV=development npx next dev --webpack

# Lint
NODE_ENV=development npx next lint
```

> **Important:** Always run with `NODE_ENV=development` — the global environment may override to `production` and break HMR.

---

## Architecture: Data Flow

```
Static JSON → /data/       (raw data, constants, brand galleries)
                 ↓
           /services/      (filtering, pagination, validation logic)
                 ↓
           /app/api/       (REST-like route handlers — return JSON)
                 ↓
           /hooks/         (client-side state + fetches from API routes)
                 ↓
           /components/    (UI-only — receives data via props or hooks)
```

Server components call service functions directly (SSR). Client components use hooks.

---

## API Routes

| Endpoint | Method | Description |
|---|---|---|
| `/api/cars` | GET | Filter by brand, fuel, type, transmission, price, mileage. Supports pagination and sorting. |
| `/api/cars/[slug]` | GET | Returns `{ car, related, gallery }` or 404. |
| `/api/contact` | POST | Validates name/email/message. Returns `{ success, message }`. |
| `/api/blog` | GET | Filter posts by category and search query. Returns `{ posts, categories }`. |

### Example: Cars API

```
GET /api/cars?brand=Toyota&fuelType=Diesel&sort=price_asc&page=1&limit=9
```

Returns:
```json
{
  "cars": [...],
  "total": 12,
  "totalPages": 2,
  "page": 1
}
```

---

## Key Features

- **Inventory** — Filter by brand, fuel type, body type, transmission, price, and mileage. Saved cars filter. Pagination.
- **Car Detail** — Image gallery, full specs, related cars, sticky CTA
- **Financing Calculator** — Loan term selector, monthly estimate
- **Sell / Trade** — Multi-step form with sell and trade-in options
- **Contact** — Validated form backed by `/api/contact`
- **Blog** — Category filter + search
- **Dark / Light theme** — CSS variable-based, persisted
- **Loading skeletons** — Inventory shows shimmer cards while fetching
- **Mobile-first** — All layouts responsive from 320px up

---

## Known Bugs / Quirks

- **`next build` fails** — `TypeError: generate is not a function` in Next.js 16.1.6 with Node 24. Use dev server for verification.
- **SWC patch required** — `node_modules/next/dist/build/swc/options.js` must coerce two booleans with `!!`. Patch is lost on `npm install`.
- **NODE_ENV** — Must be explicitly set to `development` in the shell before running dev commands.
