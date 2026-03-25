"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import toyota from '@/data/cars/toyota.json';
import honda from '@/data/cars/honda.json';
import lexus from '@/data/cars/lexus.json';
import bmw from '@/data/cars/bmw.json';
import mercedes from '@/data/cars/mercedes.json';

const allCars = [...toyota, ...honda, ...lexus, ...bmw, ...mercedes];

export default function CarDetailPage() {
  const { slug } = useParams();

  const car = allCars.find((c) => c.slug === slug);

  if (!car) {
    return (
      <div className="text-white text-center py-20">
        <h1 className="text-2xl font-bold mb-4">Car not found!</h1>
        <Link
          href="/Inventory"
          className="px-4 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Back to Inventory
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-3 sm:p-6 text-white">
      <div className="mb-6">
        <Link
          href="/Inventory"
          className="px-4 py-2 bg-gray-700 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
        >
          &larr; Back to Inventory
        </Link>
      </div>

      <h1 className="text-2xl sm:text-4xl font-bold mb-4">
        {car.brand} {car.name} ({car.model})
      </h1>

      <div className="w-full mb-6">
        <Image
          src={car.image}
          alt={car.name}
          width={800}
          height={400}
          className="rounded-2xl object-cover w-full h-auto max-h-75 sm:max-h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-200">
        <p><span className="font-semibold text-yellow-400">Type:</span> {car.type}</p>
        <p><span className="font-semibold text-yellow-400">Fuel:</span> {car.fuelType}</p>
        <p><span className="font-semibold text-yellow-400">Transmission:</span> {car.transmission}</p>
        <p><span className="font-semibold text-yellow-400">Mileage:</span> {car.mileage.toLocaleString()} km</p>
      </div>

      <div className="text-3xl font-bold text-yellow-400 mb-6">
        Price: ₦{car.price.toLocaleString()}
      </div>

      <div className="mt-4">
        <Link
          href="/Inventory"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow hover:scale-105 transition-transform"
        >
          Browse More Cars
        </Link>
      </div>
    </div>
  );
}