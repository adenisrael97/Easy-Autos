"use client"
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
	"/images/bmw/bmw1.avif",
	"/images/honda/honda1.avif",
	"/images/lexus/lexus4.avif",
	"/images/mercedes/Mercedes1.avif",
	"/images/Toyota/Toyota2.avif",
];

const luxurySlides = [
	{
		title: "Unmatched Luxury Experience",
		desc: "Drive the extraordinary. Our curated collection redefines comfort and prestige.",
	},
	{
		title: "Elegance in Every Detail",
		desc: "From hand-stitched leather to cutting-edge tech, indulge in true sophistication.",
	},
	{
		title: "Arrive in Style, Always",
		desc: "Make every journey memorable with vehicles that turn heads and inspire envy.",
	},
];

export default function Hero() {
	const [current, setCurrent] = useState(0);
	const [slide, setSlide] = useState(0);

	// Image background cycling
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	// Slide cycling
	useEffect(() => {
		const interval = setInterval(() => {
			setSlide((prev) => (prev + 1) % luxurySlides.length);
		}, 3500);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 sm:px-4 md:px-8">
			{/* Sliding background images */}
			{images.map((img, idx) => (
				<Image
					key={img}
					src={img}
					alt="Luxury car background"
					fill
					sizes="100vw"
					priority={idx === 0}
					className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
						idx === current ? 'opacity-100' : 'opacity-0'
					}`}
					style={{ transitionProperty: 'opacity' }}
				/>
			))}
			   <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-24 sm:pt-32 pb-16 sm:pb-24">
				{/* Sliding luxury content with glassmorphism and elegant typography */}
				   <div className="w-full max-w-2xl min-h-45 flex flex-col items-center justify-center px-2 sm:px-0">
					{luxurySlides.map((item, idx) => (
						<div
							key={idx}
							className={`transition-all duration-700 ease-in-out absolute w-full flex flex-col items-center ${
								idx === slide
									? 'opacity-100 translate-y-0 scale-100'
									: 'opacity-0 translate-y-8 scale-95 pointer-events-none'
							}`}
						>
							<div className="rounded-2xl shadow-2xl px-6 mb-30 py-8 md:px-8 md:py-10 flex flex-col items-center gap-3 animate-fade-in">
								   <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-tight mb-1 font-serif bg-linear-to-r from-yellow-700 via-yellow-600 to-red-800 bg-clip-text text-transparent drop-shadow-lg text-center">
									{item.title}
								</h1>
								   <p className="text-xs sm:text-sm md:text-lg font-medium tracking-wide mb-1 max-w-xs sm:max-w-xl text-white drop-shadow-lg text-center">
									{item.desc}
								</p>
								<div className="w-14 h-1 bg-linear-to-r from-gold-400 via-gray-400 to-red-500 rounded-full mt-2 mb-1" />
							</div>
						</div>
					))}
				</div>
				{/* Buttons with modern style */}
				   <div className="mt-10 sm:mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center relative w-full px-2 sm:px-0">
					   <Link
						   href="/Inventory"
						   className="px-4 sm:px-6 py-2 rounded-full bg-linear-to-r from-yellow-400 via-yellow-500 to-red-500 text-black font-semibold text-sm sm:text-base shadow-md hover:scale-105 hover:from-yellow-500 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all duration-300 border border-gold-400 w-full sm:w-auto text-center"
					   >
						   View Inventory
					   </Link>
					   <Link
						   href="/contact"
						   className="px-4 sm:px-6 py-2 rounded-full bg-linear-to-r from-gray-200 via-white to-gray-400 text-black font-semibold text-sm sm:text-base shadow-md hover:scale-105 hover:from-gray-300 hover:to-red-500 transition-all duration-300 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 w-full sm:w-auto text-center"
					   >
						   Contact Us
					   </Link>
				</div>
			</div>
		</section>
	);
}


