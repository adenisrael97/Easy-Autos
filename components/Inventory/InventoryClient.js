"use client";

import { useState } from "react";
import { FaSearch, FaTimes, FaSlidersH, FaSort, FaHeart } from "react-icons/fa";
import CarCard from "@/components/cards/CarCard";
import Button from "@/components/ui/Button";
import { BRANDS, FUEL_TYPES, TYPES, TRANSMISSIONS, SORT_OPTIONS } from "@/data/cars";
import { useSavedCars } from "@/hooks/useSavedCars";
import { useCarFilters } from "@/hooks/useCarFilters";
import { allCars } from "@/data/cars";

const totalInventory = allCars.length;

export default function InventoryClient() {
  const [showFilters, setShowFilters] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const { saved, count: savedCount } = useSavedCars();

  const {
    filters,
    setFilter,
    resetFilters,
    hasActiveFilters,
    cars,
    total,
    loading,
    page,
    setPage,
    totalPages,
  } = useCarFilters(saved, showSaved);

  const handleReset = () => {
    resetFilters();
    setShowSaved(false);
  };

  const goToPage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeHasFilters = hasActiveFilters || showSaved;

  return (
    <div className="w-full">
      {/* Page header */}
      <div className="bg-mesh border-b border-line py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            Easy Autos Inventory
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-fg mb-3">
            Browse Our Vehicles
          </h1>
          <p className="text-soft text-sm sm:text-base max-w-lg mx-auto">
            Explore {totalInventory}+ premium vehicles across Toyota, Mercedes, Lexus, BMW, and Honda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Search bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-faint text-sm pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, brand, or model..."
              value={filters.search}
              onChange={(e) => setFilter("search", e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface text-fg text-sm rounded-xl border border-line placeholder-faint focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
            {filters.search && (
              <button
                onClick={() => setFilter("search", "")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-faint hover:text-fg transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <FaTimes className="text-sm" />
              </button>
            )}
          </div>

          <div className="relative">
            <FaSort className="absolute left-3 top-1/2 -translate-y-1/2 text-faint text-xs pointer-events-none" />
            <select
              value={filters.sort}
              onChange={(e) => setFilter("sort", e.target.value)}
              className="pl-8 pr-4 py-3 bg-surface text-fg text-sm rounded-xl border border-line focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setShowFilters((v) => !v)}
            className={`sm:hidden flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
              showFilters || activeHasFilters
                ? "bg-accent text-on-accent border-accent"
                : "bg-surface text-soft border-line hover:border-accent/40"
            }`}
          >
            <FaSlidersH className="text-sm" />
            Filters
            {activeHasFilters && <span className="w-2 h-2 bg-on-accent rounded-full" />}
          </button>
        </div>

        {/* Brand pills */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => setFilter("brand", b)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                filters.brand === b
                  ? "bg-accent text-on-accent border-accent shadow-soft"
                  : "bg-surface text-soft border-line hover:border-accent/40 hover:text-accent"
              }`}
            >
              {b}
            </button>
          ))}

          {/* Saved-only toggle */}
          <button
            onClick={() => setShowSaved((v) => !v)}
            disabled={savedCount === 0}
            className={`ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              showSaved
                ? "bg-bad text-white border-bad"
                : "bg-surface text-soft border-line hover:border-bad/40 hover:text-bad"
            }`}
            aria-pressed={showSaved}
          >
            <FaHeart className="text-xs" />
            Saved ({savedCount})
          </button>
        </div>

        {/* Advanced filters */}
        <div className={`${showFilters ? "block" : "hidden sm:block"} mb-6`}>
          <div className="bg-surface rounded-2xl border border-line p-4 shadow-soft">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <FilterField label="Fuel Type">
                <select
                  value={filters.fuelType}
                  onChange={(e) => setFilter("fuelType", e.target.value)}
                  className="filter-input"
                >
                  {FUEL_TYPES.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </FilterField>
              <FilterField label="Vehicle Type">
                <select
                  value={filters.type}
                  onChange={(e) => setFilter("type", e.target.value)}
                  className="filter-input"
                >
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </FilterField>
              <FilterField label="Transmission">
                <select
                  value={filters.transmission}
                  onChange={(e) => setFilter("transmission", e.target.value)}
                  className="filter-input"
                >
                  {TRANSMISSIONS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </FilterField>
              <FilterField label="Max Price (₦)">
                <input
                  type="number"
                  placeholder="e.g. 30000000"
                  value={filters.maxPrice}
                  onChange={(e) => setFilter("maxPrice", e.target.value)}
                  className="filter-input"
                />
              </FilterField>
              <FilterField label="Max Mileage (km)">
                <input
                  type="number"
                  placeholder="e.g. 20000"
                  value={filters.maxMileage}
                  onChange={(e) => setFilter("maxMileage", e.target.value)}
                  className="filter-input"
                />
              </FilterField>
            </div>

            {activeHasFilters && (
              <div className="mt-3 pt-3 border-t border-line flex justify-end">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs text-faint hover:text-bad transition-colors cursor-pointer"
                >
                  <FaTimes />
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Results summary */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-soft">
            {loading ? (
              <span className="text-faint">Loading...</span>
            ) : (
              <>
                <span className="text-fg font-semibold">{total}</span> vehicles found
                {activeHasFilters && (
                  <button
                    onClick={handleReset}
                    className="ml-3 text-xs text-bad hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    (clear filters)
                  </button>
                )}
              </>
            )}
          </p>
          <p className="text-xs text-faint">
            Page {page} of {totalPages || 1}
          </p>
        </div>

        {/* Car grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-surface rounded-2xl border border-line h-80 animate-pulse" />
            ))}
          </div>
        ) : total === 0 ? (
          <EmptyState onReset={handleReset} savedFilter={showSaved} />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cars.map((car, i) => (
                <CarCard key={`${car.id}-${car.brand}`} car={car} priority={i < 4} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12 flex-wrap">
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-xl bg-surface border border-line text-sm text-soft hover:border-accent/40 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  &larr; Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                  .reduce((acc, p, i, arr) => {
                    if (i > 0 && p - arr[i - 1] > 1) acc.push("...");
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((item, i) =>
                    item === "..." ? (
                      <span key={`dot-${i}`} className="px-2 text-faint text-sm">…</span>
                    ) : (
                      <button
                        key={item}
                        onClick={() => goToPage(item)}
                        className={`w-9 h-9 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                          page === item
                            ? "bg-accent text-on-accent border-accent shadow-soft"
                            : "bg-surface text-soft border-line hover:border-accent/40 hover:text-accent"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}

                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-xl bg-surface border border-line text-sm text-soft hover:border-accent/40 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                >
                  Next &rarr;
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function FilterField({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-faint font-medium">{label}</label>
      {children}
    </div>
  );
}

function EmptyState({ onReset, savedFilter }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="w-16 h-16 rounded-2xl bg-surface border border-line flex items-center justify-center">
        {savedFilter ? (
          <FaHeart className="text-2xl text-faint" />
        ) : (
          <FaSearch className="text-2xl text-faint" />
        )}
      </div>
      <h3 className="text-fg font-bold text-lg">
        {savedFilter ? "No saved cars yet" : "No vehicles found"}
      </h3>
      <p className="text-soft text-sm text-center max-w-xs">
        {savedFilter
          ? "Tap the heart on any car to save it for later."
          : "Try adjusting your filters or search terms to find the vehicle you're looking for."}
      </p>
      <Button variant="outline" size="sm" onClick={onReset}>
        Clear All Filters
      </Button>
    </div>
  );
}
