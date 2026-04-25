"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Adaeze Okonkwo",
    position: "Business Executive",
    location: "Lagos",
    avatar: "AO",
    rating: 5,
    content:
      "Easy Autos made my car purchase seamless and enjoyable. Their team is knowledgeable and truly cares about customer satisfaction. I drove home in my dream car within 48 hours!",
  },
  {
    name: "Chukwuemeka Nwosu",
    position: "Software Engineer",
    location: "Abuja",
    avatar: "CN",
    rating: 5,
    content:
      "I was impressed by the transparency and professionalism throughout the entire process. The after-sales support is top-notch and the financing options are very competitive.",
  },
  {
    name: "Funmilayo Adeyemi",
    position: "Entrepreneur",
    location: "Port Harcourt",
    avatar: "FA",
    rating: 5,
    content:
      "Great selection of vehicles and excellent service. I highly recommend Easy Autos to anyone looking for quality cars with honest, transparent pricing.",
  },
  {
    name: "Biodun Olatunji",
    position: "Consultant",
    location: "Ibadan",
    avatar: "BO",
    rating: 5,
    content:
      "From start to finish, the process was incredibly smooth. I felt valued and well-informed throughout my purchase. The team went above and beyond to ensure I was satisfied.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="w-full bg-surface py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-fg">
            What Our Clients Say
          </h2>
          <p className="text-soft text-sm sm:text-base mt-3 max-w-md mx-auto">
            We are proud to have earned the trust of thousands of happy customers across Nigeria.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-page rounded-2xl border border-line p-8 sm:p-10 relative overflow-hidden shadow-card"
            >
              <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-accent/15" />

              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-accent text-base" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-fg leading-relaxed mb-6 italic">
                &quot;{t.content}&quot;
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-line">
                <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-on-accent font-black text-sm shrink-0 shadow-soft">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-fg font-bold text-sm">{t.name}</p>
                  <p className="text-faint text-xs">
                    {t.position} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === current ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-strong hover:bg-accent/60"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full bg-elevated border border-line flex items-center justify-center text-soft hover:bg-accent hover:text-on-accent hover:border-accent transition-all duration-200 cursor-pointer"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full bg-elevated border border-line flex items-center justify-center text-soft hover:bg-accent hover:text-on-accent hover:border-accent transition-all duration-200 cursor-pointer"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
