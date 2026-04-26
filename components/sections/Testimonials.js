"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ t }) {
  return (
    <div className="bg-page rounded-2xl border border-line p-6 sm:p-7 relative overflow-hidden shadow-card flex flex-col h-full">
      <FaQuoteLeft className="absolute top-5 right-5 text-3xl text-accent/12" />

      <div className="flex gap-1 mb-4">
        {[...Array(t.rating)].map((_, i) => (
          <FaStar key={i} className="text-accent text-sm" />
        ))}
      </div>

      <p className="text-sm sm:text-base text-fg leading-relaxed mb-6 italic flex-1">
        &quot;{t.content}&quot;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-line">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-on-accent font-black text-xs shrink-0 shadow-soft">
          {t.avatar}
        </div>
        <div>
          <p className="text-fg font-bold text-sm">{t.name}</p>
          <p className="text-faint text-xs">
            {t.position} · {t.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="w-full bg-surface py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
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

        {/* Desktop: all cards in a grid */}
        <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="sm:hidden">
          <div className="relative min-h-64">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <TestimonialCard t={testimonials[current]} />
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
      </div>
    </section>
  );
}
