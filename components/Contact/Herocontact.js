"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/bmw/bmw2.avif",
  "/images/bmw/bmw3.avif",
  "/images/bmw/bmw4.avif",
];

export default function Herocontact() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt="Contact Hero Background"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-3 sm:px-6">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="max-w-xs sm:max-w-xl text-base sm:text-lg opacity-90">
            We’re here to help you find, finance, and trade your perfect car.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="relative z-20 max-w-xs sm:max-w-md md:max-w-xl mx-auto mt-8 sm:mt-10 bg-white/90 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-4 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gold-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25M2.25 6.75l9.72 7.29a2.25 2.25 0 002.58 0l9.72-7.29" /></svg>
          Contact Information
        </h2>
        <div className="flex flex-col gap-2 text-gray-800 text-base">
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25M2.25 6.75l9.72 7.29a2.25 2.25 0 002.58 0l9.72-7.29" /></svg>
            <span className="font-semibold">Email:</span> <a href="mailto:info@agapeautos.com" className="hover:underline text-blue-600">info@agapeautos.com</a>
          </div>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-500"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25M2.25 6.75l9.72 7.29a2.25 2.25 0 002.58 0l9.72-7.29" /></svg>
            <span className="font-semibold">Phone:</span> <a href="tel:+2348012345678" className="hover:underline text-blue-600">+234 801 234 5678</a>
          </div>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-500"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v3.75m9 0V17.25A2.25 2.25 0 0114.25 19.5h-4.5A2.25 2.25 0 017.5 17.25V10.5m9 0h-9" /></svg>
            <span className="font-semibold">Address:</span> 123 Agape Street, Lagos, Nigeria
          </div>
          <div className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gold-500"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
            <span className="font-semibold">Hours:</span> Mon - Sat: 9:00am - 6:00pm
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 text-gray-700 text-sm">
          <div><span className="font-semibold">WhatsApp:</span> <a href="https://wa.me/2348012345678" className="text-green-600 hover:underline">+234 801 234 5678</a></div>
          <div><span className="font-semibold">Instagram:</span> <a href="https://instagram.com/agapeautos" className="text-pink-600 hover:underline">@agapeautos</a></div>
          <div><span className="font-semibold">Facebook:</span> <a href="https://facebook.com/agapeautos" className="text-blue-700 hover:underline">Agape Autos</a></div>
        </div>
      </div>
    </div>
  );
}




