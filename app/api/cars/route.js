import { NextResponse } from "next/server";
import { getCars } from "@/services/carService";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const filters = {
    search: searchParams.get("search") || "",
    brand: searchParams.get("brand") || "ALL",
    fuelType: searchParams.get("fuelType") || "All",
    type: searchParams.get("type") || "All",
    transmission: searchParams.get("transmission") || "All",
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : Infinity,
    maxMileage: searchParams.get("maxMileage") ? Number(searchParams.get("maxMileage")) : Infinity,
    sort: searchParams.get("sort") || "newest",
    page: Number(searchParams.get("page") || 1),
    limit: Number(searchParams.get("limit") || 9),
    savedSlugs: searchParams.get("saved") ? searchParams.get("saved").split(",") : [],
    savedOnly: searchParams.get("savedOnly") === "true",
  };

  const result = getCars(filters);
  return NextResponse.json(result);
}
