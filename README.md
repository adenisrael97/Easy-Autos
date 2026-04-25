# Easy Autos — Premium Automotive Marketplace

A production-ready automotive marketplace built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**. Designed with a modern dark-theme UI, mobile-first responsiveness, and a scalable component architecture.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Features](#features)
- [Pages](#pages)
- [Component Architecture](#component-architecture)
- [Data Layer](#data-layer)
- [Environment & Configuration](#environment--configuration)
- [Scripts](#scripts)
- [Contributing](#contributing)

---

## Overview

**Easy Autos** is a frontend-only automotive marketplace showcasing 75+ premium vehicles across five brands (Toyota, Mercedes-Benz, Lexus, BMW, Honda). It demonstrates a real-world Next.js App Router implementation with static JSON data, dynamic routing, advanced filtering, and polished UI animations.

Key highlights:
- Zero backend — all data is static JSON, no database required
- Dynamic car detail pages (`/Inventory/[slug]`) with full spec sheets
- Client-side search, filtering, and sorting on the inventory page
- Fully responsive across mobile, tablet, and desktop
- SEO-ready metadata on all pages
- Reusable component system with consistent design tokens

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | JavaScript (ES2022+) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion v12](https://www.framer.com/motion/) |
| Icons | [React Icons v5](https://react-icons.github.io/react-icons/) |
| Images | Next.js `Image` component (auto-optimised) |
| Data | Static JSON files (no ORM, no DB) |
| Linting | ESLint with `eslint-config-next` |
| Node | v18+ (v20 LTS recommended) |

---

## Project Structure

```
easy-autos/
├── app/                        # Next.js App Router
│   ├── layout.js               # Root layout (Navbar + Footer)
│   ├── page.js                 # Home page
│   ├── about/page.js
│   ├── blog/page.js
│   ├── contact/page.js
│   ├── financing/page.js
│   ├── Inventory/
│   │   ├── page.js             # Inventory listing with filters
│   │   └── [slug]/page.js      # Car detail page (dynamic route)
│   ├── sell-trade/page.js
│   ├── service/page.js
│   └── globals.css             # Global styles + Tailwind base
│
├── components/
│   ├── ui/                     # Primitive UI components
│   │   ├── Button.js           # Multi-variant button (primary, outline, ghost…)
│   │   ├── Badge.js            # Status/label badge
│   │   └── SkeletonCard.js     # Loading skeleton
│   ├── cards/
│   │   └── CarCard.js          # Car listing card
│   ├── layout/
│   │   ├── Navbar.js           # Sticky responsive navbar
│   │   └── Footer.js           # Site-wide footer
│   ├── sections/               # Landing page sections
│   │   ├── Hero.js             # Multi-slide hero carousel
│   │   ├── StatsBar.js         # Stats counter bar
│   │   ├── FeaturedCars.js     # Featured listings grid
│   │   ├── Services.js         # Services showcase
│   │   ├── AboutUs.js          # About section with timeline
│   │   ├── Testimonials.js     # Animated testimonials
│   │   └── ContactSection.js   # Contact form + info cards
│   ├── Inventory/
│   │   └── InventoryClient.js  # Search, filters, sort, pagination
│   ├── About/
│   ├── Blog/
│   ├── Contact/
│   ├── Financing/
│   ├── SellTrade/
│   └── Service/
│
├── lib/
│   └── cars.js                 # Data utilities (getCarBySlug, getRelatedCars…)
│
├── data/
│   └── cars/                   # Static JSON inventory
│       ├── toyota.json
│       ├── mercedes.json
│       ├── lexus.json
│       ├── bmw.json
│       └── honda.json
│
├── public/
│   └── images/                 # Car images (organised by brand)
│       ├── Toyota/
│       ├── Mercedes/
│       ├── Lexus/
│       ├── BMW/
│       └── Honda/
│
├── generateSlugs.js            # CLI — regenerates slugs in JSON files
├── next.config.mjs
├── jsconfig.json               # Path alias: @/ → project root
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd easy-autos

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Features

### Inventory & Search
- **Full-text search** across car name, brand, and type
- **Brand filter pills** — ALL / Toyota / Mercedes / Lexus / BMW / Honda
- **Advanced filters** — fuel type, vehicle type, max price, max mileage
- **Sort options** — Newest, Price Low→High, Price High→Low, Mileage
- **Smart pagination** with ellipsis for large result sets
- **Empty state** with one-click filter reset

### Car Detail Page
- **Image gallery** — animated main view with thumbnail strip and counter badge
- **Full specification grid** — body type, year, fuel, transmission, mileage, condition
- **Feature tags** — air conditioning, leather seats, sunroof, and more
- **Seller contact card** (sticky on desktop) — Call / WhatsApp / Email tabs
- **Pricing breakdown** — vehicle price + documentation + registration = total
- **Trust badges** — inspection, certification, warranty, support
- **Related vehicles** — up to 4 cars from the same brand
- **Sticky mobile CTA bar** — fixed bottom bar for quick seller contact

### UI & Experience
- Dark theme design system (`gray-950` / `gray-900` backgrounds, `yellow-400` accents)
- Framer Motion page-level and component-level animations
- Hover micro-interactions on all interactive elements
- Skeleton loaders during data resolution
- Mobile-first responsive layout across all pages
- Accessible HTML with semantic elements and `aria-label` attributes

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Stats, Featured Cars, Services, About, Testimonials, Contact |
| `/Inventory` | Full inventory with search, filters, sorting, and pagination |
| `/Inventory/[slug]` | Individual car detail page |
| `/about` | Company story, values, team highlights |
| `/contact` | Contact form, location map, business info |
| `/financing` | Finance options and application form |
| `/sell-trade` | Sell or trade-in your vehicle |
| `/service` | Maintenance and service offerings |
| `/blog` | Editorial / news content |

---

## Component Architecture

### Primitive Layer (`components/ui/`)

```jsx
// Button — all supported variants
<Button variant="primary" size="lg" loading={false} icon={<FaPhone />}>
  Call Now
</Button>

// variants: primary | secondary | outline | ghost | white | danger | success
// sizes:    xs | sm | md | lg | xl
```

```jsx
// Badge — status labels
<Badge variant="success">Available</Badge>
// variants: default | primary | success | danger | info | neutral
```

### CarCard (`components/cards/CarCard.js`)

```jsx
<CarCard car={carObject} priority={true} />
```

Expects a `car` object from the JSON data files. Renders image, brand, name, fuel type, transmission, mileage, price, and a "View Details" link.

### Layout (`components/layout/`)

`Navbar.js` and `Footer.js` are imported once in `app/layout.js` and rendered on every page. The Navbar is sticky, scroll-aware, and includes an animated mobile drawer.

---

## Data Layer

All inventory data lives in `data/cars/*.json`. Each car object follows this shape:

```json
{
  "id": 1,
  "slug": "2023-toyota-camry-se",
  "name": "Camry SE",
  "brand": "Toyota",
  "year": 2023,
  "price": 18500000,
  "mileage": 12000,
  "fuelType": "Petrol",
  "transmission": "Automatic",
  "type": "Sedan",
  "condition": "Used",
  "location": "Lagos",
  "image": "/images/Toyota/Toyota1.avif",
  "features": ["Air Conditioning", "Leather Seats", "Cruise Control"]
}
```

### Utility functions (`lib/cars.js`)

| Function | Description |
|---|---|
| `allCars` | Merged array of all 75+ cars |
| `getCarBySlug(slug)` | Returns a single car by its slug |
| `getRelatedCars(brand, currentSlug, limit)` | Returns N cars from the same brand |
| `getGalleryImages(brand, primaryImage)` | Returns up to 5 images for the detail gallery |

### Adding a new car

1. Open the relevant JSON file in `data/cars/`
2. Add the car object (without `slug`)
3. Run the slug generator:
   ```bash
   node generateSlugs.js
   ```
4. The slug is automatically inserted based on `year`, `brand`, and `name`

### Adding a new brand

1. Create `data/cars/<brand>.json`
2. Add the brand's images to `public/images/<Brand>/`
3. Import the JSON in `lib/cars.js` and merge it into `allCars`

---

## Environment & Configuration

No `.env` file is required — the project has no external API keys or secrets.

### Path alias

`@/` maps to the project root (configured in `jsconfig.json`):

```js
import Button from "@/components/ui/Button";
import { getCarBySlug } from "@/lib/cars";
```

### Tailwind CSS v4

This project uses Tailwind v4's CSS-first configuration. The base import is in `app/globals.css`:

```css
@import "tailwindcss";
```

Tailwind v4 scans files automatically — no `content` array configuration required.

---

## Scripts

```bash
npm run dev            # Start development server (http://localhost:3000)
npm run build          # Create an optimised production build
npm run start          # Serve the production build locally
npm run lint           # Run ESLint across the project
node generateSlugs.js  # Regenerate slugs in all car JSON files
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes following conventional commits: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow the existing code style — JavaScript (not TypeScript), Tailwind-only styling, no CSS-in-JS, and semantic HTML with `aria-*` attributes on interactive elements.

---

## License

This project is for portfolio and demonstration purposes.

---

**Built by Adeniran Israel.**
