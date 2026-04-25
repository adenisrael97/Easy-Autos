"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGasPump, FaCog, FaTachometerAlt, FaHeart } from "react-icons/fa";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useSavedCars } from "@/lib/useSavedCars";
import { useToast } from "@/components/feedback/Toaster";

export default function CarCard({ car, priority = false }) {
  const yearCondition = car.year >= 2022 ? "New" : car.year >= 2019 ? "Used" : "Classic";
  const { isSaved, toggle } = useSavedCars();
  const saved = isSaved(car.slug);
  const { toast } = useToast();

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nowSaved = toggle(car.slug);
    toast(
      nowSaved
        ? `${car.brand} ${car.name} added to favourites.`
        : `${car.brand} ${car.name} removed from favourites.`,
      { variant: nowSaved ? "success" : "info" }
    );
  };

  return (
    <article className="group bg-surface rounded-2xl border border-line flex flex-col overflow-hidden hover:border-accent/40 hover:-translate-y-1 hover:shadow-card transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-elevated shrink-0">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={car.available ? "success" : "danger"}>
            {car.available ? "Available" : "Sold"}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="primary">{yearCondition}</Badge>
        </div>

        <button
          type="button"
          onClick={handleSave}
          aria-label={saved ? "Remove from saved" : "Save car"}
          aria-pressed={saved}
          className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-sm ${
            saved
              ? "bg-bad text-white opacity-100"
              : "bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-bad"
          }`}
        >
          <FaHeart className="text-sm" />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-xs text-faint uppercase tracking-widest font-medium">
            {car.brand} · {car.year}
          </span>
          <h3 className="text-base font-bold text-fg leading-snug mt-0.5 group-hover:text-accent transition-colors">
            {car.name}
          </h3>
          <span className="text-xs text-faint">{car.type}</span>
        </div>

        <div className="flex items-center gap-3 text-xs text-soft py-3 border-t border-b border-line my-2">
          <span className="flex items-center gap-1.5">
            <FaGasPump className="text-accent shrink-0" />
            {car.fuelType}
          </span>
          <span className="flex items-center gap-1.5">
            <FaCog className="text-accent shrink-0" />
            {car.transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <FaTachometerAlt className="text-accent shrink-0" />
            {car.mileage.toLocaleString()} km
          </span>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3">
          <div>
            <p className="text-[10px] text-faint uppercase tracking-widest">Price</p>
            <p className="text-lg font-bold text-accent tabular-nums">
              ₦{car.price.toLocaleString()}
            </p>
          </div>
          <Link href={`/Inventory/${car.slug}`}>
            <Button variant="primary" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
