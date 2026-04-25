import toyota from "@/data/cars/toyota.json";
import honda from "@/data/cars/honda.json";
import lexus from "@/data/cars/lexus.json";
import bmw from "@/data/cars/bmw.json";
import mercedes from "@/data/cars/mercedes.json";

export const allCars = [...toyota, ...honda, ...lexus, ...bmw, ...mercedes];

export function getCarBySlug(slug) {
  return allCars.find((c) => c.slug === slug) || null;
}

export function getRelatedCars(car, limit = 4) {
  return allCars
    .filter((c) => c.slug !== car.slug && (c.brand === car.brand || c.type === car.type))
    .slice(0, limit);
}

const brandGalleries = {
  Toyota: [
    "/images/Toyota/Toyota1.avif",
    "/images/Toyota/Toyota2.avif",
    "/images/Toyota/Toyota3.avif",
    "/images/Toyota/Toyota4.avif",
    "/images/Toyota/Toyota5.avif",
  ],
  Honda: [
    "/images/honda/honda1.avif",
    "/images/honda/honda2.avif",
    "/images/honda/honda3.avif",
    "/images/honda/honda4.avif",
    "/images/honda/honda5.avif",
  ],
  BMW: [
    "/images/bmw/bmw1.avif",
    "/images/bmw/bmw2.avif",
    "/images/bmw/bmw3.avif",
    "/images/bmw/bmw4.avif",
    "/images/bmw/bmw5.avif",
  ],
  Mercedes: [
    "/images/mercedes/Mercedes1.avif",
    "/images/mercedes/Mercedes2.avif",
    "/images/mercedes/mercedes3.avif",
    "/images/mercedes/mercedes4.avif",
    "/images/mercedes/mercedes5.avif",
  ],
  Lexus: [
    "/images/lexus/lexus1.avif",
    "/images/lexus/lexus2.avif",
    "/images/lexus/lexus3.avif",
    "/images/lexus/lexus4.avif",
    "/images/lexus/lexus5.avif",
  ],
};

export function getGalleryImages(brand, primaryImage) {
  const pool = brandGalleries[brand] || [];
  const extras = pool.filter((img) => img !== primaryImage).slice(0, 4);
  return [primaryImage, ...extras];
}

export const BRANDS = ["ALL", "Toyota", "Mercedes", "Lexus", "BMW", "Honda"];
export const FUEL_TYPES = ["All", "Petrol", "Diesel", "Hybrid"];
export const TYPES = ["All", "SUV", "Sedan", "Hatchback", "Truck"];
export const TRANSMISSIONS = ["All", "Automatic", "Manual"];

export const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Mileage: Low to High", value: "mileage_asc" },
];
