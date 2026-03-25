"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaFilter } from "react-icons/fa";

// Import all car JSON files
import toyota from "@/data/cars/toyota.json";
import honda from "@/data/cars/honda.json";
import lexus from "@/data/cars/lexus.json";
import bmw from "@/data/cars/bmw.json";
import mercedes from "@/data/cars/mercedes.json";

// Merge all cars into a single array
const allCars = [...toyota, ...honda, ...lexus, ...bmw, ...mercedes];

const brands = ["ALL", "Toyota", "Mercedes", "Lexus", "BMW", "Honda"];
const fuelTypes = ["All", "Petrol", "Diesel"];
const CARS_PER_PAGE = 12;

export default function HeroInventory() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("ALL");
  const [fuelType, setFuelType] = useState("All");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter cars using useMemo for performance
  const filteredCars = useMemo(() => {
    return allCars.filter((car) => {
      const searchVal = search.trim().toLowerCase();
      const matchesSearch =
        !searchVal ||
        car.name.toLowerCase().includes(searchVal) ||
        car.model.toLowerCase().includes(searchVal);

      const matchesBrand =
        brand.toLowerCase() === "all" || car.brand.toLowerCase() === brand.toLowerCase();

      const matchesFuel =
        fuelType.toLowerCase() === "all" || car.fuelType.toLowerCase() === fuelType.toLowerCase();

      const matchesPrice = !price || parseInt(car.price) <= parseInt(price);
      const matchesMileage = !mileage || parseInt(car.mileage) <= parseInt(mileage);

      return matchesSearch && matchesBrand && matchesFuel && matchesPrice && matchesMileage;
    });
  }, [search, brand, fuelType, price, mileage]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCars.length / CARS_PER_PAGE);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * CARS_PER_PAGE,
    currentPage * CARS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-10 px-4 bg-black">
      {/* Title */}
      <div className="max-w-3xl w-full text-center mb-8">
        <p className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Our Inventory</p>
        <p className="text-gray-300 text-base md:text-lg mb-4">
          Explore our curated selection of premium vehicles. Find your dream car among our Toyota,
          Mercedes, Lexus, BMW, and Honda collections.
        </p>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-xl flex items-center bg-gray-800 rounded-full px-4 py-2 mb-4 shadow-md">
        <FaSearch className="text-yellow-400 mr-2" />
        <input
          type="text"
          placeholder="Search by name or model..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Brand Buttons */}
      <div className="flex flex-wrap gap-3 mb-4 justify-center">
        {brands.map((b) => (
          <button
            key={b}
            onClick={() => setBrand(b)}
            className={`px-4 py-1.5 rounded-full border font-semibold text-sm transition-all duration-200 ${
              brand.toLowerCase() === b.toLowerCase()
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-gray-800 text-gray-200 border-gray-700 hover:bg-yellow-400 hover:text-black hover:border-yellow-400"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      {/* Advanced Filters */}
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center shadow-md">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <FaFilter className="text-yellow-400" />
          <span className="text-gray-200 font-semibold">Filter:</span>
        </div>
        <input
          type="number"
          placeholder="Max Price (₦)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="flex-1 md:flex-none bg-gray-900 text-white rounded px-3 py-2 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="number"
          placeholder="Max Mileage (km)"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          className="flex-1 md:flex-none bg-gray-900 text-white rounded px-3 py-2 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="flex-1 md:flex-none bg-gray-900 text-white rounded px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          {fuelTypes.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {/* Car Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedCars.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-10">No cars found.</div>
        ) : (
          paginatedCars.map((car) => (
            <div
              key={car.id + car.brand}
              className="bg-gray-900 rounded-2xl shadow-xl border border-gray-700 flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={car.image}
                alt={car.name}
                width={400}
                height={180}
                className="w-full h-40 object-cover rounded-t-2xl"
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
                priority={paginatedCars.indexOf(car) < 4}
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-yellow-400 mb-1">
                  {car.brand} {car.name}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-white mb-2">
                  <span className="bg-gray-800 px-2 py-1 rounded">{car.type}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{car.fuelType}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{car.transmission}</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">{car.mileage.toLocaleString()} km</span>
                </div>
                <div className="text-xl font-bold text-yellow-400 mb-3">
                  ₦{car.price.toLocaleString()}
                </div>
                <Link
                  href={`/Inventory/${car.slug}`}
                  className="mt-auto inline-block px-4 py-2 rounded-full bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-semibold shadow hover:scale-105 transition-transform duration-200 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-3 mt-12 flex-wrap justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-1.5 rounded-full border font-semibold text-sm transition-all duration-200  mt-10 ${
                currentPage === i + 1
                  ? "bg-yellow-400 text-black border-yellow-400"
                  : "bg-gray-800 text-gray-200 border-gray-700 hover:bg-yellow-400 hover:text-black hover:border-yellow-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}