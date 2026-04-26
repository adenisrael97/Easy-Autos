import { NextResponse } from "next/server";
import { getCarBySlug, getRelatedCars, getGalleryImages } from "@/services/carService";

export async function GET(request, { params }) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return NextResponse.json({ message: "Car not found" }, { status: 404 });

  const related = getRelatedCars(car, 4);
  const gallery = getGalleryImages(car.brand, car.image);

  return NextResponse.json({ car, related, gallery });
}
