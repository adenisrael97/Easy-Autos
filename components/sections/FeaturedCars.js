import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CarCard from "@/components/cards/CarCard";
import { allCars } from "@/lib/cars";

const featured = allCars.filter((_, i) => i % 6 === 0).slice(0, 8);

export default function FeaturedCars() {
  return (
    <section className="w-full bg-page py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
              Handpicked for You
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg leading-tight">
              Featured Vehicles
            </h2>
            <p className="text-soft text-sm sm:text-base mt-2 max-w-md">
              Discover our curated selection — top-rated, thoroughly inspected, and ready to drive home.
            </p>
          </div>
          <Link
            href="/Inventory"
            className="group flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-hover transition-colors shrink-0"
          >
            View All Inventory
            <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featured.map((car, i) => (
            <CarCard key={car.id + car.brand} car={car} priority={i < 4} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/Inventory"
            className="group inline-flex items-center gap-2 px-7 py-3 bg-accent text-on-accent font-bold text-sm rounded-full border border-accent hover:bg-accent-hover hover:scale-105 active:scale-100 transition-all duration-200 shadow-card"
          >
            Browse All {allCars.length}+ Vehicles
            <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
