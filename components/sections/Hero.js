"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import { heroSlides as slides } from "@/data/hero";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-page">
      {/* Background images */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Theme-aware tint over hero image — keeps text readable in both modes */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/55 to-black/85" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center pt-10 sm:pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-semibold tracking-widest uppercase mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              {slide.tag}
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight mb-3 max-w-4xl drop-shadow-lg">
              {slide.title}
            </h1>

            <p className="text-base sm:text-xl md:text-2xl font-light text-accent mb-4 tracking-wide">
              {slide.subtitle}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl leading-relaxed mb-8">
              {slide.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center mb-12">
          <Link
            href="/Inventory"
            className="group flex items-center gap-2 px-6 py-3 bg-accent text-on-accent font-bold text-sm sm:text-base rounded-full border border-accent hover:bg-accent-hover hover:scale-105 active:scale-100 transition-all duration-200 shadow-elevated w-full sm:w-auto justify-center"
          >
            Browse Inventory
            <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 glass text-white font-semibold text-sm sm:text-base rounded-full border border-white/20 hover:bg-white/15 hover:scale-105 active:scale-100 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <FaSearch className="text-xs" />
            Get a Quote
          </Link>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === current ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-6 bg-linear-to-b from-white/50 to-transparent"
        />
      </div>
    </section>
  );
}
