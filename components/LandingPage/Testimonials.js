"use client";


import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
	{
		name: 'Jane Doe',
		position: 'Business Owner',
		content: 'Easy Autos made my car purchase seamless and enjoyable. Their team is knowledgeable and truly cares about customer satisfaction.',
		rating: 5,
	},
	{
		name: 'John Smith',
		position: 'Engineer',
		content: 'I was impressed by the transparency and professionalism. The after-sales support is top-notch!',
		rating: 5,
	},
	{
		name: 'Linda Johnson',
		position: 'Entrepreneur',
		content: 'Great selection of vehicles and excellent service. I highly recommend Easy Autos to anyone looking for quality cars.',
		rating: 4,
	},
	{
		name: 'Michael Lee',
		position: 'Consultant',
		content: 'From start to finish, the process was smooth. I felt valued and well-informed throughout my purchase.',
		rating: 5,
	},
];

export default function Testimonials() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % testimonials.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="w-full flex flex-col items-center justify-center py-8 sm:py-12 px-2 sm:px-4 bg-black">
			{/* Heading */}
			<h2 className="text-lg sm:text-xl md:text-2xl font-thin text-yellow-400 mb-2 uppercase tracking-widest">Testimonial</h2>
			{/* Subheading */}
			<h3 className="text-xl sm:text-2xl md:text-3xl font-thin text-white mb-4">What Our Clients Say</h3>
			{/* Small content */}
			<p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl text-center font-thin">
				We are proud to have earned the trust of our clients. Here’s what some of them have to say about their experience with Easy Autos.
			</p>
			{/* Sliding Testimonial Cards */}
			<div className="relative w-full max-w-2xl h-64 flex items-center justify-center px-2 sm:px-0">
				{testimonials.map((t, idx) => (
					<div
						key={idx}
						className={`absolute w-full transition-all duration-700 ease-in-out flex flex-col items-center bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-8 ${
							idx === current ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'
						}`}
					>
						<div className="flex mb-3">
							{[...Array(t.rating)].map((_, i) => (
								<FaStar key={i} className="text-yellow-400 text-lg mr-1" />
							))}
						</div>
						<p className="text-gray-200 text-base md:text-lg mb-4 text-center font-thin">&quot;{t.content}&quot;</p>
						<div className="mt-auto text-center">
							<span className="block text-white font-thin text-lg">{t.name}</span>
							<span className="block text-yellow-400 text-sm font-thin">{t.position}</span>
						</div>
					</div>
				))}
			</div>

			{/* Contact Section */}
			<section className="w-full flex flex-col lg:flex-row items-center justify-center py-12 px-4 bg-linear-to-r from-gray-900 via-black to-gray-800 gap-10 mt-16">
				{/* Contact Form */}
				<div className="flex-1 max-w-xl w-full bg-black/80 rounded-2xl shadow-xl border border-gray-700 p-8 mb-8 lg:mb-0">
					<h2 className="text-xl md:text-2xl font-thin text-yellow-400 mb-2 uppercase tracking-widest">GET IN TOUCH</h2>
					<h3 className="text-2xl md:text-3xl font-thin text-white mb-2">Ready to find your Dream Car?</h3>
					<p className="text-gray-300 text-base md:text-lg mb-6 font-thin">
						Contact us today and let our team help you drive home the perfect vehicle. Fill out the form below and we’ll get back to you as soon as possible.
					</p>
					<form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
						<input type="text" placeholder="Name" required className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
						<input type="email" placeholder="Email" required className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
						<input type="tel" placeholder="Phone Number" className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
						<textarea placeholder="Your Message" required rows={4} className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
						<div className="flex justify-center w-full">
							<button type="submit" className="mt-2 px-6 py-2 rounded-full bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-semibold shadow-md hover:scale-105 hover:from-yellow-500 hover:to-yellow-500 transition-all duration-300 border border-yellow-400 text-sm">
								Send Message
							</button>
						</div>
					</form>
				</div>
				{/* Contact Info Cards */}
				<div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:flex lg:flex-col lg:gap-6 lg:max-w-lg">
					{/* Card 1: Visit our showroom */}
					<div className="flex items-center bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-6">
						<span className="text-yellow-400 text-2xl mr-4">🏢</span>
						<div>
							<h4 className="text-lg font-thin text-white mb-1">Visit Our Showroom</h4>
							<p className="text-gray-300 text-sm font-thin">123 Main Street, City, Country</p>
						</div>
					</div>
					{/* Card 2: Call us */}
					<div className="flex items-center bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-6">
						<span className="text-yellow-400 text-2xl mr-4">📞</span>
						<div>
							<h4 className="text-lg font-thin text-white mb-1">Call Us</h4>
							<p className="text-gray-300 text-sm font-thin">+234 800 123 4567</p>
						</div>
					</div>
					{/* Card 3: Email us */}
					<div className="flex items-center bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-6">
						<span className="text-yellow-400 text-2xl mr-4">✉️</span>
						<div>
							<h4 className="text-lg font-thin text-white mb-1">Email Us</h4>
							<p className="text-gray-300 text-sm font-thin">info@easyautos.com</p>
						</div>
					</div>
					{/* Card 4: Business Hours */}
					<div className="flex items-center bg-gray-900 rounded-2xl shadow-xl border border-gray-700 p-6">
						<span className="text-yellow-400 text-2xl mr-4">⏰</span>
						<div>
							<h4 className="text-lg font-thin text-white mb-1">Business Hours</h4>
							<p className="text-gray-300 text-sm font-thin">Mon - Sat: 8am - 6pm</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
