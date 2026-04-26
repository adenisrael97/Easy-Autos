import {
  allCars,
  brandGalleries,
  BRANDS,
  FUEL_TYPES,
  TYPES,
  TRANSMISSIONS,
  SORT_OPTIONS,
} from "@/data/cars";

export { BRANDS, FUEL_TYPES, TYPES, TRANSMISSIONS, SORT_OPTIONS };

const CARS_PER_PAGE = 9;

export function getCars({
  search = "",
  brand = "ALL",
  fuelType = "All",
  type = "All",
  transmission = "All",
  maxPrice = Infinity,
  maxMileage = Infinity,
  sort = "newest",
  page = 1,
  limit = CARS_PER_PAGE,
  savedSlugs = [],
  savedOnly = false,
} = {}) {
  const q = search.toLowerCase().trim();

  let results = allCars.filter((car) => {
    if (savedOnly && !savedSlugs.includes(car.slug)) return false;
    if (q && !`${car.brand} ${car.model} ${car.type}`.toLowerCase().includes(q)) return false;
    if (brand !== "ALL" && car.brand !== brand) return false;
    if (fuelType !== "All" && car.fuelType !== fuelType) return false;
    if (type !== "All" && car.type !== type) return false;
    if (transmission !== "All" && car.transmission !== transmission) return false;
    if (car.price > maxPrice) return false;
    if (car.mileage > maxMileage) return false;
    return true;
  });

  switch (sort) {
    case "price_asc":
      results = [...results].sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      results = [...results].sort((a, b) => b.price - a.price);
      break;
    case "mileage_asc":
      results = [...results].sort((a, b) => a.mileage - b.mileage);
      break;
    default:
      results = [...results].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }

  const total = results.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const cars = results.slice((safePage - 1) * limit, safePage * limit);

  return { cars, total, totalPages, page: safePage };
}

export function getCarBySlug(slug) {
  return allCars.find((c) => c.slug === slug) || null;
}

export function getFeaturedCars(limit = 8) {
  return allCars.slice(0, limit);
}

export function getRelatedCars(car, limit = 4) {
  return allCars
    .filter((c) => c.slug !== car.slug && (c.brand === car.brand || c.type === car.type))
    .slice(0, limit);
}

export function getGalleryImages(brand, primaryImage) {
  const pool = brandGalleries[brand] || [];
  const extras = pool.filter((img) => img !== primaryImage).slice(0, 4);
  return [primaryImage, ...extras];
}
